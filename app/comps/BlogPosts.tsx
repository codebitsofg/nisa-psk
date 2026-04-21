"use client";

import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const posts = [
    {
        title: "Psikolojik Danışma Nedir?",
        image:
            "https://images.unsplash.com/photo-1568140398908-9bd642df4724?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/blog/psikolojik-danisma-nedir",
    },
    {
        title: "Psikolojik Danışmanın Yararları Nelerdir?",
        image:
            "https://images.unsplash.com/photo-1494797262163-102fae527c62?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/blog/psikolojik-danismanin-yararlari",
    },
    {
        title: "Psikolojik Danışma Kimlere Yöneliktir?",
        image:
            "https://images.unsplash.com/photo-1660912354396-c28325d51aa4?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            "https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
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
            "https://images.unsplash.com/photo-1609122881521-8a7ea5c570c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                <h2 className="text-5xl text-center font-serif font-bold text-primary-text ">
                    Blog
                </h2>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full p-14"
                >
                    <CarouselContent className="-ml-4 items-stretch">
                        {posts.map((post) => (
                            <CarouselItem
                                key={post.title}
                                className="pl-4 md:basis-1/2 lg:basis-1/3 h-full"
                            >
                                <Link
                                    href={post.href}
                                    className="flex h-full flex-col bg-white overflow-hidden  hover:-translate-y-1 transition duration-200"
                                >
                                    <div className="aspect-4/3 w-full overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6 mt-auto min-h-[110px] flex items-center justify-center">
                                        <h3 className="text-2xl font-bold text-center font-serif text-primary-text leading-snug">
                                            {post.title}
                                        </h3>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className=" hover:bg-primary-text hover:text-white cursor-pointer h-14 w-14" />
                    <CarouselNext className=" hover:bg-primary-text hover:text-white cursor-pointer h-14 w-14  " />
                </Carousel>
            </div>
        </section>
    );
};

export default BlogPosts;