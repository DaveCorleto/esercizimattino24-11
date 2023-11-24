// JSnack 4
//  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
//  chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
// sviluppato con un ciclo while
// bonus: ottimizzare il ciclo

//  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,

  

// const invitedList = ["Paul McCartney", "George Harrison", "Ringo Starr", "John Lennon"];
// const userName = prompt("Inserisci il tuo nome");

// let isInvited = false;
// let i = 0;

// while (i < invitedList.length && !isInvited) {
//   // Confronto case-sensitive per verificare se il nome dell'utente è presente nella lista degli invitati
//   if (userName === invitedList[i]) {
//     isInvited = true;
//   }
//   i++;
// }

// if (isInvited) {
//   console.log(`Benvenuto ${userName}, sei invitato alla festa del grande Gatsby!`);
// } else {
//   console.log(`${userName}, mi dispiace, non sei invitato alla festa.`);
//    }


// JSnack 5
//  Crea un array vuoto. 
//  Chiedi per 6 volte all’utente di inserire un numero, 
//  se è dispari inseriscilo nell’array

// let list = [];

// // Chiedi per 6 volte all'utente di inserire un numero

// let i = 0;

// while (i < 6) {
//   const newitem = parseInt(prompt(`Inserisci il ${i + 1}° numero`));

//   if (newitem % 2 !== 0) {
//     list.push(newitem);
//   }

//   // Incrementa l'indice ad ogni iterazione
//   i++;
// }

// console.log(list);

// Crea un array vuoto.
let list = [];

// Continua a chiedere all’utente numeri e se sono dispari li inserisci nell’array vuoto,
// fino a quando il tuo array non è composto da 6 numeri dispari.

let i = 0;

while (list.length < 6) {
  const newitem = parseInt(prompt(`Inserisci un numero`));

  if (newitem % 2 !== 0) {
    list.push(newitem);
  }

  // Incrementa l'indice ad ogni iterazione
  i++;
}

console.log(list);