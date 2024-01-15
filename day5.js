function cyberReindeer(road, time) {
  // Code here
  const result = [road];
  let position = 0;
  let barrierIndexes = [];
  road = road.split('');
  for (let i=0; i < time-1; i++) {
    if (i === 4) {
      road = road.join('').replaceAll('|', '*').split('');
    }

    if (road[position+1] !== '|') {
      if (road[position+1] === '*') {
        road[position+1] = 'S';
        road[position] = '.';
        barrierIndexes.push(position+1);
      }else {
        [road[position], road[position+1]] = [road[position+1], road[position]];
      }
      position++;
    }
    barrierIndexes.forEach(index => {
      if (road[index] !== 'S') road[index] = '*';
    });
    result.push(road.join(''));
  }
  return result
}

function cyberReindeer2(road, time) {
  // Code here
  const result = [road];
  let position = 0;
  let barrierIndexes = [];
  console.log(road.charAt(1));
  for (let i=0; i < time-1; i++) {
    if (i === 4) {
      road = road.replaceAll('|', '*');
    }

    if (road.charAt(position+1) !== '|') {
      if (road.charAt(position+1) === '*') {
        road.replace(road.charAt(position+1), 'S');
        road.replace(road.charAt(position), '.');
        barrierIndexes.push(position+1);
      }else {
        const positionC = road.charAt(position);
        const next = road.charAt(position+1);
        road.replace(positionC, next);
        road.replace(next, positionC);
      }
      position++;
    }
    barrierIndexes.forEach(index => {
      if (road.charAt(index) !== 'S') road.replace(road.charAt(index), '*');
    });
    result.push(road);
  }
  console.log(result);
  return result
}


const road = 'S..|...|..'
const time = 10 // units of time
const result = cyberReindeer2(road, time)