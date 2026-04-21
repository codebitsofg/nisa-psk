import React from 'react'

const Footer = () => {
    return (
        <footer id="iletisim" className="pt-16  pb-8 px-4 sm:px-6 lg:px-8 mt-14  text-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid  md:grid-cols-3   gap-12 mb-12">
                    <div className="text-left">
                        <img src="/logo.png" alt="NA Psikolojik Danışmanlık ve Eğitim" className=' w-40 h-auto' />
                    </div>
                    <div className="text-left">
                        <h4 className="text-lg font-semibold text-primary-text mb-4">İletişim</h4>
                        <div className="space-y-2 text-primary-text/70">
                            <p>
                                <span className="font-semibold">Telefon:</span> +90 555 123 45 67
                            </p>
                            <p>
                                <span className="font-semibold">E-posta:</span> info@napsikolojik.com
                            </p>
                            <p>
                                <span className="font-semibold">Konum:</span> Türkiye ve Almanya
                            </p>
                        </div>
                    </div>
                    <div className="text-left flex justify-between">
                        <h4 className="text-lg font-semibold text-primary-text mb-4">Çalışma Saatleri</h4>
                        <div className="text-primary-text/70">
                            <p>Pazartesi - Cumartesi</p>
                            <p>10:00 - 22:00</p>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-100 text-center">
                    <p className="text-primary-text/70 text-sm">
                        © {new Date().getFullYear()} NA Psikolojik Danışmanlık ve Eğitim. Tüm hakları saklıdır.
                    </p>
                    <p className="text-primary-text/70 text-sm ">
                        Nisanur Azer - Psikolojik Danışman / Bilişsel Davranışçı Terapist
                    </p>
                </div>
            </div>
        </footer >
    )
}

export default Footer