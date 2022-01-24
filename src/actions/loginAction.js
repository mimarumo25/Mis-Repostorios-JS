import { getAuth,signOut,signInWithEmailAndPassword } from "@firebase/auth"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { types } from "../types/types"
import Swal from 'sweetalert2'

export const login = (id, displayname, usergithub) =>{
    return {
        type: types.login,
        payload:{
            id,
            displayname,
            usergithub
        }
    }
}

export const loginEmailPassword = (email,password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(async({user})=>{
        const querySnapshot = await getDocs(collection(db, "user"));       
        const users = [];
         querySnapshot.forEach((doc) => {
            users.push({
                ...doc.data()
            })
           
        });
        const userGit = users.find(u => u.id === user.uid);
    
            dispatch(login(user.uid, user.displayName, userGit.usergithub))
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Bienvenido: Inicio de session Exitoso',
                showConfirmButton: false,
                timer: 1500
              })            
        })
        .catch(error => {
            console.log(error)
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Error al inicar session, usuario y/o contraseña errado',
                showConfirmButton: false,
                timer: 2500
              })
        })
    }
}

export const logoutSincrono = () => {
    return{
        type: types.logout,
    }
 }
export const logout = () => {

    return(dispatch) => {
        const auth = getAuth();
        signOut(auth)
        .then(user => {
            dispatch(logoutSincrono())
        })
        .catch(error => {
            console.log(error);
        })
    }
}

