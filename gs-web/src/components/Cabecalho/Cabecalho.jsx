import Link from "next/link";

export default function Cabecalho() {
  return (
    <div>
      <header className="text-black p-2 flex items-center justify-between h-50 border-b border-orange-500">
        <p className="flex items-center font-bold text-2xl hover:text-orange-500 border-r-2 orange pr-4 rounded">
          <Link href="/">PrevinaTech</Link>
          <img src="/img/coracaoo.png" alt="Logo" className="w-8 h-8 mr-2" />
        </p>
        <nav className="cabecalhoo flex items-center">
          <p className="mx-0 text-lg font-semibold hover:bg-orange-600 rounded">
            <Link href="/previnatech/home">Home</Link>
          </p>
          <p className="mx-0 text-lg font-semibold hover:bg-orange-600 rounded"> 
            <Link href="/previnatech/formulario">Formulário</Link>
          </p>
          <p className="mx-0 text-lg font-semibold hover:bg-orange-600 rounded"> 
            <Link href="/previnatech/integrantes">Integrantes</Link>
          </p>
          <p className="mx-0 text-lg font-semibold hover:bg-orange-600 rounded"> 
            <Link href="/previnatech/hospitais">Hospitais</Link>
          </p>
        </nav>
      </header>
    </div>
  );
}
