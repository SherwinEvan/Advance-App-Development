import Footer from "../../assets/components/footer";
import NavBar from "../../assets/components/navbar";
import backgroundImage from "../../assets/images/LandingBG.jpg";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="text-white">
        <div
          className="min-h-screen flex flex-col"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <main className="container mx-auto px-6 pt-16 flex-1 text-center">
            <div className="p-5 m-5 mt-[-3%] bg-black bg-opacity-50 border-lg  border-opacity-50 border-black rounded-xl">
              <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
                Welcome to
              </h2>
              <h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">
                Agriculture Loans
              </h1>

              <p className="text-base md:text-lg lg:text-2xl mb-8">
                A place for farmers to avail risk-free loans!
              </p>

              <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
                Trusted by 94,252 farmers!
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
