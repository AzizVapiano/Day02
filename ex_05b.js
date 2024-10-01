function  getBasketContent(nbr) {
    let fruits = ["strawberry",
    							"strawberry",
                  "strawberry",
                  "apple",
                  "apple",
                  "lime",
                  "lime",
                  "peach",
                  "pear",
                  "pear"]
    if (nbr > fruits.length ){
    console.log ("Too many fruit(s)selected.")
    return
    }
    else 
    console.log (nbr + " fruit(s) selected ")
    return fruits.slice (0, nbr)
    
    }
		let fruits = getBasketContent(4)
		showMyBasket(fruits)
