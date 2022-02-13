import { Nav } from "src/parts/Home/Nav";
import { Header } from "src/parts/Home/Header";
import Head from "next/head";
import { Packages } from "src/parts/Home/Packages";
import { Story } from "src/parts/Home/Story";
import { Footer } from "src/parts/Home/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Lorra | Find Your True Adventure Soul</title>
        <meta
          name="description"
          content="Time to reconstruct your imagination with what we provide special just for you"
        />
      </Head>
      <Nav />
      <Header />
      <main>
        <Packages />
        <section className="mt-[150px]  bg-[#FCFBFF] ">
          <Story />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Home;
