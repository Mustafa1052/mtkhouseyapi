export const SITE_URL = "https://www.mtkhouseyapi.com";
export const BRAND = "MTK House";
export const PHONE_DISPLAY = "0534 226 26 72";
export const PHONE_RAW = "905342262672";
export const WHATSAPP_RAW = "905342262672";
export const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=905342262672&text=Merhaba+MTK+House%2C+teklif+almak+istiyorum.&type=phone_number&app_absent=0";
export const SERVICE_AREA = "Balıkesir ve çevresi";
export const SECOND_PHONE_DISPLAY = "0507 224 21 10";
export const SECOND_PHONE_RAW = "905072242110";
export const CONTACT_EMAIL = "m.tolunay61@icloud.com";
export const INSTAGRAM_URL = "https://www.instagram.com/mtk_celikyapi/";
export const ADDRESS_TEXT = "Paşa Alanı Mahallesi, Balıkesir Merkez / Balıkesir";
export const WORKING_HOURS = "Pazartesi - Cumartesi 08:30 - 19:00";
export const SERVICE_DISTRICTS = [
  "Karesi",
  "Altıeylül",
  "Edremit",
  "Bandırma",
  "Ayvalık",
  "Burhaniye",
  "Gönen",
  "Susurluk",
  "Bigadiç",
  "Sındırgı",
];
export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.910954546293!2d27.8830874!3d39.6517185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b7011788a64d05%3A0x60c0052088a33122!2sMTK%20House!5e0!3m2!1str!2str!4v1771915751070!5m2!1str!2str";

export const contacts = [
  {
    name: "Mustafa Tolunay Kayır",
    phoneDisplay: PHONE_DISPLAY,
    phoneRaw: PHONE_RAW,
  },
  {
    name: "Emin Kayır",
    phoneDisplay: SECOND_PHONE_DISPLAY,
    phoneRaw: SECOND_PHONE_RAW,
  },
];

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Çelik Evler", href: "/celik-konstruksiyon-evler" },
  { label: "Prefabrik Evler", href: "/prefabrik-evler" },
  { label: "Bungalov Evler", href: "/bungalov-evler" },
  { label: "Pimapen & Cam Balkon", href: "/pimapen-pvc-dograma" },
  { label: "Projeler", href: "/projeler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/#teklif-formu" },
];

export type ServiceCard = {
  title: string;
  description: string;
  href: string;
  keywords: string[];
};

export const serviceCards: ServiceCard[] = [
  {
    title: "Çelik Konstrüksiyon Evler",
    description:
      "Depreme dayanıklı, hızlı montajlı ve uzun ömürlü hafif çelik yapı sistemleriyle modern yaşam alanları.",
    href: "/celik-konstruksiyon-evler",
    keywords: ["celik konstruksiyon ev", "depreme dayanikli ev", "celik ev fiyatlari"],
  },
  {
    title: "Prefabrik Evler",
    description:
      "Hızlı üretim, kontrollü maliyet ve anahtar teslim süreç ile prefabrik ev çözümleri.",
    href: "/prefabrik-evler",
    keywords: ["prefabrik ev", "prefabrik ev fiyatlari", "anahtar teslim prefabrik"],
  },
  {
    title: "Bungalov Evler",
    description:
      "Doğayla uyumlu, estetik ve dayanıklı modern bungalov projeleri. Kısa sürede teslim.",
    href: "/bungalov-evler",
    keywords: ["bungalov ev", "celik bungalov", "modern bungalov projeleri"],
  },
  {
    title: "Pimapen, PVC ve Cam Balkon",
    description:
      "Isı yalıtımlı pencere, enerji tasarruflu PVC doğrama ve dört mevsim kullanılabilen cam balkon çözümleri.",
    href: "/pimapen-pvc-dograma",
    keywords: ["pimapen pencere", "PVC doğrama", "cam balkon", "enerji tasarruflu pencere sistemleri"],
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Çelik konstrüksiyon evler depreme dayanıklı mıdır?",
    answer:
      "Evet. Hafif çelik taşıyıcı sistem, depremde oluşan yatay yükleri daha kontrollü dağıtır. Doğru statik proje, kalite kontrolleri ve profesyonel montaj ile yüksek deprem performansı elde edilir.",
  },
  {
    question: "Prefabrik ev teslim süresi ne kadar?",
    answer:
      "Projeye, metrekareye ve uygulama lokasyonuna göre değişir. Ortalama süreç proje onayı sonrasında 6-12 hafta arasındadır.",
  },
  {
    question: "Pimapen pencere gerçekten enerji tasarrufu sağlar mı?",
    answer:
      "Doğru cam kombinasyonu ve kaliteli fitil detayı ile ısı kayıpları azalır, yazın serinlik kışında sıcaklık korunur. Bu da enerji tüketimini düşürür.",
  },
  {
    question: "MTK House hangi bölgelere hizmet veriyor?",
    answer:
      "Merkezimiz Balıkesir'dedir. Balıkesir ve çevresindeki ilçelerde çelik, prefabrik, bungalov ve PVC doğrama hizmetleri sunuyoruz.",
  },
];

