function manufacture(gifts: string[], materials: string) {
  // Code here
  const result: string[] = [];
  for (let gift of gifts) {
    let possible = true;
    for (let c of gift) {
      if (!materials.includes(c)) {
        possible = false;
        break
      }
    }
    if (possible) {
      result.push(gift)
    }
  }
  return result
}

function manufacture2(gifts: string[], materials: string) {
  // Code here
  const result: string[] = [];

  gifts.forEach(gift => {
    let possible = true;
    for (let c of gift) {
      if (!materials.includes(c)) possible = false;
    }
    if (possible) {
      result.push(gift)
    }
  });
    return result
}

function manufacture3(gifts: string[], materials: string) {
  // Code here
  const result: string[] = [];
  for (let gift of gifts) {
    const uniqueChars = new Set(gift);
    let possible = true;
    for (let c of uniqueChars) {
      if (!materials.includes(c)) {
        possible = false;
        break
      }
    }
    if (possible) {
      result.push(gift)
    }
  }
  return result
}

function manufacture4(gifts: string[], materials: string) {
  // Code here
  const result: string[] = [];
  for (let gift of gifts) {
    const uniqueChars = new Set(gift);
    let possible = true;
    for (let c of uniqueChars) {
      if (materials.indexOf(c) === -1) {
        possible = false;
        break
      }
    }
    if (possible) {
      result.push(gift)
    }
  }
  return result
}


const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]