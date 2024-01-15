function decode(message: string) {
  // Code here
  let startIndex!: number;
  let finishIndex!: number;
  let open = 0;
  const openIndexes: number[] = [];
  for (let i=0; i < message.length; i++) {
    if (message[i] === '(') {
      open++;
      openIndexes.push(i);
      startIndex = i;
    }else if (message[i] === ')') {
      finishIndex = i;
      const toReverse = message.substring(startIndex, finishIndex + 1);
      const reversed = toReverse.split('').reverse().slice(1, -1).join('');
      message = message.replace(toReverse, reversed);
      if (open === 2) {
        startIndex = openIndexes[0];
      }
      i = i - 2;
      open--;
    }
  }
  return message
}

decode('sa(u(cla)atn)s')
decode('(olleh) (dlrow)!')
decode('hola (odnum)')
decode('((nta)(sa))')