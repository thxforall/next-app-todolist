import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        image: true,
      },
    });
    return NextResponse.json({ success: true, users }, { status: 200 });
  } catch (error) {
    console.error('Get users error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to get users' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!req.body) {
      return NextResponse.json(
        { success: false, message: 'Request body is required' },
        { status: 400 }
      );
    }

    const body = await req.json();
    console.log('Request body:', body);

    const { name, email, password } = body;

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'User already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    console.log('Creating user with data:', {
      name: name || '',
      email,
      hashedPassword: '***'
    });

    // Create user
    const user = await prisma.user.create({
      data: {
        name: name || '',
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        image: true,
      },
    });

    return NextResponse.json({ success: true, user }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Failed to create user' },
      { status: 500 }
    );
  }
}
