

import readline from "node:readline";

const consonants = "bcdfghjklmnpqrstvwxz";

const vowels = "aeiouyåäö";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a word: ", function (textInput) {
  rovarLanguage(textInput);

  console.log(rovarLanguage(textInput));
  rl.close();
});


export function rovarLanguage(textInput) {

  let result = '';

  for (const char of textInput) {
    if (consonants.includes(char.toLowerCase())) {
      result += char + "o" + char;
    } else {
      result += char;
    }
  }
  return result;
}

export function swedishLanguage(textOutput) {


}

