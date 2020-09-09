// Code your solutions in this file
// const greeting = "suprise"
// const name = ['Lisa', 'Kaitlin', 'Jan']

function writeCards(name, greeting){
  // let thankYouCards = []
  for (let i = 0; i < name.length; i++){
    console.log(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
  }
  // return thankYouCards
}


function writeCards(namesArray, event){
  let thankYouCards = []
  for (let i = 0; i < namesArray.length; i++){
    thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouCards
}

// function writeCards( namesArray, event ) {
//   let thankYouCards = []
//   for ( let i = 0; i < namesArray.length; i++ ) {
//     thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
//   }
//   return thankYouCards
// }
