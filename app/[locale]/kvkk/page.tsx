import { getTranslations } from "next-intl/server";

export default async function KVKKPage() {
    const t = await getTranslations("kvkk_page");

    return (
        <main className="min-h-screen bg-white py-24 mt-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 border-b border-gray-100 pb-8 text-left">
                    <h1 className="text-2xl sm:text-4xl font-serif font-bold text-primary-text mb-2 uppercase tracking-tight break-words leading-tight">
                        {t("title")}
                    </h1>
                    <p className="text-lg sm:text-xl text-accent font-medium italic break-words">{t("subtitle")}</p>
                </header>
                
                <div className="space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
                    <section className="bg-gray-50/50 p-6 sm:p-8 rounded-2xl border border-gray-100">
                        {t("intro").split('\n\n').map((p, i) => (
                            <p key={i} className={i > 0 ? "mt-4" : ""}>{p}</p>
                        ))}
                    </section>
                    
                    <div className="grid gap-12">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <section key={num} className="scroll-mt-32">
                                <h2 className="text-lg sm:text-xl font-serif font-bold text-accent mb-4 flex items-start gap-3">
                                    <span className="w-8 h-8 shrink-0 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold font-sans mt-0.5">
                                        {num}
                                    </span>
                                    <span className="break-words leading-tight">
                                        {t(`section${num}_title`)}
                                    </span>
                                </h2>
                                <div className="pl-11 whitespace-pre-line text-gray-600">
                                    {t(`section${num}_content`)}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
                
                <div className="mt-20 pt-8 border-t border-gray-100 text-center text-sm text-gray-400 italic">
                    {t("last_update")}
                </div>
            </div>
        </main>
    );
}
