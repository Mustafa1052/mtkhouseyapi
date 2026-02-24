import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { allBlogPosts, getBlogPostBySlug } from "@/lib/blog-data";

const evergreenLongForm = {
  heading: "Detaylı Satın Alma Kontrol Listesi",
  paragraphs: [
    "Yapı yatırımlarında tekliflerin karşılaştırılması mutlaka aynı kapsam üzerinden yapılmalıdır. Bir teklifte yalıtım sınıfı yüksekken diğerinde düşük olabilir; bir teklifte anahtar teslim kapsam detaylıyken diğerinde birçok kalem opsiyonel kalabilir. Bu nedenle karar vermeden önce taşıyıcı sistem, yalıtım, pencere, çatı ve iç mekan kalemlerini tek tabloda karşılaştırmak sağlıklı bir yöntem sunar.",
    "Sadece ilk yatırım maliyetine odaklanmak yerine toplam sahip olma maliyeti bakışıyla hareket etmek gerekir. Bakım ihtiyacı, enerji tüketimi, ilerideki tadilat esnekliği ve proje teslim süresi finansal sonucu doğrudan etkiler. Kısa vadede ucuz görünen bir seçenek, uzun vadede daha yüksek gider yaratabilir. Bu nedenle teknik kaliteyi ölçülebilir metriklerle değerlendirmek en doğru yaklaşımdır.",
    "Deprem riski bulunan bölgelerde tasarım ve uygulama disiplininin önemi daha da artar. Statik hesapların proje özeline uygun olması, bağlantı detaylarının sahada eksiksiz uygulanması ve kalite kontrol listelerinin takip edilmesi yapısal güvenliğe doğrudan katkı sağlar. Teknik ekip ile iletişimde netlik, sorulara verilen somut yanıtlar ve referans proje ziyaretleri karar kalitesini ciddi biçimde yükseltebilir.",
    "Enerji verimliliği tarafında ise pencere sistemleri, yalıtım katmanları ve havalandırma çözümleri birlikte ele alınmalıdır. Bu parametreler bir arada optimize edildiğinde hem konfor artar hem enerji faturalarında düşüş görülür. Konforun kalıcı olması için montaj kalitesi de en az malzeme seçimi kadar kritik bir unsurdur. İyi planlanan proje, yaz-kış dengeli iç mekan sıcaklığı sağlayabilir.",
    "Uygulama takvimi planlanırken malzeme tedarik süresi, saha hazırlık durumu ve ekip organizasyonu gerçekçi bir takvimle yönetilmelidir. Net kilometre taşları ve sorumluluk dağılımı olan projelerde gecikme riski azalır. Yatırımcı açısından sürecin düzenli raporlanması, karar mekanizmasını güçlendirir ve maliyet kontrolüne destek olur.",
    "Son olarak, doğru yüklenici seçimi için teknik yeterlilik kadar iletişim kalitesi de önemlidir. Şeffaf fiyatlandırma, açık kapsam tanımı, yazılı taahhütler ve teslim sonrası destek modeli bir araya geldiğinde proje süreci daha güvenli ilerler. Doğru planlama ile yapı yatırımı sadece bugünün ihtiyacını değil, gelecek yılların güvenlik ve konfor beklentisini de karşılar.",
  ],
};

export function generateStaticParams() {
  return allBlogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
  });
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const fullSections = [...post.sections, evergreenLongForm];

  const wordCount = fullSections.reduce(
    (total, section) =>
      total +
      section.paragraphs.reduce((acc, paragraph) => acc + paragraph.trim().split(/\s+/).length, 0),
    0,
  );

  return (
    <article className="bg-slate-900">
      <header className="section-wrap py-14 md:py-20">
        <p className="text-sm font-semibold tracking-widest text-orange-300">SEO Blog İçeriği</p>
        <h1 className="mt-3 max-w-4xl font-mono text-4xl font-bold text-white md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-slate-200">{post.excerpt}</p>
        <p className="mt-2 text-xs text-slate-400">Yaklaşık kelime sayısı: {wordCount}</p>
      </header>

      <section className="section-wrap pb-7">
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          width={1400}
          height={800}
          priority
          className="h-[320px] w-full rounded-2xl border border-slate-700 object-cover md:h-[440px]"
        />
      </section>

      <section className="section-wrap pb-16">
        <div className="space-y-8 rounded-2xl border border-slate-700 bg-slate-950 p-6 md:p-8">
          {fullSections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-mono text-2xl font-bold text-white">{section.heading}</h2>
              <div className="mt-3 space-y-4 text-slate-200">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-16">
        <div className="glass-card p-6 md:p-8">
          <h2 className="font-mono text-2xl font-bold text-white">İlgili Hizmet Sayfaları</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              "/balikesir-celik-konstruksiyon-ev",
              "/balikesir-prefabrik-ev",
              "/balikesir-bungalov-ev",
              "/balikesir-pimapen-pvc-dograma",
            ].map((href) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm text-slate-200 hover:border-orange-400 hover:text-orange-300"
              >
                {href.replaceAll("/", "").replaceAll("-", " ")}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
