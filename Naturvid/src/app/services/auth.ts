import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FireDBService {

    firebaseConfig = {
        apiKey: "AIzaSyDgo3wd1oTdEwOPA0VoIxCxemcN2-s0fr8",
        authDomain: "proyecto-81144.firebaseapp.com",
        databaseURL: "https://proyecto-81144.firebaseio.com",
        projectId: "proyecto-81144",
        storageBucket: "",
        messagingSenderId: "276393829908",
        appId: "1:276393829908:web:5f7374535a096c6c476901"
      };
  
  db;
  nombre = "Ingrese su nombre";
  correo;
  password;
  mensajes:any[] = [];
  mensaje;
  today = Date.now();

  constructor(public router: Router) { 

    firebase.initializeApp(this.firebaseConfig);
    this.db =firebase.firestore();
    this.verSesion();
    
  }
escribirDB(){
  let hora = new Date();
  this.db.collection("mensajes").add({
    nombre: this.nombre,
    mensaje: this.mensaje,
    hora: hora.getTime()
})
.then((docRef) => {
    console.log("Mensaje Guardado: ");
    this.mensaje = "";
   
})
.catch((error) => {
    console.error("Error De guarado mensaje: ", error);
});
}
leerDB(){
  this.db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id,": ",doc.data());
    });
});

}
escucharDB(){
  this.db.collection("mensajes").orderBy("hora")
    .onSnapshot((snap) => {
      this.mensajes = [];
       snap.forEach(mensaje => {
         this.mensajes.push(mensaje.data());
       });
       console.log(this.mensajes);
       setTimeout(() => {
        this.scrollToBottom();
       }, 500); 
       
       
    });

}
 getContent(){
   return document.querySelector('ion-content');
 }
 scrollToBottom(){
   this.getContent().scrollToBottom(500);
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
      this.router.navigate(['/inicio'])

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