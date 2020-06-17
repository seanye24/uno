class Deck {
  constructor() {
    const deck = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 10; j++) {
        deck.push({ color: i, number: j });
        deck.push({ color: i, number: j });
      }
    }
    this.shuffle(deck);
    this.discard = [deck.pop()];
    this.deck = deck;
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  peek() {
    return this.discard.peekBack();
  }

  check() {
    if (this.deck.length === 0) {
      const last = this.discard.pop();
      this.deck = this.discard;
      this.shuffle(this.deck);
      this.discard = [last];
    }
  }

  draw() {
    let temp = this.deck.pop();
    this.check()
    return temp
  }

  place(card) {
    this.discard.push(card);
    this.check()
  }
}

module.exports = Deck;
