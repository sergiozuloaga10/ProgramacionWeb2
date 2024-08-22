//funciones con sintaxis de un metodo
const f = {
    f_1: function(dato){
        console.log(`funcion 1 ${dato}`);
    },
    f_2: function(){
        console.log('funcion 2.....');
    },
    f_3: function(dato){
        console.log(`funcion 3: ${dato}`);
    },
    f_4: function(dato){
        console.log(`funcion 4 ${dato}`);
    },
    f_5: function(valor){
        console.log(`funcion ${valor}`);
    }
}

// llamando
f.f_1(123);
f.f_2();
f.f_3(679);
f.f_4(78);
f.f_5(90);
