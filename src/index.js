

import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a word: ", function(textInput) {
  isConsonant(textInput);
  rl.close();
});


const consonants = "bcdfghjklmnpqrstvwxz";

const vowels = "aeiouyåäö";

export function isConsonant(textInput) {

  for(const char of textInput.toLowerCase()){
    if(consonants.includes(char)){
      return consonants + "+o"
    }
  }
  return false;
}

export function isVowel(textOutput) {
  
}

