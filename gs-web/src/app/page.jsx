import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="text-4xl font-serif text-center mt-16 mb-24">Explicação do projeto</h1>

      <div className="flex justify-center space-x-8">
        <div className="mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
          <figure className="flex flex-col items-center">
            <Image src="/img/coracaoo.png" alt="Coração" width={500} height={500} />
            <figcaption className="text-center font-thin text-lg">MDKNJIANDQIDNIN</figcaption>
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
    </div>
  );
}

    
  

