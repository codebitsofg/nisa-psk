import Link from "next/link";

export default function PsikoEgitimPage() {
  return (
    <div className="min-h-screen bg-white">

      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              NA Psikolojik Danışmanlık ve Eğitim
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#hizmetler" className="text-gray-700 hover:text-blue-600 transition-colors">Hizmetler</Link>
              <Link href="/#hakkimda" className="text-gray-700 hover:text-blue-600 transition-colors">Hakkımda</Link>
              <Link href="/psikoegitim" className="text-blue-600 font-medium">Psikoeğitim</Link>
              <Link href="/bdt" className="text-gray-700 hover:text-blue-600 transition-colors">BDT</Link>
              <Link href="/#iletisim" className="text-gray-700 hover:text-blue-600 transition-colors">İletişim</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Psikoeğitim
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Bireylerin psikolojik sağlığını iyileştirmek amacıyla çeşitli eğitim ve müdahale yöntemlerinin kullanıldığı bir süreçtir.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="text-lg leading-relaxed mb-6">
              Psikoeğitim, bireylerin psikolojik sağlığını iyileştirmek amacıyla çeşitli eğitim ve müdahale yöntemlerinin kullanıldığı bir süreçtir. Bu süreç, kişilere psikolojik dayanıklılık kazandırmak, stresle başa çıkma becerilerini geliştirmek ve genel yaşam kalitelerini artırmak için düzenlenir. Psikoeğitim, çeşitli bireysel ve grup terapileri, eğitim programları, seminerler, atölyeler gibi birçok formatta sunulabilir.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Psikoeğitimin Yararları</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Duygusal ve Zihinsel Sağlık</h3>
                <p className="text-gray-700 leading-relaxed">
                  Psikoeğitim, bireylerin duygusal zekâlarını geliştirmelerini, kendi duygusal süreçlerini anlamalarını ve yönetmelerini sağlar. Bu, stresle başa çıkma yeteneklerini güçlendirir ve duygusal dengeyi sağlar.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Stres Yönetimi ve İyileşme</h3>
                <p className="text-gray-700 leading-relaxed">
                  Psikoeğitim, bireylerin stresle başa çıkma becerilerini artırır. Bunun yanı sıra, olumsuz psikolojik durumların üstesinden gelmek için iyileşme sürecinde rehberlik eder.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">İletişim Becerileri</h3>
                <p className="text-gray-700 leading-relaxed">
                  Etkili iletişim teknikleri ve empati geliştirme gibi beceriler öğretilir. Bu beceriler, sosyal ilişkilerin güçlenmesini ve daha sağlıklı bireysel etkileşimlerin kurulmasını sağlar.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kişisel Gelişim ve Psikolojik Dayanıklılık</h3>
                <p className="text-gray-700 leading-relaxed">
                  Psikoeğitim, bireylerin karşılaştıkları zorluklara karşı dayanıklılıklarını artırarak, hayatın stresli anlarında psikolojik direncin güçlenmesini sağlar.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Psiko-eğitimsel Destek</h3>
                <p className="text-gray-700 leading-relaxed">
                  Psikoeğitim, bireylerin yaşam kalitesini artıran bir desteği ifade eder. Ayrıca, travma sonrası stres bozukluğu (TSSB) gibi durumlar için özel terapötik teknikler de içerebilir.
                </p>
              </div>
            </div>
          </div>

          {/* Age Groups */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hangi Yaş Gruplarına Etki Eder?</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Psikoeğitim, her yaş grubundaki bireylere yönelik özel olarak tasarlanmış programlarla uygulanabilir:
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Çocuklar</h3>
                <p className="text-gray-700 leading-relaxed">
                  Çocuklar için psikoeğitim, genellikle duygusal gelişim, empati ve iletişim becerilerinin temellerini atmaya yöneliktir. Bu programlar çocukların duygusal zekâlarını artırmayı ve stresle başa çıkmalarını öğretmeyi hedefler.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Ergenler</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ergenlik dönemi, duygusal ve psikolojik değişimlerin yoğun olduğu bir süreçtir. Bu dönemdeki psikoeğitim, ergenlerin kimlik gelişimi, stres yönetimi, özgüven artırma ve sosyal ilişkilerde empati becerilerinin güçlendirilmesi gibi alanlarda odaklanır.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Yetişkinler</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yetişkinler için psikoeğitim programları, iş hayatındaki stresle başa çıkma, aile içindeki ilişkilerde etkili iletişim, duygusal zeka geliştirme ve kişisel gelişim üzerine yoğunlaşır. Ayrıca, iş-yaşam dengesini kurabilme ve kriz yönetimi becerilerini geliştirme konularında destek sağlar.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Yaşlılar</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yaşlılar için psikoeğitim, yaşlanmanın getirdiği fiziksel ve duygusal zorluklarla başa çıkma becerilerini öğretir. Ayrıca, depresyon, yalnızlık, kayıp duyguları ve kronik hastalıklarla başa çıkma konusunda da rehberlik sağlar.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-8 bg-gray-100 rounded-xl p-6 border border-gray-200">
            <p className="text-gray-700 leading-relaxed text-center text-lg">
              Psikoeğitim, her yaş grubuna ve bireysel duruma göre özelleştirilebilir, dolayısıyla psikolojik sağlığın güçlendirilmesi ve iyileştirilmesi adına önemli bir araçtır. Bu süreç, bireylerin sadece duygusal olarak değil, aynı zamanda zihinsel ve sosyal açıdan da güçlenmelerine olanak tanır.
            </p>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">NA Psikolojik Danışmanlık ve Eğitim</h3>
            <p className="text-gray-400 mb-4">Nisanur Azer - Psikolojik Danışman / Bilişsel Davranışçı Terapist</p>
            <p className="text-gray-400">Online ve Yüz Yüze Psikolojik Danışmanlık Hizmetleri</p>
            <p className="text-gray-400 mt-2">Türkiye ve Almanya</p>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} NA Psikolojik Danışmanlık ve Eğitim. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

