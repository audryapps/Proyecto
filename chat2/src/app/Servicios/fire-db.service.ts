import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FireDBService {

  firebaseConfig = {
    apiKey: "AIzaSyBfCnZFr9QzyvzfA7lpSxW3txEmDpwP4bY",
    authDomain: "chat-787b9.firebaseapp.com",
    databaseURL: "https://chat-787b9.firebaseio.com",
    projectId: "chat-787b9",
    storageBucket: "chat-787b9.appspot.com",
    messagingSenderId: "771548255073",
    appId: "1:771548255073:web:a9d062fd0d5a5743"
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
    //this.escribirDB("Ash");
    //this.leerDB();
    //this.escucharDB();
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
      // User is signed in.
      // var displayName = user.displayName;
      // var email = user.email;
      // var emailVerified = user.emailVerified;
      // var photoURL = user.photoURL;
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
      // var providerData = user.providerData;
      // ...
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

guardarFactura(){
  let hora = new Date();
  this.db.collection("pedidos").add({
    nombre: this.nombre,
    direccion: this.mensaje,
    telefono: hora.getTime()
});
  
}

 
}