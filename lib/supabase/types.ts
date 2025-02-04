export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      habits: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string | null
          frequency: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description?: string | null
          frequency?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string | null
          frequency?: string
          created_at?: string
          updated_at?: string
        }
      }
      habit_completions: {
        Row: {
          id: string
          habit_id: string
          completed_at: string
          created_at: string
        }
        Insert: {
          id?: string
          habit_id: string
          completed_at?: string
          created_at?: string
        }
        Update: {
          id?: string
          habit_id?: string
          completed_at?: string
          created_at?: string
        }
      }
    }
  }
}