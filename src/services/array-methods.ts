export const cartesian = (...a: any[]) =>
  a.reduce((a, b) => {
    return a.flatMap((d: any) => {
      return b.map((e: any) => [d, e].flat());
    });
  });
