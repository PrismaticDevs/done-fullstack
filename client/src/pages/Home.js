import { Typography, Container } from "@mui/material";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <Container sx={{ marginTop: "6em" }}>
      <Typography sx={{ fontSize: "2.5em", textAlign: "center" }}>
        Home
      </Typography>
      <Typography sx={{ textIndent: "2em" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
        laudantium eius! Vero optio quaerat explicabo similique ipsa dicta
        tenetur omnis, possimus id dolore voluptatem, error tempora quae
        nesciunt atque doloribus. Autem accusamus distinctio eaque, quisquam
        voluptatibus a reprehenderit alias hic, pariatur inventore et incidunt
        dicta laudantium vel, delectus recusandae voluptatem qui quibusdam quos
        tempore porro maxime. Quia libero hic ad rem maxime deserunt reiciendis
        saepe culpa deleniti odio aliquid maiores, laborum ducimus, animi sit
        corrupti debitis, dignissimos eaque iure recusandae! Aut illum obcaecati
        iure nihil ab veritatis, minus tenetur provident autem accusamus
        aspernatur nam similique maxime nemo sit officiis, voluptas inventore?
        Tempora similique illum quam perspiciatis provident in iste ab quos
        excepturi. Asperiores, placeat nihil unde atque earum cumque quos
        aperiam nisi quaerat, tempore libero voluptates tenetur dolorem dicta
        qui doloribus repudiandae, laborum consequatur quia saepe sunt est!
        Voluptas rem tenetur nemo.
      </Typography>
      <Typography sx={{ textIndent: "2em" }}>
        Consequuntur odit, iure tenetur aliquam omnis! Odio numquam impedit
        iusto architecto eaque, illo modi labore nobis nostrum a exercitationem
        excepturi vel. Vitae beatae dolorem explicabo, corporis possimus
        facilis. Alias, dolore. Corporis iste fugiat harum tempore obcaecati
        modi eos ab maiores! Et, cum animi aspernatur explicabo magnam
        repudiandae magni eos minima nemo maiores. Consequuntur odit, iure
        tenetur aliquam omnis! Odio numquam impedit iusto architecto eaque, illo
        modi labore nobis nostrum a exercitationem excepturi vel. Vitae beatae
        dolorem explicabo, corporis possimus facilis. Alias, dolore. Corporis
        iste fugiat harum tempore obcaecati modi eos ab maiores! Et, cum animi
        aspernatur explicabo magnam repudiandae magni eos minima nemo maiores.
      </Typography>
    </Container>
  );
};

export default Home;
