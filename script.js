
// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['parrot']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['necklace']
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['necklace']
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white' ,
    eyes: 'hidden' ,
    accessories: ['hat'],
    other: ['cellphone']
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

// All the DOM selectors stored as short variables
const tilesSheet = document.querySelector('board');   
const count = document.getElementById('counter');
const filter = document.getElementById('filter')            //findout button
const questions = document.getElementById('questions')
const winOrLose = document.getElementById('winOrLose')
const playAgain = document.getElementById('playAgain')
const board = document.getElementById('board')
const restartButton = document.getElementById('restart')

// Global variables
let selectedCharacter                                     //the secret character
let guessCount = 5                                       //tries for guessing
let currentQuestion
let charactersInPlay
let secret                                             //variable generating random character


const generateBoard = () => {                        //the game board
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {            //charactersinplay = individual players
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>  `
  })
};                                                                     //board generated in the start function,wont be coming out if called outside


const guessWho = () => {                                             //generating the secret person
  let secret = Math.floor(Math.random() * CHARACTERS.length+1);     
  selectedCharacter = CHARACTERS[secret];                          //generate random = name in console
  console.log("Selected: " , selectedCharacter);                  //console check
};


// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS                               // Here we're setting charactersInPlay array to be all the characters to start with
  generateBoard();
  guessWho();                           
  guessCount = 5
  winOrLose.style.display = "none";
  winOrLoseText.innerHTML = "";

}
start();                                                 // Invokes the start function when website is loaded

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {                                                   //player will choose
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value                                                // This variable stores what option group (category) the question belongs to.

  currentQuestion = {                                                         //storing actual value of the questions weve selected
    category: category,
    value:value,
  }
}; 

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion                             //example : Name: "Jabala"
  console.log("Question ready: " , currentQuestion)

if (category === 'accessories') {
  if (selectedCharacter[category].includes(value)) {
    filterCharacters(true)
  }
  else {
    filterCharacters(false)
  }
} 
else if (category === 'other') {
  if (selectedCharacter[category].includes(value)) {
        filterCharacters(true)
    }
  else {
        filterCharacters(false)
    }

} else if (category === 'hair') {
  if (selectedCharacter[category] === value) {
      filterCharacters(true)
  } else {
      filterCharacters(false)
   }

 } else if (category === 'eyes') {
    if (selectedCharacter[category].includes(value)) {
      filterCharacters(true)
    }
    else {
      filterCharacters(false)
    }
  }
 
};


//find out buttonon click to react to filtering
// Then invoke filterCharacters

// It'll filter the characters array and redraw the game board.
// Shows the correct alert message for different categories
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } 
    else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } 
  
  else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that has a ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    }
    else {
      alert(`No, the person doesn't have ${value}! Remove all people that has a ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }
  else if (category === 'hair') {
    if (keep) {
      alert(`Yes, the person has ${value}! Keep all people that has ${value} hair`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    }
    else {
      alert(`No, the person doesn't have ${value}! Remove all people that wears ${value} hair`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  
  }
  else if (category === 'eyes') {
    if (keep) {
      alert(`Yes, the person has ${value}! Keep all people that has ${value} eyes`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    }
    else {
      alert(`No, the person doesn't have ${value} eyes ! Remove all people that has ${value} eyes`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }
  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  
  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } 
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } 
  else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    }
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      }
  } 
  else if (category === 'hair') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    }
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category] !== value)
    }

  } 
  else if (category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    }
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
    } 
  
generateBoard();  //generating a new board that is filtered with remaining people

};


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  if (window.confirm(`Are you sure you want to guess ${personToConfirm}?`)) {  //confirm shows two options
    checkMyGuess(personToConfirm);                                            // If the player wants to guess, invoke the checkMyGuess function.
  } 
  else { 
    console.log("Cancelled confirmation.")
  }                                     
  };
  
const checkMyGuess = (personToCheck) => {
  if (personToCheck === selectedCharacter.name) {                                          
    winOrLoseText.innerHTML = `You guessed right, it was ${selectedCharacter.name} congratulations!!!!`    
    console.log(personToCheck)
  } 
  else {
    winOrLoseText.innerHTML = `Sorry better luck next time!! The secret person was ${selectedCharacter.name}`
    board.style.display = 'none'
  }
  winOrLose.style.display = 'flex'                                 // shows wrapper
}

const refresh  = () => {window.location.reload()};               //reloading to the start page

// All the event listeners
restartButton.addEventListener('click', start)
filter.addEventListener('click', checkQuestion);               //find out button
questions.addEventListener('change', selectQuestion);
playAgain.addEventListener('click',refresh)                  


