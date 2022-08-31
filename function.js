function suma(){ 
var A;
var B;
var Suma;

A = parseInt(prompt("Por favor ingresar el primer valor"));
B = parseInt(prompt("Por favor ingresar el segundo valor"));

suma = A + B;

alert("el valor final es: " + suma);
}

function opBasicas(){ 
    var A;
    var B;
    var Sum;
    var resta;
    var mul;
    var div;
    
    A = parseInt(prompt("Por favor ingresar el primer valor"));
    B = parseInt(prompt("Por favor ingresar el segundo valor"));
    
    sum = A + B;
    resta = A - B;
    mul = A * B;
    div = A % B;

    alert("el valor final de su suma es: " + sum);
    alert("el valor final de su resta es: " + resta);
    alert("el valor final de su multiplicacion es: " + mul);
    alert("el valor final de su divicion es: " + div);

    }

    function comparar(){ 
        var A;
        var B;
       
        
        A = parseInt(prompt("Por favor ingresar el primer valor"));
        B = parseInt(prompt("Por favor ingresar el segundo valor"));
        
   if( A == B){
       alert("son iguales");
   }

   else if( A > B){
       alert("este valor es mayor" + A);
       
   }
   else{
       alert("este valor es mayor" + B);
   }

        }

   function compara(){
    var A
    var B
    var C

    A = parseInt(prompt("Por favor ingresar el primer valor"));
    B = parseInt(prompt("Por favor ingresar el segundo valor"));
    C = parseInt(prompt("Por favor ingresar el tercer valor"));

    if(A == B && B ==C){
        alert("los valores son iguales")

    }
    else if(A < B && A < C){
        alert("el valor mas pequeño es:" + A);
    }

    else if(B < A && B < C){
        alert("el valor mas pequeño es:" + B);
    }
    else if(C< A && C < B){
        alert("el valor mas pequeño es:" + C);
    }
    else {
        alert("no se puede definir el numero mas pequeño");
    }

   }     
   function par(){
    var A
   

    A = parseInt(prompt("Por favor ingrese el valor"));


    if(A % 2 == 0){
        alert("este numero es par:" + A);
    }

    else{
        alert("este numero es impar:" + A);
    }
}

function cuadrado(){
    var A
    var cuadrado
   

    A = parseInt(prompt("Por favor ingrese el valor"));

    cuadrado = A*A;

    alert("el resultado de su numero es:" + " " + cuadrado);


}
function area (){
    var A
    var B
    var area
   

    A = parseInt(prompt("Por favor ingrese el valor de la altura"));
    B = parseInt(prompt("Por favor ingrese el valor de la base"));

    area = A*B/2;

    alert("el resultado del area es:" + " " + area);

    

}
function centimetros (){
    var A
    var metros
   

    A = parseInt(prompt("Por favor ingrese el valor en metros"));
    

    metros = A * 100;

    alert("el resultado es:" + " " + metros +"cm");


}

function edad(){
    var A
    var edad
   

    A = parseInt(prompt("Por favor ingrese el año en el que nacio"));
    

    edad = 2022 - A;

    alert("su edad es:" + " " + edad);


}

function ingles(){
    var A
    var B
    var C
    var D
    var E
    var promedio
   

    A = parseFloat(prompt("Por favor ingrese la primera nota"));
    B = parseFloat(prompt("Por favor ingrese la segunda nota"));
    C = parseFloat(prompt("Por favor ingrese la tercera nota"));
    D = parseFloat(prompt("Por favor ingrese la cuarta nota"));
    E = parseFloat(prompt("Por favor ingrese la quinta nota"));
    

    promedio = (A + B + C + D + E) / 5;

    if(promedio > 3 && promedio <= 5){


    alert("usted aprueba su nota es" + " " + promedio);


}
 else if(promedio <= 3 && promedio >= 1){
    alert("usted no aprueba su nota es" + " " + promedio);
 }

else{
    alert("error");
}

 

}
function descuentos(){
    var a;
var c=4500;
var d;
    a= parseInt(prompt("Digite la cantidad de kilos "));

    if(a<0){
alert("cantidad de kilos erroneo");
    }
    else if(a>=0 && a<=2){
        alert("No se le aplica descuento, por tal el total a pagar es: "+c);
    }
    else if(a>=3 && a<=5){
        var b;
        var e;
        e=c*a;
        b= (e*10)/100;
        d= e-b;

        alert("Se le aplica descuento del 10%, por tal el total a pagar es: "+d);
    }
    else if(a>=6 && a<=10){
        var b;
        var e;
        e=c*a;
        b= (e*15)/100;
        d= e-b;

        alert("Se le aplica descuento del 15%, por tal el total a pagar es: "+d);
    }
    else{
        var b;
        var e;
        e=c*a;
        b= (e*20)/100;
        d= e-b;

        alert("Se le aplica descuento del 20%, por tal el total a pagar es: "+d);
    }
}
function interes(){
    var A;
    var B; 
    var C; 
    var D;
    A = parseInt(prompt("Por favor ingresa capital invertido:"));
    B = parseInt(prompt("Ingresa el # de años con tu capital invertido"));
    C = A * .24 * B;
    D = A + C;
        alert("La ganancia total por el capital invertido es $:" + D)
 }
