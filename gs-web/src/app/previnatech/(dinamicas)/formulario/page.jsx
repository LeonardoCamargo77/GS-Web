import Image from "next/image";
import Link from "next/link";

export default function Formulario() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="text-5xl font-serif text-center mt-16 mb-24">Médicos renomados das nossas unidades </h1>
      <div className="flex justify-center space-x-8">
        <div className="mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
          <figure className="flex flex-col items-right">
            <Image src="/img/medicos.webp" alt="Doença" width={800} height={800} />
            <Link href="https://cmosdrake.com.br/blog/6-alimentos-que-melhoram-a-saude-do-coracao/">
          <div className="border border-orange-600 py-2 px-10 rounded-full text-black hover:bg-orange-600 hover:text-white cursor-pointer text-center">
            Aproveite e conheça 6 alimentos que melhoram a saúde do coração!
          </div>
        </Link>
          </figure>
        </div>
      </div>

    </div>
  );
}

    
  

