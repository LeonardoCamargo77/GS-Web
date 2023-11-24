import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="text-4xl font-serif text-center mt-16 mb-24">Explicação do projeto</h1>

      <div className="flex justify-center space-x-8">
        <div className="mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
          <figure className="flex flex-col items-right">
            <Image src="/img/coracaoo.png" alt="Coração" width={500} height={500} />
          </figure>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <Link href="http://localhost:8080/seriesapi/webapi/guincho">
          <div className="border border-orange-600 py-2 px-10 rounded-full text-black hover:bg-orange-600 hover:text-white cursor-pointer">
            Ver Detalhes
          </div>
        </Link>
      </div>

      <div className="mx-auto max-w-screen-xl">
        <h1 className="text-5xl font-bold text-center mt-16 mb-24">Como evitar doenças cardiovasculares?</h1>

        <div className="flex justify-center space-x-8">
          <div className="mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
            <figure className="flex flex-col items-right">
              <Image src="/img/doenca.webp" alt="Doença" width={800} height={800} />
            </figure>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl">
        <h1 className="text-4xl font-bold text-left mt-16 mb-24">Dicas:</h1>
      </div>

      <h2 className="text-2xl font-bold text-left mt-16 mb-4">
        1. Alimentação saudável
      </h2>

      <figure className="flex flex-col items-left">
        <Image
          src="/img/alimentacao.png"
          alt="AlimentaçãoSaudável"
          width={500}
          height={500}
        />
        <figcaption className="text-left font-arial text-lg mb-4">
          Uma das maneiras mais eficazes de prevenir doenças cardiovasculares é
          cuidando da alimentação. O consumo de alimentos ricos em gordura ajuda
          a formar as chamadas “placas ateroscleróticas”, que resultam na
          obstrução das artérias e no comprometimento do fluxo sanguíneo. O sal
          contribui para elevar a pressão arterial, fazendo com que o coração
          bata com mais força para conseguir manter o sangue circulando pelo
          corpo. Assim, o mais indicado é evitar produtos industrializados e
          fast foods, ricos nesses dois componentes, e priorizar o consumo de
          alimentos naturais, como frutas, legumes, verduras, carnes magras, além
          de bons grãos e cereais.
        </figcaption>
        <Link href="https://cmosdrake.com.br/blog/6-alimentos-que-melhoram-a-saude-do-coracao/">
          <div className="border border-orange-600 py-2 px-10 rounded-full text-black hover:bg-orange-600 hover:text-white cursor-pointer text-center">
            Aproveite e conheça 6 alimentos que melhoram a saúde do coração.
          </div>
        </Link>
      </figure>
    </div>
    
    
    
    
  );
}
