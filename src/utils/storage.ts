import { createClient } from '@supabase/supabase-js'
import { StorageClient } from '@supabase/storage-js';

const url = process.env.URL_SUPABASE ?? 'https://qnwwrugscogxhsklwopi.supabase.co/storage/v1';
const anon = process.env.ANON_SUPABASE ?? '';
const service = process.env.SERVICE_KEY ?? '';
// Create a single supabase client for interacting with your database
export const supabase = createClient(url, anon)
export const storage = new StorageClient(url, {
  apikey: service,
  Authorization: `Bearer ${service}`,
});