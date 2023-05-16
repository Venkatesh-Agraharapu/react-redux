export const COUNT_INCREMENT = "COUNT_INCREMENT";
export const COUNT_DECREMENT = "COUNT_DECREMENT";

export const countIncrement = () => {
  return {
    type: COUNT_INCREMENT,
  };
};

export const countDecrement = () => {
  return {
    type: COUNT_DECREMENT,
  };
};
