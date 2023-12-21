import { Button, Datepicker, Label, Select, TextInput } from "flowbite-react";
import { rest } from "../utils/REST";
import { toast } from "../utils/toast";

export const Form = () => {
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
      <h1 id="joinus" className="text-xl font-bold text-center mb-5">
        Bize katılın!
      </h1>

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
