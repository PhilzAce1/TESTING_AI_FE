import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"

export async function POST(
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
  })

  if (!habit) {
    return new NextResponse("Not Found", { status: 404 })
  }

  const completion = await prisma.habitCompletion.create({
    data: {
      habitId: params.id,
    },
  })

  return NextResponse.json(completion)
}