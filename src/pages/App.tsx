import { Button, Card, Carousel } from "flowbite-react";
import { Foot } from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";

import { registerLink, whatsapp } from "../utils/Contants";
const catalogue = "";
const brands = [
  "https://media-afr-cdn.oriflame.com/contentImage?externalMediaId=f1f22cb9-9d9a-4f53-b303-a8bf7422d670&name=novage&inputFormat=jpg&imageFormat=Jpeg&w=200&bc=%23f5f5f5&ib=%23f5f5f5&q=80",
  "https://media-afr-cdn.oriflame.com/contentImage?externalMediaId=e5b24e3d-54d0-46c9-952f-8544a8344486&name=Wellness_Logo&inputFormat=jpg&imageFormat=Jpeg&w=200&bc=%23f5f5f5&ib=%23f5f5f5&q=80",
  "https://media-afr-cdn.oriflame.com/contentImage?externalMediaId=ccc8f30e-0240-429a-80f6-2dea35e59cdd&name=giordani-gold-web-logo&inputFormat=jpg&imageFormat=Jpeg&w=200&bc=%23f5f5f5&ib=%23f5f5f5&q=80",
  "https://media-afr-cdn.oriflame.com/contentImage?externalMediaId=c8d37e62-1656-4940-ab16-3431de14c391&name=oncolour&inputFormat=jpg&imageFormat=Jpeg&w=200&bc=%23f5f5f5&ib=%23f5f5f5&q=80",
];

const standarts = [
  "https://media-afr-cdn.oriflame.com/contentImage?externalMediaId=1634df5c-ecb5-41fb-aa90-e2f387642d27&name=contentimage-TR&inputFormat=png&w=165&bc=%23f5f5f5&ib=%23f5f5f5&q=90",
  "https://media-afr-cdn.oriflame.com/contentImage?externalMediaId=9b81e789-a31f-4835-a441-ea640391067a&name=contentimage-1-TR&inputFormat=png&w=165&bc=%23f5f5f5&ib=%23f5f5f5&q=90",
  "https://media-afr-cdn.oriflame.com/contentImage?externalMediaId=62fe7e76-c39c-497f-a7f6-1a4fa52d692f&name=contentimage-2-TR&inputFormat=png&w=165&bc=%23f5f5f5&ib=%23f5f5f5&q=90",
  "https://media-afr-cdn.oriflame.com/contentImage?externalMediaId=c7e3adf6-c14e-4b49-a420-28b860d36497&name=contentimage-4-TR&inputFormat=png&w=165&bc=%23f5f5f5&ib=%23f5f5f5&q=90",
  "https://media-afr-cdn.oriflame.com/contentImage?externalMediaId=c7e3adf6-c14e-4b49-a420-28b860d36497&name=contentimage-4-TR&inputFormat=png&w=165&bc=%23f5f5f5&ib=%23f5f5f5&q=90",
  "https://media-afr-cdn.oriflame.com/contentImage?externalMediaId=10f7fade-e9d8-4ffa-88b8-02a433957674&name=contentimage-5-tr&inputFormat=png&w=165&bc=%23f5f5f5&ib=%23f5f5f5&q=90",
];

