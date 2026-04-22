import {Link} from '@/i18n/routing';
import React from 'react'
import {useTranslations} from 'next-intl';

const Navigation = () => {
    const t = useTranslations("navigation");

    return (
        <nav className="fixed top-0 w-full bg-white  border-b border-gray-100 z-50 ">
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center ">
                    <div className="flex h-full items-center gap-4">
                        <Link href="/" className="text-lg font-bold text-primary-text hover:text-accent transition-colors font-serif-rewrite">
                            <img src="/logo.png" alt="NA Psikolojik Danışmanlık ve Eğitim" className=' w-40 h-auto' />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/#hakkimda" className="text-primary-text hover:text-accent transition-colors font-bold font-serif-rewrite">{t("about")}</Link>
                        <Link href="/#hizmetler" className="text-primary-text hover:text-accent transition-colors font-bold font-serif-rewrite">{t("services")}</Link>
                        <Link href="/#blog" className="text-primary-text hover:text-accent transition-colors font-bold font-serif-rewrite">{t("blog")}</Link>
                        <Link href="/#iletisim" className="text-primary-text hover:text-accent transition-colors font-bold font-serif-rewrite">{t("contact")}</Link>
                        
                        <div className="flex space-x-2 border-l pl-4 border-gray-200">
                            <Link href="/" locale="tr" className="text-sm font-semibold text-gray-500 hover:text-accent">TR</Link>
                            <span className="text-gray-300">|</span>
                            <Link href="/" locale="de" className="text-sm font-semibold text-gray-500 hover:text-accent">DE</Link>
                        </div>
                        
                        <Link href="/#randevu" className="bg-accent text-white px-8 py-2 rounded-lg hover:bg-primary transition-colors font-semibold text-md text-center">
                            {t("appointment")}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation