import Link from "next/link";
import { notFound } from "next/navigation";

type BlogPostContentItem =
    | { type: "paragraph"; text: string }
    | { type: "heading"; text: string }
    | { type: "list"; items: string[] };

type BlogPost = {
    title: string;
    date: string;
    category: string;
    comments: number;
    content: BlogPostContentItem[];
};

// Blog post data
const blogPosts: Record<string, BlogPost> = {
    "psikolojik-danisma-nedir": {
        title: "Psikolojik Danışma Nedir?",
        date: "Ocak 6, 2026",
        category: "Psikolojik Danışma",
        comments: 0,
        content: [
            {
                type: "paragraph",
                text: "Psikolojik danışma, bireylerin duygusal, psikolojik ve sosyal sorunlarıyla başa çıkmalarına yardımcı olmak amacıyla sunulan profesyonel bir destek hizmetidir. Bireylerin yaşamlarında karşılaştıkları stres, kaygı, depresyon, ilişki problemleri, karar verme güçlükleri ve diğer psikolojik zorluklarla baş etmelerini sağlamak için birebir görüşmelerde gerçekleşen rehberlik sürecidir.",
            },
            {
                type: "paragraph",
                text: "Psikolojik danışmanın temel amacı, danışanın içsel potansiyelini keşfetmesine, kendi duygu ve düşünceleriyle daha sağlıklı bir ilişki kurmasına, kişisel gelişimini desteklemesine ve yaşamını daha verimli bir şekilde yönetmesine yardımcı olmaktır. Bu süreç, danışanın yaşadığı sorunların altında yatan kök sebepleri anlamasını, bu sorunlarla nasıl başa çıkabileceği konusunda farkındalık kazanmasını sağlar.",
            },
            {
                type: "paragraph",
                text: "Psikolojik danışma, yalnızca zorlayıcı dönemlerde değil, kişisel gelişim ve farkındalık arttırma amacıyla da tercih edilebilir. Her bireyin, yaşadığı duygusal ve psikolojik zorluklar farklıdır ve psikolojik danışma, kişiye özel çözümler sunarak, bireylerin yaşadıkları problemleri sağlıklı yollarla çözmelerine olanak tanır.",
            },
        ],
    },
    "psikolojik-danismanin-yararlari": {
        title: "Psikolojik Danışmanın Yararları Nelerdir?",
        date: "Ocak 6, 2026",
        category: "Psikolojik Danışma",
        comments: 0,
        content: [
            {
                type: "paragraph",
                text: "Psikolojik danışmanlık, bireylerin ruhsal ve duygusal iyilik halini geliştirmek amacıyla uygulanan profesyonel bir süreçtir. Bu süreç, bireylerin hem günlük yaşamda karşılaştıkları zorluklarla hem de daha derinlemesine kişisel gelişim hedefleriyle başa çıkmalarına olanak tanır. Psikolojik danışmanın sağladığı temel yararlar şunlardır:",
            },
            {
                type: "heading",
                text: "Psikolojik Danışmanın Yararları Nelerdir?",
            },
            {
                type: "list",
                items: [
                    "Duygusal Denge ve Psikolojik İyileşme: Psikolojik danışmanlık, bireylerin duygusal dengesizlik ve psikolojik travmalarla başa çıkmalarını kolaylaştırır. Danışan, yaşadığı stres, kaygı, depresyon veya diğer duygusal sıkıntılar karşısında profesyonel destek alarak içsel huzurunu yeniden tesis edebilir. Danışmanlar, bireylerin bu tür olumsuz duyguları anlamalarına, kabul etmelerine ve bu duygusal yüklerle sağlıklı bir şekilde başa çıkmalarına yardımcı olur.",
                    "Kişisel Farkındalık ve Gelişim: Psikolojik danışma, bireylerin kendilerini daha iyi tanımalarına, kişisel değerlerini ve hedeflerini belirlemelerine yardımcı olur. Danışanlar, kendi düşünce ve davranış kalıplarını keşfederek, potansiyellerini en verimli şekilde kullanma yolunda önemli adımlar atarlar. Kişisel farkındalık, bireylerin yaşamları üzerinde daha bilinçli ve kontrollü bir etki yaratmalarını sağlar.",
                    "İletişim Becerilerinin Geliştirilmesi: Psikolojik danışmanlık, bireylerin sosyal çevreleriyle daha sağlıklı ve etkili iletişim kurmalarını sağlar. İyi bir iletişim, hem kişisel ilişkilerde hem de profesyonel yaşamda başarıyı artırır. Danışmanlar, danışanlara empati kurma, aktif dinleme ve duygusal zekâyı kullanma becerilerini kazandırarak, daha sağlıklı ilişkiler kurmalarını teşvik eder.",
                    "Zorluklarla Başa Çıkma Stratejileri: Psikolojik danışmanlık, bireylerin yaşamlarındaki zorluklarla başa çıkabilme yeteneklerini geliştirir. Yaşamın getirdiği stres faktörleri, iş yerindeki baskılar, ailevi sorunlar veya kişisel travmalar gibi durumlarla başa çıkabilmek için bireylere etkili başa çıkma stratejileri sunar. Bu süreç, bireylerin daha dirençli hale gelmelerini sağlar ve kriz anlarında daha sağlıklı kararlar almalarına yardımcı olur.",
                    "Stres Yönetimi ve Ruhsal Esneklik: Psikolojik danışmanlık, bireylerin günlük yaşamlarında karşılaştıkları stresle daha etkili bir şekilde baş etmelerini sağlar. Danışmanlar, stresin fiziksel ve duygusal etkilerini azaltmaya yönelik teknikler öğretir, bu sayede bireyler ruhsal esneklik kazanarak, yaşamın zorluklarına karşı daha güçlü bir duruş sergileyebilirler.",
                    "Karar Verme Becerilerinin Güçlendirilmesi: Psikolojik danışmanlık, danışanların önemli yaşam kararlarında daha sağlıklı seçimler yapmalarına rehberlik eder. Kişisel, profesyonel veya ilişkisel kararlar alırken, bireylerin kendileriyle barışık olmaları ve duygusal olarak doğru adımlar atabilmeleri sağlanır.",
                ],
            },
            {
                type: "paragraph",
                text: "Psikolojik danışmanlık, sadece kriz anlarında değil, kişisel gelişim ve uzun vadeli iyilik hali için de değerli bir araçtır. Bireylerin yaşam kalitesini artırmalarına, daha tatmin edici ilişkiler kurmalarına ve duygusal sağlıklarını iyileştirmelerine yardımcı olan bu süreç, sürdürülebilir bir psikolojik iyilik hali yaratma adına kritik bir rol oynamaktadır.",
            },
        ],
    },
    "psikolojik-danisma-kimlere-yoneliktir": {
        title: "Psikolojik Danışma Kimlere Yöneliktir?",
        date: "Ocak 6, 2026",
        category: "Psikolojik Danışma",
        comments: 0,
        content: [
            {
                type: "paragraph",
                text: "Psikolojik danışma, her yaştan bireye yaşamın her döneminde sunulabilen bir destek hizmetidir. Ergenlik, yetişkinlik ya da yaşlılık gibi farklı dönemlerdeki bireyler, psikolojik danışmanlık hizmetinden yararlanabilir.",
            },
            {
                type: "paragraph",
                text: "Gençler ve Ergenler: Ergenlik dönemi, kimlik arayışının yoğun olduğu ve birçok duygusal ve psikolojik değişikliğin yaşandığı bir süreçtir. Bu dönemde bireylerin duygu ve düşüncelerini anlamaları, çevreleriyle sağlıklı ilişkiler kurmaları için psikolojik danışmanlık önemli bir destektir.",
            },
            {
                type: "paragraph",
                text: "Yetişkinler: İş yaşamı, ailevi sorumluluklar, kariyer seçimleri, evlilik ve ilişkilerde yaşanan zorluklar gibi konularla baş etmekte zorlanan yetişkinler psikolojik danışmanlık hizmetinden faydalanabilir.",
            },
            {
                type: "paragraph",
                text: "Yaşlılar: Yaşlanma, emeklilik, yalnızlık gibi süreçler psikolojik danışmanlıkla daha sağlıklı yönetilebilir.",
            },
            {
                type: "paragraph",
                text: "Kendini daha iyi tanımak, yaşam kalitesini artırmak isteyen herkes psikolojik danışmanlık alabilir.",
            },
        ],
    },
    "psikoegitim-nedir": {
        title: "Psikoeğitim Nedir?",
        date: "Ocak 6, 2026",
        category: "Psikoeğitim",
        comments: 0,
        content: [
            {
                type: "paragraph",
                text: "Psikoeğitim, bireylerin psikolojik sağlığını iyileştirmek amacıyla çeşitli eğitim ve müdahale yöntemlerinin kullanıldığı bir süreçtir. Bu süreç, kişilere psikolojik dayanıklılık kazandırmak, stresle başa çıkma becerilerini geliştirmek ve genel yaşam kalitelerini artırmak için düzenlenir. Psikoeğitim, çeşitli bireysel ve grup terapileri, eğitim programları, seminerler, atölyeler gibi birçok formatta sunulabilir.",
            },
            {
                type: "heading",
                text: "Psikoeğitimin Yararları",
            },
            {
                type: "list",
                items: [
                    "Duygusal ve Zihinsel Sağlık: Psikoeğitim, bireylerin duygusal zekâlarını geliştirmelerini, kendi duygusal süreçlerini anlamalarını ve yönetmelerini sağlar. Bu, stresle başa çıkma yeteneklerini güçlendirir ve duygusal dengeyi sağlar.",
                    "Stres Yönetimi ve İyileşme: Psikoeğitim, bireylerin stresle başa çıkma becerilerini artırır. Bunun yanı sıra, olumsuz psikolojik durumların üstesinden gelmek için iyileşme sürecinde rehberlik eder.",
                    "İletişim Becerileri: Etkili iletişim teknikleri ve empati geliştirme gibi beceriler öğretilir. Bu beceriler, sosyal ilişkilerin güçlenmesini ve daha sağlıklı bireysel etkileşimlerin kurulmasını sağlar.",
                    "Kişisel Gelişim ve Psikolojik Dayanıklılık: Psikoeğitim, bireylerin karşılaştıkları zorluklara karşı dayanıklılıklarını artırarak, hayatın stresli anlarında psikolojik direncin güçlenmesini sağlar.",
                    "Psiko-eğitimsel Destek: Psikoeğitim, bireylerin yaşam kalitesini artıran bir desteği ifade eder. Ayrıca, travma sonrası stres bozukluğu (TSSB) gibi durumlar için özel terapötik teknikler de içerebilir.",
                ],
            },
        ],
    },
    "psikoegitim-yas-gruplari": {
        title: "Psikoeğitim Hangi Yaş Grupları için Uygundur?",
        date: "Ocak 6, 2026",
        category: "Psikoeğitim",
        comments: 0,
        content: [
            {
                type: "paragraph",
                text: "Psikoeğitim, her yaş grubundaki bireylere yönelik özel olarak tasarlanmış programlarla uygulanabilir:",
            },
            {
                type: "paragraph",
                text: "Çocuklar: Çocuklar için psikoeğitim, genellikle duygusal gelişim, empati ve iletişim becerilerinin temellerini atmaya yöneliktir. Bu programlar çocukların duygusal zekâlarını artırmayı ve stresle başa çıkmalarını öğretmeyi hedefler.",
            },
            {
                type: "paragraph",
                text: "Ergenler: Ergenlik dönemi, duygusal ve psikolojik değişimlerin yoğun olduğu bir süreçtir. Bu dönemdeki psikoeğitim, ergenlerin kimlik gelişimi, stres yönetimi, özgüven artırma ve sosyal ilişkilerde empati becerilerinin güçlendirilmesi gibi alanlarda odaklanır.",
            },
            {
                type: "paragraph",
                text: "Yetişkinler: Yetişkinler için psikoeğitim programları, iş hayatındaki stresle başa çıkma, aile içindeki ilişkilerde etkili iletişim, duygusal zeka geliştirme ve kişisel gelişim üzerine yoğunlaşır. Ayrıca, iş-yaşam dengesini kurabilme ve kriz yönetimi becerilerini geliştirme konularında destek sağlar.",
            },
            {
                type: "paragraph",
                text: "Yaşlılar: Yaşlılar için psikoeğitim, yaşlanmanın getirdiği fiziksel ve duygusal zorluklarla başa çıkma becerilerini öğretir. Ayrıca, depresyon, yalnızlık, kayıp duyguları ve kronik hastalıklarla başa çıkma konusunda da rehberlik sağlar.",
            },
            {
                type: "paragraph",
                text: "Psikoeğitim, her yaş grubuna ve bireysel duruma göre özelleştirilebilir, dolayısıyla psikolojik sağlığın güçlendirilmesi ve iyileştirilmesi adına önemli bir araçtır. Bu süreç, bireylerin sadece duygusal olarak değil, aynı zamanda zihinsel ve sosyal açıdan da güçlenmelerine olanak tanır.",
            },
        ],
    },
    "bdt-nedir": {
        title: "Bilişsel Davranışçı Terapi (BDT) Nedir?",
        date: "Ocak 6, 2026",
        category: "Terapi Yöntemleri",
        comments: 0,
        content: [
            {
                type: "paragraph",
                text: "Bilişsel Davranışçı Terapi (BDT), insanların düşünce, duygu ve davranışları arasındaki ilişkiyi inceleyen bir terapi yöntemidir. Bu terapi, insanların zorlayıcı veya olumsuz düşüncelerini fark etmelerini ve bu düşünceleri daha sağlıklı ve gerçekçi bir şekilde değiştirmelerini hedefler. BDT, genellikle kısa süreli, yapılandırılmış bir terapi türüdür. Kişilerin daha sağlıklı düşünme ve davranma becerileri geliştirmelerine yardımcı olur.",
            },
            {
                type: "heading",
                text: "Temel Amaçları",
            },
            {
                type: "list",
                items: [
                    "Olumsuz Düşünceleri Değiştirmek: BDT, kişilerin olumsuz düşüncelerini tanıyıp bunları daha olumlu düşüncelerle değiştirmelerini sağlar. Örneğin, \"Her zaman başarısız oluyorum\" gibi bir düşünce yerine, \"Bazen başarısız olabilirim, ama başarılı olmak için çaba gösterebilirim\" gibi daha dengeli bir düşünce geliştirilebilir.",
                    "Davranışları Değiştirmek: Düşüncelerimiz davranışlarımızı etkiler. BDT, kişilerin olumsuz düşünceler nedeniyle yaptıkları davranışları değiştirmelerine yardımcı olur. Örneğin, sosyal kaygısı olan bir kişi, sosyal ortamlardan kaçınır. BDT, bu davranışı değiştirmek için kişiye sosyal ortamlara girme ve deneyimleme cesareti verir.",
                    "Duygusal Durumu İyileştirmek: BDT, kişilerin olumsuz düşüncelerinin duygusal durumlarını nasıl etkilediğini anlamalarına yardımcı olur. Olumsuz düşünceler azaldıkça, duygusal durum da genellikle iyileşir.",
                ],
            },
            {
                type: "paragraph",
                text: "BDT yöntemiyle genellikle danışanla terapist arasında aktif bir iş birliği gerektirir. Terapist, kişiye olumsuz düşüncelerini tanıyıp bu düşünceleri değiştirebilecek pratik teknikler öğretir. Terapist, kişiye kendi düşünce ve davranışlarını gözlemleme, değiştirme ve yeni sağlıklı alışkanlıklar oluşturma konusunda yardımcı olur.",
            },
            {
                type: "paragraph",
                text: "Özetle, BDT, düşüncelerinizi değiştirerek daha sağlıklı bir yaşam sürmeyi amaçlar. Bu yöntem, depresyon, kaygı, stres, fobiler ve birçok duygusal sorun için etkili bir tedavi seçeneğidir.",
            },
        ],
    },
    "bdt-terapide-nasil-kullanilir": {
        title: "BDT Terapide Nasıl Kullanılır?",
        date: "Ocak 6, 2026",
        category: "Terapi Yöntemleri",
        comments: 0,
        content: [
            {
                type: "paragraph",
                text: "Bilişsel Davranışçı Terapi, terapötik süreç, danışanın mevcut olumsuz düşünce ve inançlarını fark etmesiyle başlar. Terapide şu temel adımlarla ilerlenir:",
            },
            {
                type: "heading",
                text: "BDT Sürecinde Temel Adımlar",
            },
            {
                type: "list",
                items: [
                    "Düşüncelerin ve İnançların Tespiti: İlk adımda, danışanımın içsel diyaloglarını ve otomatik olumsuz düşüncelerini anlamak için çalışırım. Bu düşünceler genellikle, kişinin olaylara ve durumlardaki olumsuz bakış açısını şekillendirir. Örneğin, bir kişi bir sosyal etkinlikte başarısızlık korkusu taşıyor olabilir ve “Herkes beni yargılar” gibi düşünceler geliştirebilir. Bu düşünceler, kaygı ve sosyal izolasyon gibi duygusal sorunlara yol açar. BDT'de, bu tür düşünceleri tanımak ve bu düşünceler üzerinde çalışmak çok önemlidir.",
                    "Düşüncelerin Gerçekçiliğinin Değerlendirilmesi: Danışanlarımın olumsuz ve otomatik düşüncelerini sorgularım. Bu düşüncelerin ne kadar gerçekçi, mantıklı veya desteklenebilir olduğunu değerlendiririz. Çoğu zaman, bu düşünceler aşırı genellemeler, çarpıtmalar veya gerçek dışı inançlar içerir. Örneğin, \"Herkes beni yargılar\" gibi bir düşünce, genellikle aşırı genellemeler veya felaketleştirme içerir. Bu tür düşünceleri daha gerçekçi bir bakış açısına dönüştürmeye çalışırız.",
                    "Alternatif, Sağlıklı Düşüncelerin Geliştirilmesi: Danışanlarımın olumsuz düşüncelerine alternatif, daha sağlıklı ve yapıcı düşünceler geliştirmelerini sağlamak için çeşitli teknikler kullanırım. Bu, daha esnek düşünce kalıpları oluşturmalarına ve yaşamlarına daha uyumlu bakış açıları geliştirmelerine yardımcı olur. Bu süreçte, danışanım yeni düşünce kalıplarını fark etmeye başlar ve bu düşünceler duygusal durumlarını daha pozitif bir şekilde etkiler.",
                    "Davranışsal Müdahale ve Yeni Alışkanlıklar: BDT, yalnızca düşünce düzeyinde değil, aynı zamanda davranış düzeyinde de değişim yaratmayı hedefler. Danışanlarımla birlikte, belirli davranışları değiştirmek veya yeni alışkanlıklar geliştirmek için çeşitli pratik egzersizler yaparız. Bu, kişilerin olumsuz düşüncelerinden uzaklaşmalarına ve daha işlevsel davranışlar sergilemelerine yardımcı olur. Örneğin, bir kişi sosyal kaygı yaşıyorsa, küçük adımlarla sosyal etkinliklere katılmaya başlaması teşvik edilir.",
                    "Duygusal Düzenleme ve Stresle Baş Etme: Danışanlarıma, olumsuz duygusal durumlarla başa çıkabilmek için bilişsel ve davranışsal stratejiler öğretirim. Bu, kaygıyı yönetme, depresif düşüncelerle baş etme ve stresli durumlara karşı direnç geliştirmeyi içerir. BDT, duygusal düzenleme becerilerini artırarak, bireylerin yaşamlarındaki zorluklara daha sağlıklı bir şekilde yaklaşmalarını sağlar.",
                ],
            },
            {
                type: "heading",
                text: "Sonuç ve Gelişim Süreci",
            },
            {
                type: "paragraph",
                text: "Bilişsel Davranışçı Terapi sürecinde, danışanlarım düşüncelerinde ve davranışlarında sağladıkları değişimlerle, daha dengeli bir yaşam sürmeye başlarlar. Bu terapi türü, bireylerin duygusal, zihinsel ve davranışsal anlamda daha sağlıklı yollar bulmalarına olanak tanır.",
            },
            {
                type: "paragraph",
                text: "Terapötik süreç ilerledikçe, danışanlarım daha fazla öz farkındalık kazanır ve kişisel gelişimlerine odaklanarak yaşamlarında kalıcı iyileşmeler sağlarlar. Benim hedefim, her danışanımın kendi yaşamını daha iyi anlayarak ve sağlıklı kararlar alarak ilerlemesidir. BDT’nin sunduğu güçlü teknikler ve pratik araçlar, danışanlarımın kişisel hedeflerine ulaşmalarına ve yaşam kalitelerini artırmalarına yardımcı olur.",
            },
        ],
    },
    "kariyer-danismanligi-nedir": {
        title: "Kariyer Danışmanlığı Nedir?",
        date: "Ocak 6, 2026",
        category: "Kariyer Danışmanlığı",
        comments: 0,
        content: [
            {
                type: "paragraph",
                text: "Kariyer Danışmanlığı, bireylerin meslek seçimi ve kariyer gelişimi süreçlerinde rehberlik sağlayan profesyonel bir hizmettir. Bu süreç, kişilerin yetenekleri, ilgi alanları, değerleri ve kişilik özellikleri dikkate alınarak yapılır. Kariyer danışmanları, bireylerin kendilerini tanımalarını ve uygun meslek seçimleri yapmalarını sağlar.",
            },
            {
                type: "heading",
                text: "Kariyer danışmanlığında kullanılan bazı yöntemler şunlardır:",
            },
            {
                type: "paragraph",
                text: "Psikolojik Testler ve Değerlendirmeler",
            },
            {
                type: "list",
                items: [
                    "Kişilik Envanterleri: Bu testler, bireyin kişilik özelliklerini belirlemeye yardımcı olur. Örneğin, Myers-Briggs Tip Göstergesi (MBTI) veya Big Five Kişilik Testi kişilik tiplerini analiz edebilir.",
                    "Yetenek ve İlgi Testleri: Bireyin güçlü ve zayıf yönlerini anlamaya yönelik testlerdir. Kariyer Yönelim Envanteri (CTI) veya Holland Kodları gibi testler, kişilerin ilgi alanlarına uygun kariyer seçenekleri sunar.",
                    "Zeka Testleri: Bu testler, bireylerin analitik düşünme yeteneklerini, problem çözme becerilerini ve genel zekalarını ölçer.",
                    "Değerler Testleri: Bu testler, bireylerin iş hayatındaki önceliklerini (örneğin, gelir, iş güvencesi, tatmin) anlamaya yönelik çalışmalardır.",
                ],
            },
            {
                type: "heading",
                text: "Psikolojik Danışmanın Rolü",
            },
            {
                type: "paragraph",
                text: "Psikolojik danışmanlar, bu testlerin doğru bir şekilde yorumlanmasına yardımcı olur ve bireylerin psikolojik engellerini aşmalarını sağlayarak kariyerlerinde başarılı olmalarına rehberlik eder. Bu süreç, bireylerin hem profesyonel hem de kişisel gelişimlerini destekler.",
            },
            {
                type: "paragraph",
                text: "Ayrıca, kariyer seçiminde kişinin kişilik özelliklerini ve değerlerini göz önünde bulundurarak doğru meslek tercihlerinin yapılmasını sağlar.",
            },
            {
                type: "list",
                items: [
                    "Kişisel Farkındalık: Kişinin kendi güçlü ve zayıf yönlerini anlamasına yardımcı olur. Bu, doğru kariyer seçiminde temel bir adımdır.",
                    "Stres ve Kaygı Yönetimi: İş dünyasında karşılaşılan zorluklarla baş edebilmek için kişilere psikolojik destek sağlar.",
                    "Motivasyon ve Hedef Belirleme: Danışanların kariyer hedeflerine ulaşabilmesi için uygun stratejiler belirler.",
                ],
            },
            {
                type: "paragraph",
                text: "Kariyer danışmanlığı, bireylerin doğru meslek seçimi yapmalarına yardımcı olmak ve profesyonel yaşamlarında başarılı olmalarını sağlamak için önemli bir süreçtir. Psikolojik danışmanlık, bu süreçte kişilerin psikolojik durumlarını anlamak, içsel engelleri aşmalarına yardımcı olmak ve kişisel gelişimlerine katkı sağlamak adına büyük bir rol oynar.",
            },
        ],
    },
};

