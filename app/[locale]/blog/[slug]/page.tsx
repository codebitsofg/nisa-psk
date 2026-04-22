import {Link} from '@/i18n/routing';
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { blogPostsTr, blogPostsDe } from "@/i18n/blog-data";

// Removed static allPostsKeys definitions to derive them dynamically from blog-data


export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    const t = await getTranslations("blog");
    
    // Choose dataset depending on locale
    const blogPosts = locale === "de" ? blogPostsDe : blogPostsTr;
    const allPostsKeys = Object.keys(blogPosts);
    const post = blogPosts[slug as keyof typeof blogPosts];

    if (!post) {
        // If not found in current locale, check if it's a slug from the other locale
        const otherBlogPosts = locale === "de" ? blogPostsTr : blogPostsDe;
        const otherPostKey = Object.keys(otherBlogPosts).find(key => key === slug);
        
        if (otherPostKey) {
            // Find the index in the other locale and redirect to the corresponding post in current locale
            const otherKeys = Object.keys(otherBlogPosts);
            const index = otherKeys.indexOf(otherPostKey);
            if (index !== -1) {
                const targetSlug = allPostsKeys[index];
                if (targetSlug) {
                    const { redirect } = await import('@/i18n/routing');
                    redirect({ href: `/blog/${targetSlug}`, locale } as any);
                }
            }
        }
        notFound();
    }

    // Find current post index for previous/next navigation
    const currentIndex = allPostsKeys.findIndex((k) => k === slug);
    const previousPostSlug = currentIndex > 0 ? allPostsKeys[currentIndex - 1] : null;

    return (
        <main className="min-h-screen bg-white py-12 mt-30 px-4 sm:px-6 lg:px-8">

            <img src="https://images.unsplash.com/photo-1494797262163-102fae527c62?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Background" className="w-full h-[60vh] object-cover max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-9" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <article className="lg:col-span-2">
                        {/* Header */}
                        <div className="mb-8 space-y-4">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    <span>{post.category}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        />
                                    </svg>
                                    <span>{post.comments}</span>
                                </div>
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-text leading-tight">
                                {post.title}
                            </h1>
                        </div>

                        {/* Content */}
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                            {post.content.map((item, index) => {
                                if (item.type === "paragraph") {
                                    return (
                                        <p key={index} className="text-sm sm:text-base leading-7">
                                            {item.text}
                                        </p>
                                    );
                                }
                                if (item.type === "heading") {
                                    return (
                                        <h2
                                            key={index}
                                            className="text-xl sm:text-2xl font-serif font-bold text-primary-text mt-8 mb-4"
                                        >
                                            {item.text}
                                        </h2>
                                    );
                                }
                                if (item.type === "list") {
                                    return (
                                        <ul
                                            key={index}
                                            className="list-disc pl-6 space-y-2 text-sm sm:text-base leading-7"
                                        >
                                            {item.items.map((listItem: string, listIndex: number) => (
                                                <li key={listIndex}>{listItem}</li>
                                            ))}
                                        </ul>
                                    );
                                }
                                return null;
                            })}
                        </div>

                        {/* Previous Post Navigation */}
                        {previousPostSlug && (
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <Link
                                    href={`/blog/${previousPostSlug}` as any}
                                    className="group flex items-center gap-2 text-accent hover:text-primary transition-colors"
                                >
                                    <span className="text-xs sm:text-sm font-semibold">← {t("previous")}</span>
                                    <span className="text-xs sm:text-sm font-semibold group-hover:underline line-clamp-1">
                                        {t(`posts.${previousPostSlug}` as any)}
                                    </span>
                                </Link>
                            </div>
                        )}
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 mt-12 lg:mt-0">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
                            <h3 className="text-xl font-serif font-bold text-accent mb-6">
                                {t("all_posts")}
                            </h3>
                            <ul className="space-y-3">
                                {allPostsKeys.map((pKey) => (
                                    <li key={pKey}>
                                        <Link
                                            href={`/blog/${pKey}` as any}
                                            className={`block text-sm leading-relaxed transition-colors ${pKey === slug
                                                ? "text-accent font-semibold"
                                                : "text-gray-700 hover:text-primary"
                                                }`}
                                        >
                                            {t(`posts.${pKey}` as any)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
