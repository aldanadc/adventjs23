function findNaughtyStep(original: string, modified: string) {
  // Code here
  if (original === modified) return ''

  let longer = original;
  let shorter = modified;

  if (longer.length < shorter.length) {
    longer = modified;
    shorter = original;
  }

  for (let i=0; i < longer.length; i++) {
    if (longer[i] && !shorter[i] || longer[i] !== shorter[i]) {
      return longer[i];
    }
  }
}

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'
