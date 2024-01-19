function maxGifts(houses) { // fails 3 secret tests
  if (houses.length === 0) return 0;
  if (houses.length === 1) return houses[0];
  
  let result = 0;
  const usedIndexes = [];
  const orderedPresents = [...houses].sort((a, b) => b-a);
  orderedPresents.forEach((presentGroup) => {
    const index = houses.indexOf(presentGroup);
    if (!usedIndexes.includes(index)) {
      if (!usedIndexes.includes(index-1) &&
          !usedIndexes.includes(index+1)) {
            result += presentGroup;
            usedIndexes.push(index);
          }
      houses[index] = 0;
    }
  })
  return result
}

function maxGifts2(houses) { // 5 secret tests fail
  const max = Math.max(...houses);
  let result = max;
  let visited = [houses.indexOf(max)];
  houses.splice(houses.indexOf(max), 1, 0);

  for (let i=0; i<houses.length; i++){
    const max = Math.max(...houses);
    const maxIndex = houses.indexOf(max);
    if (!visited.includes(maxIndex) &&
        !visited.includes(maxIndex-1) &&
        !visited.includes(maxIndex+1)) {
          visited.push(maxIndex);
          result += houses[maxIndex];
          houses[maxIndex] = 0;
    }
  }
  if (!visited.includes((houses.length)-1) &&
      !visited.includes((houses.length)-2)) {
        result += houses[houses.length-1];
        visited.push(houses.length-1);
  }
  if (!visited.includes(0) &&
      !visited.includes(1)) {
        result += houses[0];
        visited.push(0);
  }
  return result
}

maxGifts([2, 4, 2]) // 4 (4)
maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)
maxGifts([2, 7, 9, 3, 1])
maxGifts([1, 2, 3, 1])
maxGifts([1, 2, 3, 1]) // 4
maxGifts([2, 7, 9, 3, 1]) // 12



function maxGiftsGPT(gifts) { // ChatGPT solution, uses dynamic programming:
  const n = gifts.length;

  // Handle base cases
  if (n === 0) {
      return 0;
  }
  if (n === 1) {
      return gifts[0];
  }

  // Initialize an array to store the maximum gifts at each house
  const dp = new Array(n);

  // Set the initial values for the first two houses
  dp[0] = gifts[0];
  dp[1] = Math.max(gifts[0], gifts[1]);

  // Iterate through the rest of the houses
  for (let i = 2; i < n; i++) {
      // Calculate the maximum gifts at the current house
      // by considering the two options:
      // 1. Taking gifts from the current house and adding it
      //    to the maximum gifts at the house two steps back
      // 2. Skipping the current house and taking the maximum
      //    gifts at the previous house
      dp[i] = Math.max(gifts[i] + dp[i - 2], dp[i - 1]);
  }

  // The last element in the dp array will contain
  // the maximum gifts that can be delivered
  return dp[n - 1];
}

function maxGiftsDiscord(houses) { // Solution from some user in Discord:
  let incl = 0,
  excl = 0;
  let excl_new;

  for(let h of houses) {
      excl_new = [excl, incl][+(incl > excl)];
      incl = excl + h;
      excl = excl_new;
  }
  return [excl, incl][+(incl > excl)];
}
