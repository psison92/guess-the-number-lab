const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [], //array of previous guesses
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    },
    getGuess: function(guess) {
      let guess = prompt(`Enter a guess between ${this.smallestNum}
        and ${this.biggestNum}.`,'')
      guess = parseInt(guess)
    }
  }


