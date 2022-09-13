// Una función sin parámetros que devuelva siempre "true"
function sinParametros(){
    console.log(true);
}

sinParametros();

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
let promesa = new Promise((resolve) => {
    setTimeout(() => resolve(), 5000);
});

promesa.then(() => console.log("Hola soy una promesa"));

// Una función generadora de índices pares automáticos
function* generaId() {
    let id = 0;
    while(true){
        id+=2
        if(id%2===10){
            return id
        }
        yield id
    }
}

const gen = generaId(); 

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);