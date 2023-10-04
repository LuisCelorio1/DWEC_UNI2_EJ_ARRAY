var cadena = new Array("Nombre",7,false);

function elementos(list){
    var elementos=[];

    for(var i=0;i<list.length;i++){
        elementos += ("-"+typeof(list[i])+"\n");
    }

    return elementos;
}
console.log(elementos(cadena));

