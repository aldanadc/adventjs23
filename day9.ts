function adjustLights(lights: string[]) {
  // Code here
  function checkLights(lights: string[]) {
    let changes = 0;
    const red = '🔴';
    const green = '🟢';
    for (let i = 0; i < lights.length; i++) {
      if (lights[i] === lights[i-1]) {
        if (lights[i] === red) {
          lights[i] = green
        }else {
          lights[i] = red
        }
        changes++
      }
    }
    return changes
  }
  return Math.min(checkLights([...lights]), checkLights([...lights].reverse()))
}

adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (you change the fourth light to 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// // -> 2 (you change the second light to 🟢 and the third to 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (they are already alternating)