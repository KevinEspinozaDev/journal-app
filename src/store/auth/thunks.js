import { checkingCredentials, login, logout } from "./";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { async } from "@firebase/util";
import { getAuth } from "firebase/auth";

export const checkingAuthentication = (email, password) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        // TODO: realizar peticion http

        //const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        //const data = await resp.json();
        
        /* AXIOS */
        /*const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

        dispatch(setPokemons({
            pokemons : resp.data.results,
            page : page + 1,
        }));
        */
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {

        dispatch(checkingCredentials());
        
        const result = await signInWithGoogle();
        console.log(result)
        
        setTimeout(() => {
            if (!result.ok) return dispatch(logout(result.errorMessage));
        }, 2000);

        dispatch(login( result ));
    }
}

export const startCreatingUserWithEmailPassword = (
    {email, password}) => {

    return async(dispatch) => {
        dispatch( checkingCredentials() );
    
        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});
    
        setTimeout(() => {
            if (!ok) return dispatch(logout( {errorMessage} ));
        }, 1500);

        dispatch(login({uid, displayName, email, photoURL}));

    }
}

export const startLoginWithEmailPassword = ({email, password, displayName}) => {

    return async(dispatch) => {
        dispatch( checkingCredentials() );
    
        const result = await loginWithEmailPassword({email, password});

        if (!result.ok) return dispatch(logout( result ));

        dispatch( login(result) );

    }
}

export const startLogout = async() => {
    return async(dispatch) => {

        const auth = getAuth();
        await logoutFirebase(auth);
        dispatch(logout({}));
    }
}