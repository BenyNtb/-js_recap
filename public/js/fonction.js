// EXO1
// for (let i = 0; i <= 5 ; i++) {
//     let quest = prompt(`Entrez un nombre entre 1 et 20  ${i}`)
//     let nbr = (a) => {
//         if (quest == nbr) {
//             alert("froid")
//         } else if {
//             prompt("Entrez un nombre entre 1 et 20")
//         } else {

//         }
//         return Math.floor(Math.random(a)*20) 
//     }
// }
// let nbr = nbr(14);
// console.log(nbr); 
// let quest = prompt('Entrez un nombre entre 1 et 20')

// let nbr = (min,max) => {
//     if (quest == nb) {
//         alert("Bien joué !")
//     } else {
//         prompt("Entrez un nombre entre 1 et 20")
//     }
//     return Math.floor(Math.random()*(max - min)) + min
// }
// let nbr = nbr(7,14);
// console.log(nbr); 
// let quest = prompt('Entrez un nombre entre 1 et 20')
// let entierAleatoire = (min, max) => {
//     if (quest == entierAleatoire) {
//         alert("Bien joué !")
//     } else {
//         prompt("Entrez un nombre entre 1 et 20")
//     }
//     return Math.floor(Math.random() * (max - min))
// }
// let nb = entierAleatoire(10, 20);
// console.log(nb);
// let nombreH = Math.floor(Math.random() * 20);  

// console.log(`Le nombre au hasard ${nombreH}`);

// let essaipossible = 5; 
// let gagner = false; // 

// for(let i=1; i <= essaipossible; i++){
//     if (gagner == false) {
//         console.log(`Tour numéro: ${i}`);
//         let essai = parseInt(prompt(`Entrez un nombre entre 0 - 20 ? `));
//         console.log(`Tu as entrer : ${essai} `);
//         if (essai == nombreH) {
//             console.log(`Super tu as reussi`);
//             gagner = true;
//         } else {
//             if (essai > nombreH) {
//                 let difference = essai-nombreH;
//                 if(difference > 5){
//                     console.log(`Froid`);
//                 }else if(difference == 1){
//                     console.log(`Brulant`);
//                 }else if(difference == 2){
//                     console.log(`chaud`); 
//                 }else if(difference <= 5){
//                     console.log(`tiède!`);
//                 }

                
//             }
//         }
//     }
// }

// EXO 2

let leTableau = ['voiture', 24, true]

let tab = (String) => {
    return String.charAt(0).toUppercase() 
}
console.log(leTableau);