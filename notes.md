### Notas

* Diferencias entre let, var y const

    let no deja re declarar la misma variable dos veces:
    
    ```
    let variable = 'asd'
    let variable = 'sebastian'
    (tira error)
    ```
    
    no se puede, con var si. Con const no se puede modificar el valor de la constante y no se puede dejar sin asignar
    
    se pueden crear dos variables en el let
    ````javascript
    let variable1, variable2
    ````
    
    + Primitivos:
    
    javascript solo tiene el tipo number que puede ser int o float (5, 6.1231), ademas solo tiene string "abc", 'abc', no tiene
    caracteres
    
    + Asserts:
    
    con assert.equals se puede hacer un assert
    
    + Comparaciones (distintas a python):
    
    ````javascript
    assert.equals(4 === 4, true);
    assert.equals(4 !== 5, true);
    ````

* Template literals

    ````javascript
    let variable=1, variable2=2;
    console.log(`${variable} y ${variable2}`)
    ````
    lo que hace es concatenar al igual que con ```f'{var1} y {var2}'```

* Control de flujos
    
    ````javascript
   let i = 5;
    if (i !== 0) {
       console.log(i)
   }
    ````
   
* Declaracion de funciones
    ````javascript
   function ejemplo(a, b) {
     return a+b;
   }
    ````
   
* Declaracion de funciones flecha
    ````javascript
    const add2 = (a, b) => { return a + b };
      
    // Equivalent to add2:
    const add3 = (a, b) => a + b;
  
    // ejamplo con un argumento
    let lordify = land => `of ${land}`;
    ````
   ````
    // An arrow function whose body is a code block
    (a, b) => { return a + b }

    // An arrow function whose body is an expression
    (a, b) => a + b
    ````
   
   hay dos formas de crear una funcion flecha, en una su cuerpo es un bloque de codigo, en otra su cuerpo es una expresion
   
* Object literal enhacement
    Creating a plain object via an object literal. Es basicamente construir un objeto uniendo propiedades y funciones
    ````javascript
    const obj = {
        first: 'Jane', // property
        last: 'Doe', // property
        getFullName() { // property (method)
           return this.first + ' ' + this.last;
        },
    };
    ````
   + las palabras reservadas como if, pueden ser declaradas en objetos como propiedades
   
* Casing style

    predomina el camelCase, pero en clases CamelCase con mayuscula. Las constantes con SNAKE_UPPERCASE o camelCase
    
* Mas convenciones de nombres

    si el argumento de una funcion comienza con guion bajo (_x) quiere decir que no es usada, si quiero hacer una propiedad
    de un objetivo privada, le agrego guion bajo (this._x) al igual que en python

* Donde se colocan puntos y comas
    
    se colocan puntos y comas despues de cada declaracion, pero no se ocupan si la declaracion usa curly brackets {}
    
    ````javascript
    const variableConstant = 8;
    funcionPirata();
    ````
    
    ````javascript
    while (false) {
       // ···
    } // no semicolon
   
    function func() {
       // ···
    } // no semicolon
    ````
* Destructuring assignment
    
    permite asignar los valores de las propiedades de un objeto a nuevas variables
    
* Object Literal Enhancement
    
    operacion inversa al destructuring, pone todo devuelta, incluso se pueden agregar funciones que eran variables al objeto
    
## Notas react.js

### Transpiling

No todos los navegadores soportan ECS6, por lo tanto, es necesario transcribir el codigo en ECS6 a ECS5 con una herramienta
como babilon. El proceso se llama transpiling

### Principios de la programación declarativa

Cuando hay que construir funciones hay que tener en mente estas tres reglas:

1. The function should take in at least one argument.
2. The function should return a value or another function.
3. The function should not change or mutate any of its arguments.

las herramientas mas poderosas de los arreglos son:

arreglo.map()
arreglo.filter()
arreglo.reduce() -> transforma arreglos en primitivos
Object.keys()

### Formas de crear react components

existen tres formas de crear react components: ````createClass````, ES6 classes y stateless functional components. De estas tres,
es perefible usar stateless functional components, Stateless functional components are functions that take in properties and return a
DOM element. Stateless functional components will keep your application architecture simple, and the React team promises some performance gains by using them

### Alternativa a React.createElement

existe una alternativa, las factories como React.DOM.li o React.DOM.h1