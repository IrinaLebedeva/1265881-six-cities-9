const getStringHashCode = (sourceString: string): number => {
  let hash = 0;
  for (let i = 0; i < sourceString.length; i++) {
    const character = sourceString.charCodeAt(i);
    hash = ((hash << 5) - hash) + character;
    hash = hash & hash;
  }
  return hash;
};

export {getStringHashCode};
