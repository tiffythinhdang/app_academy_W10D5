const uniqueId = () => {
  return new Date().getTime();
};

window.uniqueId = uniqueId;

export { uniqueId };