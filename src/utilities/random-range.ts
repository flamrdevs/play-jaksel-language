const randomRange = (min: number = 0, max: number = min + 10) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default randomRange;
