import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Layout from "../components/Layout";

const Home = () => {
  // Exemplo de dados para os menus
  const menuData = [
    {
      title: "Menu Principal",
      items: ["Prato 1", "Prato 2", "Prato 3"],
    },
    {
      title: "Menu de Bebidas",
      items: ["Bebida 1", "Bebida 2", "Bebida 3"],
    },
    // Adicione mais menus conforme necessário
  ];

  return (
    <div>
      <Layout>
        <Header />
        <main>
          <h1>Bem-vindo ao Restaurante XYZ!</h1>
          <p>Descubra os sabores incríveis que temos para oferecer.</p>

          {/* Renderize os componentes de Menu com os dados */}
          {menuData.map((menu, index) => (
            <Menu key={index} title={menu.title} items={menu.items} />
          ))}
        </main>
        <Footer />
      </Layout>
    </div>
  );
};

export default Home;
