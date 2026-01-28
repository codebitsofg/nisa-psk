import Link from "next/link";

const posts = [
    {
        title: "Psikolojik Danışma Nedir?",
        image:
            "https://images.unsplash.com/photo-1616740793717-0aca29b92221?q=80&w=979&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/blog/psikolojik-danisma-nedir",
    },
    {
        title: "Psikolojik Danışmanın Yararları Nelerdir?",
        image:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        href: "/blog/psikolojik-danismanin-yararlari",
    },
    {
        title: "Psikolojik Danışma Kimlere Yöneliktir?",
        image:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        href: "/blog/psikolojik-danisma-kimlere-yoneliktir",
    },
    {
        title: "Psikoeğitim Nedir?",
        image:
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        href: "/blog/psikoegitim-nedir",
    },
    {
        title: "Psikoeğitim Hangi Yaş Grupları için Uygundur?",
        image:
            "https://images.unsplash.com/photo-1450883874496-0e8ba9efer93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        href: "/blog/psikoegitim-yas-gruplari",
    },
    {
        title: "Bilişsel Davranışçı Terapi (BDT) Nedir?",
        image:
            "https://images.unsplash.com/photo-1461468611824-46457c0e11fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        href: "/blog/bdt-nedir",
    },
    {
        title: "BDT Terapide Nasıl Kullanılır?",
        image:
            "https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        href: "/blog/bdt-terapide-nasil-kullanilir",
    },
    {
        title: "Kariyer Danışmanlığı Nedir?",
        image:
            "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        href: "/blog/kariyer-danismanligi-nedir",
    },
];




const BlogPosts = () => {
    return (
        <section id="blog" className="py-18 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl text-center font-serif font-bold text-primary-text mb-12">
                    Blog
                </h2>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.title}
                            href={post.href}
                            className="bg-white  overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition duration-200 block"
                        >
                            <div className="aspect-4/3 w-full overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-center font-serif text-primary-text leading-snug">
                                    {post.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPosts;