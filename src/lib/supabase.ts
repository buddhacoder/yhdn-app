import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Fallback-safe: don't crash if env vars are missing
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

export const isSupabaseConfigured = (): boolean => {
  return supabase !== null
}

// Generic safe query wrapper
export async function safeQuery<T>(
  queryFn: (client: SupabaseClient) => Promise<{ data: T | null; error: any }>,
  fallback: T
): Promise<T> {
  if (!supabase) return fallback
  try {
    const { data, error } = await queryFn(supabase)
    if (error) {
      console.warn('Supabase query error:', error.message)
      return fallback
    }
    return data ?? fallback
  } catch (err) {
    console.warn('Supabase connection error:', err)
    return fallback
  }
}
