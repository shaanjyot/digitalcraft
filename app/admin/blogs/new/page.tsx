"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { HiArrowLeft, HiCloudUpload } from "react-icons/hi";

export default function NewBlogPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Form state (matching UI of previous page)
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("Web Development");
    const [readTime, setReadTime] = useState("5 min read");
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    // Initial Auth Check
    useEffect(() => {
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession();
            if (!data.session) {
                router.replace('/admin/login');
            } else {
                setIsAuthenticated(true);
            }
        };
        checkSession();
    }, [router]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    const uploadImage = async (file: File) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('blog-covers')
            .upload(filePath, file);

        if (uploadError) throw new Error(`Image upload failed: ${uploadError.message}`);

        const { data } = supabase.storage
            .from('blog-covers')
            .getPublicUrl(filePath);

        return data.publicUrl;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Double check auth
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                alert('You must log in first.');
                router.push('/admin/login');
                return;
            }

            if (!file) {
                throw new Error("Please select a cover image.");
            }

            // 1. Upload
            const cover_image = await uploadImage(file);

            // 2. Generate Slug
            const slug = title
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '') + '-' + Date.now();

            // 3. Insert
            const { error: insertError } = await supabase
                .from("blogs")
                .insert([
                    {
                        title,
                        slug,
                        excerpt,
                        content,
                        cover_image,
                        // Attempting to send category/read_time, but strictly speaking 
                        // if columns don't exist, this might error. However, user wanted UI like picture.
                        // I will assume for now columns MIGHT exist or user will add them.
                        // If previous code commented them out, I should likely be careful.
                        // I'll leave them commented out in the actual insert payload to avoid 
                        // breaking the app if schema is strict, UNLESS user updated schema.
                        // Given "don't change any code or logic from earlier", 
                        // I'll follow the logic of Step 266 (create page) which commented them out.

                        // category,
                        // read_time: readTime
                    }
                ]);

            if (insertError) {
                if (insertError.code === '42501') throw new Error("Permission denied: You do not have access to create posts.");
                throw insertError;
            }

            router.push("/admin/blogs");
            router.refresh();

        } catch (err: any) {
            console.error("Create error:", err);
            alert(err.message || "Failed to create blog");
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) return null;

    return (
        <main className="min-h-screen pt-24 pb-12 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <Link
                    href="/admin/blogs"
                    className="inline-flex items-center text-sm font-medium text-[#5b6f73]/60 hover:text-[#3eb4d6] mb-6 transition-colors"
                >
                    <HiArrowLeft className="mr-2 w-4 h-4" />
                    Back to Blogs
                </Link>

                <div className="premium-card bg-white p-8 rounded-2xl">
                    <h1 className="text-2xl font-display font-bold text-[#5b6f73] mb-8">
                        Create New <span className="text-[#3eb4d6]">Blog Post</span>
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-bold text-[#5b6f73] mb-2">Title</label>
                            <input
                                name="title"
                                type="text"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#3eb4d6] focus:ring-2 focus:ring-[#3eb4d6]/20 outline-none transition-all text-[#5b6f73]"
                                placeholder="Enter blog title"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Category */}
                            <div>
                                <label className="block text-sm font-bold text-[#5b6f73] mb-2">Category</label>
                                <select
                                    name="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#3eb4d6] focus:ring-2 focus:ring-[#3eb4d6]/20 outline-none transition-all text-[#5b6f73] bg-white"
                                >
                                    <option value="Web Development">Web Development</option>
                                    <option value="Branding">Branding</option>
                                    <option value="Digital Strategy">Digital Strategy</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="SEO">SEO</option>
                                </select>
                            </div>

                            {/* Read Time */}
                            <div>
                                <label className="block text-sm font-bold text-[#5b6f73] mb-2">Read Time</label>
                                <input
                                    name="readTime"
                                    type="text"
                                    value={readTime}
                                    onChange={(e) => setReadTime(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#3eb4d6] focus:ring-2 focus:ring-[#3eb4d6]/20 outline-none transition-all text-[#5b6f73]"
                                    placeholder="e.g. 5 min read"
                                />
                            </div>
                        </div>

                        {/* File Upload */}
                        <div>
                            <label className="block text-sm font-bold text-[#5b6f73] mb-2">Cover Image</label>
                            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#3eb4d6] transition-colors cursor-pointer relative bg-gray-50">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                {preview ? (
                                    <div className="relative h-48 w-full rounded-lg overflow-hidden">
                                        <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-4">
                                        <HiCloudUpload className="w-10 h-10 text-[#3eb4d6] mb-2" />
                                        <p className="text-sm text-gray-500 font-medium">Click to upload or drag and drop</p>
                                        <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG or GIF (max 800x400px recommended)</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Excerpt */}
                        <div>
                            <label className="block text-sm font-bold text-[#5b6f73] mb-2">Excerpt (Short Description)</label>
                            <textarea
                                name="excerpt"
                                rows={2}
                                required
                                value={excerpt}
                                onChange={(e) => setExcerpt(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#3eb4d6] focus:ring-2 focus:ring-[#3eb4d6]/20 outline-none transition-all text-[#5b6f73]"
                                placeholder="Brief summary of the post..."
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <label className="block text-sm font-bold text-[#5b6f73] mb-2">Content</label>
                            <textarea
                                name="content"
                                rows={10}
                                required
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#3eb4d6] focus:ring-2 focus:ring-[#3eb4d6]/20 outline-none transition-all text-[#5b6f73]"
                                placeholder="Write your blog content here..."
                            />
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-8 py-3.5 bg-[#3eb4d6] hover:bg-[#99f200] text-white hover:text-[#5b6f73] font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#3eb4d6]/20 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? "Publishing..." : "Publish Post"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
