export interface Todo{
  id: number;
  title: string;
  completed: boolean;
  editing?: boolean;
}

export type FilterType = 'all' | 'active' | 'completed';

