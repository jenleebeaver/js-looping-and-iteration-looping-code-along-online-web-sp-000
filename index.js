// Code your solutions in this file

function writeCards(namesArray, event){
  let thankYouCards = []
  for (let i = 0; i < namesArray.length; i++){
    thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouCards
}

let countDown = i;
while (countDown > 0){
  console.log(countDown--)
};
countDown(20);
