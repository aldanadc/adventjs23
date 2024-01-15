function findFirstRepeated(gifts: number[]) {
  // Code here
  const ids: number[] = [];
  const repeatedIds: number[] = [];
  for (let id of gifts) {
    if (!ids.includes(id)) {
      ids.push(id);
    }else {
      repeatedIds.push(id)
    }
  }
  if (repeatedIds.length === 0) return -1
  return repeatedIds[0]
}

function findFirstRepeated2(gifts: number[]) {
  // Code here
  const ids: number[] = [];
  for (let id of gifts) {
    if (!ids.includes(id)) {
      ids.push(id);
    }else {
      return id
    }
  }
  if (ids.length === gifts.length) return -1
}

function findFirstRepeated3(gifts: number[]) {
  // Code here
  const ids: number[] = [];
  for (let id of gifts) {
    if (ids.includes(id)) return id;
    ids.push(id);
  }
  return -1;
}


findFirstRepeated3([2, 1, 3, 5, 3, 2]);