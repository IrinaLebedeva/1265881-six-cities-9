const shuffleArray = (unshuffledArray:Array<string>): Array<string> => unshuffledArray
  .map((item) => ({sort: Math.round(-1 * Math.random()), value: item}))
  .sort((a, b) => a.sort - b.sort)
  .map((item) => item.value);

export {shuffleArray};
