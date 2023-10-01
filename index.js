// Write your solution here!
let cats=['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(cat){
    cats.push(cat);
}

function destructivelyPrependCat(cat){
    cats.unshift(cat);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(cat){
    let cats1 = cats.slice();
    cats1.push(cat);
    return cats1;
} 

function prependCat(cat){
    let cats1 = cats.slice();
    cats1.unshift(cat);
    return cats1;
} 

function removeLastCat(){
    let cats1 = cats.slice();
    cats1.pop();
    return cats1;
} 

function removeFirstCat(){
    let cats1 = cats.slice();
    cats1.shift();
    return cats1;
} 
