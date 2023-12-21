import {
  Button,
  Card,
  Datepicker,
  Label,
  Rating,
  Select,
  TextInput,
} from "flowbite-react";
import { Foot } from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import catalogBanner from "../assets/catalouge.png";
import { rest } from "../utils/REST";
import { toast } from "../utils/toast";

export const App = () => {
  return (
    <>
      <NavbarComponent />

      <main className="container mt-5 dark:text-white">
        <section className="h-[100vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-center items-center p-5">
              <div>
                <span className="text-6xl font-bold">Oriflame</span>

                <p className="text-xl font-bold">İsveç'ten Gelen Güzellik.</p>
                <br />
                <p className=" text-lg">
                  Güzelliğin sadece ürünlerimizle değil, aynı zamanda ilham ve
                  büyüme ile geldiğine inanıyoruz. Burası, güveninizi artıracak
                  ve trendleri takip etmenize yardımcı olacak, ipuçlarını ve bu
                  ipuçlarını nasıl yapılacağını paylaştığımız nokta.
                </p>

                <br />
              </div>
            </div>
            <div className="flex justify-center -order-1 md:order-1">
              <img
                src="https://media-afr-cdn.oriflame.com/contentImage?externalMediaId=124d1fea-304e-4eee-a049-6495858f7183&name=18755715_1&inputFormat=jpg&w=828&bc=%23f5f5f5&ib=%23f5f5f5&q=60"
                alt="logo"
                className="rounded-xl p-1"
              />
            </div>
          </div>
        </section>

        <Catalog />

        <section id="campaigns" className="my-10">
          <h2 className="text-center font-bold text-4xl mb-3">
            Kampanyalı Ürünler
          </h2>

          <div className="flex mx-auto">
            <div className="flex flex-wrap justify-center gap-5">
              <Card
                className="max-w-sm"
                imgAlt="image"
                imgSrc="https://media-afr-cdn.oriflame.com/contentImage?externalMediaId=fee4bdd6-1684-4ec9-a84d-8d5cb8a0c298&name=18755835_1&inputFormat=jpg"
              >
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    NEMLİ VE YUMUŞAK ELLERE KAVUŞUN!
                  </h5>
                </a>
                <div className="mb-5 mt-2.5 flex items-center">
                  <Rating>
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                  </Rating>
                  <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                  >
                    indirimli Al!
                  </a>
                </div>
              </Card>

              {cards.map((card) => {
                return (
                  <Card key={card.title} className="max-w-sm bg-slate-100">
                    <div className="flex items-center justify-center">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="rounded"
                      />
                    </div>

                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {card.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {card.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <Form />
      </main>

      <Foot />
    </>
  );
};

const Form = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    for (const [key, value] of data.entries()) {
      console.log(key, value);
    }

    const res = await rest.post("/form", data);

    if (!res.ok) return rest.error(res);

    toast({
      title: "Başarılı",
      message: "Kaydınız başarıyla alındı.",
    });
  };

  return (
    <>
      <h1 className="text-xl font-bold text-center mb-5">Bize katılın!</h1>

      <div className="flex justify-center mb-10 p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-5">
            <div className="flex flex-col gap-3">
              Kişisel Bilgiler
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Emailiniz" />
                </div>
                <TextInput
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Adınız ve Soyadınız" />
                </div>
                <TextInput
                  type="text"
                  name="name"
                  placeholder="Zeynep Uzuner"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="T.C. Kimlik Numarası" />
                </div>
                <TextInput
                  type="number"
                  name="id"
                  placeholder="12345678910"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="İletişim Numaranız" />
                </div>
                <TextInput
                  type="number"
                  name="number"
                  placeholder="05555555555"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="countries" value="Cinsiyetiniz" />
                </div>
                <Select id="countries" name="gender" required>
                  <option value={""}>Lütfen Seçiniz</option>
                  <option value={"male"}>Erkek</option>
                  <option value={"female"}>Kadın</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="countries" value="Doğum Tarihiniz" />
                </div>
                <Datepicker name="dateOfBirth" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              Adres Bilgileri
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Şehir" />
                </div>
                <TextInput
                  type="text"
                  name="city"
                  placeholder="İstanbul"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="İlçe" />
                </div>
                <TextInput
                  type="text"
                  name="state"
                  placeholder="Başakşehir"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="contact"
                    value="Tercih edilen iletişim yöntemi"
                  />
                </div>
                <Select id="contact" name="contact" required>
                  <option value={""}>Lütfen Seçiniz</option>
                  <option value={"sms"}>SMS</option>
                  <option value={"email"}>Email</option>
                </Select>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <Button type="submit" className="w-full">
              Kayıt Ol
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
const Catalog = () => {
  const data = {
    title: "E-Kataloğa aşğıdaki linkten ulaşabilirsiniz",
    href: "https://tr.oriflame.com/products/digital-catalogue-current/",
  };
  return (
    <section className="p-5 flex justify-center">
      <div>
        <div className="flex justify-center pb-3">
          <span className="text-xl font-bold">{data.title}</span>
        </div>
        <div className="flex justify-center">
          <Card
            className="rounded flex justify-center items-center p-5"
            renderImage={() => (
              <img src={catalogBanner} width={200} alt="image" />
            )}
          >
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.title}
            </h5>
            <Button color="pink" href={data.href}>
              İncele
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

const cards = [
  {
    img: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2F40682%2F40682.png%3Fversion%3D1699965000&w=328&bc=%23f5f5f5&ib=%23f5f5f5&h=328&q=50",
    title: "Tender Care Collection Balm Seti",
    description:
      "İkonik çok amaçlı balmlarımızın özenle hazırlanmış koleksiyonu, üç heyecan verici lezzet içerir - sınırlı sayıda üretilen Yeşil Elma, Frenk Üzümü ve klasik doğal lezzetimiz.",
  },
  {
    img: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2F44990%2F44990.png%3Fversion%3D1691149500&w=328&bc=%23f5f5f5&ib=%23f5f5f5&h=328&q=50",
    title: "DUOLOGI Durulanmayan Saç Kremi",
    description:
      "Saçlara hak ettiği bakımı sunmaya yardımcı olmak için tasarlanmış bu set; Gündüz Kremi ve Gece Kremi içeren iki koruyucu durulanmayan saç kremi saşesi içerir. Tüm saç tipleri için uygun olan bu iki saşe, saçınızı canlandırmaya yardımcı olur.",
  },
  {
    img: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2F44964%2F44964.png%3Fversion%3D1683212409&w=328&bc=%23f5f5f5&ib=%23f5f5f5&h=328&q=50",
    title: "DUOLOGI Koruyucu Saç Serumu",
    description:
      "Saçları tedavi edip beslerken, kırık uçları gözle görülür şekilde azaltan, hasarlı saç liflerini yumuşatan koruyucu bir saç serumu.",
  },
];
