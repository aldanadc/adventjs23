function organizeGifts2(gifts) {
  // Code here
  const individualGifts = gifts.match(/([0-9]+)*[a-z]/g);
  let result = '';

  for (const gift of individualGifts) {
    const giftType = gift.charAt(gift.length-1);
    const giftQuantity = Number(gift.slice(0, gift.length-1));

    if (giftQuantity < 10) {
      const bags = `(${giftType.repeat(giftQuantity)})`;
      result = result.concat(bags);
    }else {
      let i = 10;
        while ((giftQuantity - i) >= 0) {
          if (i + 10 <= giftQuantity) {
            i = i + 10;
          }else 
            break
        }
        const looseGifts = giftQuantity - i;
        const boxesAmount = i/10;
        let boxes = `{${giftType}}`.repeat(boxesAmount);
        if (boxesAmount >= 5) {
          let i = 5;
          while((boxesAmount - i) > 0) {
            if (i + 5 < boxesAmount) {
              i = i + 5;
            }else 
            break
          }
          const looseBoxes = boxesAmount - i;
          boxes = `{${giftType}}`.repeat(looseBoxes);
          const pallets = `[${giftType}]`.repeat((boxesAmount-looseBoxes)/5);
          result = result.concat(pallets);
        }
        result = result.concat(boxes);
        if (looseGifts) {
          const bags = `(${giftType.repeat(looseGifts)})`;
          result = result.concat(bags);
        }
      }
  }
  return result
}

function organizeGifts(gifts) {
  // Code here
  const individualGifts = gifts.match(/([0-9]+)*[a-z]/g);
  let result = '';

  for (const gift of individualGifts) {
    const giftType = gift.charAt(gift.length-1);
    const giftQuantity = Number(gift.slice(0, gift.length-1));

    if (giftQuantity < 10) {
      const bags = `(${giftType.repeat(giftQuantity)})`;
      result = result.concat(bags);
    }else {
      if (giftQuantity % 10 === 0) {
        const boxesAmount = giftQuantity/10;
        if (boxesAmount >= 5) {
          let i = 5;
          while((boxesAmount - i) > 0) {
            if (i + 5 < boxesAmount) {
              i = i + 5;
            }else 
            break
          }
          const looseBoxes = boxesAmount - i;
          const boxes = `{${giftType}}`.repeat(looseBoxes);
          const pallets = `[${giftType}]`.repeat((boxesAmount-looseBoxes)/5);
          result = result.concat(pallets).concat(boxes);
        }else {
          const boxes = `{${giftType}}`.repeat(boxesAmount);
          result = result.concat(boxes);
        }
      }else {
        if (giftQuantity > 10) {
          let i = 10;
          while ((giftQuantity - i) > 0) {
            if (i + 10 < giftQuantity) {
              i = i + 10;
            }else 
              break
          }
          const looseGifts = giftQuantity - i;
          const bags = `(${giftType.repeat(looseGifts)})`;
          const boxesAmount = i/10;
          const boxes = `{${giftType}}`.repeat(boxesAmount);
          if (boxesAmount >= 5) {
            let i = 5;
            while((boxesAmount - i) > 0) {
              if (i + 5 < boxesAmount) {
                i = i + 5;
              }else 
              break
            }
            const looseBoxes = boxesAmount - i;
            const boxes = `{${giftType}}`.repeat(looseBoxes);
            const pallets = `[${giftType}]`.repeat((boxesAmount-looseBoxes)/5);
            result = result.concat(pallets).concat(boxes).concat(bags);
          }else {
            const looseGifts = giftQuantity - i;
            const bags = `(${giftType.repeat(looseGifts)})`;
            result = result.concat(boxes).concat(bags);
          }
        }
      }
    }
  }
  return result
}

organizeGifts2('76a11b')
