// TODO: ALL THE AUTHENTICATION METHODS

import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "./config";
import { createUserProfile } from "./users-service";

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider)
        console.log('result:',result)
        if (result._tokenResponse.isNewUser) {
            const data = {
                id: result.user.uid,
                name: result.user.displayName,
                email: result.user.email,
                emailVerified: result.user.emailVerified,
                phoneNumber: result.user.phoneNumber,
                photoURL: result.user.photoURL,
                type: 'client'
            }

            createUserProfile(result.user.uid, data)
        }
    } catch (error) {
        console.error(error)
    }
};

export const logout = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        console.error(error)
    }
};