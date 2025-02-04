import { Habit, HabitCompletion } from "@prisma/client"

export type HabitWithCompletions = Habit & {
  completions: HabitCompletion[]
}

export async function getHabits(): Promise<HabitWithCompletions[]> {
  const response = await fetch("/api/habits")
  if (!response.ok) throw new Error("Failed to fetch habits")
  return response.json()
}

export async function getHabit(id: string): Promise<HabitWithCompletions> {
  const response = await fetch(`/api/habits/${id}`)
  if (!response.ok) throw new Error("Failed to fetch habit")
  return response.json()
}

export async function createHabit(data: {
  title: string
  description?: string
  frequency: string
}): Promise<Habit> {
  const response = await fetch("/api/habits", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error("Failed to create habit")
  return response.json()
}

export async function updateHabit(
  id: string,
  data: {
    title: string
    description?: string
    frequency: string
  }
): Promise<Habit> {
  const response = await fetch(`/api/habits/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error("Failed to update habit")
  return response.json()
}

export async function deleteHabit(id: string): Promise<void> {
  const response = await fetch(`/api/habits/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) throw new Error("Failed to delete habit")
}

export async function completeHabit(id: string): Promise<HabitCompletion> {
  const response = await fetch(`/api/habits/${id}/complete`, {
    method: "POST",
  })
  if (!response.ok) throw new Error("Failed to complete habit")
  return response.json()
}