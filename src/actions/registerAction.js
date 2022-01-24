import { types } from "../types/types";
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "@firebase/auth";
import { db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import Swal from 'sweetalert2'

export const register = (name, usergithub, email, password) => {
    return {
        type: types.register,
        payload: {
            name, 
            usergithub,
            email,
            password,
        }
    }
}

export const registerEmailPassword = (name, usergithub,email, password) =>{
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then(async({user})=>{
            await updateProfile(auth.currentUser, {displayName: name})
            const docuRef = doc(db, `user/${user.uid}`)
            setDoc(docuRef,{id:user.uid, name:name, usergithub:usergithub,email:email})
            dispatch(register(user.displayName, usergithub, user.email, user.uid))
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Registro de Usuario Exitoso',
                showConfirmButton: false,
                timer: 1500
              })
        }).catch((error) => {
            Swal.fire({
                position: 'top-center',
                icon: 'warning',
                title: 'Error al Guardar los Datos',
                showConfirmButton: false,
                timer: 1500
              })
            dispatch(setRegisterError(error.code))
         })
    }
}

export const setRegisterError = (error) => {
    return {
        type: types.registerError,
        payload: {
           error
        }
    }
}