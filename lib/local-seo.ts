import { SERVICE_DISTRICTS } from "@/lib/site";

export type LocalLandingConfig = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  serviceName: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  locationFocus: string;
  gallery: { src: string; alt: string }[];
  faq: { question: string; answer: string }[];
};

// Yerel SEO sayfalarinin ortak slider galerisi.
// DOSYA ADI PLANI (senin yukleyecegin yerel gorseller icin):
// /images/local/local-01.webp ... /images/local/local-12.webp
// Nerede kullaniliyor: Tum /[localSlug] sayfalarindaki "Model ve Proje Gorselleri" slideri.
const sharedGallery = [
  "/assets/legacy/images/1.png",
  "/assets/legacy/images/2.jpg",
  "/assets/legacy/images/3.jpg",
  "/assets/legacy/images/4.jpg",
  "/assets/legacy/images/5.jpg",
  "/assets/legacy/images/6.jpg",
  "/assets/legacy/images/7.jpg",
  "/assets/legacy/images/8.jpg",
  "/assets/legacy/images/9.jpg",
  "/assets/legacy/images/10.jpg",
  "/assets/legacy/images/11.jpg",
  "/assets/legacy/images/12.jpg",
];

function buildGallery(prefix: string) {
  return sharedGallery.map((src, index) => ({
    src,
    alt: `${prefix} balikesir-proje-ornek-${index + 1}.webp`,
  }));
}

