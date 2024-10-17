
//ACA ESTAN LA RESOLUCION DE LOS EJERCICIOS DEL TP//

console.log(' 1- Introducción a Java Script');
console.log('Ejercicio 1');

{
//declaro variables 
let a=5;
let b=10;
let c=a+b;
//muestro mensaje por consola
console.log('La suma de a y b es: '+c);}
console.log('Ejercicio 2');
{
  let nombre=prompt('¿Cuál es tu nombre? ');//El método prompt() muestra un diálogo con mensaje opcional, que solicita al usuario que introduzca un texto.
  console.log('Hola, '+nombre+' !');
}

console.log('2-Operadores lógicos y condicionales');
console.log('Ejercicio 1');
{   let a=1;
    let b=2;
    let c =3;
    let mayor;

      if(b>=a && b>=c){
        mayor=b;
      } else if(a>=b && a>=c){
        mayor=a;
      }
        else{
          mayor=c;
      }
      console.log('El mayor valor entre ' + a + ' , '+b+' y '+c+' es '+mayor);
}

console.log('Ejercicio 2');
{
  let num1=prompt("Ingrese un numero y te dire si es par o impar ");
  // Convertir el número ingresado a un número entero
  let numero=parseInt(num1);

  ////isNaN intenta convertir el parámetro pasado a un número. Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.
  if(isNaN(numero)){   
    console.log("El valor ingresado no es un numero valido"); 
  }else if(numero % 2 === 0){
    console.log('El numero, '+numero+ ' es par');
    
  }else{
    console.log('El numero, '+numero+ ' es impar');
  }
}

console.log('3- Operadores de asignación y bucles');
console.log('Ejercicio 1');
{
  let numero=10;
  while(numero!==0){
    console.log(numero);
    numero--;
  }

}
console.log('Ejercicio 2');
let numero;
do{
  numero=prompt('Ingrese un numero mayor a 100 ')
  numero=parseInt(numero);// Convertir la entrada a un número entero
}while(numero<=100);
 
  console.log('Ingresaste un numero mayor que 100: '+numero);

console.log('4. Funciones de JavaScript');
console.log('Ejercicio 1');

{
 
  function esPar(numero){
  return numero % 2 === 0;
}
let numero=prompt("Ingrese un numero ");
console.log('El numero '+numero+' es Par: ' +esPar(numero));
}

console.log('Ejercicio 2');
{
function convertirCelsiusAFahrenheit(numero){
 const valorenFahrenheit= numero * 1.8 + 32;
 return valorenFahrenheit;
}
let valor=prompt('Ingrese un valor en grados Celsius')
console.log(valor+' °C son equivalentes a '+convertirCelsiusAFahrenheit(valor)+ '°F');
}

console.log('5. Objetos en JavaScript');
console.log('Ejercicio 1');
{
  let persona={
    nombre:'Hsin Yu',
    edad:21,
    ciudad:'Mendoza',
    propiedadOriginal: function(){
      console.log('Persona: '+this.nombre+ ' Edad: '+this.edad+' Ciudad: '+this.ciudad);
    },
    actualizarCiudad: function(nuevaCiudad){
      this.ciudad=nuevaCiudad;
    }
  }
  console.log('Propiedades originales de la persona ');
  persona.propiedadOriginal();
  persona.actualizarCiudad('Buenos Aires')
  console.log('Propiedades actualizadas de la persona ');
  console.log('Persona: '+persona.nombre+ ' Edad: '+persona.edad+' Ciudad: '+persona.ciudad);
}

console.log('Ejercicio 2');
{
  let libro={
    titulo:'Las Voces del Desierto',
    autor:'Marlo Morgan',
    año:1990,
    esAntiguo: function(){
        const añoActual = new Date().getFullYear();
        const añosDesdePublicacion = añoActual - this.año;
        return añosDesdePublicacion > 10;
    }
  }
  console.log('El libro ' +libro.titulo+' es antiguo: '+libro.esAntiguo())
}


console.log('6. Arrays');
console.log('Ejercicio 1');
{let numeros=[1,2,3,4,5,6,7,8,9,10];
let numerosMultiplicados=[];
for(let i=0;i<10;i++){
  
  numerosMultiplicados.push(numeros[i]*2)
}
console.log('Numeros Originales: '+numeros);
console.log('Numeros Multiplicados por 2: '+numerosMultiplicados);}

console.log('Ejercicio 2');
let pares=[];
for(let i=1;i<=20;i++)
  if(pares.length<=10){
    if(i%2==0){
      pares.push(i);
    }
  
  }
 console.log('Primeros 10 números pares: '+pares);

 console.log('7. Introduccion al DOM');
 console.log('Ejericio 1');

 {const button=document.getElementById("button");
 const contenedor = document.getElementById("contenedor");

 const handleStyleButton = () => {
  contenedor.classList.add('cambiarColorp');
  }

 button.addEventListener("click", ()=>{
  console.log('El usuario hizo un click');
  handleStyleButton();
 })}

 console.log('Ejericio 2');

{ const buttonAlerta=document.getElementById("buttonAlerta");
 const input = document.getElementById("miCampoTexto");

 const handleStyleButton1 = () => {
  const valor = input.value;
  alert('Has ingresado: ' +valor);
  }

 buttonAlerta.addEventListener("click", ()=>{
  console.log('El usuario hizo un click');
  handleStyleButton1();
 })}

  console.log('8. Eventos en DOM');
  console.log('Ejericio 1');

{
    const lista = document.getElementById('miLista');
    const elementos = lista.getElementsByTagName('li');

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener('click', function() {   //Dentro del bucle, se agrega un evento de clic (click) a cada elemento <li>
            console.log(this.textContent);
        });
  
     };

}

console.log('Ejericio 2');
{
  document.addEventListener('DOMContentLoaded', function() {
    const campoTexto = document.getElementById('miCampo');
    const deshabilitarCampo = document.getElementById('deshabilitarCampo');
    const habilitarCampo = document.getElementById('habilitarCampo');

    deshabilitarCampo.addEventListener('click', function() {
        campoTexto.disabled = true; //permite deshabilitar funcionalmente el campo de texto
        campoTexto.classList.add('disabled'); //se añade la clase disabled al elemento campoTexto
    });

    habilitarCampo.addEventListener('click', function() {
        campoTexto.disabled= false;//permite habilitar funcionalmente el campo de texto
        campoTexto.classList.remove('disabled'); //se elimina la clase disabled del elemento campoTexto
    });
});
}

console.log('9. Local Storage');
console.log('Ejercicio 1');

{const buttonGuardar = document.getElementById("buttonGuardar");
const buttonEliminar = document.getElementById("buttonEliminar");
const emailDisplay = document.getElementById("emailDisplay");

// Función para obtener y guardar el correo electrónico
const getDataInputs = () => {
    const email = document.getElementById("email").value;
    localStorage.setItem("datos", JSON.stringify(email));
    mostrarEmail(email);
};

// Función para mostrar el correo guardado
const mostrarEmail = (email) => {
    emailDisplay.textContent = email;
};

// Verificar si hay un correo guardado en localStorage al cargar la página
const savedEmail = localStorage.getItem('datos');
if (savedEmail) {
  mostrarEmail(JSON.parse(savedEmail));
}

// Manejar el clic en el botón de guardar
buttonGuardar.addEventListener('click', getDataInputs);

// Manejar el clic en el botón de eliminar
buttonEliminar.addEventListener('click', function() {
    localStorage.removeItem('datos');
    emailDisplay.textContent = '';
});
}