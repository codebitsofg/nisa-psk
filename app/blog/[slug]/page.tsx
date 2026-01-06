import Link from "next/link";
import { notFound } from "next/navigation";

// Blog post data
const blogPosts = {
    "oyun-terapisi": {
        title: "Oyun Terapisi Nedir?",
        date: "Ocak 6, 2026",
        category: "Genel Bilgiler",
        comments: 0,
        content: [
            {
                type: "paragraph",
                text: "Oyun terapisi, çocukların duygusal, sosyal ve psikolojik problemlerini anlamak ve çözmek amacıyla oyunları bir araç olarak kullanan etkisi bilimsel olarak kanıtlanmış bir terapi yöntemidir. Çocuklar, duygularını ve düşüncelerini oyun aracılığıyla daha rahat ifade edebilirler. Bu terapi yöntemi, çocukların duygusal dünyalarını keşfetmelerine ve problem çözme becerilerini geliştirmelerine yardımcı olur.",
            },
            {
                type: "heading",
                text: "Hangi Yaş Grubuna Uygulanır?",
            },
            {
                type: "paragraph",
                text: "Oyun terapisi, genellikle 3-12 yaş arasındaki çocuklara uygulanır. Bu yaş grubundaki çocuklar, kelimelerle duygularını anlatmakta zorlanabilirler. Oyun, onların içsel dünyalarını dışa vurmanın en doğal yoludur.",
            },
            {
                type: "heading",
                text: "Oyun Terapi Seansı Ne Kadar Sürmektedir?",
            },
            {
                type: "paragraph",
                text: "Klasik bir oyun terapi seansı 45 dakika sürmektedir. Seansların uzunluğu ve bitişi ise çocuğun terapiye gelme sebebine, gelişimine ve hızına bağlıdır.",
            },
            {
                type: "heading",
                text: "Hangi Problemlerde Etkilidir?",
            },
            {
                type: "paragraph",
                text: "Oyun terapisi, pek çok duygusal ve psikolojik sorunun çözülmesinde etkilidir. Özellikle şu durumlarda fayda sağladığı bilimsel olarak kanıtlanmıştır:",
            },
            {
                type: "list",
                items: [
                    "Kaygı ve korkular (örneğin; okul korkusu, karanlık korkusu)",
                    "Travmalar ve travma sonrası stres (örneğin; boşanma, aile içi şiddet, doğal afetler)",
                    "Davranış problemleri (örneğin; öfke kontrolü, saldırganlık, utangaçlık)",
                    "Düşük özsaygı ve özgüven eksiklikleri",
                    "Ayrılık ve kayıp (örneğin; bir yakınını kaybetme, taşınma)",
                    "Okulda zorluklar (öğrenme güçlükleri, dikkat eksikliği vb.)",
                ],
            },
            {
                type: "paragraph",
                text: "Sonuç olarak, oyun terapisi çocukların kendilerini güvenli bir ortamda ifade etmelerini sağlar ve onlara duygusal sorunlarla başa çıkmayı öğretir. Çocuklar oyun yoluyla kendi iç dünyalarını keşfederken, terapistler de onların yaşadığı zorlukları anlayarak etkili bir şekilde müdahale eder.",
            },
        ],
    },
    "bdt": {
        title: "Bilişsel Davranışçı Terapi (BDT)",
        date: "Ocak 6, 2026",
        category: "Genel Bilgiler",
        comments: 0,
        content: [
            {
                type: "paragraph",
                text: "BDT, bireylerin zorlayıcı veya olumsuz düşüncelerini fark etmelerine, bunları daha gerçekçi ve sağlıklı düşüncelerle değiştirmelerine yardımcı olur. Düşünce ve davranışların duygusal durum üzerindeki etkisini ele alır; depresyon, kaygı, stres, fobiler ve pek çok duygusal sorun için etkili bir yaklaşımdır.",
            },
            {
                type: "heading",
                text: "Temel Amaçlar",
            },
            {
                type: "list",
                items: [
                    "Olumsuz Düşünceleri Değiştirmek: Aşırı genelleme veya felaketleştirme içeren düşünceleri dengeli alternatiflerle değiştirmek.",
                    "Davranışları Dönüştürmek: Olumsuz düşüncelerin tetiklediği kaçınma veya işlevsiz davranışları değiştirmek.",
                    "Duygusal Durumu İyileştirmek: Düşüncelerdeki değişimle birlikte duygusal iyilik halini güçlendirmek.",
                ],
            },
            {
                type: "heading",
                text: "BDT Terapide Nasıl Kullanılır?",
            },
            {
                type: "list",
                items: [
                    "Düşüncelerin ve İnançların Tespiti: Otomatik olumsuz düşünceleri fark etmek ve danışanın içsel diyaloglarını anlamak.",
                    "Gerçekçiliğin Değerlendirilmesi: Olumsuz düşüncelerin ne kadar gerçekçi veya desteklenebilir olduğunu sorgulamak.",
                    "Sağlıklı Alternatifler Geliştirmek: Daha esnek ve yapıcı düşünce kalıpları oluşturmak.",
                    "Davranışsal Müdahaleler: Olumsuz düşüncelerden uzaklaşmayı destekleyen yeni alışkanlıklar ve pratik egzersizler uygulamak.",
                    "Duygusal Düzenleme ve Stresle Baş Etme: Kaygı, depresif düşünceler ve stres için bilişsel-davranışsal stratejiler öğretmek.",
                ],
            },
            {
                type: "paragraph",
                text: "Süreç ilerledikçe danışanlar daha fazla öz farkındalık kazanır, düşünce ve davranışlarında kalıcı iyileşmeler sağlar. Amaç, daha dengeli bir yaşam sürmek ve duygusal, zihinsel, davranışsal anlamda sağlıklı yollar bulmaktır.",
            },
        ],
    },
    "psikolojik-danisma": {
        title: "Psikolojik Danışma Nedir?",
        date: "Ocak 6, 2026",
        category: "Genel Bilgiler",
        comments: 0,
        content: [
            {
                type: "paragraph",
                text: "Psikolojik danışmanın temel amacı, danışanın içsel potansiyelini keşfetmesine, kendi duygu ve düşünceleriyle daha sağlıklı bir ilişki kurmasına ve yaşamını daha verimli yönetmesine yardımcı olmaktır. Birebir görüşmelerde gerçekleşen rehberlik süreci, danışanın yaşadığı sorunların kök sebeplerini anlamasını ve bu sorunlarla nasıl başa çıkabileceği konusunda farkındalık kazanmasını sağlar.",
            },
            {
                type: "paragraph",
                text: "Psikolojik danışma, yalnızca zorlayıcı dönemlerde değil, kişisel gelişim ve farkındalık artırma amacıyla da tercih edilebilir. Her bireyin yaşadığı zorluklar farklıdır ve danışma süreci kişiye özel çözümler sunarak sorunların sağlıklı yollarla çözülmesine olanak tanır.",
            },
            {
                type: "heading",
                text: "Psikolojik Danışma Kimlere Yöneliktir?",
            },
            {
                type: "paragraph",
                text: "Psikolojik danışma, ergenlik, yetişkinlik veya yaşlılık gibi tüm yaşam dönemlerinde destek sunar.",
            },
            {
                type: "list",
                items: [
                    "Gençler ve Ergenler: Kimlik arayışı ve yoğun duygusal değişimlerin yaşandığı bu dönemde sağlıklı ilişki kurma ve duyguları anlama desteği sağlar.",
                    "Yetişkinler: İş, aile sorumlulukları, kariyer seçimleri, evlilik ve ilişkilerde yaşanan zorluklarla başa çıkma konusunda rehberlik sunar.",
                    "Yaşlılar: Yaşlanma, emeklilik ve yalnızlık gibi süreçlerin daha sağlıklı yönetilmesine yardımcı olur.",
                    "Kişisel gelişim isteyen herkes: Kendini daha iyi tanımak ve yaşam kalitesini artırmak için danışmanlık alabilir.",
                ],
            },
            {
                type: "heading",
                text: "Psikolojik Danışmanın Yararları",
            },
            {
                type: "list",
                items: [
                    "Duygusal denge: Travmalar, stres ve kaygıyla sağlıklı başa çıkma becerilerini güçlendirir.",
                    "Kişisel farkındalık: Değerler ve hedefler netleşir, düşünce ve davranış kalıpları keşfedilir.",
                    "İletişim becerileri: Empati, aktif dinleme ve duygusal zekâ gelişir; ilişkiler güçlenir.",
                    "Baş etme stratejileri: Stres, ailevi sorunlar veya travmalar karşısında direnç kazandırır.",
                    "Karar verme desteği: Önemli yaşam kararlarında daha sağlıklı seçimler yapmaya rehberlik eder.",
                ],
            },
        ],
    },
    "psikoegitim": {
        title: "Psikoeğitim ve Yararları",
        date: "Ocak 6, 2026",
        category: "Genel Bilgiler",
        comments: 0,
        content: [
            {
                type: "paragraph",
                text: "Psikoeğitim, bireylere psikolojik sağlığını iyileştirmek amacıyla çeşitli eğitim ve müdahale yöntemleri sunar. Programlar; bireysel ve grup terapileri, seminerler, atölyeler gibi birçok formatta düzenlenebilir.",
            },
            {
                type: "paragraph",
                text: "Amaç, stresle başa çıkma becerilerini geliştirmek, duygusal süreçleri anlamak ve kişisel gelişimi desteklemektir. Böylece bireyler sadece duygusal değil, zihinsel ve sosyal açıdan da güçlenir.",
            },
            {
                type: "heading",
                text: "Psikoeğitimin Yararları",
            },
            {
                type: "list",
                items: [
                    "Duygusal ve zihinsel sağlık: Duygusal zekâyı güçlendirir, stresle başa çıkmayı öğretir ve denge sağlar.",
                    "Stres yönetimi ve iyileşme: Zorlayıcı psikolojik durumlarda rehberlik eder ve iyileşme sürecini destekler.",
                    "İletişim becerileri: Empati, etkili iletişim teknikleri ve sosyal ilişkilerde güveni geliştirir.",
                    "Kişisel gelişim ve dayanıklılık: Yaşamın stresli anlarında psikolojik direnci artırır.",
                    "Psiko-eğitimsel destek: Travma sonrası stres bozukluğu (TSSB) gibi özel durumlarda terapötik teknikler sunabilir.",
                ],
            },
            {
                type: "heading",
                text: "Hangi Yaş Gruplarına Etki Eder?",
            },
            {
                type: "paragraph",
                text: "Psikoeğitim, her yaş grubuna özel tasarlanmış programlarla uygulanabilir:",
            },
            {
                type: "list",
                items: [
                    "Çocuklar: Duygusal gelişim, empati ve temel iletişim becerileri.",
                    "Ergenler: Kimlik gelişimi, özgüven, stres yönetimi ve empati.",
                    "Yetişkinler: İş-yaşam dengesi, ilişkilerde etkili iletişim, duygusal zeka geliştirme.",
                    "Yaşlılar: Yaşlanmanın getirdiği duygusal ve fiziksel zorluklarla başa çıkma, yalnızlık ve kayıpla baş etme.",
                ],
            },
        ],
    },
    "anksiyete-bozuklugu": {
        title: "Anksiyete Bozukluğu, Çeşitleri ve Tedavi Yolları",
        date: "Ocak 6, 2026",
        category: "Genel Bilgiler",
        comments: 0,
        content: [
            {
                type: "paragraph",
                text: "Anksiyete bozukluğu, bireylerin günlük yaşamlarını olumsuz etkileyen, aşırı kaygı ve endişe durumlarıyla karakterize edilen psikolojik bir durumdur. Bu bozukluk, kişinin işlevselliğini bozabilir ve yaşam kalitesini düşürebilir.",
            },
            {
                type: "heading",
                text: "Anksiyete Bozukluğu Çeşitleri",
            },
            {
                type: "list",
                items: [
                    "Yaygın Anksiyete Bozukluğu (YAB): Sürekli ve aşırı endişe hali",
                    "Panik Bozukluk: Beklenmedik panik ataklar",
                    "Sosyal Anksiyete Bozukluğu: Sosyal durumlardan korkma",
                    "Özgül Fobiler: Belirli nesne veya durumlardan aşırı korku",
                ],
            },
            {
                type: "heading",
                text: "Tedavi Yolları",
            },
            {
                type: "paragraph",
                text: "Anksiyete bozukluğunun tedavisinde genellikle bilişsel davranışçı terapi (BDT) ve gerekli durumlarda ilaç tedavisi kullanılır. Erken müdahale ve düzenli terapi seansları, başarılı sonuçlar için kritik öneme sahiptir.",
            },
        ],
    },
    "cift-terapisi": {
        title: "Çift Terapisi Nedir ve Neden Önemlidir",
        date: "Ocak 6, 2026",
        category: "Genel Bilgiler",
        comments: 0,
        content: [
            {
                type: "paragraph",
                text: "Çift terapisi, ilişkide yaşanan sorunları çözmek ve ilişki kalitesini artırmak amacıyla çiftlerle yapılan profesyonel bir terapi sürecidir. Bu terapi, çiftlerin birbirlerini daha iyi anlamalarına, iletişim becerilerini geliştirmelerine ve sağlıklı bir ilişki kurmalarına yardımcı olur.",
            },
            {
                type: "heading",
                text: "Neden Önemlidir?",
            },
            {
                type: "paragraph",
                text: "Çift terapisi, ilişkideki çatışmaları çözmek, güveni yeniden inşa etmek ve ortak hedefler belirlemek için güvenli bir ortam sağlar. Profesyonel rehberlik, çiftlerin sorunları daha objektif bir şekilde ele almalarına ve kalıcı çözümler bulmalarına yardımcı olur.",
            },
        ],
    },
    "psikolog-kimdir": {
        title: "Psikolog Kimdir ve Ne Yapar",
        date: "Ocak 6, 2026",
        category: "Genel Bilgiler",
        comments: 0,
        content: [
            {
                type: "paragraph",
                text: "Psikolog, insan davranışı, düşünce süreçleri ve duygusal durumlar üzerine eğitim almış profesyonel bir uzmandır. Psikologlar, bireylerin psikolojik sağlığını değerlendirir, tanı koyar ve uygun müdahale yöntemlerini uygular.",
            },
            {
                type: "heading",
                text: "Ne Yapar?",
            },
            {
                type: "list",
                items: [
                    "Psikolojik değerlendirme ve tanı koyma",
                    "Bireysel ve grup terapileri yürütme",
                    "Psikolojik testler uygulama",
                    "Araştırma ve bilimsel çalışmalar yapma",
                    "Eğitim ve danışmanlık hizmetleri sunma",
                ],
            },
        ],
    },
    "aile-terapisi": {
        title: "Aile Terapisi Nedir",
        date: "Ocak 6, 2026",
        category: "Genel Bilgiler",
        comments: 0,
        content: [
            {
                type: "paragraph",
                text: "Aile terapisi, aile üyeleri arasındaki ilişkileri iyileştirmek ve aile sisteminin sağlıklı işlemesini sağlamak amacıyla yapılan bir terapi türüdür. Bu terapi, aile içi çatışmaları çözmek, iletişimi güçlendirmek ve aile üyelerinin birbirlerini daha iyi anlamalarına yardımcı olur.",
            },
            {
                type: "heading",
                text: "Ne Zaman Başvurulur?",
            },
            {
                type: "list",
                items: [
                    "Aile içi çatışmalar yaşandığında",
                    "İletişim sorunları olduğunda",
                    "Aile üyelerinden birinde psikolojik sorun olduğunda",
                    "Büyük yaşam değişiklikleri (taşınma, boşanma vb.) sırasında",
                    "Çocuk veya ergen davranış problemlerinde",
                ],
            },
        ],
    },
};

