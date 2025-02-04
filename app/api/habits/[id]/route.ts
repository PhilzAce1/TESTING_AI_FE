import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  const habit = await prisma.habit.findUnique({
    where: {
      id: params.id,
      userId: session.user.id,
    },
    include: {
      completions: {
        orderBy: {
          completedAt: 'desc'
        },
      },
    },
  })

  if (!habit) {
    return new NextResponse("Not Found", { status: 404 })
  }

  return NextResponse.json(habit)
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  const json = await req.json()
  const { title, description, frequency } = json

  const habit = await prisma.habit.update({
    where: {
      id: params.id,
      userId: session.user.id,
    },
    data: {
      title,
      description,
      frequency,
    },
  })

  return NextResponse.json(habit)
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  await prisma.habit.delete({
    where: {
      id: params.id,
      userId: session.user.id,
    },
  })

  return new NextResponse(null, { status: 204 })
}