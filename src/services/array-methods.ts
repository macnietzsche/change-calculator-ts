export const cartesian = (...allEntries: number[][]): number[][] => {
  return allEntries.reduce<number[][]>(
    (results, entries) =>
      results
        .map((result) => entries.map((entry) => [...result, entry]))
        .reduce((subResults, result) => [...subResults, ...result], []),
    [[]]
  );
};
