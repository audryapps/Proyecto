import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class FireDBService {

    firebaseConfig = {
        apiKey: "AIzaSyC836Ht6apS5ZdzENrjDH0StEtupagWo6c",
        authDomain: "login-1f88f.firebaseapp.com",
        databaseURL: "https://login-1f88f.firebaseio.com",
        projectId: "login-1f88f",
        storageBucket: "",
        messagingSenderId: "708308239392",
        appId: "1:708308239392:web:5e894e22870d967146a845"
      };

    db;
    
    correo;
    password;
    
    
    constructor(public router: Router) {

        
    firebase.initializeApp(this.firebaseConfig);
    this.db =firebase.firestore();
    this.verSesion();
    
  }

 crearCuenta(){
  firebase.auth().createUserWithEmailAndPassword(this.correo, this.password)
   .then(() => {
     console.log("usuario creado correctamente")
   })
  .catch((error)  => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("codigo error:" , errorCode)
    console.log("codigo error:" , errorMessage)

   
  });
 }
 Login(){
  firebase.auth().signInWithEmailAndPassword(this.correo, this.password)
  .then(() => {
    console.log("usuario Iniciado correctamente")
  })
 .catch((error)  => {
   var errorCode = error.code;
   var errorMessage = error.message;
   console.log("codigo error:" , errorCode)
   console.log("codigo error:" , errorMessage)

  
 });
 }


verSesion(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("Un usuario logeado");
      console.log("Id:", user.uid);
      console.log("nombre" , user.displayName);
      console.log(user);
      this.router.navigate(['/home'])

    } else {
      console.log("Ningun usuario esta logeado")
      this.router.navigate(['/logueo'])

    }
  });
  
}

cerrarSesion(){
  firebase.auth().signOut()
  .then(()=>{
   console.log("sesion cerrada");
  })
  .catch((err)=>{
      console.log("error",err);
  });
}

recuperarClave(){
  firebase.auth().sendPasswordResetEmail(this.correo)
  .then(()=>{
    console.log("Correo Enviado");
   })
   .catch((err)=>{
       console.log("error",err);
   });
}

}