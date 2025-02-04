import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  const habits = await prisma.habit.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      completions: {
        orderBy: {
          completedAt: 'desc'
        },
        take: 30, // Last 30 days of completions
      },
    },
    orderBy: {
      createdAt: 'desc'
    },
  })

  return NextResponse.json(habits)
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  const json = await req.json()
  const { title, description, frequency } = json

  const habit = await prisma.habit.create({
    data: {
      title,
      description,
      frequency,
      userId: session.user.id,
    },
  })

  return NextResponse.json(habit)
}