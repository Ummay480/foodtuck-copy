import {createclient} from "productData/supabase"

export const supabase = createclient{
    process.env.NEXT_PUBLIC_SUPABASE_URL
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KE!
}