// All blog posts for sidebar
const allPosts = [
    { slug: "psikolojik-danisma-nedir", title: "Psikolojik Danışma Nedir?" },
    {
        slug: "psikolojik-danismanin-yararlari",
        title: "Psikolojik Danışmanın Yararları Nelerdir?",
    },
    {
        slug: "psikolojik-danisma-kimlere-yoneliktir",
        title: "Psikolojik Danışma Kimlere Yöneliktir?",
    },
    { slug: "psikoegitim-nedir", title: "Psikoeğitim Nedir?" },
    {
        slug: "psikoegitim-yas-gruplari",
        title: "Psikoeğitim Hangi Yaş Grupları için Uygundur?",
    },
    { slug: "bdt-nedir", title: "Bilişsel Davranışçı Terapi (BDT) Nedir?" },
    {
        slug: "bdt-terapide-nasil-kullanilir",
        title: "BDT Terapide Nasıl Kullanılır?",
    },
    { slug: "kariyer-danismanligi-nedir", title: "Kariyer Danışmanlığı Nedir?" },
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

            <img src="https://images.unsplash.com/photo-1509909756405-be0199881695?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Background" className="w-full h-[60vh] object-cover max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-9" />
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
                                            {item.items.map((listItem: string, listIndex: number) => (
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

