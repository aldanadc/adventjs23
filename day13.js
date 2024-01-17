function calculateTime(deliveries) {
  let totalTimeForDeliveries = 0;
  const availableSeconds = 7*60*60;

  for (let delivery of deliveries) {
    const [hours, minutes, seconds] = delivery.split(':');
    totalTimeForDeliveries += hours*3600 + minutes*60 + seconds*1;
  }
  const timeLeft = Math.abs(availableSeconds - totalTimeForDeliveries);
  const secondsLeft = `${timeLeft%60}`.padStart(2, '0');
  const minutesLeft = `${Math.trunc(timeLeft/60)%60}`.padStart(2, '0');
  let hoursLeft = (Math.trunc(timeLeft/60)-minutesLeft)/60;
  hoursLeft = `${hoursLeft}`.padStart(2, '0');
  let result = `${hoursLeft}:${minutesLeft}:${secondsLeft}`;
  if ((availableSeconds - totalTimeForDeliveries) > 0) result = `-${result}`;
  return result;
}

calculateTime(['02:00:00', '04:00:00', '00:30:00'])
// '-00:30:00'