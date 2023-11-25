import Image from "next/image";
import Link from "next/link";

export default function Hospitais() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="text-5xl font-serif text-center mt-16 mb-24">Hospitais</h1>

      <div className="flex justify-center space-x-8">
          <div className="mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
          <figure className="flex flex-col items-center">
            <Image src="/img/NotreDame.jpg" alt="NotreDame" width={500} height={500} />
            <figcaption className="text-center font-semibold text-lg">Unidade - São Bernardo do Campo </figcaption>

          </figure>
          
        </div>
        </div>

     
    </div>
  );
}

    
  

