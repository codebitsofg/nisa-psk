import React from 'react'
import {useTranslations} from 'next-intl';

const Footer = () => {
    const t = useTranslations("footer");
    return (
        <footer id="iletisim" className="pt-16  pb-8 px-4 sm:px-6 lg:px-8 mt-14  text-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid  md:grid-cols-3   gap-12 mb-12">
                    <div className="text-left">
                        <img src="/logo.png" alt="NA Psikolojik Danışmanlık ve Eğitim" className='h-16 w-auto' />
                    </div>
                    <div className="text-left">
                        <h4 className="text-lg font-semibold text-primary-text mb-4">{t("contact_title")}</h4>
                        <div className="space-y-2 text-primary-text/70">
                            <p>
                                <span className="font-semibold">{t("phone")}</span> +90 555 123 45 67
                            </p>
                            <p>
                                <span className="font-semibold">{t("email")}</span> info@napsikolojik.com
                            </p>
                            <p>
                                <span className="font-semibold">{t("location")}</span> {t("location_value")}
                            </p>
                        </div>
                    </div>
                    <div className="text-left flex justify-between">
                        <h4 className="text-lg font-semibold text-primary-text mb-4">{t("hours_title")}</h4>
                        <div className="text-primary-text/70">
                            <p>{t("days")}</p>
                            <p>{t("time")}</p>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-100 text-center">
                    <p className="text-primary-text/70 text-sm">
                        {t("rights", { year: new Date().getFullYear() })}
                    </p>
                    <p className="text-primary-text/70 text-sm ">
                        {t("author")}
                    </p>
                </div>
            </div>
        </footer >
    )
}

export default Footer