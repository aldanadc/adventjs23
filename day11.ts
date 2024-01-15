function getIndexsForPalindrome(word: string) {
  if (word === word.split('').reverse().join('')) return [];

  for (let i = 0; i < word.length-1; i++) {
    let swapIndex = i + 1;
    for (let j = i; swapIndex < word.length; swapIndex++) {
      let wordArray = word.split('');
      [wordArray[j], wordArray[swapIndex]] = [wordArray[swapIndex], wordArray[j]];
      if (wordArray.join('') === wordArray.reverse().join('')) {
        return [j, swapIndex]
      }
    }
  }
  return null
}

getIndexsForPalindrome('caababa')
