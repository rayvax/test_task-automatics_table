// export const sortDirection = {
//   ASC: 'asc',
//   DESC: 'desc',
// } as const;

// export type SortDirection = (typeof sortDirection)[keyof typeof sortDirection];
export enum SortDirections {
  ASC = 'asc',
  DESC = 'desc',
  None = 'none',
}

export class Sort {
  constructor(public column: number, public direction: SortDirections = SortDirections.ASC) {}

  next(index: number): Sort {
    //паттерн State
    switch (this.direction) {
      case SortDirections.ASC:
        return new Sort(index, SortDirections.DESC);

      case SortDirections.DESC:
        return new Sort(index, SortDirections.None);

      case SortDirections.None:
        return new Sort(index);
    }
  }
}
