// Exercises XP
// Exercise 1 : Information
// Partie I : fonction sans paramètres
// 1. Créez une fonction appelée infoAboutMe()qui ne prend aucun paramètre.
// 2. La fonction devrait console.log une phrase vous concernant (c'est-à-dire votre nom, votre âge, vos loisirs, etc.).
function infoAboutMe() {
    console.log("Je suis Cissé")
}
// 3. Appelez la fonction.
infoAboutMe()

// Partie II : fonction à trois paramètres
// 1. Créez une fonction appelée infoAboutPerson(personName, personAge, personFavoriteColor)qui prend 3 paramètres.
// 2. La fonction doit console.log une phrase sur la personne (c'est-à-dire "Vous vous appelez ..., vous avez .. ans, votre couleur préférée est ...") 
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Je suis ${personName}, j'ai ${personAge} ans, ma couleur favorie est ${personFavoriteColor}`)
}
// 3. Appelez la fonction deux fois avec les arguments suivants:
infoAboutPerson("Samba", 25, "Rouge")
infoAboutPerson("Soro", 24, "Rose")


// Exercice 2 : Conseils

// 1. Créez une fonction nommée calculateTip()qui ne prend aucun paramètre.
// 2. À l'intérieur de la fonction, utilisez promptpour demander à John le montant de la facture. 
// 3. Voici les règles
        // Si la facture est inférieure à 50 $, laissez un pourboire de 20 %.
        // Si la facture est comprise entre 50 $ et 200 $, pourboire de 15 %.
        // Si la facture est supérieure à 200 $, laissez un pourboire de 10 %.
// 4. Console.log le montant du pourboire et la facture finale (facture + pourboire)..

function calculateTip() {
    let facture = Number(prompt("Saisir le montant de la facture?"))
    console.log(`Montante: ${facture}`)
    let pourboire
    if (facture < 50)
        pourboire = facture * 20 / 100
    else if (facture >= 50 && facture <= 200)
        pourboire = facture * 15 / 100
    else
        pourboire = facture * 10 / 100
    console.log(`Montant de pourboire: ${pourboire}`)
    console.log(`Somme total facture : ${(facture + pourboire)}`)
}
// 5. Appelez la calculateTip()fonction.
calculateTip()


// Exercice 3 : Trouver Les Nombres Divisibles Par 23
// 1. Créez un appel de fonction isDivisible()qui ne prend aucun paramètre.
// 2. Dans la fonction, parcourez les nombres de 0 à 500.

// 5. Bonus: Add a parameter divisor to the function.
function isDivisible(divisor) {
    let numbers = []
    for (let i = 0; i <= 500; i++) {
        if (i % divisor == 0)
            numbers.push(i)
    }
    //3. Console.log tous les nombres divisibles par 23
    //4. À la fin, console.log la somme de tous les nombres divisibles par 23.
    console.log(`Resultat: ${numbers.join(' ')}`)
    console.log(`Somme: ${numbers.reduce((a, b) => a + b)}`)
}
//5. Bonus : Ajoutez un diviseur de paramètre à la fonction.
isDivisible(2)
isDivisible(3)
isDivisible(25)


// Exercice 4 : Liste De Courses
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}
const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}
// 1. Ajoutez les objets stocket pricesà votre fichier js.
// 2. Créez un tableau appelé shoppingListavec les éléments suivants : "banane", "orange" et "pomme". Cela signifie que vous avez 1 banane, 1 orange et 1 pomme dans votre panier.
let shoppingList = ["banana", "orange", "apple"]
// 3. Créez une fonction appelée myBill()qui ne prend aucun paramètre 
// 4. La fonction doit retourner le prix total de votre shoppingList. Pour ce faire, vous devez suivre ces règles :
       // 1- L'article doit être en stock. ( Astuce : vérifier if .. in)
       // 2- Si l'article est en stock, découvrez le prix dans l' pricesobjet.