export type ProjectItem = {
  id: string;
  title: string;
  category: "celik" | "prefabrik" | "bungalov" | "pimapen";
  image: string;
  alt: string;
  description: string;
};

// PROJELER SAYFASI GORSEL ESLESTIRME NOTU:
// Bu listede her "id", galeride birebir kullanilir.
// id = prj-1  -> /images/projeler/prj-1.webp
// id = prj-2  -> /images/projeler/prj-2.webp
// ...
// id = prj-22 -> /images/projeler/prj-22.webp
// Kendi gorsellerini eklerken sadece image alanindaki URL'i degistirmen yeterli.
// Nerede kullaniliyor: /projeler sayfasi + ana sayfadaki "Referans Projeler" bolumu.
export const projects: ProjectItem[] = [
  {
    id: "prj-1",
    title: "Edremit Çelik Villa Projesi",
    category: "celik",
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1600&q=80",
    alt: "Edremit'te deprem dayanımlı çelik konstrüksiyon villa dış cephe görünümü",
    description: "2 katlı, yüksek izolasyonlu ve deprem performansı odaklı anahtar teslim çelik villa.",
  },
  {
    id: "prj-2",
    title: "Ayvalık Prefabrik Yaşam Evi",
    category: "prefabrik",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80",
    alt: "Ayvalık prefabrik ev projesi modern cephe ve bahçe detayı",
    description: "Hızlı kurulumla teslim edilen 3+1 prefabrik aile evi.",
  },
  {
    id: "prj-3",
    title: "Kazdağları Bungalov Konaklama",
    category: "bungalov",
    image:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1600&q=80",
    alt: "Kazdağları'nda modern çelik bungalov ev dış görünümü",
    description: "Turizm yatırımı için planlanan modern bungalov yapılar.",
  },
  {
    id: "prj-4",
    title: "Bandırma Pimapen Yenileme",
    category: "pimapen",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    alt: "Bandırma pimapen pencere yenileme ısı yalıtımlı PVC doğrama uygulaması",
    description: "Eski doğramalar yerine enerji verimli pimapen pencere uygulaması.",
  },
  {
    id: "prj-5",
    title: "Gönen Çelik Karkas Çiftlik Evi",
    category: "celik",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1600&q=80",
    alt: "Gönen çelik karkas çiftlik evi montaj sonrası genel görünüm",
    description: "Kısa sürede üretim ve montajla tamamlanan dayanıklı yaşam alanı.",
  },
  {
    id: "prj-6",
    title: "Balıkesir Merkez Isı Yalıtımlı PVC",
    category: "pimapen",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
    alt: "Balıkesir merkezde ısı yalıtımlı pencere sistemleri montaj detayı",
    description: "Konut projesinde ses ve ısı yalıtımını güçlendiren PVC doğrama çözümleri.",
  },
  {
    id: "prj-7",
    title: "Altıeylül Modern Çelik Konut",
    category: "celik",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    alt: "Balıkesir Altıeylül'de çelik taşıyıcılı modern konut projesi dış cephe görünümü",
    description: "Deprem güvenliği ve enerji verimliliğini birleştiren modern çelik konut uygulaması.",
  },
  {
    id: "prj-8",
    title: "Burhaniye Prefabrik Yazlık",
    category: "prefabrik",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    alt: "Burhaniye'de anahtar teslim prefabrik yazlık ev projesi",
    description: "Kısa sürede tamamlanan, estetik cepheli ve konfor odaklı prefabrik yazlık.",
  },
  {
    id: "prj-9",
    title: "Edremit Çelik Bungalov Serisi",
    category: "bungalov",
    image:
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1600&q=80",
    alt: "Edremit'te doğa içinde inşa edilen çelik bungalov proje grubu",
    description: "Turizm konseptine uygun, hızlı kurulumlu ve dayanıklı bungalov seri uygulaması.",
  },
  {
    id: "prj-10",
    title: "Karesi PVC Pencere Dönüşümü",
    category: "pimapen",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    alt: "Karesi ilçesinde ısı yalıtımlı pimapen pencere dönüşüm uygulaması",
    description: "Eski doğramaların enerji tasarruflu PVC sistemlerle yenilendiği konfor projesi.",
  },
  {
    id: "prj-11",
    title: "Balıkesir Şantiye Projesi 1",
    category: "prefabrik",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    alt: "Balıkesir şantiye alanında prefabrik panel montajı",
    description: "Sahada montaj aşamasında çekilmiş uygulama fotoğrafı.",
  },
  {
    id: "prj-12",
    title: "Balıkesir Şantiye Projesi 2",
    category: "prefabrik",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
    alt: "Saha ekibinin prefabrik yapı kurulum hazırlığı",
    description: "Yapım sürecinin ilk aşamalarını gösteren gerçek proje karesi.",
  },
  {
    id: "prj-13",
    title: "Balıkesir Şantiye Projesi 3",
    category: "prefabrik",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    alt: "Çelik ve prefabrik birleşik taşıyıcı sistem montajı",
    description: "Taşıyıcı sistem ve saha işçiliğini gösteren uygulama görüntüsü.",
  },
  {
    id: "prj-14",
    title: "Altıeylül Şantiye Projesi 4",
    category: "prefabrik",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80",
    alt: "Tamamlanan prefabrik yapının sade dış cephe görünümü",
    description: "Teslime yakın aşamada sahadan alınmış dış cephe karesi.",
  },
  {
    id: "prj-15",
    title: "Altıeylül Şantiye Projesi 5",
    category: "prefabrik",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    alt: "Bahçe bağlantılı prefabrik konut dış görünüşü",
    description: "Sahadan gerçek kullanım odağında çekilmiş proje fotoğrafı.",
  },
  {
    id: "prj-16",
    title: "Karesi Şantiye Projesi 6",
    category: "prefabrik",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    alt: "Uygulama sonrası prefabrik yapı genel görünümü",
    description: "Tamamlanan işin yerinde çekilmiş örnek fotoğrafı.",
  },
  {
    id: "prj-17",
    title: "Karesi Şantiye Projesi 7",
    category: "prefabrik",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80",
    alt: "Arazide kurulu prefabrik yapı dış cephe detayı",
    description: "Araziye uyarlanmış prefabrik proje örneği.",
  },
  {
    id: "prj-18",
    title: "Edremit Şantiye Projesi 8",
    category: "prefabrik",
    image:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1600&q=80",
    alt: "Doğa içinde konumlanmış prefabrik yapı örneği",
    description: "Müşteri sahasından gerçek ve sade bir uygulama görünümü.",
  },
  {
    id: "prj-19",
    title: "Edremit Şantiye Projesi 9",
    category: "prefabrik",
    image:
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=1600&q=80",
    alt: "Şantiye sonrası teslime hazır prefabrik proje",
    description: "Teslim öncesi kontrol aşamasından alınmış fotoğraf.",
  },
  {
    id: "prj-20",
    title: "Ayvalık Şantiye Projesi 10",
    category: "prefabrik",
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1600&q=80",
    alt: "Anahtar teslim sonrası dış cephe ve saha düzeni",
    description: "Tamamlanan projeye ait doğal çekim örneği.",
  },
  {
    id: "prj-21",
    title: "Ayvalık Şantiye Projesi 11",
    category: "prefabrik",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1800&q=80",
    alt: "Kırsal arazide tamamlanan prefabrik konut",
    description: "Gerçek kullanım ve saha koşullarında çekilmiş görsel.",
  },
  {
    id: "prj-22",
    title: "Burhaniye Şantiye Projesi 12",
    category: "prefabrik",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=80",
    alt: "Prefabrik yapı ve pencere uygulaması dış görünüm",
    description: "Uygulama sonrasında çekilmiş sade proje fotoğrafı.",
  },
];

