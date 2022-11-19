// Write your solution here!
 var cats =["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
cats.push(name);
}
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name){
    cats.unshift(name);
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(){
    cats.pop();
}
destructivelyRemoveLastCat();


function destructivelyRemoveFirstCat(){
    cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat(name){
    
    const  allcats =[ ...cats ,name];
    return  allcats;
}
appendCat("Broom");

function prependCat(name){
    
    const  allcats =[name , ...cats];
    return  allcats;
}
appendCat("Broom");

function removeLastCat(){
    return cats.slice(0,cats.length-1);
}
removeLastCat();

function removeFirstCat(){
    return cats.slice(1);
}
removeFirstCat();