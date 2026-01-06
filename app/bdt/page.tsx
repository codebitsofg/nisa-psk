import Link from "next/link";

export default function BDT() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              NA Psikolojik Danışmanlık ve Eğitim
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#hizmetler" className="text-gray-700 hover:text-blue-600 transition-colors">Hizmetler</Link>
              <Link href="/#hakkimda" className="text-gray-700 hover:text-blue-600 transition-colors">Hakkımda</Link>
              <Link href="/psikoegitim" className="text-gray-700 hover:text-blue-600 transition-colors">Psikoeğitim</Link>
              <Link href="/bdt" className="text-blue-600 font-medium">BDT</Link>
              <Link href="/#iletisim" className="text-gray-700 hover:text-blue-600 transition-colors">İletişim</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Bilişsel Davranışçı Terapi (BDT)
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Düşünce, duygu ve davranışları arasındaki ilişkiyi inceleyen, kişiye özel, yapılandırılmış ve kısa süreli bir terapötik yaklaşım
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-100">
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Bilişsel Davranışçı Terapi (BDT), insanların düşünce, duygu ve davranışları arasındaki ilişkiyi inceleyen bir terapi yöntemidir. Bu terapi, insanların zorlayıcı veya olumsuz düşüncelerini fark etmelerini ve bu düşünceleri daha sağlıklı ve gerçekçi bir şekilde değiştirmelerini hedefler. BDT, genellikle kısa süreli, yapılandırılmış bir terapi türüdür. Kişilerin daha sağlıklı düşünme ve davranma becerileri geliştirmelerine yardımcı olur.
            </p>
          </div>

          {/* Basic Goals */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Temel Amaçları</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Olumsuz Düşünceleri Değiştirmek</h3>
                <p className="text-gray-700 leading-relaxed">
                  BDT, kişilerin olumsuz düşüncelerini tanıyıp bunları daha olumlu düşüncelerle değiştirmelerini sağlar. Örneğin, "Her zaman başarısız oluyorum" gibi bir düşünce yerine, "Bazen başarısız olabilirim, ama başarılı olmak için çaba gösterebilirim" gibi daha dengeli bir düşünce geliştirilebilir.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Davranışları Değiştirmek</h3>
                <p className="text-gray-700 leading-relaxed">
                  Düşüncelerimiz davranışlarımızı etkiler. BDT, kişilerin olumsuz düşünceler nedeniyle yaptıkları davranışları değiştirmelerine yardımcı olur. Örneğin, sosyal kaygısı olan bir kişi, sosyal ortamlardan kaçınır. BDT, bu davranışı değiştirmek için kişiye sosyal ortamlara girme ve deneyimleme cesareti verir.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Duygusal Durumu İyileştirmek</h3>
                <p className="text-gray-700 leading-relaxed">
                  BDT, kişilerin olumsuz düşüncelerinin duygusal durumlarını nasıl etkilediğini anlamalarına yardımcı olur. Olumsuz düşünceler azaldıkça, duygusal durum da genellikle iyileşir.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                BDT yöntemiyle genellikle danışanla terapist arasında aktif bir iş birliği gerektirir. Terapist, kişiye olumsuz düşüncelerini tanıyıp bu düşünceleri değiştirebilecek pratik teknikler öğretir. Terapist, kişiye kendi düşünce ve davranışlarını gözlemleme, değiştirme ve yeni sağlıklı alışkanlıklar oluşturma konusunda yardımcı olur.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Özetle, BDT, düşüncelerinizi değiştirerek daha sağlıklı bir yaşam sürmeyi amaçlar. Bu yöntem, depresyon, kaygı, stres, fobiler ve birçok duygusal sorun için etkili bir tedavi seçeneğidir.
              </p>
            </div>
          </div>

          {/* How BDT is Used */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">BDT Terapide Nasıl Kullanılır?</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Bilişsel Davranışçı Terapi, terapötik süreç, danışanın mevcut olumsuz düşünce ve inançlarını fark etmesiyle başlar. Terapide şu temel adımlarla ilerlenir:
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Düşüncelerin ve İnançların Tespiti</h3>
                <p className="text-gray-700 leading-relaxed">
                  İlk adımda, danışanımın içsel diyaloglarını ve otomatik olumsuz düşüncelerini anlamak için çalışırım. Bu düşünceler genellikle, kişinin olaylara ve durumlardaki olumsuz bakış açısını şekillendirir. Örneğin, bir kişi bir sosyal etkinlikte başarısızlık korkusu taşıyor olabilir ve "Herkes beni yargılar" gibi düşünceler geliştirebilir. Bu düşünceler, kaygı ve sosyal izolasyon gibi duygusal sorunlara yol açar. BDT'de, bu tür düşünceleri tanımak ve bu düşünceler üzerinde çalışmak çok önemlidir.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Düşüncelerin Gerçekçiliğinin Değerlendirilmesi</h3>
                <p className="text-gray-700 leading-relaxed">
                  Danışanlarımın olumsuz ve otomatik düşüncelerini sorgularım. Bu düşüncelerin ne kadar gerçekçi, mantıklı veya desteklenebilir olduğunu değerlendiririz. Çoğu zaman, bu düşünceler aşırı genellemeler, çarpıtmalar veya gerçek dışı inançlar içerir. Örneğin, "Herkes beni yargılar" gibi bir düşünce, genellikle aşırı genellemeler veya felaketleştirme içerir. Bu tür düşünceleri daha gerçekçi bir bakış açısına dönüştürmeye çalışırız.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Alternatif, Sağlıklı Düşüncelerin Geliştirilmesi</h3>
                <p className="text-gray-700 leading-relaxed">
                  Danışanlarımın olumsuz düşüncelerine alternatif, daha sağlıklı ve yapıcı düşünceler geliştirmelerini sağlamak için çeşitli teknikler kullanırım. Bu, daha esnek düşünce kalıpları oluşturmalarına ve yaşamlarına daha uyumlu bakış açıları geliştirmelerine yardımcı olur. Bu süreçte, danışanım yeni düşünce kalıplarını fark etmeye başlar ve bu düşünceler duygusal durumlarını daha pozitif bir şekilde etkiler.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Davranışsal Müdahale ve Yeni Alışkanlıklar</h3>
                <p className="text-gray-700 leading-relaxed">
                  BDT, yalnızca düşünce düzeyinde değil, aynı zamanda davranış düzeyinde de değişim yaratmayı hedefler. Danışanlarımla birlikte, belirli davranışları değiştirmek veya yeni alışkanlıklar geliştirmek için çeşitli pratik egzersizler yaparız. Bu, kişilerin olumsuz düşüncelerinden uzaklaşmalarına ve daha işlevsel davranışlar sergilemelerine yardımcı olur. Örneğin, bir kişi sosyal kaygı yaşıyorsa, küçük adımlarla sosyal etkinliklere katılmaya başlaması teşvik edilir.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Duygusal Düzenleme ve Stresle Baş Etme</h3>
                <p className="text-gray-700 leading-relaxed">
                  Danışanlarıma, olumsuz duygusal durumlarla başa çıkabilmek için bilişsel ve davranışsal stratejiler öğretirim. Bu, kaygıyı yönetme, depresif düşüncelerle baş etme ve stresli durumlara karşı direnç geliştirmeyi içerir. BDT, duygusal düzenleme becerilerini artırarak, bireylerin yaşamlarındaki zorluklara daha sağlıklı bir şekilde yaklaşmalarını sağlar.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sonuç ve Gelişim Süreci</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bilişsel Davranışçı Terapi sürecinde, danışanlarım düşüncelerinde ve davranışlarında sağladıkları değişimlerle, daha dengeli bir yaşam sürmeye başlarlar. Bu terapi türü, bireylerin duygusal, zihinsel ve davranışsal anlamda daha sağlıklı yollar bulmalarına olanak tanır. Terapötik süreç ilerledikçe, danışanlarım daha fazla öz farkındalık kazanır ve kişisel gelişimlerine odaklanarak yaşamlarında kalıcı iyileşmeler sağlarlar.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Benim hedefim, her danışanımın kendi yaşamını daha iyi anlayarak ve sağlıklı kararlar alarak ilerlemesidir. BDT'nin sunduğu güçlü teknikler ve pratik araçlar, danışanlarımın kişisel hedeflerine ulaşmalarına ve yaşam kalitelerini artırmalarına yardımcı olur.
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

