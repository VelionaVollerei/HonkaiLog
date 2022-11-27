export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Materials: {
        Row: {
          name: string
          createdAt: string | null
          updatedAt: string | null
          id: string
        }
        Insert: {
          name?: string
          createdAt?: string | null
          updatedAt?: string | null
          id?: string
        }
        Update: {
          name?: string
          createdAt?: string | null
          updatedAt?: string | null
          id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