export const testimonials = [
  {
    name: "Hakan K.",
    text: "Deprem güvenliği konusunda detaylı bilgilendirme aldık. Süreç boyunca proje yönetimi çok düzenliydi.",
  },
  {
    name: "Merve A.",
    text: "Prefabrik evimizi planlanandan önce teslim ettiler. İletişim ve iş kalitesi beklentimizin üzerindeydi.",
  },
  {
    name: "Tolga Y.",
    text: "Pimapen değişimi sonrası enerji faturamız belirgin şekilde düştü. Temiz işçilik ve profesyonel ekip.",
  },
];

export const trustBadges = [
  "Depreme Dayanıklı Yapı Garantisi",
  "Uzman Mühendis Kadro",
  "Anahtar Teslim Projeler",
  "Şeffaf Fiyatlandırma",
  `${SERVICE_AREA} yerel hizmet`,
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  keywords: string[];
  coverImage: string;
  coverAlt: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const steelSeoSections = [
  {
    heading: "Çelik Konstrüksiyon Ev Nedir ve Neden Tercih Edilir?",
    paragraphs: [
      "Çelik konstrüksiyon ev, taşıyıcı sistemin betonarme yerine fabrikada kontrollü şekilde üretilen çelik profillerden oluştuğu modern bir yapı modelidir. Geleneksel yapılarda sahadaki hata payı ve hava koşullarına bağlı gecikmeler daha fazla görülebilirken, hafif çelik yapı sistemlerinde her bir parçada milimetrik üretim disiplini sağlanır. Bu da hem kalite standardını yükselten hem de sahada hızlı montaj imkanı sunan bir yaklaşım yaratır. MTK House olarak kullandığımız çelik konstrüksiyon ev çözümleri, estetik ve dayanıklılığı aynı potada buluşturur.",
      "Bugün çelik konstrüksiyon ev modellerine ilginin artmasının en temel nedeni deprem riskidir. Türkiye'nin deprem kuşağında yer alması, yalnızca yapı güzel olsun beklentisinden daha fazlasını zorunlu kılar. Tasarım aşamasından itibaren deprem yüklerinin doğru hesaplanması, malzeme kalitesinin belgeli olması ve montaj sürecinin teknik prosedürlere göre yürütülmesi gerekir. MTK House projelerinde bu süreç bir bütün olarak ele alınır; statik analiz, detay çözümleri ve sahadaki uygulama birbirini tamamlayan adımlarla ilerler.",
    ],
  },
  {
    heading: "Depreme Dayanıklı Ev Tasarımında Mühendislik Yaklaşımı",
    paragraphs: [
      "Depreme dayanıklı ev kavramı yalnızca kalın kolon veya fazla demir kullanmak anlamına gelmez. Asıl belirleyici olan, yapının deprem sırasında maruz kalacağı kuvvetleri nasıl yönettiğidir. Hafif çelik yapı sistemleri, yüksek mukavemet-ağırlık oranı sayesinde bu konuda avantaja sahiptir. Yapının toplam kütlesi azaldıkça deprem anında oluşan atalet kuvvetleri de azalır. Bu fiziksel avantaj, çelik bağlantı detaylarıyla birleştiğinde daha kontrollü bir davranış elde edilir.",
      "MTK House projelerinde deprem performansı için zemin verisi, kat yükseklikleri, açıklıklar ve cephe boşlukları birlikte değerlendirilir. Proje ekibi, taşıyıcı elemanların yerleşimini yalnızca statik yeterlilik için değil, kullanım konforu ve gelecekteki ihtiyaçlar için de optimize eder. Mutfak, salon ve yatak odası gibi alanlarda açıklıkların doğru konumlandırılması hem mekansal ferahlık hem de yapısal denge açısından kritik rol oynar. Sonuç olarak estetikten ödün vermeden güvenlik odaklı bir yaşam alanı oluşturulur.",
    ],
  },
  {
    heading: "Çelik Ev Fiyatları Neye Göre Değişir?",
    paragraphs: [
      "Çelik ev fiyatları tek bir rakamla ifade edilemeyecek kadar proje odaklı bir konudur. Metrekare büyüklüğü, kat adedi, mimari detay seviyesi, cephe kaplama seçimi, yalıtım kalınlığı ve mekanik-elektrik sistem tercihleri fiyatları doğrudan etkiler. Ayrıca arsanın eğimi, ulaşım koşulları ve altyapı hazırlığı gibi saha faktörleri de toplam maliyette belirleyici olabilir. Bu nedenle doğru maliyet analizi için standart paket yerine proje bazlı keşif gerekir.",
      "MTK House olarak teklif sürecinde şeffaf fiyatlandırma prensibi uygularız. Müşteri sadece toplam tutarı değil, bu tutarın hangi teknik kalemlerden oluştuğunu da net şekilde görür. Karkas sistem, dış cephe çözümleri, çatı, pencere sistemi, iç mekan uygulamaları ve anahtar teslim kapsam açıkça tanımlanır. Bu yöntem, sürpriz maliyetleri önler ve yatırım kararını daha sağlıklı hale getirir. Uzun vadede bakıldığında doğru yapısal kalite, bakım ihtiyacını azaltarak toplam sahip olma maliyetini de düşürür.",
    ],
  },
  {
    heading: "Hafif Çelik Yapı Sistemlerinin Teknik Avantajları",
    paragraphs: [
      "Hafif çelik yapı sistemleri, üretimden montaja kadar standartlaşmış süreçler sayesinde kalite sürekliliği sağlar. Fabrika ortamı, malzemenin kesim ve şekillendirme hassasiyetini yüksek tutar; sahada yalnızca birleştirme ve detay çözümleri yapılır. Bu da uygulama hızını artırırken hava koşullarından etkilenme riskini azaltır. Özellikle zaman baskısı olan yatırım projelerinde bu avantaj, operasyonel verimlilik açısından büyük değer yaratır.",
      "Teknik performans tarafında ise ısı ve ses yalıtımı katmanlarının doğru kurgulanması kolaylaşır. Çelik sistemde duvar katmanları modül mantığı ile tasarlandığından, enerji verimliliğini artıracak malzeme kombinasyonları rahatlıkla uygulanır. Uygun havalandırma ve buhar denetimi ile birlikte iç mekan konforu yükselir. Böylesi bir kurgu, yazın aşırı ısınma ve kışın ısı kaybı gibi sorunları azaltarak yaşam kalitesini artırır.",
    ],
  },
  {
    heading: "MTK House ile Anahtar Teslim Süreç",
    paragraphs: [
      "Anahtar teslim bir çelik konstrüksiyon ev projesi, yalnızca sahada bir bina kurmaktan ibaret değildir; proje yönetimi disiplini gerektirir. İlk görüşmede ihtiyaç analizi yapılır, arsa verileri toplanır ve kullanım senaryoları netleştirilir. Sonrasında mimari tasarım, statik çözüm, malzeme seçimi ve uygulama takvimi bir yol haritası halinde müşteriye sunulur. Her adımda karar mekanizması şeffaf şekilde ilerlediği için sürecin kontrolü kolaylaşır.",
      "Saha uygulamasında koordinasyon en kritik başlıklardan biridir. MTK House ekipleri, alt yüklenici ve tedarik süreçlerini merkezi bir plan dahilinde yönetir. Böylece gecikme ve kalite sapması gibi riskler minimize edilir. Proje tamamlandığında yalnızca estetik bir yapı değil, deprem dayanımı, enerji verimliliği ve uzun ömürlülük kriterleri sağlanmış bir yaşam alanı teslim edilir. Bu da kullanıcının hem bugünkü konforunu hem de gelecekteki güvenlik beklentisini destekler.",
    ],
  },
  {
    heading: "Balıkesir ve Çevresinde Doğru Yüklenici Seçimi",
    paragraphs: [
      "Balıkesir prefabrik ev, çelik konstrüksiyon ev veya bungalov yatırımı planlayanlar için doğru yüklenici seçimi kritik öneme sahiptir. Referans projeler, teknik ekip profili, teklifin detay seviyesi ve teslim sonrası destek hizmeti birlikte değerlendirilmelidir. Sadece en düşük fiyat odaklı kararlar, ilerleyen dönemde bakım ve performans problemleriyle daha yüksek maliyet yaratabilir. Bu nedenle kalite ve güven dengesini kuran bir partnerle ilerlemek uzun vadede daha kazançlıdır.",
      "MTK House, yerel bölge dinamiklerini bilen ekip yapısı ile Balıkesir ve çevresinde uygulama kolaylığı sunar. Arsa koşullarına uygun proje geliştirme, iklim koşullarına göre yalıtım çözümleri ve yerel tedarik avantajı sayesinde süreç hızlanır. Müşterilerimiz için hedefimiz sadece yapıyı teslim etmek değil, güven veren bir iş ortaklığı oluşturmaktır. Depreme dayanıklı ev beklentisini teknik olarak karşılarken, modern mimari çizgiyi koruyarak yaşam kalitesi yüksek mekanlar üretiriz.",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "celik-ev-mi-betonarme-mi",
    title: "Çelik Ev mi Betonarme mi? 2026 Karşılaştırması",
    excerpt:
      "Deprem performansı, maliyet, teslim süresi ve uzun vadeli kullanım açısından çelik ve betonarme yapıları teknik bakışla değerlendiriyoruz.",
    keywords: ["celik ev mi betonarme mi", "depreme dayanikli ev", "celik konstruksiyon ev"],
    coverImage:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Çelik ve betonarme yapıların teknik karşılaştırmasını temsil eden modern konut görünümü",
    sections: [
      {
        heading: "Yapı Sistemlerinin Temel Farkı",
        paragraphs: [
          "Çelik ev ve betonarme yapı arasındaki en temel fark taşıyıcı sistemin karakteridir. Betonarme yapıda yükleri beton ve donatı birlikte taşırken, çelik yapıda yüksek mukavemetli çelik profiller daha hafif bir taşıyıcı omurga oluşturur. Bu fark yalnızca malzeme tercihi değil, proje sürecinden saha montajına kadar tüm adımları etkileyen bir karar haline gelir. Fabrika ortamında üretilen çelik elemanlar kalite kontrol avantajıyla gelir.",
          "Betonarme sistemde saha uygulaması ön plandadır; kalıp, demir ve beton döküm süreçleri iklim ve işçilik kalitesinden daha fazla etkilenebilir. Çelik sistemde ise sahada birleştirme adımı ağırlıklıdır ve bu nedenle zaman planlaması daha net ilerleyebilir. İki sistem de doğru projelendirildiğinde güvenli olabilir; ancak deprem riski ve hız beklentisi olan yatırımlarda çelik sistemler öne çıkar.",
        ],
      },
      {
        heading: "Deprem Güvenliği Perspektifi",
        paragraphs: [
          "Deprem performansında belirleyici unsur, yapının deprem enerjisini nasıl yönettiğidir. Çelik malzeme sürekli ve düktil davranışı sayesinde enerji sönümleme konusunda avantaj sunar. Ayrıca sistemin hafif olması, deprem sırasında oluşan atalet kuvvetlerinin azalmasını sağlar. Bu fiziksel gerçek, doğru bağlantı detaylarıyla desteklendiğinde yapısal güvenlik seviyesini artırır.",
          "Betonarme yapılar da iyi mühendislikle yüksek deprem performansı gösterebilir. Ancak saha uygulama kalitesi burada kritik bir değişkendir. Beton sınıfı, curing koşulları, donatı yerleştirme disiplini gibi birçok parametre sonuca doğrudan etki eder. Bu nedenle hangi sistem seçilirse seçilsin, teknik ekip kalitesi ve denetim mekanizması mutlaka merkeze alınmalıdır.",
        ],
      },
      {
        heading: "Maliyet, Süre ve İşletme Giderleri",
        paragraphs: [
          "Yatırımcıların en çok sorduğu soru maliyet olur. İlk yatırım maliyeti açısından iki sistem de proje kapsamına göre değişir; ancak toplam sahip olma maliyeti hesaplanırken sadece ilk metrekare bedeline bakmak yeterli değildir. Isı yalıtımı, bakım ihtiyacı, tadilat kolaylığı ve enerji giderleri uzun vadede büyük fark yaratır. Çelik sistemler modül yapısı sayesinde yenileme ve genişletme konusunda esneklik sunabilir.",
          "Teslim süresi tarafında çelik yapı sistemleri genellikle avantajlıdır. Fabrika ve saha süreçlerinin paralel ilerleyebilmesi, proje takvimini kısaltır. Özellikle ticari yatırımlarda erken devreye alma, kira veya işletme gelirinin daha erken başlaması anlamına gelir. Bu nedenle süreç hızının finansal etkisi de karar aşamasında mutlaka değerlendirilmelidir.",
        ],
      },
      {
        heading: "Sonuç: İhtiyaca Göre Doğru Sistem",
        paragraphs: [
          "Çelik ev mi betonarme mi sorusunun tek bir doğru cevabı yoktur; doğru cevap, arsanın koşulları, bölgesel deprem riski, bütçe modeli ve kullanım hedefleri birlikte değerlendirilerek bulunur. Eğer hızlı teslim, deprem performansı, modern mimari esneklik ve kontrollü kalite sizin için öncelikliyse çelik konstrüksiyon ev güçlü bir adaydır.",
          "Karar verirken teknik raporlar, referans projeler ve şeffaf teklif dokümanları üzerinden ilerlemek en sağlıklı yoldur. MTK House olarak her iki yaklaşımı da teknik açıdan açıkça karşılaştırır, gereksiniminize en uygun yapı sistemini birlikte planlarız. Böylece sadece bugünü değil, gelecekteki güvenlik ve konfor beklentinizi de koruyan bir yatırım yapmış olursunuz.",
        ],
      },
    ],
  },
  {
    slug: "prefabrik-ev-depreme-dayanikli-mi",
    title: "Prefabrik Ev Depreme Dayanıklı mı? Bilimsel Yaklaşım",
    excerpt:
      "Prefabrik yapıların deprem davranışını etkileyen tasarım, malzeme kalitesi ve montaj kriterlerini adım adım anlatıyoruz.",
    keywords: ["prefabrik ev depreme dayanikli mi", "prefabrik ev", "hafif celik yapi sistemleri"],
    coverImage:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Prefabrik evde deprem güvenliği için tasarlanmış modern yapı detayı",
    sections: [
      {
        heading: "Prefabrik Yapı Nasıl Çalışır?",
        paragraphs: [
          "Prefabrik ev, yapı bileşenlerinin kontrollü fabrika ortamında üretilip sahada hızlı montajla birleştirildiği bir sistemdir. Duvar panelleri, çatı elemanları ve birçok teknik detay önce fabrikada hazırlandığı için sahadaki belirsizlikler azalır. Bu model kalite standardizasyonunu artırırken, proje süresini de optimize eder.",
          "Depreme dayanıklılık açısından önemli olan konu, prefabrik olması değil, taşıyıcı sistemin doğru mühendislikle çözülmesidir. Kullanılan profil kalınlığı, bağlantı detayları, çapraz elemanların yerleştirilmesi ve zeminle uyumlu temel tasarımı yapısal performansın ana belirleyicileridir.",
        ],
      },
      {
        heading: "Deprem Dayanımını Belirleyen Faktörler",
        paragraphs: [
          "Bir prefabrik evin depremde güvenli davranması için üç temel katman vardır: tasarım, malzeme ve uygulama. Tasarım aşamasında bölgesel deprem yönetmelikleri esas alınmalı, yapısal analizler ihtiyaca göre detaylandırılmalıdır. Malzeme tarafında belgeli çelik profiller, uygun bağlantı elemanları ve dayanıklı kaplama katmanları tercih edilmelidir.",
          "Uygulama aşamasında ise montaj disiplini kritik rol oynar. Projede belirtilen bağlantı noktalarının eksiksiz uygulanması, çatı ve duvar birleşimlerinin doğru kapanması, su ve buhar kontrolü gibi detaylar uzun ömürlülük için hayati önemdedir. Bu adımlar atlandığında yalnızca deprem performansı değil, konfor seviyesi de etkilenir.",
        ],
      },
      {
        heading: "Yanlış Bilinenler ve Gerçekler",
        paragraphs: [
          "Toplumda yaygın bir inanış, prefabrik yapıların geçici veya zayıf olduğu yönündedir. Oysa modern prefabrik teknolojileri, doğru mühendislikle uzun yıllar güvenle kullanılabilecek sistemler üretir. Dayanım konusu yalnızca malzemenin adı ile değil, tüm sistemin nasıl tasarlanıp uygulandığı ile ilgilidir.",
          "Bir diğer yanılgı da prefabrik evlerin konforsuz olduğu düşüncesidir. Doğru ısı yalıtımı, kaliteli pencere sistemleri ve mekanik havalandırma çözümleriyle prefabrik yapılar da yüksek konfor standardına ulaşabilir. Enerji verimliliği hedefli tasarım, faturaların düşmesine ve iç mekan konforunun artmasına yardımcı olur.",
        ],
      },
      {
        heading: "Son Değerlendirme",
        paragraphs: [
          "Prefabrik ev depreme dayanıklı mı sorusuna en doğru cevap şudur: Evet, doğru projelendirme ve uygulamayla dayanıklı olabilir. Burada seçiminizi belirleyecek unsur, size sunulan teknik dokümanların kalitesi ve uygulayıcı ekibin tecrübesidir. Şeffaf teklif, referans proje ve teknik açıklama istemek bu nedenle önemlidir.",
          "MTK House olarak prefabrik projelerde deprem güvenliğini tasarımın merkezine yerleştiriyoruz. Her projeyi arsa verisi ve kullanım ihtiyacıyla birlikte ele alıyor, dayanımı konfordan ayırmadan anahtar teslim çözümler sunuyoruz. Böylece hem hızlı hem de güvenli bir yapıya ulaşmak mümkün hale geliyor.",
        ],
      },
    ],
  },
  {
    slug: "2026-prefabrik-ev-fiyatlari",
    title: "2026 Prefabrik Ev Fiyatları: Neler Belirliyor?",
    excerpt:
      "Prefabrik ev fiyatlarını etkileyen teknik kalemleri ve teklif karşılaştırırken dikkat edilmesi gereken kritik noktalar.",
    keywords: ["2026 prefabrik ev fiyatlari", "prefabrik ev fiyatlari", "anahtar teslim prefabrik"],
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "2026 prefabrik ev fiyatları için modern anahtar teslim konut görünümü",
    sections: [
      {
        heading: "Metrekare Fiyatı Tek Başına Yeterli Değildir",
        paragraphs: [
          "2026 prefabrik ev fiyatları araştırılırken en çok karşılaşılan hata, yalnızca metrekare birim fiyatına odaklanmaktır. Oysa fiyatın gerçek anlamını ortaya koyan şey, kapsam detayıdır. Taşıyıcı sistem kalınlığı, duvar katman yapısı, yalıtım sınıfı, pencere markası ve çatı detayları toplam kaliteyi belirler. Aynı metrekarede iki teklif arasında büyük fark olması normaldir.",
          "Bu nedenle teklif karşılaştırması yaparken teknik şartnameyi satır satır okumak gerekir. Hangi kalemin hangi malzeme ile yapılacağı net değilse, ileride ek maliyet riski doğar. Şeffaf teklif anlayışı burada hayati önemdedir; müşteri toplam bedelin nasıl oluştuğunu açıkça görebilmelidir.",
        ],
      },
      {
        heading: "Saha Koşulları ve Altyapı Etkisi",
        paragraphs: [
          "Arsanın eğimi, zemin yapısı, ulaşım koşulları ve altyapı durumu prefabrik ev fiyatları üzerinde doğrudan etkiye sahiptir. Zor erişimli sahalarda lojistik maliyetleri artabilir. Zemin iyileştirmesi ihtiyacı olan alanlarda temel sistemi daha kapsamlı hale gelebilir. Bu farklar, proje bazlı keşif yapılmadan netleşmez.",
          "Balıkesir prefabrik ev projelerinde iklim koşulları da göz önünde bulundurulmalıdır. Rüzgar, nem ve sıcaklık farklarına uygun yalıtım ve kaplama seçimleri yapılmadığında uzun vadeli performans düşebilir. Doğru teknik seçim başlangıçta maliyeti bir miktar artırsa da işletme döneminde tasarruf sağlar.",
        ],
      },
      {
        heading: "Anahtar Teslim Kapsam Neleri İçerir?",
        paragraphs: [
          "Anahtar teslim prefabrik ifadesi her firmada aynı anlama gelmez. Bazıları yalnızca kaba inşaatı kapsarken, bazıları elektrik, mekanik tesisat, zemin kaplamaları, iç kapılar ve mutfak uygulamalarını da dahil eder. Bu nedenle anahtar teslim tanımının yazılı ve ölçülebilir şekilde sözleşmede yer alması gerekir.",
          "MTK House teklif modelinde proje kapsam başlıkları açıkça listelenir. Müşteri hangi kalemin dahil olduğunu, hangisinin opsiyon olduğunu başlangıçta bilir. Bu yaklaşım, süreç boyunca çıkan belirsizlikleri azaltır ve proje yönetimini kolaylaştırır. Sonuç olarak hem bütçe kontrolü hem de zaman planı daha sağlıklı olur.",
        ],
      },
      {
        heading: "2026 İçin Stratejik Satın Alma Önerileri",
        paragraphs: [
          "Prefabrik ev yatırımı planlayanlar için en iyi strateji, birden fazla teknik teklifi aynı kriterlerle değerlendirmektir. Referans proje ziyareti yapmak, uygulama ekibinin saha disiplinini görmek ve malzeme belgelerini incelemek karar kalitesini yükselten adımlardır. Yalnızca fiyata değil, toplam değer teklifine odaklanmak gerekir.",
          "Uzun vadede güvenli, konforlu ve enerji verimli bir yapı hedefleniyorsa; projelendirme ve uygulama kalitesine yatırım yapmak en doğru yaklaşımdır. MTK House, 2026 prefabrik ev fiyatları konusunda şeffaf analiz sunarak kullanıcıların doğru karar vermesine destek olur. Böylece yatırım sadece bugün için değil, gelecekteki yaşam standardı için de güvenceye dönüşür.",
        ],
      },
    ],
  },
  {
    slug: "pimapen-isi-yalitimi-saglar-mi",
    title: "Pimapen Isı Yalıtımı Sağlar mı? Enerji Verimliliği Rehberi",
    excerpt:
      "PVC doğrama sistemlerinde ısı kaybını azaltan temel unsurları ve doğru pencere seçiminin faturaya etkisini anlatan kapsamlı rehber.",
    keywords: ["pimapen isi yalitimi", "PVC dograma", "enerji tasarruflu pencere sistemleri"],
    coverImage:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Isı yalıtımlı pimapen pencere sistemleri uygulanan modern salon",
    sections: [
      {
        heading: "Pencere Neden Enerji Performansında Kritiktir?",
        paragraphs: [
          "Bir yapıda ısı kayıplarının önemli bir bölümü pencere ve doğrama noktalarında gerçekleşir. Duvar yalıtımı ne kadar iyi olursa olsun, pencere sistemi zayıfsa enerji performansı istenen seviyeye ulaşmaz. Bu nedenle pimapen pencere seçimi yalnızca estetik karar değil, doğrudan fatura ve konfor kararı olarak görülmelidir.",
          "PVC doğrama sistemleri çok odacıklı profil yapısı ve doğru cam seçimi ile ısı geçişlerini azaltmaya yardımcı olur. Özellikle çift cam veya low-e cam kombinasyonları, kış aylarında iç mekan sıcaklığını korurken yaz aylarında aşırı ısınmayı sınırlar. Bu da hem ısıtma hem soğutma giderlerinde avantaj sağlar.",
        ],
      },
      {
        heading: "Isı Yalıtımı İçin Dikkat Edilmesi Gerekenler",
        paragraphs: [
          "Yalıtımın güçlü olması için tek başına profil markası yeterli değildir. Contaların kalitesi, montaj doğruluğu, duvar birleşim noktalarının sızdırmazlık detayı ve cam arası boşluk yapısı birlikte değerlendirilmelidir. İyi montaj yapılmayan bir pencere, en kaliteli profilde bile performans kaybına neden olabilir.",
          "Ayrıca ses yalıtımı da konforun ayrılmaz bir parçasıdır. Doğru cam kalınlığı ve uygun fitil sistemiyle dış ortam gürültüsü azaltılabilir. Şehir merkezinde veya ana yola yakın konutlarda bu etki daha belirgin hissedilir. Sonuç olarak enerji tasarrufu ile akustik konfor aynı anda iyileşir.",
        ],
      },
      {
        heading: "Pimapen Yenilemenin Geri Dönüşü",
        paragraphs: [
          "Eski pencere sistemlerinin yenilenmesi, çoğu projede hızlı geri dönüş sağlayan bir yatırımdır. Sıcaklık dalgalanması azaldığı için cihazlar daha verimli çalışır, yaşam alanı daha dengeli bir iklim kazanır. Nem kontrolünün iyileşmesi de duvarlarda oluşabilecek yoğuşma riskini düşürür.",
          "Enerji tasarruflu pencere sistemleri tercih edilirken sadece ilk satın alma maliyetine bakmak yerine, yıllık enerji tüketimindeki düşüş de hesaba katılmalıdır. MTK House, PVC doğrama projelerinde teknik keşif yaparak ihtiyaca uygun profil ve cam kombinasyonunu önerir. Bu sayede yatırımın ekonomik faydası ölçülebilir hale gelir.",
        ],
      },
      {
        heading: "Sonuç ve Uygulama Önerisi",
        paragraphs: [
          "Pimapen ısı yalıtımı sağlar mı sorusunun cevabı nettir: Evet, doğru ürün ve doğru montajla belirgin tasarruf sağlar. Burada anahtar konu, proje bazlı analiz ve uygulama kalitesidir. Mekanın yönü, güneş alma süresi, rüzgar etkisi ve kullanım biçimi gibi veriler seçimi doğrudan etkiler.",
          "MTK House, Balıkesir ve çevresinde sunduğu pimapen ve PVC doğrama hizmetlerinde performans odaklı yaklaşım benimser. Hedefimiz yalnızca pencere değiştirmek değil; enerji verimliliği, konfor ve estetik dengeyi birlikte sağlayan uzun ömürlü çözümler sunmaktır. Doğru pencere sistemi, yapı değerini de yükselten stratejik bir yatırımdır.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
