"use client";

import { Link } from '@/i18n/routing';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations, useLocale } from 'next-intl';

const postsTr = [
    {
        id: "psikolojik-danisma-nedir",
        image:
            "https://images.unsplash.com/photo-1568140398908-9bd642df4724?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/blog/psikolojik-danisma-nedir",
    },
    {
        id: "psikolojik-danismanin-yararlari",
        image:
            "https://images.unsplash.com/photo-1494797262163-102fae527c62?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/blog/psikolojik-danismanin-yararlari",
    },
    {
        id: "psikolojik-danisma-kimlere-yoneliktir",
        image:
            "https://images.unsplash.com/photo-1660912354396-c28325d51aa4?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/blog/psikolojik-danisma-kimlere-yoneliktir",
    },
    {
        id: "psikoegitim-nedir",
        image:
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        href: "/blog/psikoegitim-nedir",
    },
    {
        id: "psikoegitim-yas-gruplari",
        image:
            "https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        href: "/blog/psikoegitim-yas-gruplari",
    },
    {
        id: "bdt-nedir",
        image:
            "https://images.unsplash.com/photo-1461468611824-46457c0e11fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        href: "/blog/bdt-nedir",
    },
    {
        id: "bdt-terapide-nasil-kullanilir",
        image:
            "https://images.unsplash.com/photo-1609122881521-8a7ea5c570c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/blog/bdt-terapide-nasil-kullanilir",
    },
    {
        id: "kariyer-danismanligi-nedir",
        image:
            "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        href: "/blog/kariyer-danismanligi-nedir",
    },
];

const postsDe = [
    {
        id: "was-ist-psychologische-beratung",
        image: "https://images.unsplash.com/photo-1568140398908-9bd642df4724?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/blog/was-ist-psychologische-beratung",
    },
    {
        id: "was-sind-die-vorteile-der-psychologischen-beratung",
        image: "https://images.unsplash.com/photo-1494797262163-102fae527c62?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/blog/was-sind-die-vorteile-der-psychologischen-beratung",
    },
    {
        id: "an-wen-richtet-sich-die-psychologische-beratung",
        image: "https://images.unsplash.com/photo-1660912354396-c28325d51aa4?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/blog/an-wen-richtet-sich-die-psychologische-beratung",
    },
    {
        id: "was-ist-psychoedukation",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        href: "/blog/was-ist-psychoedukation",
    },
    {
        id: "fuer-welche-altersgruppen-ist-psychoedukation-geeignet",
        image: "https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        href: "/blog/fuer-welche-altersgruppen-ist-psychoedukation-geeignet",
    },
    {
        id: "was-ist-kognitive-verhaltenstherapie",
        image: "https://images.unsplash.com/photo-1461468611824-46457c0e11fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        href: "/blog/was-ist-kognitive-verhaltenstherapie",
    },
    {
        id: "wie-wird-die-kvt-in-der-therapie-eingesetzt",
        image: "https://images.unsplash.com/photo-1609122881521-8a7ea5c570c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        href: "/blog/wie-wird-die-kvt-in-der-therapie-eingesetzt",
    },
    {
        id: "was-ist-karriereberatung",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        href: "/blog/was-ist-karriereberatung",
    },
];

const BlogPosts = () => {
    const t = useTranslations("blog");
    const locale = useLocale();
    const posts = locale === "de" ? postsDe : postsTr;

    return (
        <section id="blog" className="pb-6 pt-16 px-4 sm:px-6 lg:px-8 bg-accent">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-5xl text-center font-serif font-bold text-accent-foreground ">
                    {t("title")}
                </h2>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full py-12 px-0 sm:p-14"
                >
                    <CarouselContent className="-ml-4 items-stretch">
                        {posts.map((post) => (
                            <CarouselItem
                                key={post.id}
                                className="pl-4 md:basis-1/2 lg:basis-1/3 h-full"
                            >
                                <Link
                                    href={post.href as any}
                                    className="flex h-full flex-col bg-white overflow-hidden  hover:-translate-y-1 transition duration-200"
                                >
                                    <div className="aspect-4/3 w-full overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={t(`posts.${post.id}` as any)}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6 mt-auto min-h-[110px] flex items-center justify-center">
                                        <h3 className="text-2xl font-bold text-center font-serif text-primary-text leading-snug">
                                            {t(`posts.${post.id}` as any)}
                                        </h3>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex hover:bg-primary-text hover:text-white cursor-pointer h-10 w-10 md:h-14 md:w-14" />
                    <CarouselNext className="hidden sm:flex hover:bg-primary-text hover:text-white cursor-pointer h-10 w-10 md:h-14 md:w-14" />
                </Carousel>
            </div>
        </section>
    );
};

export default BlogPosts;