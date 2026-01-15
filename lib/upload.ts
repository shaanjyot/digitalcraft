export async function uploadCoverImage(file: File): Promise<string> {
    const { supabase } = await import('@/lib/supabaseClient'); // Dynamic import to avoid SSR issues if any

    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}-${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    // Upload to bucket
    const { error: uploadError } = await supabase.storage
        .from('blog-covers')
        .upload(filePath, file);

    if (uploadError) {
        throw uploadError;
    }

    // Get public URL
    const { data } = supabase.storage
        .from('blog-covers')
        .getPublicUrl(filePath);

    return data.publicUrl;
}

