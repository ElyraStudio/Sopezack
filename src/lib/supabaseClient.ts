import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://nahjozrtnchqjtxapwta.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5haGpvenJ0bmNocWp0eGFwd3RhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0NDY2NDgsImV4cCI6MjA5OTAyMjY0OH0.oYMdG-F1PEXf1InctoG3uJT6XYmzYLtjexgCumSogaU"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)