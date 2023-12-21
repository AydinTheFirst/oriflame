import { Button, Card, Label, Rating, TextInput } from "flowbite-react";
import { Foot } from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import catalogBanner from "../assets/catalouge.png";

export const App = () => {
  return (
    <>
      <NavbarComponent />

      <main className="container mt-5 dark:text-white min-h-[100vh]">
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

        <section id="campaigns" className="mb-10 p-5">
          <h2 className="text-center font-bold text-4xl mb-3">
            Kampanyalı Ürünler
          </h2>

          <div className="flex flex-wrap justify-center gap-5">
            <Card
              className="max-w-sm"
              imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
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
                <Card key={card.title} className="max-w-sm">
                  <div className="flex items-center justify-center">
                    <img src={card.img} alt={card.title} className="rounded" />
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
        </section>

        <Form />
      </main>

      <Foot />
    </>
  );
};

const Form = () => {
  return (
    <>
      <h1 className="text-xl font-bold text-center mb-5">Bize katılın!</h1>

      <div className="flex justify-center mb-10">
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <Button type="submit">Submit</Button>
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
