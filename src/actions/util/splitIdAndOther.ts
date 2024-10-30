const splitKeyAndOther = <T extends object, K extends keyof T>(
  key: K,
  object: T
): [T[K], Omit<T, K>] => {
  const keyValue = object[key];
  const minusKeyObj = Object.keys(object)
    .filter((newKey) => newKey !== key)
    .reduce(
      (acc, cur) => {
        return { ...acc, [cur]: object[cur as keyof T] };
      },
      {} as Omit<T, K>
    );

  return [keyValue, minusKeyObj];
};

export default splitKeyAndOther;
