import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FullWok: React.FC = () => {
  const { id } = useParams();
  const [wok, setWok] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  React.useEffect(() => {
    async function fetchWok() {
      try {
        const { data } = await axios.get(
          "https://655251e85c69a7790329e2f4.mockapi.io/wok-data/" + id
        );
        setWok(data);
      } catch (error) {
        alert("Troubles with getting Woks, try again later");
      }
    }
    fetchWok();
  }, []);
  if (!wok) {
    return <>Loading, please wait..</>;
  }
  return (
    <div>
      <img src={wok.imageUrl} />
      <h2>{wok.title}</h2>
      <h2>{wok.price}₽</h2>
    </div>
  );
};

export default FullWok;
