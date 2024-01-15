function maxDistance(movements: string) {
  // Code here
  let any: number = 0, left: number = 0, right: number = 0;

  for (let movement of movements) {
    if (movement === '*') any++;
    else if (movement === '<') left++;
    else right++;
  };

  return Math.abs(left-right) + any;
}
