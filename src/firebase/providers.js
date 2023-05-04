import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        const {displayName, email, photoURL, uid} = result.user;

        return {
            ok : true,

            //User info
            displayName, email, photoURL, uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.messagge;
        return{
            ok : false,
            errorCode,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword = async({email,password, displayName}) => {
    try{
        const resp = await createUserWithEmailAndPassword(
            FirebaseAuth, email, password
        );

        setTimeout(() => {
            const {uid, photoURL} = resp.user;
            console.log(resp);
        }, 2000);

        // Actualizar el displayName
        await updateProfile(FirebaseAuth.currentUser, {
            displayName
        });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }
    } catch(error){
        return {ok: false, errorMessage : error.messagge}
    }

}

export const loginWithEmailPassword = async ({email, password}) => {

    try{
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        const {uid, photoURL, displayName} = resp.user;

        // Actualizar el displayName
        await updateProfile(FirebaseAuth.currentUser, {
            displayName
        });

        return {
            ok: true,
            uid,
            photoURL,
            displayName,
        }
    } catch(error){
        return {ok: false, errorMessage : error.code}
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut(); 
}