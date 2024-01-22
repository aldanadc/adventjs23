function autonomousDrive(store, movements) { // passes with 25 points, needs improvement
  const qFloors = store.length;
  let robot = {
    floor: 0,
    position: 0
  }

  for (let floor=0; floor < qFloors; floor++) {
    if (store[floor].indexOf('!') !== -1) {
      robot.position = store[floor].indexOf('!');
      robot.floor = floor;
    }
    store[floor] = store[floor].split('');
  }

  const switchPosition = (floor, position) => {
    [store[robot.floor][robot.position], store[floor][position]] = ['.' , '!'];
  }
  const isValidMove = (position) => position !== '*';

  for (let movement of movements) {
    if (movement === 'L') {
      if (isValidMove(store[robot.floor][robot.position-1])) {
        switchPosition(robot.floor, robot.position-1);
        robot.position -=1;
      }
    }else if (movement === 'R') {
      if (isValidMove(store[robot.floor][robot.position+1]) &&
          (robot.position+1 !== store[robot.floor].length)) {
        switchPosition(robot.floor, robot.position+1);
        robot.position +=1;
      }
    }else if (movement === 'U') {
      if (robot.floor !==0 && 
          isValidMove(store[robot.floor-1][robot.position])) {
          switchPosition(robot.floor-1, robot.position);
          robot.floor -=1;
      }
    }else if (movement === 'D') {
      if ((robot.floor !== (qFloors-1)) &&
          isValidMove(store[robot.floor+1][robot.position])) {
        switchPosition(robot.floor+1, robot.position);
        robot.floor +=1;
      }
    }
  }

  for (let floor=0; floor < qFloors; floor++) {
    store[floor] = store[floor].join('');
  }
  return store
}

function autonomousDrive2(store, movements) { // fails one secret test
  const qFloors = store.length;
  let robotPosition = 0, 
  robotFloor = 0;
  for (let floor=0; floor < qFloors; floor++) {
    if (store[floor].indexOf('!') !== -1) {
      robotPosition = store[floor].indexOf('!');
      robotFloor = floor;
    }
    store[floor] = store[floor].split('');
  }
  
  const isValidMove = (nextFloor, nextPosition) => store[nextFloor] && store[nextFloor][nextPosition] !== '*';

  for (let movement of movements) {
    switch (movement) {
      case 'L':
        if (isValidMove(robotFloor, robotPosition-1)) {
          [store[robotFloor][robotPosition], store[robotFloor][robotPosition-1]] = ['.' , '!'];
          robotPosition -=1;
          break
        }
      case 'R':
        if (isValidMove(robotFloor, robotPosition+1)  && (robotPosition+1 !== store[robotFloor].length)) {
          [store[robotFloor][robotPosition], store[robotFloor][robotPosition+1]] = ['.' , '!'];
          robotPosition +=1;
          break
        }
      case'U': 
        if (robotFloor !==0 && isValidMove(robotFloor-1, robotPosition)) {
          [store[robotFloor][robotPosition], store[robotFloor-1][robotPosition]] = ['.' , '!'];
          robotFloor -=1;
          break
        }
      case 'D':
        if ((robotFloor !== (qFloors-1)) && isValidMove(robotFloor+1, robotPosition)) {
          [store[robotFloor][robotPosition], store[robotFloor+1][robotPosition]] = ['.' , '!'];
          robotFloor +=1;
          break
        }
      }
    }

  for (let floor=0; floor < qFloors; floor++) {
    store[floor] = store[floor].join('');
  }
  return store
}


const store = ['..!*...', '...*.*.']
const movements = ['R', 'R', 'D', 'D']
autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'])
autonomousDrive(['..!....'], ['R', 'L'])
autonomousDrive(['!..', '***'], ['R', 'L'])