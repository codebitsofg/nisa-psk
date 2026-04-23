import { Mail, MapPin } from 'lucide-react';
import { Link } from '@/i18n/routing';
import React from 'react'
import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations("footer");
    return (
        <footer id="iletisim" className="pt-4 md:pt-16 bg-white  pb-8 px-4 sm:px-6 lg:px-8 mt-14  text-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="flex justify-center md:justify-start">
                        <img src="/logo.png" alt="NA Psikolojik Danışmanlık ve Eğitim" className='h-32 md:h-44 w-auto' />
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold text-primary-text mb-4">{t("contact_title")}</h4>
                        <div className="space-y-3 text-primary-text/70 flex flex-col items-center md:items-start">
                            <a href="mailto:psk.nisanurazer@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors justify-center md:justify-start">
                                <Mail className="w-5 h-5 text-primary" />
                                <span>psk.nisanurazer@gmail.com</span>
                            </a>
                            <p className="flex items-center gap-3 justify-center md:justify-start">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span>{t("location_value")}</span>
                            </p>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold text-primary-text mb-4">{t("hours_title")}</h4>
                        <div className="text-primary-text/70 space-y-1">
                            <p>{t("days")}</p>
                            <p>{t("time")}</p>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-100 flex justify-between md:flex-row flex-col items-center space-y-4 md:space-y-0">
                    <div className=' text-center'>
                        <p className="text-primary-text/70 text-sm">
                            {t("rights", { year: new Date().getFullYear() })}
                        </p>
                        <p className="text-primary-text/70 text-sm ">
                            {t("author")}
                        </p>
                    </div>

                    <Link
                        href="/kvkk"
                        className="text-primary-text/70 text-sm hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4 mb-2 font-medium"
                    >
                        {t("kvkk")}
                    </Link>
                </div>
            </div>
        </footer >
    )
}

export default Footer