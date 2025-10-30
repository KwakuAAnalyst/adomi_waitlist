import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Types for TypeScript
export interface WaitlistEntry {
  id?: number
  email: string
  reason: string
  created_at?: string
  updated_at?: string
  metadata?: Record<string, any>
  is_active?: boolean
}

export interface WaitlistResponse {
  data: WaitlistEntry | null
  error: string | null
}