export const localLandingConfigs: LocalLandingConfig[] = [
  {
    slug: "balikesir-celik-konstruksiyon-ev",
    metaTitle: "Balıkesir Çelik Konstrüksiyon Ev | MTK House",
    metaDescription:
      "Balıkesir ve çevresinde depreme dayanıklı çelik konstrüksiyon ev çözümleri. Anahtar teslim proje için MTK House ile hemen iletişime geçin.",
    h1: "Balıkesir Çelik Konstrüksiyon Ev Çözümleri",
    serviceName: "çelik konstrüksiyon ev",
    primaryKeyword: "balıkesir çelik konstrüksiyon ev",
    secondaryKeywords: [
      "depreme dayanıklı ev balıkesir",
      "anahtar teslim çelik ev balıkesir",
      "hafif çelik yapı balıkesir",
    ],
    longTailKeywords: ["balıkesir çelik ev fiyatları 2026", "bandırma çelik konstrüksiyon firması"],
    locationFocus: "Balıkesir merkez ve çevre ilçeler",
    gallery: buildGallery("balikesir-celik-konstruksiyon-ev"),
    faq: [
      {
        question: "Balıkesir’de çelik konstrüksiyon ev teslim süresi ne kadar?",
        answer:
          "Projeye göre değişmekle birlikte keşif, proje onayı ve üretim dahil süreç planlı şekilde ilerletilir. Ortalama teslim aralığı 6-12 hafta arasında değişir.",
      },
      {
        question: "Çelik evler Balıkesir deprem koşulları için uygun mu?",
        answer:
          "Doğru statik proje ve yönetmeliklere uygun uygulama ile çelik yapılar Balıkesir deprem koşullarına uygun, güvenli bir çözüm sunar.",
      },
    ],
  },
  {
    slug: "balikesir-prefabrik-ev",
    metaTitle: "Balıkesir Prefabrik Ev Fiyatları | MTK House",
    metaDescription:
      "Balıkesir prefabrik ev fiyatları, model seçenekleri ve anahtar teslim hizmetleri için MTK House uzman ekibinden hızlı teklif alın.",
    h1: "Balıkesir Prefabrik Ev Fiyatları ve Modelleri",
    serviceName: "prefabrik ev",
    primaryKeyword: "balıkesir prefabrik ev fiyatları",
    secondaryKeywords: [
      "uygun fiyatlı prefabrik balıkesir",
      "anahtar teslim prefabrik balıkesir",
      "depreme dayanıklı prefabrik ev balıkesir",
    ],
    longTailKeywords: ["balıkesir prefabrik ev fiyatları 2026", "edremit prefabrik ev yapan firmalar"],
    locationFocus: "Balıkesir ve çevre ilçeler",
    gallery: buildGallery("balikesir-prefabrik-ev"),
    faq: [
      {
        question: "Balıkesir prefabrik ev fiyatları nasıl belirleniyor?",
        answer:
          "Metrekare, kat sayısı, yalıtım seviyesi, cephe seçimi, zemin hazırlığı ve anahtar teslim kapsamı fiyatlandırmayı belirler.",
      },
      {
        question: "Prefabrik ev için Balıkesir’de ruhsat süreci nasıl ilerler?",
        answer:
          "Arsa imar durumu, proje çizimi ve belediye süreçleri adım adım takip edilir. MTK House süreç planlamasında danışmanlık sağlar.",
      },
    ],
  },
  {
    slug: "balikesir-bungalov-ev",
    metaTitle: "Balıkesir Bungalov Ev Projeleri | MTK House",
    metaDescription:
      "Balıkesir’de bungalov ev yapımı, çelik bungalov modelleri ve anahtar teslim proje hizmetleri için MTK House ile teklif alın.",
    h1: "Balıkesir Bungalov Ev Yapımı ve Projeleri",
    serviceName: "bungalov ev",
    primaryKeyword: "balıkesir bungalov ev",
    secondaryKeywords: [
      "ayvalık bungalov ev yapımı",
      "depreme dayanıklı bungalov balıkesir",
      "anahtar teslim bungalov ev",
    ],
    longTailKeywords: ["ayvalık bungalov ev yapımı", "balıkesir bungalov ev fiyatları 2026"],
    locationFocus: "Balıkesir kıyı ilçeleri ve yayla bölgeleri",
    gallery: buildGallery("balikesir-bungalov-ev"),
    faq: [
      {
        question: "Balıkesir’de bungalov ev için en uygun ilçeler hangileri?",
        answer:
          "Edremit, Ayvalık ve Burhaniye gibi bölgeler hem iklim hem kullanım senaryosu açısından bungalov yatırımları için uygundur.",
      },
      {
        question: "Çelik bungalov evin avantajı nedir?",
        answer:
          "Hızlı kurulum, yüksek deprem performansı, uzun ömürlü taşıyıcı sistem ve bakım kolaylığı en önemli avantajlar arasındadır.",
      },
    ],
  },
  {
    slug: "balikesir-pimapen-pvc-dograma",
    metaTitle: "Balıkesir Pimapen PVC Doğrama | MTK House",
    metaDescription:
      "Balıkesir’de pimapen, PVC doğrama ve cam balkon uygulamalarıyla enerji tasarruflu, konforlu yaşam alanları için MTK House.",
    h1: "Balıkesir Pimapen, PVC Doğrama ve Cam Balkon",
    serviceName: "pimapen pvc doğrama",
    primaryKeyword: "balıkesir pimapen",
    secondaryKeywords: [
      "ısı yalıtımlı pimapen balıkesir",
      "enerji tasarruflu pencere balıkesir",
      "cam balkon balıkesir",
    ],
    longTailKeywords: ["balıkesir pimapen fiyatları 2026", "balıkesir cam balkon yaptırma"],
    locationFocus: "Balıkesir merkez ve tüm ilçeler",
    gallery: buildGallery("balikesir-pimapen-pvc-dograma"),
    faq: [
      {
        question: "Balıkesir’de pimapen değişimi enerji tasarrufu sağlar mı?",
        answer:
          "Doğru profil ve cam seçimi ile ısı kayıpları azalır, iç mekan konforu yükselir ve enerji faturalarında düşüş görülür.",
      },
      {
        question: "Cam balkon uygulaması hangi yapılara uygundur?",
        answer:
          "Konut, yazlık ve ticari alanlarda taşıyıcı koşullar uygun olduğu sürece cam balkon sistemleri güvenle uygulanabilir.",
      },
    ],
  },
  {
    slug: "edremit-celik-ev",
    metaTitle: "Edremit Çelik Ev Çözümleri | MTK House",
    metaDescription:
      "Edremit’te depreme dayanıklı çelik ev çözümleri, anahtar teslim proje yönetimi ve fiyat teklifi için MTK House.",
    h1: "Edremit Çelik Ev Yapan Firma | MTK House",
    serviceName: "çelik ev",
    primaryKeyword: "edremit çelik ev",
    secondaryKeywords: ["edremit çelik konstrüksiyon", "anahtar teslim çelik ev edremit", "hafif çelik yapı edremit"],
    longTailKeywords: ["edremit çelik ev fiyatları 2026", "edremit çelik ev yapan firmalar"],
    locationFocus: "Edremit ve Körfez hattı",
    gallery: buildGallery("edremit-celik-ev"),
    faq: [],
  },
  {
    slug: "bandirma-prefabrik-ev",
    metaTitle: "Bandırma Prefabrik Ev Modelleri | MTK House",
    metaDescription:
      "Bandırma prefabrik ev modelleri ve anahtar teslim fiyat teklifleri için MTK House ile güvenli ve hızlı çözümler.",
    h1: "Bandırma Prefabrik Ev Yapan Firma | MTK House",
    serviceName: "prefabrik ev",
    primaryKeyword: "bandırma prefabrik ev",
    secondaryKeywords: ["bandırma prefabrik ev fiyatları", "anahtar teslim prefabrik bandırma"],
    longTailKeywords: ["bandırma prefabrik ev yapan firmalar", "bandırma prefabrik ev fiyatları 2026"],
    locationFocus: "Bandırma ilçe merkezi ve yakın mahalleler",
    gallery: buildGallery("bandirma-prefabrik-ev"),
    faq: [],
  },
  {
    slug: "ayvalik-bungalov-ev",
    metaTitle: "Ayvalık Bungalov Ev Yapımı | MTK House",
    metaDescription:
      "Ayvalık bungalov ev yapımı, çelik bungalov model seçenekleri ve anahtar teslim uygulamalar için MTK House.",
    h1: "Ayvalık Bungalov Ev Yapımı ve Modelleri",
    serviceName: "bungalov ev",
    primaryKeyword: "ayvalık bungalov ev yapımı",
    secondaryKeywords: ["ayvalık çelik bungalov", "anahtar teslim bungalov ayvalık"],
    longTailKeywords: ["ayvalık bungalov ev fiyatları 2026", "ayvalık bungalov ev yapan firmalar"],
    locationFocus: "Ayvalık merkez ve kıyı mahalleler",
    gallery: buildGallery("ayvalik-bungalov-ev"),
    faq: [],
  },
  {
    slug: "burhaniye-celik-konstruksiyon",
    metaTitle: "Burhaniye Çelik Konstrüksiyon Ev | MTK House",
    metaDescription:
      "Burhaniye çelik konstrüksiyon ev projelerinde deprem güvenliği, anahtar teslim uygulama ve hızlı teklif MTK House’ta.",
    h1: "Burhaniye Çelik Konstrüksiyon Ev Hizmetleri",
    serviceName: "çelik konstrüksiyon ev",
    primaryKeyword: "burhaniye çelik konstrüksiyon",
    secondaryKeywords: ["burhaniye çelik ev", "depreme dayanıklı ev burhaniye"],
    longTailKeywords: ["burhaniye çelik ev fiyatları 2026", "burhaniye anahtar teslim çelik ev"],
    locationFocus: "Burhaniye ve çevre yerleşimler",
    gallery: buildGallery("burhaniye-celik-konstruksiyon"),
    faq: [],
  },
  {
    slug: "gonen-prefabrik-ev",
    metaTitle: "Gönen Prefabrik Ev Fiyatları | MTK House",
    metaDescription:
      "Gönen prefabrik ev fiyatları, model karşılaştırmaları ve anahtar teslim kurulum hizmetleri için MTK House.",
    h1: "Gönen Prefabrik Ev Modelleri ve Fiyatları",
    serviceName: "prefabrik ev",
    primaryKeyword: "gönen prefabrik ev",
    secondaryKeywords: ["gönen prefabrik ev fiyatları", "uygun fiyatlı prefabrik gönen"],
    longTailKeywords: ["gönen prefabrik ev fiyatları 2026", "gönen prefabrik ev yapan firma"],
    locationFocus: "Gönen merkez ve kırsal mahalleler",
    gallery: buildGallery("gonen-prefabrik-ev"),
    faq: [],
  },
];

