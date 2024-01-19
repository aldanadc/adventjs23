function optimizeIntervals(intervals) {
  // sort according to first value
  intervals.sort((a, b) => a[0] - b[0]);
  let lastInterval;
  let result = [intervals[0]]; // start with the first
  for (let interval of intervals) {
    lastInterval = interval;
    const lastMerged = result[result.length - 1];
      // if the current interval overlaps with the last interval merged to the result, merge them
      if (lastInterval[0] <= lastMerged[1]) { // if the start of the current interval is the same or lower than the 
        // end of the last merged to the result
        lastMerged[1] = Math.max(lastMerged[1], lastInterval[1]);
      } else {
          // if no overlap, add the current interval to the result array
          result.push(lastInterval);
      }
    }
  return result
}


optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
]) // [[1, 6], [8, 10]]

optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
]) // [[2, 8]]
