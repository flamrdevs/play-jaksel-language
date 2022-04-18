const delay = async (ms: number = 3000) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
};

export default delay;
