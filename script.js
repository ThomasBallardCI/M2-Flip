document.addEventListener('DOMContentLoaded', () => {
    
  // Card Options
const cardArray = [
  {
    name: "razorsSl",
    img: "images/razorsslskate.jpeg"
  },
  {
    name: "razorsSl",
    img: "images/razorsslskate.jpeg"
  },
  {
    name: "aeon",
    img: "images/aeonskate.jpeg"
  },
  {
    name: "aeon",
    img: "images/aeonskate.jpeg"
  },
  {
    name: "iqon",
    img: "images/iqonskate.jpeg"
  },
  {
    name: "iqon",
    img: "images/iqonskate.jpeg"
  },
  {
    name: "roces",
    img: "images/rocesm12skate.jpeg"
  },
  {
    name: "roces",
    img: "images/rocesm12skate.jpeg"
  },
  {
    name: "shima",
    img: "images/shimaskate.jpeg"
  },
  {
    name: "shima",
    img: "images/shimaskate.jpeg"
  },
  {
    name: "them",
    img: "images/themskate.jpeg"
  },
  {
    name: "them",
    img: "images/themskate.jpeg"
  }, 
];

const grid = document.querySelector(".grid");
let cardsChosen = [];
let cardsChosenId = [];

// game area
function gameArea() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement("img")
    card.setAttribute("src", "images/blank.jpg")
    // give cards data-id 0-11
    card.setAttribute("data-id", i)
    // event listen for cards clicked on, calls flipcard function
    card.addEventListener("click", flipCard)
    // appends card to grid div
    grid.appendChild(card)
  }
}
// checking for image matches
function checkForMatch(){
  // pick out all images into new array
  let cards = document.querySelectorAll("img")
  // sets 1st and 2nd value from chosenId array as const
  const optionOneId =  cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  // checks if 1st and 2nd cards chosen are equal if true alert, if false 
  if (cardsChosen[0] === cardsChosen[1]) {
    alert("You Found a Match!")
    cards[optionOneId].setAttribute("src", "images/white.png")
    cards[optionTwoId].setAttribute("src", "images/white.png")
    cardsWon.push(cardsChosen)
  } else {
    cards[]
  }
}


// flipping images
function flipCard () {
  let cardId = this.getAttribute("data-id")
  // push cards to card array based on id
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  // add image to square based on Id it has
  this.setAttribute("src", cardArray[cardId].img)
  // only 2 cards so statement if equal to 2, run check for match function after 500ms
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}




gameArea()




})