// All blog posts for sidebar
const allPosts = [
    { slug: "oyun-terapisi", title: "Oyun Terapisi Nedir?" },
    { slug: "anksiyete-bozuklugu", title: "Anksiyete Bozukluğu, Çeşitleri ve Tedavi Yolları" },
    { slug: "cift-terapisi", title: "Çift Terapisi Nedir ve Neden Önemlidir" },
    { slug: "psikolog-kimdir", title: "Psikolog Kimdir ve Ne Yapar" },
    { slug: "aile-terapisi", title: "Aile Terapisi Nedir" },
    { slug: "bdt", title: "Bilişsel Davranışçı Terapi (BDT)" },
    { slug: "psikolojik-danisma", title: "Psikolojik Danışma Nedir?" },
    { slug: "psikoegitim", title: "Psikoeğitim ve Yararları" },
];

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = blogPosts[slug as keyof typeof blogPosts];

    if (!post) {
        notFound();
    }

    // Find current post index for previous/next navigation
    const currentIndex = allPosts.findIndex((p) => p.slug === slug);
    const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

    return (
        <main className="min-h-screen bg-white py-12  mt-30 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <article className="lg:col-span-2">
                        {/* Header */}
                        <div className="mb-8 space-y-4">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    <span>{post.category}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        />
                                    </svg>
                                    <span>{post.comments}</span>
                                </div>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary-text leading-tight">
                                {post.title}
                            </h1>
                        </div>

                        {/* Content */}
                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                            {post.content.map((item, index) => {
                                if (item.type === "paragraph") {
                                    return (
                                        <p key={index} className="text-base leading-7">
                                            {item.text}
                                        </p>
                                    );
                                }
                                if (item.type === "heading") {
                                    return (
                                        <h2
                                            key={index}
                                            className="text-2xl sm:text-3xl font-serif font-bold text-primary-text mt-8 mb-4"
                                        >
                                            {item.text}
                                        </h2>
                                    );
                                }
                                if (item.type === "list") {
                                    return (
                                        <ul
                                            key={index}
                                            className="list-disc pl-6 space-y-2 text-base leading-7"
                                        >
                                            {item.items.map((listItem, listIndex) => (
                                                <li key={listIndex}>{listItem}</li>
                                            ))}
                                        </ul>
                                    );
                                }
                                return null;
                            })}
                        </div>

                        {/* Previous Post Navigation */}
                        {previousPost && (
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <Link
                                    href={`/blog/${previousPost.slug}`}
                                    className="group flex items-center gap-2 text-accent hover:text-primary transition-colors"
                                >
                                    <span className="text-sm font-semibold">← Önceki Yazı</span>
                                    <span className="text-sm font-semibold group-hover:underline">
                                        {previousPost.title}
                                    </span>
                                </Link>
                            </div>
                        )}
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1  pt-10">
                        <div className="bg-white border border-gray-200 rounded-lg p-6  sticky  top-24">
                            <h3 className="text-xl font-serif font-bold text-accent mb-6">
                                Tüm Makaleler
                            </h3>
                            <ul className="space-y-3">
                                {allPosts.map((p) => (
                                    <li key={p.slug}>
                                        <Link
                                            href={`/blog/${p.slug}`}
                                            className={`block text-sm leading-relaxed transition-colors ${p.slug === slug
                                                ? "text-accent font-semibold"
                                                : "text-gray-700 hover:text-primary"
                                                }`}
                                        >
                                            {p.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}

