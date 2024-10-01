fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function getFruitByIndex(liste) {
    
    if (liste === -1) {
        return fruits[fruits.length - 1];
    }
    
    if (liste < 0 && liste >= fruits.length) {
        return null;
    }
    
    
    return fruits[liste];
}

let result=getFruitByIndex("5")

displayResult(result)