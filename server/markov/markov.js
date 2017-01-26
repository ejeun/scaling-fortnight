export default class Markov {

  // n is number of words to chain
  // -right now only 1 and 2 are supported
  // -3 would only make sense if we had a lot of training text
  // -otherwise all generated sentences would be exact copies from the book
  // mc is the key/value table
  // -I put it in as an argument if we store it as a json or something
  constructor(n = 1, mc = {}) {
    this.n = n;
    this.mc = mc;
  }

  // creates sentences of length 7 or less
  generate() {
    let length = 7;  // this could be changed if we want
    let sentence, key, choices, word;

    if (this.n === 1) {
      // start a sentence with an empty string so you can find the appropriate key
      sentence = [``];
      for (let i = 0; i < length; i++) {
        key = sentence[i];  // each iteration, the key becomes the word you chose previously
        choices = this.mc[key];
        // if there are no words that follow a key, the sentence will end there
        if (!choices) break;

        // pick a random word from the array of choices and add it to the sentence
        // probability happens naturally because there can be repeats
        word = choices[Math.floor(Math.random() * choices.length)];
        sentence.push(word);
      }
    }
    // similar for n = 2
    else if (this.n === 2) {
      sentence = [``, ``];
      for (let i = 0; i < length; i++) {
        key = `${sentence[i]}:::${sentence[i + 1]}`;
        choices = this.mc[key];
        if (!choices) break;

        word = choices[Math.floor(Math.random() * choices.length)];
        sentence.push(word);
      }
    }
    // we could transform this into lol speak here if we want
    return sentence.join(` `).trim();
  }

  // line can be a string or an array of strings
  add(line) {
    // if it's an array, call add on each string and return
    if (Array.isArray(line)) {
      line.forEach(element => this.add(element));
      return;
    }

    // otherwise it's a word

    // turn everything to lowercase and turn the string into an array of words
    // there's still some punctuation right now, we could remove it if it makes more sense
    let words = line.toLowerCase().split(` `);
    // add 1 or 2 empty strings to the front to help create keys for the beginning of sentences
    let prepend = 0;
    while (prepend++ < this.n) words.unshift(``);

    // each preceding word in the sentence is a key for the next word
    // the values are stored in arrays, with duplicates allowed (probably will change)
    if (this.n === 1) {
      for (let i = 0; i < words.length - 1; i++) {
        let key = words[i];
        if (!this.mc[key]) this.mc[key] = [];
        this.mc[key].push(words[i + 1]);
      }
    }
    // each preceding 2 words in the sentence joined with ::: is a key for the next word
    else if (this.n === 2) {
      for (let i = 0; i < words.length - 2; i++) {
        let key = `${words[i]}:::${words[i + 1]}`;
        if (!this.mc[key]) this.mc[key] = [];
        this.mc[key].push(words[i + 2]);
      }
    }

  }
}