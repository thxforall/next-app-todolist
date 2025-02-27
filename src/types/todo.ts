export type Priority = 'LOW' | 'MEDIUM' | 'HIGH';

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
  priority: Priority;
  category?: string;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
} 