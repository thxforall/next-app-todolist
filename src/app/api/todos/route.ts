import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET /api/todos - 할 일 목록 조회
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    const completed = searchParams.get('completed');
    const category = searchParams.get('category');
    const priority = searchParams.get('priority');

    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'User ID is required' },
        { status: 400 }
      );
    }

    // 필터 조건 구성
    const where: any = {
      userId: Number(userId),
    };

    if (completed !== null) {
      where.completed = completed === 'true';
    }

    if (category) {
      where.category = category;
    }

    if (priority) {
      where.priority = priority;
    }

    const todos = await prisma.todo.findMany({
      where,
      orderBy: [
        { priority: 'desc' },
        { dueDate: 'asc' },
        { createdAt: 'desc' }
      ],
    });

    return NextResponse.json({ success: true, todos }, { status: 200 });
  } catch (error) {
    console.error('Get todos error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to get todos' },
      { status: 500 }
    );
  }
}

// POST /api/todos - 할 일 생성
export async function POST(req: NextRequest) {
  try {
    const { content, userId, category, priority, dueDate } = await req.json();

    if (!content || !userId) {
      return NextResponse.json(
        { success: false, message: 'Content and userId are required' },
        { status: 400 }
      );
    }

    const todo = await prisma.todo.create({
      data: {
        content,
        userId: Number(userId),
        category,
        priority: priority || 'MEDIUM',
        dueDate: dueDate ? new Date(dueDate) : null,
      },
    });

    return NextResponse.json({ success: true, todo }, { status: 201 });
  } catch (error) {
    console.error('Create todo error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create todo' },
      { status: 500 }
    );
  }
}

// PUT /api/todos - 할 일 수정
export async function PUT(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Todo ID is required' },
        { status: 400 }
      );
    }

    const updates = await req.json();
    
    // dueDate가 문자열로 오면 Date 객체로 변환
    if (updates.dueDate) {
      updates.dueDate = new Date(updates.dueDate);
    }

    const todo = await prisma.todo.update({
      where: { id: Number(id) },
      data: updates,
    });

    return NextResponse.json({ success: true, todo }, { status: 200 });
  } catch (error) {
    console.error('Update todo error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update todo' },
      { status: 500 }
    );
  }
}

// DELETE /api/todos - 할 일 삭제
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Todo ID is required' },
        { status: 400 }
      );
    }

    await prisma.todo.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { success: true, message: 'Todo deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete todo error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete todo' },
      { status: 500 }
    );
  }
}
