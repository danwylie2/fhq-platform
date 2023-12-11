import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://qzxksdytmriizgxjaqnv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6eGtzZHl0bXJpaXpneGphcW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5Mjk0NzUsImV4cCI6MjAxNTUwNTQ3NX0.BXLWyEqC_9Z4RhsTqAMstj4CjPxyOHKmDn0bPwfrUyc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);