import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-orange-600 font-sans w-96 h-35 p-4 rounded-lg mb-4">
        <h1 className="text-center text-6xl text-white font-black"> - ERROR - 404</h1>
        <p className="text-center text-white text-3xl">Página não encontrada!</p>
        <div className="mb-4 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
        <figure className="flex flex-col items-center">
          <Image src="/img/cardiograma.avif" alt="Cardiograma" width={400} height={400} />
          <figcaption className="text-center font-thin text-lg"></figcaption>
        </figure>
      </div>
      </div>

      <div className="flex justify-end mt-4">
        <p className="text-center text-2xl font-bold">Retorne a Home clicando no botão a seguir</p>
        <Link href="/">
          <div className="border border-orange-600 py-2 px-6 rounded-full text-black hover:bg-orange-600 hover:text-white cursor-pointer">
            HOME
          </div>
          </Link>
          <div className="mb-4 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
        <figure className="flex flex-col items-center">
          <Image src="/img/cardiograma2.svg" alt="Cardiograma" width={300} height={300} />
          <figcaption className="text-center font-thin text-lg"></figcaption>
        </figure>
      </div>
        
      </div>

      
      
    </div>
    
  );
}
