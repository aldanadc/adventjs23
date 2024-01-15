function createChristmasTree(ornaments: string, height: number) {
  let tree = '';
  let index  = 0;
  for (let i = 0; i < height; i++) {
    const wiwi = Array.from({length: i + 1}, () => ornaments[index++ % ornaments.length]);
    tree += `${wiwi.join(' ').padStart(height+i)}\n`;
  }
  return tree.concat('|'.padStart(height)).concat('\n');
}