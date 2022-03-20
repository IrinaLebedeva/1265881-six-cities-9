const shuffleArray = (unshuffledArray:Array<string>): Array<string> => unshuffledArray
  .map((item) => ({sort: Math.random(), value: item}))
  .sort((a, b) => a.sort - b.sort)
  .map((item) => item.value);

export {shuffleArray};
