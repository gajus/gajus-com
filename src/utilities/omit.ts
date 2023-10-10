type Omit = <T extends object, K extends [...Array<keyof T>]>(
  object: T,
  ...keys: K
) => {
  [K2 in Exclude<keyof T, K[number]>]: T[K2];
};

export const omit: Omit = (object, ...keys) => {
  const returnValue = {} as {
    [K in keyof typeof object]: (typeof object)[K];
  };
  let key: keyof typeof object;

  for (key in object) {
    if (!keys.includes(key)) {
      returnValue[key] = object[key];
    }
  }

  return returnValue;
};
