import { useEffect, useState } from "react";
import { rest } from "../utils/REST";
import { Routes } from "../utils/Routes";
import { Button, List, Modal, Navbar, Table } from "flowbite-react";

export const Dashboard = () => {
  const fetchMe = async () => {
    const res = await rest.get(Routes.Auth.Me, {});
    if (!res.ok) return location.replace("/2527c9a7");
  };

  useEffect(() => {
    fetchMe();
  }, []);

  document.body.style.backgroundColor = "bg-slate-200";
  return (
    <>
      <Nav />
      <main className="container my-10 p-3 flex justify-center">
        <TableData />
      </main>
      <Footer />
    </>
  );
};

const TableData = () => {
  const [data, setData] = useState<[] | null>(null);

  const fetchData = async () => {
    const res = await rest.get("/form", {});
    if (!res.ok) return rest.error(res);

    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>Başvuran</Table.HeadCell>
          <Table.HeadCell>Telefon</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((item: any, i: number) => (
            <Data key={i} item={item} i={i} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

const Data = (props: { item: any; i: number }) => {
  const { item, i } = props;

  const [openModal, setOpenModal] = useState(false);

  const handleDelete = async () => {
    const ok = confirm("Kaydı silmek istediğinize emin misiniz?");
    if (!ok) return;

    const res = await rest.delete("/form/" + item.id, {});
    if (!res.ok) return rest.error(res);

    setOpenModal(false);
  };

  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell>{i + 1}</Table.Cell>
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {item.name}
        </Table.Cell>
        <Table.Cell>{item.number}</Table.Cell>
        <Table.Cell>{item.email}</Table.Cell>
        <Table.Cell>
          <Button onClick={() => setOpenModal(true)}>Göster</Button>
        </Table.Cell>
      </Table.Row>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Kullanıcı Bilgileri</Modal.Header>
        <Modal.Body>
          <List unstyled>
            <List.Item>
              T.C. Kimlik Numarası: <b>{item._id}</b>
            </List.Item>
            <List.Item>
              İsim Soyisim: <b>{item.name}</b>
            </List.Item>
            <List.Item>
              Email: <b>{item.email}</b>
            </List.Item>
            <List.Item>
              Telefon: <b>{item.number}</b>
            </List.Item>
            <List.Item>
              Cinsiyet: <b>{item.gender === "male" ? "Erkek" : "Kadın"}</b>
            </List.Item>
            <List.Item>
              Doğum Tarihi: <b>{item.dateOfBirth}</b>
            </List.Item>
            <List.Item>
              Adres: <b>{item.state + " / " + item.city}</b>
            </List.Item>
            <List.Item>
              iletişim Tercihi: <b>{item.contact}</b>
            </List.Item>
          </List>
        </Modal.Body>
        <Modal.Footer>
          <Button color="red" onClick={handleDelete}>
            Kaydı Sil
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Nav = () => {
  return (
    <Navbar className="bg-slate-300 border-b">
      <Navbar.Brand href="/dashboard">
        <img
          src="/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Oriflame Admin Panel
        </span>
      </Navbar.Brand>
    </Navbar>
  );
};

const Footer = () => {
  return (
    <footer className="text-center font-bold mt-10 pb-5">
      <div className="text-black dark:text-white">
        © 2023 Fristroop Development, Inc
      </div>
    </footer>
  );
};
