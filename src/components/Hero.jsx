import personal from "../assets/images/Personal.png";

function Hero() {
  return (
    <div className="flex flex-col items-center">
      <div id="textos" className="w-full">
        <div
          id="texto1"
          className="font-jockey pt-6 flex-col items-center text-center leading-none w-full"
        >
          <h1 className="text-[40px] font-semibold tracking-wide text-[#090846] uppercase">
            TREINE COM
          </h1>
          <h1 className="mt-2 text-[78px] font-extrabold tracking-wide text-[#0A6CF1]">
            PROPÓSITO
          </h1>
        </div>
        <div
          id="texto2"
          className="font-jockey pt-6 flex-col items-center text-center leading-none w-full"
        >
          <h1 className="text-[40px] font-semibold tracking-wide text-[#090846] uppercase">
            EVOLUA COM
          </h1>
          <h1 className="mt-2 text-[78px] font-extrabold tracking-wide text-[#0A6CF1]">
            RESULTADOS
          </h1>
        </div>
      </div>
      <div id="imagem" className="mt-4 w-full flex justify-center">
        <img src={personal} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}
export default Hero;