export const App = () => {
  const sections = [
    {
      title: "",
      description: `Oriflame’e yeni katılanlara çok kazançlı bir merhaba! 💛🥰
      💫 Oriflame’e katıldığınız ay 100 BP sipariş verin, 1. Adım ürününe ANINDA BEDAVA sahip olun! 🥳
      👉Hoş Geldiniz Programı’ndaki tüm ürünlere sahip olmak için 2. ve 3. aylarda da 100’er BP sipariş vermeye devam edin!
      👉3 adımı da tamamlayın, 2812 TL kazanç sağlayın! 
      Daha fazla bilgi için web sitemizi ziyaret edebilirsiniz.`,
      img: "/images/isTeklifi.jpeg",
    },
    {
      title: "",
      description: `Sadece yeni kayıtlara özel Oriflame ile Tanışma Paketi! 💁‍♀️
        Oriflame’e ilk siparişini Ocak ayında veren yeni Marka Ortaklarımız hiçbir koşul olmadan 1547 TL değerindeki Tanışma Paketine sadece 400 TL’ye sahip olabilirler.
        Hemen sipariş verin ve bu güzellik dolu paketi uygun fiyata almanın tadını çıkarın.`,
      img: "/images/kampanyalar3.jpeg",
    },
    {
      title: "",
      description: `Ocak ayına özel SINIRSIZ BONUS KAMPANYASI! 🥳
        Ocak ayında yapacağınız Hoş geldiniz Programı 1. adımına giren her 2 yeni kişisel kaydınız için net 500 TL Sponsor Bonusu HEDİYE!!!`,
      img: "/images/kampanyalar2.jpeg",
    },
  ];
  return (
    <>
      <NavbarComponent />

      <Slider />

      <main className="container dark:text-white p-5">
        {sections.map((section, i) => (
          <>
            <Section
              key={i}
              title={section.title}
              description={section.description}
              img={section.img}
            />
            <hr className="my-10" />
          </>
        ))}

        <section className="flex justify-center">
          <div className="text-center flex flex-col gap-4">
            <h3 className="text-3xl">Başlıca Markalarımız</h3>
            <div className="flex justify-center">
              <div className="w-[100px] border-4 rounded border-orange-500"></div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              {brands.map((brand, i) => (
                <img
                  key={i}
                  src={brand}
                  alt="image"
                  className="rounded-full"
                  width={150}
                />
              ))}
            </div>
          </div>
        </section>

        <hr className="my-10" />

        <section className="flex justify-center">
          <div className="text-center flex flex-col gap-4">
            <div className="max-w-md flex mx-auto flex-col gap-3">
              <h3 className="text-4xl font-semibold">
                Yaşadığımız standartlar
              </h3>
              <p className="text-sm">
                Yolculuğumuzun başından beri, doğayı her zaman işleri nasıl
                yaptığımızın önemli bir parçası olarak gördük. İtibarımızı
                insanlara ve çevreye saygılı, güvenli, güvenilir ürünler sunarak
                inşa ettik. Ürünlerimizdeki standartlar ise İnanabileceğiniz ve
                güvenebileceğiniz güzellik ürünleri geliştirme taahhüdümüzün
                kanıtı niteliğinde.
              </p>
              <div className="flex justify-center">
                <div className="w-[100px] border-4 rounded border-pink-500"></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
              {standarts.map((brand, i) => (
                <img
                  key={i}
                  src={brand}
                  alt="image"
                  className="rounded-full"
                  width={100}
                />
              ))}
            </div>
          </div>
        </section>

        <hr className="my-10" />

        <section className="flex justify-center">
          <Card className="max-w-md" imgSrc={catalogue} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Oriflame'in Online Kataloğu'na Hoş Geldiniz!
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Bu ayki kataloğumuzda kişisel bakım, makyaj, zinde yaşam ve daha
              birçok kategoriden ürünlere harika fiyatlarla sahip olabilirsiniz.
              Stoklar tükenmeden inceleyin, size özel avantajlardan yararlanın.
            </p>
            <Button
              color="pink"
              className="w-full"
              href="https://tr.oriflame.com/products/digital-catalogue-current/"
              target="_blank"
              rel="noreferrer"
            >
              Kataloğu incele
            </Button>
          </Card>
        </section>

        <hr className="my-10" />

        <section className="flex justify-center">
          <Button
            outline
            gradientDuoTone="cyanToBlue"
            className="max-w-lg"
            href={registerLink}
            target="_blank"
            rel="noreferrer"
          >
            Tüm kampanyalardan yararlanmak, Oriflame'in bir parçası olmak, Tüm
            ürünleri indirimli almak ve çok daha fazlası için hemen kayıt olun!
          </Button>
        </section>
      </main>
      <Wp />
      <Foot />
    </>
  );
};

const Slider = () => {
  const slides = [
    "/images/kampanyalar.jpeg",
    "/images/kampanyalar2.jpeg",
    "/images/kampanyalar3.jpeg",
  ];
  return (
    <section className="w-full h-[300px] md:h-[600]">
      <Carousel>
        {slides.map((slide, i) => (
          <div
            key={i}
            security="h-full w-full"
            style={{
              backgroundImage: `url(${slide})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img src={slide} className="invisible" alt="" />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

interface SectionProps {
  title: string;
  description: string;
  img: string;
}
const Section = (props: SectionProps) => {
  return (
    <section className="flex justify-center">
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={props.img}
        horizontal
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
      </Card>
    </section>
  );
};
const Wp = () => {
  return (
    <div className="fixed end-0 bottom-0 m-5">
      <Button color="success" href={whatsapp}>
        <i className="fa-brands fa-whatsapp text-2xl"></i>
      </Button>
    </div>
  );
};
