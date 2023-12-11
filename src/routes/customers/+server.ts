import { supabase } from '../../lib/supabaseClient.js';
// import type { RequestHandler } from '@sveltejs/kit';

export async function GET() {
    const { data, error } = await supabase.from('customers').select('*');
    if (error) {
        return {
            status: 500,
            body: error.message
        };
    }
    return new Response(JSON.stringify(data), {
        headers: {
            'content-type': 'application/json'
        }
    });
};
