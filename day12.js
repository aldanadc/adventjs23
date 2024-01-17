function checkIsValidCopy(original, copy) {
  for (let i=0; i < original.length; i++) {
    const nextCharacter = verifyDecay(original[i]);
    if (original[i] === copy[i] || nextCharacter.includes(copy[i])) {
      continue
    }else {
      return false
    }
  }
  return true

  function verifyDecay(c) {
    const allSymbols = ['#', '+', ':', '.', ' '];
    if (c.match(/[a-zA-Z]/)?.input) return [c.toLowerCase(), ...allSymbols];
    if (c === '#' || c === '+' || c === ' :') {
      return allSymbols.slice((allSymbols.indexOf(c)+1));
    }
    return allSymbols.slice(-1);
  }
}

function checkIsValidCopy2(original, copy) {
  for (let i=0; i < original.length; i++) {
    const nextCharacter = verifyDecay(original[i]);
    if (original[i] === copy[i] || nextCharacter.includes(copy[i])) {
      continue
    }else {
      return false
    }
  }
  return true

  function verifyDecay(c) {
    const allSymbols = ['#', '+', ':', '.', ' '];
    if (c.match(/[A-Z]/)?.input) return [c.toLowerCase(), ...allSymbols];
    if (c.match(/[a-z]/)?.input) return allSymbols;
    if (c === '#') return allSymbols.slice(1);
    if (c === '+') return allSymbols.slice(2);
    if (c === ':') return allSymbols.slice(4);
    return allSymbols.slice(-1);
  }
}

function checkIsValidCopy3(original, copy) {
  for (let i=0; i < original.length; i++) {
    const nextCharacter = verifyDecay(original[i]);
    if (original[i] === copy[i] || nextCharacter.includes(copy[i])) {
      continue
    }else {
      return false
    }
  }
  return true

  function verifyDecay(c) {
    switch(c) {
      case c.match(/[A-Z]/)?.input:
        return [c.toLowerCase(), '#', '+', ':', '.', ' '];
      case c.match(/[a-z]/)?.input:
        return ['#', '+', ':', '.', ' '];
      case '#':
        return ['+', ':', '.', ' '];
      case '+':
        return [':', '.', ' '];
      case ':':
        return ['.', ' '];
      case '.':
        return [' '];
      case ' ':
        return [' '];
    }
  }
}



checkIsValidCopy(
  'Santa Claus is coming',
  'sa#ta Cl#us i+ comin#'
)
checkIsValidCopy(
  's#nta Cla#s is coming',
  'p#nt: cla#s #s c+min#'
)
checkIsValidCopy('Santa Claus', 's#+:. c:. s')
checkIsValidCopy('Santa Claus', 's#+:.#c:. s')


// Letters degrade in a series of characters in this order: A-Z ⇒ a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒ ' '
// Digits do not degrade

// original:  'Santa Claus'
// 1st copy:  'santa cla#s'
// 2nd copy:  'sa#t# cl#+s'
// 3rd copy:  'sa+## c#+:s'
// 4th copy:  's#++. c+:.s'
// 5th copy:  's#+:. c:. s'
