'use client';

import { useState, useEffect } from 'react';
import { useTodo } from '@/contexts/TodoContext';
import { Todo } from '@prisma/client';
interface TodoListProps {
  userId: number;
}

export default function TodoList({ userId }: TodoListProps) {
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [editContent, setEditContent] = useState('');
  const { todos, fetchTodos, addTodo, toggleTodo, updateTodo, deleteTodo } =
    useTodo();

  // 할 일 추가
  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    await addTodo(newTodo, userId);
    setNewTodo('');
  };

  // 수정 시작
  const startEditing = (todo: Todo) => {
    setEditingTodo(todo);
    setEditContent(todo.content);
  };

  // 수정 취소
  const cancelEditing = () => {
    setEditingTodo(null);
    setEditContent('');
  };

  // 수정 완료
  const handleUpdateTodo = async (id: number) => {
    await updateTodo(id, editContent);
    setEditingTodo(null);
  };

  useEffect(() => {
    fetchTodos(userId);
  }, [userId, fetchTodos]);

  return (
    <main className="flex-1 container mx-auto max-w-3xl px-4 py-6">
      {/* 입력 폼 */}
      <form onSubmit={handleAddTodo} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="새로운 할 일을 입력하세요"
            className="flex-1 px-4 py-3 text-base rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            required
          />
          <button type="submit" className="todo-button shadow-sm">
            추가
          </button>
        </div>
      </form>

      {/* 할 일 목록 */}
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="group flex items-center gap-4 p-4 rounded-lg todo-card shadow-sm transition-shadow hover:shadow-md"
            tabIndex={0}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id, todo.completed)}
              className="w-5 h-5 rounded border-gray-300 text-blue-500"
            />
            {editingTodo?.id === todo.id ? (
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="flex-1 px-3 py-1.5 text-base rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                  autoFocus
                />
                <button
                  onClick={() => handleUpdateTodo(todo.id)}
                  className="px-3 py-1.5 text-sm text-white bg-blue-500 rounded shadow-sm hover:bg-blue-600 transition-colors"
                >
                  저장
                </button>
                <button
                  onClick={cancelEditing}
                  className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  취소
                </button>
              </div>
            ) : (
              <p
                className={`flex-1 text-base ${
                  todo.completed
                    ? 'line-through text-gray-400'
                    : 'text-gray-900 dark:text-gray-100'
                }`}
                onClick={() => !todo.completed && startEditing(todo as any)}
                style={{ cursor: todo.completed ? 'default' : 'pointer' }}
              >
                {todo.content}
              </p>
            )}
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
