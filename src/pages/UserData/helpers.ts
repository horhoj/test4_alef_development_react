export const getChildrenMaxId = (arr: { id: number }[]): number =>
  arr.reduce((prev, child) => (child.id > prev ? child.id : prev), 0);
