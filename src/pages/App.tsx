import { Button, Card, Carousel } from "flowbite-react";
import { Foot } from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";

import slide1 from "../assets/2bd3ab96-e032-4931-a1ae-a1130aedef2f.jpeg";
import slide2 from "../assets//2d8e5dbd-6e75-47d6-b482-566bed7f9fe9.jpeg";
import slide3 from "../assets/58d8b210-81c8-4365-a0ed-541bd156b7be.jpeg";
import slide4 from "../assets/bc740b63-c10c-4f46-835c-e23b6e9de357.jpeg";
import slide5 from "../assets/bdd3da24-a17e-40b0-aaf6-414bff7e483a.jpeg";
import slide6 from "../assets/e3652056-c4da-4051-99c8-aeb88b869c57.jpeg";

import catalogue from "../assets/catalogue.png";

import { registerLink, whatsapp } from "../utils/Contants";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

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
  return (
    <>
      <NavbarComponent />

      <main className="container dark:text-white p-5">
        <section className="aspect-video max-h-[500px] flex mx-auto mt-10">
          <Carousel>
            {slides.map((slide) => (
              <img
                src={slide}
                alt="image"
                className="h-full"
                style={{ objectFit: "cover" }}
              />
            ))}
          </Carousel>
        </section>

        <hr className="my-10" />

        <section className="flex justify-center items-center gap-10 flex-wrap">
          <div className="max-w-md text-center flex flex-col gap-4">
            <h1 className="text-4xl font-semibold">
              İsveç'ten Gelen Güzellik.
            </h1>
            <p className="text-sm">
              Bizler İsveçliyiz ve farklı, bütünsel bir güzellik görüşüne
              sahibiz. Bizim için sadece nasıl göründüğünüz değil, aynı zamanda
              nasıl yaşadığınız, hissettiğiniz ve davrandığınız da önemlidir.
              Sağlıklı olmak, güzel bir cildin tadını çıkarmak, kendinizi ifade
              etmek ve eğlenmek bir yaşam biçimidir…
            </p>
            <div className="flex justify-center">
              <div className="w-[100px] border-4 rounded border-blue-500"></div>
            </div>
          </div>

          <img
            src="https://media-afr-cdn.oriflame.com/contentImage?externalMediaId=124d1fea-304e-4eee-a049-6495858f7183&name=18755715_1&inputFormat=jpg&w=683&bc=%23f5f5f5&ib=%23f5f5f5&q=70"
            alt=""
            className="rounded"
          />
        </section>

        <hr className="my-10" />

        <section className="flex justify-center">
          <div className="text-center flex flex-col gap-4">
            <h1 className="text-3xl">Başlıca Markalarımız</h1>
            <div className="flex justify-center">
              <div className="w-[100px] border-4 rounded border-orange-500"></div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              {brands.map((brand) => (
                <img
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
              <h1 className="text-4xl font-semibold">
                Yaşadığımız standartlar
              </h1>
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
              {standarts.map((brand) => (
                <img
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

const Wp = () => {
  return (
    <div className="fixed end-0 bottom-0 m-5">
      <Button color="success" href={whatsapp}>
        <i className="fa-brands fa-whatsapp text-2xl"></i>
      </Button>
    </div>
  );
};
