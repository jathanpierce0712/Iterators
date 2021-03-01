let overusedWords = ['really', 'very', 'basically'];

let betterWords = storyWords.filter(word => ! unnecessaryWords.includes(word));
//  

let storyWords = story.split(' ');
console.log(storyWords.length);

let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

for (let i = 0; i <= betterWords.length; i++) {
  if (betterWords[i] === unnecessaryWords[0]) {
    reallyCount++;
  }else if (betterWords[i] === unnecessaryWords[1]) {
    veryCount++;
  }else if (betterWords[i] === unnecessaryWords[2]){
    basicallyCount++
  }else {
    continue;
  }
};
console.log(betterWords.join(' '));