// 5. Appelez la myBill()fonction.
// 6. Bonus : Si l'article est en stock, diminuez le stock de l'article de 1
function myBill() {
    let prix_t = 0;
    shoppingList.forEach(item => {
        if (prices.hasOwnProperty(item))
            prix_t += Number(prices[item])
        if (stock.hasOwnProperty(item) && stock[item] > 0)
            stock[item]--
    })
    return prix_t;
}
let total = myBill()
console.log(`Total: ${total}`)

// Exercice 5 : Qu'y A-T-Il Dans Mon Portefeuille ?

// 1. Créez une fonction nommée changeEnough(itemPrice, amountOfChange)qui reçoit deux arguments : :
// 2. Dans la fonction, déterminez si vous pouvez ou non vous permettre l'article
function changeEnough(itemPrice, amountOfChange) {
    let sum = 0.25 * amountOfChange[0]
        + 0.1 * amountOfChange[1]
        + 0.05 * amountOfChange[2]
        + 0.01 * amountOfChange[3]
    return sum >= itemPrice
}
// 3. Change format is [quarters, dimes, nickel, penny]
// 4. Illutsration
console.log(`For itemPrice: 14.11 and change: [2,100,0,0], changeEnough ? : ${changeEnough(14.11, [2, 100, 0, 0])}`)
console.log(`For itemPrice: 0.75 and change: [0,0,20,5], changeEnough ? : ${changeEnough(0.75, [0, 0, 20, 5])}`)

// Exercice 6 : Frais De Vacances
// 1. Définissez une fonction appelée hotelCost() 
function hotelCost(numberOfNights) {
    return numberOfNights * 140
}

// 2. Définissez une fonction appelée planeRideCost()
function planeRideCost(destination) {
    let prices = {
        london: 183,
        paris: 220,
        other: 300
    }
    return prices.hasOwnProperty(destination.toLowerCase())
        ? prices[destination.toLowerCase()]
        : prices.other
}

// 3. Définissez une fonction appelée rentalCarCost().
function rentalCarCost(numberOfDays) {
    let total = numberOfDays * 40
    if (numberOfDays > 10)
        total -= total * 5 / 100
    return total
}

// 4. Définissez une fonction appelée totalVacationCost()qui renvoie le coût total des vacances de l'utilisateur en appelant les 3 fonctions que vous avez créées ci-dessus.
// 5. Appelez la fonctiontotalVacationCost()
// 6. Bonus : Au lieu d'utiliser un promptà l'intérieur des 3 premières fonctions, utilisez uniquement une invite à l'intérieur de la totalVacationCost()fonction. Vous devez modifier les 3 premières fonctions en conséquence.
(function totalVacationCost() {
    let input,
        numberOfNights = 0,
        destination = "",
        numberOfDays = 0

    do {
        input = prompt("Combien de nuits souhaitez-vous rester à l'hôtel ?")
        if (!isNaN(input))
            numberOfNights = Number(input)
    } while (numberOfNights === 0)
    // Destination
    do {
        input = prompt("Quelle est votre destination?")
        if (null !== input && /^\w+(\s?\w?)*$/.test(input))
            destination = input.trim()
    } while (destination === "")
    // Nombre de jour
    do {
        input = prompt("Combien de jours souhaitez-vous louer la voiture ?")
        if (!isNaN(input))
            numberOfDays = Number(input)
    } while (numberOfDays === 0)

    console.log(`Nombre de jours: ${numberOfNights} / Frais Hotel: ${hotelCost(numberOfNights)}`)
    console.log(`Destination: ${destination} / Planifier les frais de trajet: ${planeRideCost(destination)}`)
    console.log(`Nombre de jours: ${numberOfDays} / Frais de location de voiture: ${rentalCarCost(numberOfDays)}`)
    console.log(`Coût total des vacances: ${(hotelCost(numberOfNights) + planeRideCost(destination) + rentalCarCost(numberOfDays))}`)
})()