import Image from "next/image";
import Link from "next/link";

export default function Hospitais() {
  return (
    <div className="mx-auto max-w-screen-xl space-y-8 mb-8">
      <h1 className="text-5xl font-serif text-center mt-16 mb-24">Unidades Hospitalares </h1>

      
      <div className="mb-2 overflow-hidden rounded-xl ">
        <figure className="flex flex-col items-center">
          <Image src="/img/NotreDame.jpg" alt="NotreDame" width={800} height={800} />
          <figcaption className="text-center font-semibold text-lg">Unidade - São Bernardo do Campo </figcaption>
        </figure>
        <Link href="https://www.gndi.com.br/unidades/hospital-intermedica-abc">
          <div className="border border-orange-600 py-2 px-10 rounded-full text-black hover:bg-orange-600 hover:text-white cursor-pointer text-center">
            Ver Detalhes
          </div>
        </Link>
      </div>

      <div className="mb-2 overflow-hidden rounded-xl">
        <figure className="flex flex-col items-center">
          <Image src="/img/NotreDame2.jpg" alt="NotreDame" width={800} height={800} />
          <figcaption className="text-center font-semibold text-lg">Unidade - São Paulo - Jardim do Mar </figcaption>
        </figure>
        <Link href="https://www.gndi.com.br/unidades/hospital-intermedica-abc">
          <div className="border border-orange-600 py-2 px-10 rounded-full text-black hover:bg-orange-600 hover:text-white cursor-pointer text-center">
            Ver Detalhes
          </div>
        </Link>
      </div>

      
      <div className="mb-2 overflow-hidden rounded-xl">
        <figure className="flex flex-col items-center">
          <Image src="/img/NotreDame3.jpg" alt="NotreDame" width={800} height={800} />
          <figcaption className="text-center font-semibold text-lg">Unidade - Santo André   </figcaption>
        </figure>
        <Link href="https://www.gndi.com.br/unidades/notrelabs-santo-andre-xv-de-novembro">
          <div className="border border-orange-600 py-2 px-10 rounded-full text-black hover:bg-orange-600 hover:text-white cursor-pointer text-center">
            Ver Detalhes
          </div>
        </Link>
      </div>

    
      <div className="mb-2 overflow-hidden rounded-xl">
        <figure className="flex flex-col items-center">
          <Image src="/img/NotreDame4.jpg" alt="NotreDame" width={800} height={800} />
          <figcaption className="text-center font-semibold text-lg">Unidade - Centro Clínico Jundiaí  </figcaption>
        </figure>
        <Link href="https://www.gndi.com.br/unidades/centro-clinico-jundiai">
          <div className="border border-orange-600 py-2 px-10 rounded-full text-black hover:bg-orange-600 hover:text-white cursor-pointer text-center">
            Ver Detalhes
          </div>
        </Link>
      </div>

      <div className="mb-2 overflow-hidden rounded-xl">
      <h1 className="text-3xl font-semibold text-center mt-16 mb-24">Confira os médicos renomados das unidades hospitalares ao clicar no botão!</h1>
        <Link href="http://localhost:8080/previnatech/webapi/hospital">
          <div className="border border-orange-600 py-2 px-10 rounded-full text-black hover:bg-orange-600 hover:text-white cursor-pointer text-center">
            Clique Aqui
          </div>
        </Link>
      </div>

      

    
      <div className="mb-8"></div>
    </div>
  );
}
