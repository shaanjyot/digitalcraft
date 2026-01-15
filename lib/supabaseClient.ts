import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase environment variables are missing. Please check your .env.local file.');
}

// Create a single supabase client for interacting with your database

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: true }, // IMPORTANT: keeps JWT with requests
});