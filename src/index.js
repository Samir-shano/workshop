

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
  console.log(fromRovarLanguage(rovarLanguage(textInput)));
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

export function fromRovarLanguage(textInput) {
  let result = '';

  for(let i = 0; i < textInput.length; i++) {
    const char = textInput[i];
    if (consonants.includes(char.toLowerCase())) {
      result += char;
      i += 2; // Skip the next two characters (the 'o' and the repeated consonant)
    } else {
      result += char;
    }
  }
  return result;
}

export function bulletPoints(textInput) {
}

