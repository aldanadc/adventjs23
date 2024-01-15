function drawGift(size: number, symbol: string) {
  // Code here
  if (size === 1) return '#\n';

  const rows: string[] = [];
  rows[0] = '#'.repeat(size).padStart(size * 2 - 1);
  rows[size*2-2] = '#'.repeat(size);
  rows[size-1] = `${'#'.repeat(size)}${symbol.repeat(size-2)}#`

  for (let row=1; row < size-1; row++) {
    let draft = `#${symbol.repeat(size - 2)}#${symbol.repeat(row-1)}#`
    rows[row] = draft.padStart(size * 2 - 1, ' ');
    rows[size*2-2-row] = draft;
  }
  return rows.join('\n').concat('\n');
}

drawGift(4, '*')