export const localSlugs = localLandingConfigs.map((item) => item.slug);

export function getLocalLanding(slug: string) {
  return localLandingConfigs.find((item) => item.slug === slug);
}

function sectionParagraphs(config: LocalLandingConfig) {
  const [secondaryA, secondaryB, secondaryC] = config.secondaryKeywords;
  const [longTailA, longTailB] = config.longTailKeywords;

  return [
    {
      heading: `${config.locationFocus} İçin ${config.serviceName} Planlaması`,
      paragraphs: [
        `${config.primaryKeyword} aramasında güçlü görünürlük hedefleyen bir marka için ilk adım, yerel talep davranışını doğru okumaktır. Balıkesir merkez, Edremit, Bandırma ve Ayvalık gibi ilçelerde kullanıcıların beklentisi hızlı teslim, net fiyatlandırma ve deprem güvenliğidir. MTK House bu nedenle keşif sürecini standart bir teklif formundan daha ileriye taşır; arsa durumu, kullanım senaryosu, iklim koşulları ve bütçe yaklaşımı birlikte ele alınır. Bu yaklaşım sadece satış odaklı değil, proje risklerini en baştan azaltan profesyonel bir proje yönetim modelidir.`,
        `Yerel SEO açısından sayfanın her bölümünde ${config.primaryKeyword}, ${secondaryA} ve ${secondaryB} gibi ifadelerin doğal bağlamda geçmesi, arama motoruna sayfanın niyetini net şekilde anlatır. Bunun yanında kullanıcıyı telefon veya WhatsApp ile aksiyona yönlendiren güçlü çağrılar, Google Ads kalite puanını yükselten “landing page experience” metriğine katkı sağlar. MTK House yerel bölge dilini, saha tecrübesini ve teknik yeterliliği tek bir teklif akışında birleştirerek dönüşüm oranını artırmayı hedefler.`,
      ],
    },
    {
      heading: "Deprem Güvenliği, Mühendislik ve Malzeme Standardı",
      paragraphs: [
        `Balıkesir ve çevresi için konut planlamasında en kritik başlık deprem güvenliğidir. Bu nedenle ${secondaryA} ve ${secondaryC} gibi aramalarda kullanıcıya yalnızca pazarlama metni değil, teknik temeli güçlü açıklamalar sunulmalıdır. Statik proje doğrulaması, taşıyıcı sistem seçimi, bağlantı detaylarının uygulanması ve sahadaki kalite kontrol adımları birbirine bağlı süreçlerdir. MTK House projelerinde bu adımlar net biçimde planlanarak müşteriyle şeffaf paylaşılır.`,
        `Google arama niyeti açısından bakıldığında kullanıcılar “fiyat”, “süre”, “dayanım” ve “firma güveni” başlıklarında cevap arar. Bu sayfa mimarisi söz konusu beklentileri ayrı başlıklarda cevaplayacak şekilde hazırlanır. Böylece kullanıcı sitede daha fazla zaman geçirir, sayfalar arası gezinme artar ve hemen çıkma oranı düşer. Arama motoru tarafında bu davranış sinyalleri, sayfanın kalite algısını destekleyerek organik performansı güçlendirebilir.`,
      ],
    },
    {
      heading: "Fiyatlandırma ve Anahtar Teslim Süreç Yönetimi",
      paragraphs: [
        `${longTailA} ve ${longTailB} benzeri uzun kuyruklu sorgular, dönüşüme en yakın kullanıcıları getirir. Bu kullanıcı kitlesi sadece “en ucuz fiyatı” değil, hangi kalemin fiyata dahil olduğunu görmek ister. MTK House teklif yaklaşımında metrekare, plan tipi, yalıtım seviyesi, pencere sistemi, montaj kapsamı ve anahtar teslim kalemleri ayrı ayrı belirtilir. Bu şeffaflık hem güven oluşturur hem de teklif sonrası sürpriz maliyet riskini azaltır.`,
        `Yerel hizmet algısını güçlendirmek için Balıkesir ilçelerine göre saha planı yapmak da önemlidir. Edremit ve Ayvalık gibi kıyı etkisi yüksek bölgelerde nem ve rüzgar parametreleri değerlendirilirken, iç kesimlerde farklı yalıtım ve çatı detayları devreye alınabilir. Bu teknik yaklaşım metin içinde açık biçimde işlendiğinde kullanıcı “kopya içerik” hissi yaşamaz; gerçekten bölgeyi bilen bir ekipten hizmet aldığını anlar ve iletişime geçme olasılığı yükselir.`,
      ],
    },
    {
      heading: "Google Ads Kalite Puanı İçin Landing Page Yapısı",
      paragraphs: [
        `Google Ads tarafında başarı yalnızca reklam metnine değil, reklama gelen kullanıcının gördüğü sayfanın niteliğine bağlıdır. Bu yüzden üst bölümde güçlü başlık, net değer önerisi, hemen ara butonu, WhatsApp butonu ve hızlı teklif formu birlikte konumlandırılır. Formda isim, telefon, ilçe, hizmet türü ve mesaj alanlarının olması hem kullanıcı deneyimini basitleştirir hem de satış ekibi için kaliteli lead üretir.`,
        `Kalite puanını etkileyen bir diğer başlık da sayfa hızı ve mobil deneyimdir. Görsellerin lazy loading kullanması, metin hiyerarşisinin H1-H2-H3 düzeninde ilerlemesi, içerikte gereksiz tekrarların azaltılması ve dönüşüm butonlarının mobilde kolay tıklanabilir olması gerekir. MTK House sayfa kurgusunda bu kriterler gözetilerek hem organik trafik hem reklam dönüşümleri aynı anda optimize edilir.`,
      ],
    },
    {
      heading: "Balıkesir İlçe Odaklı Hizmet Ağı ve İç Linkleme",
      paragraphs: [
        `Yerel SEO’da güçlü bir strateji için tek bir ana hizmet sayfası yeterli değildir. Balıkesir merkez sayfaları ile Edremit, Bandırma, Ayvalık, Burhaniye ve Gönen gibi ilçe landing page’lerinin birbirine iç linklerle bağlanması gerekir. Bu yapı, arama motoruna sitenin yerel konu bütünlüğünü gösterir. Kullanıcı içinse ilçe bazlı ihtiyaçlara hızlı ulaşım sağlar ve karar sürecini kısaltır.`,
        `Bu sayfada yer alan ilçe listeleri, hizmet bağlantıları ve ilgili blog yazıları arasında kurulan çapraz linkler sayesinde site içi gezinme artar. Örneğin pimapen içeriğinden çelik ev rehberine yönlendirme veya blog yazısından ana hizmet sayfasına dönüş linki, hem SEO otoritesi hem kullanıcı yolculuğu açısından değerlidir. Sonuçta hedef, Balıkesir odaklı aramalarda görünürlüğü artırırken telefon araması ve teklif formu dönüşümünü kalıcı şekilde büyütmektir.`,
      ],
    },
  ];
}

export function getLocalSections(config: LocalLandingConfig) {
  return sectionParagraphs(config);
}

export function buildLocalFaq(config: LocalLandingConfig) {
  if (config.faq.length) return config.faq;
  return [
    {
      question: `${config.locationFocus} bölgesinde keşif hizmeti veriyor musunuz?`,
      answer:
        "Evet. MTK House ekipleri Balıkesir merkez ve çevre ilçelerde yerinde keşif yaparak doğru planlama ile teklif sunar.",
    },
    {
      question: "Teklif sürecinde hangi bilgiler gerekli?",
      answer:
        "Arsa konumu, hedef metrekare, oda planı ve kullanım amacı gibi temel bilgilerle hızlı teklif ve proje yönlendirmesi yapılır.",
    },
  ];
}

export const localDistrictLinks = [
  "/edremit-celik-ev",
  "/bandirma-prefabrik-ev",
  "/ayvalik-bungalov-ev",
  "/burhaniye-celik-konstruksiyon",
  "/gonen-prefabrik-ev",
];

export const servedDistrictLabel = SERVICE_DISTRICTS.join(", ");
