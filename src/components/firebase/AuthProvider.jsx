import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,GoogleAuthProvider,GithubAuthProvider, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // create id / signUp
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login id 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email ;
            const loggedUser = { email: userEmail };
            
            console.log('current user', currentUser);

            
            //if user exist then issue a token
            if (currentUser) {
                axios.post('https://volunteer-website-server.vercel.app/jwt', loggedUser, {
                    withCredentials: true
                })
                    .then((res) => {
                        setUser(currentUser);
                        setLoading(false);
                        console.log('token response', res.data)
                    })
            }
            else{
                setUser(null);
                axios.post('https://volunteer-website-server.vercel.app/logout',loggedUser,{
                    withCredentials:true
                })
                .then(res=>{
                    setLoading(false);
                    console.log(res.data)
                })
            }
        });
        return () => {
             unsubscribe();
        }
    }, [])

    // google login 
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // github login 
    const signWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // update id 
    const updateUserId = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }


    const authInfo = {
        createUser,
        signIn,
        logOut,
        user,
        loading,
        setLoading,
        signInWithGoogle,
        signWithGithub,
        updateUserId
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;