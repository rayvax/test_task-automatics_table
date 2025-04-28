import { SortDirections } from '@model/sort';

export const sortDirectionToArrowMap = new Map<SortDirections, string>([
  [SortDirections.ASC, '↑'],
  [SortDirections.DESC, '↓'],
  [SortDirections.None, ''],
]);

//Паттерн стратегия
export const sortStrategyMap = new Map<SortDirections, (index: number, a: string[], b: string[]) => number>([
  [SortDirections.ASC, (index, a, b) => (a[index] > b[index] ? -1 : 1)],
  [SortDirections.DESC, (index, a, b) => (b[index] > a[index] ? -1 : 1)],
]);
