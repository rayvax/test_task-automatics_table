export const sortDirection = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

export type SortDirection = (typeof sortDirection)[keyof typeof sortDirection];
