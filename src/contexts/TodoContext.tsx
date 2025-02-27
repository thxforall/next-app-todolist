'use client';

import { createContext, useContext, useState, useCallback, useRef, ReactNode } from 'react';
import { Todo } from '@/types/todo';

interface TodoContextType {
  filter: string;
  setFilter: (filter: string) => void;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  fetchTodos: (userId: number) => Promise<void>;
  addTodo: (content: string, userId: number) => Promise<void>;
  toggleTodo: (id: number, completed: boolean) => Promise<void>;
  updateTodo: (id: number, content: string) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const lastFetchRef = useRef<string>('');

  const fetchTodos = useCallback(async (userId: number) => {
    const queryKey = `${userId}-${filter}`;
    if (lastFetchRef.current === queryKey) {
      return;
    }

    try {
      const params = new URLSearchParams({ userId: String(userId) });
      if (filter) params.append('completed', filter);

      const response = await fetch(`/api/todos?${params}`);
      const data = await response.json();
      if (data.success) {
        setTodos(data.todos);
        lastFetchRef.current = queryKey;
      }
    } catch (error) {
      console.error('Failed to fetch todos:', error);
    }
  }, [filter]);

  const addTodo = useCallback(async (content: string, userId: number) => {
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          userId,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setTodos(prev => [data.todo, ...prev]);
      }
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
  }, []);

  const toggleTodo = useCallback(async (id: number, completed: boolean) => {
    try {
      const response = await fetch(`/api/todos?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !completed }),
      });
      const data = await response.json();
      if (data.success) {
        setTodos(prev => 
          prev.map(todo => 
            todo.id === id ? { ...todo, completed: !completed } : todo
          )
        );
      }
    } catch (error) {
      console.error('Failed to toggle todo:', error);
    }
  }, []);

  const updateTodo = useCallback(async (id: number, content: string) => {
    try {
      const response = await fetch(`/api/todos?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });
      const data = await response.json();
      if (data.success) {
        setTodos(prev => 
          prev.map(todo => 
            todo.id === id ? { ...todo, content } : todo
          )
        );
      }
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  }, []);

  const deleteTodo = useCallback(async (id: number) => {
    try {
      const response = await fetch(`/api/todos?id=${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setTodos(prev => prev.filter(todo => todo.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  }, []);

  return (
    <TodoContext.Provider
      value={{
        filter,
        setFilter,
        todos,
        setTodos,
        fetchTodos,
        addTodo,
        toggleTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
} 