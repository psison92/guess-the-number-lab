const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [], //array of previous guesses
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        console.log(this.secretNum)
        
        do {
        this.prevGuesses.push(this.getGuess())
        console.log(this.prevGuesses)
        this.render()
      } while (this.prevGuesses[this.prevGuesses.length - 1] !== 
        this.secretNum)
      },
    getGuess: function() {
      let guess 
      do {  
        guess = parseInt(prompt(`Enter a guess between ${this.smallestNum}
          and ${this.biggestNum}.`,''))
      }
        while (guess < this.smallestNum || guess > this.biggestNum)
      return guess
    },
    render: function() {
      if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
        alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
      } else if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {
      alert(`Your guess is too low. Previous guesses: ${this.prevGuesses.join()}`)
      } else if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
      alert(`Your guess is too high. Previous guesses: ${this.prevGuesses.join()}`)
      }
    }
}
game.play()


