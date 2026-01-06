import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <nav className="fixed top-0 w-full bg-white  border-b border-gray-100 z-50 ">
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-22">
                    <div className="flex h-full items-center gap-4">
                        <Link href="/" className="text-lg font-bold text-primary-text hover:text-accent transition-colors font-serif-rewrite">
                            NA Psikolojik Danışmanlık <br /> ve Eğitim
                        </Link>
                        {/* <div className=" h-full rotate-40 w-0.5 bg-primary"></div> */}
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="/#hakkimda" className="text-primary-text hover:text-accent transition-colors font-bold font-serif-rewrite">Hakkımda</a>
                        <a href="/#hizmetler" className="text-primary-text hover:text-accent transition-colors font-bold font-serif-rewrite">Hizmetlerimiz</a>
                        <Link href="/#blog" className="text-primary-text hover:text-accent transition-colors font-bold font-serif-rewrite">Blog</Link>
                        <Link href="/blog/bdt" className="text-primary-text hover:text-accent transition-colors font-bold font-serif-rewrite">BDT</Link>
                        <a href="/#iletisim" className="text-primary-text hover:text-accent transition-colors font-bold font-serif-rewrite">İletişim</a>
                        <a href="/#randevu" className="bg-accent text-white px-12 py-2 rounded-lg hover:bg-primary transition-colors font-semibold text-md text-center">
                            Randevu Al
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation