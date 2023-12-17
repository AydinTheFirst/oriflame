import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export const Foot = () => {
  return (
    <Footer container className="border-t">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 dark:text-white">
          <div>
            <Footer.Brand
              href="https://tr.oriflame.com"
              src="/logo.png"
              alt=" Logo"
              name="Oriflame TR"
            />
            <p className="p-5">
              Bu site bağımsız marka ortağına ait{" "}
              <span className="font-bold">kişisel bir sitedir.</span>
              Oriflame türkiye resmi web sitesine ulaşmak için{" "}
              <a href="https://tr.oriflame.com" className="text-blue-600">
                Oriflame
              </a>{" "}
              bu linke tıklayabilirsiniz.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Sosyal Medya" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Instagram</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Gizlilik Sözleşmesi</Footer.Link>
                <Footer.Link href="#">Kullanım Koşulları</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <span>
            Bu web sitesi ve içeriğine ait tüm hukuki sorumluluk 1593422 kod
            numaralı Oriflame Bağımsız Marka Ortağı "..." aittir.
          </span>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};
