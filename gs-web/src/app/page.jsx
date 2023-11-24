import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="text-6xl font-serif text-center mt-16 mb-24">PrevinaTech</h1>

      <div className="flex justify-center space-x-8">
        <div className="mb-8 overflow-hidden rounded-xl relative">
          <figure className="flex flex-col items-center relative">
            <Image src="/img/frontal.jpg" alt="CoraçãoÁrvore" width={1000} height={1000} className="rounded-full" />
            <hr className="border-t-2 border-orange-600 w-3/4 absolute bottom-0 left-1/8 z-10" />
            <figcaption className="text-left font-arial text-lg mt-8 mb-4">
              O projeto PrevinaTech surge como uma inovadora solução voltada para a otimização do acesso à saúde, oferecendo uma abordagem integrada que visa facilitar a jornada do paciente desde a identificação dos sintomas até o agendamento eficiente de consultas.
              A plataforma se destaca por sua capacidade de auxiliar os usuários na identificação da especialidade médica mais adequada com base nos sintomas apresentados. Ao fornecer uma interface intuitiva para a inserção de sintomas, o PrevinaTech utiliza algoritmos inteligentes e um extenso banco de dados para sugerir especialidades específicas, proporcionando aos usuários uma orientação valiosa sobre qual profissional de saúde buscar.
              Além disso, o PrevinaTech simplifica o processo de agendamento de consultas, permitindo que os usuários marquem diretamente com os profissionais recomendados. A plataforma integra-se a calendários, facilitando a seleção de horários disponíveis e proporcionando uma experiência de agendamento eficaz.
              A mobilidade é uma prioridade, com uma interface adaptada tanto para dispositivos móveis quanto para navegadores da web, garantindo acessibilidade em qualquer contexto.
              A integração com instituições médicas é fundamental, estabelecendo parcerias para acesso direto aos sistemas de agendamento existentes. Isso não apenas simplifica a experiência do usuário, mas também promove uma colaboração eficaz com os prestadores de serviços de saúde.
              Em resumo, o PrevinaTech emerge como uma resposta inovadora às complexidades do acesso à saúde, colocando nas mãos dos usuários uma ferramenta poderosa que não apenas simplifica o processo, mas também promove uma abordagem proativa à gestão da saúde, contribuindo para um sistema mais eficiente e centrado no paciente.
            </figcaption>
          </figure>
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-screen-xl">
          <h1 className="text-6xl font-serif text-center mt-16 mb-24">Integrantes</h1>

          <div className="flex justify-center space-x-8">
          <div className="mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
          <figure className="flex flex-col items-center">
            <Image src="/img/anaa.jpeg" alt="AnaPaula" width={170} height={170} />
            <figcaption className="text-center font-semibold text-lg">Ana Paula - 552513  </figcaption>
          </figure>
        </div>

        <div className="mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
          <figure className="flex flex-col items-center">
            <Image src="/img/calina.jpg" alt="Calina" width={300} height={300} />
            <figcaption className="text-center font-semibold text-lg">Calina Thalya - 552523</figcaption>
          </figure>
        </div>

        <div className="mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
          <figure className="flex flex-col items-center">
            <Image src="/img/geovana.jpeg" alt="geovana" width={300} height={310} />
            <figcaption className="text-center font-semibold text-lg">Geovana Ribeiro - 99646</figcaption>
          </figure>
        </div>

        <div className="mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
          <figure className="flex flex-col items-center">
            <Image src="/img/leo.jpeg" alt="leo" width={240} height={50} />
            <figcaption className="text-center font-semibold text-lg">Leonardo Lucena - 552537</figcaption>
          </figure>
        </div>

        <div className="mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
          <figure className="flex flex-col items-center">
            <Image src="/img/nathan.jpeg" alt="nathan" width={310} height={600} />
            <figcaption className="text-center font-semibold text-lg">Nathan Nunes - 552539</figcaption>
          </figure>
        </div>
          </div>

          <div className="mx-auto max-w-screen-xl mb-8">
            <h1 className="text-4xl font-serif text-center mt-16 mb-4">Plataformas de acesso:</h1>

            <Link href="https://github.com/LeonardoCamargo77/GS-Web">
              <div className="mb-4 text-center border border-orange-600 py-2 px-6 rounded-full text-black hover:bg-orange-600 hover:text-white cursor-pointer">
                Repositório
              </div>
            </Link>
            <Link href="https://gs-web-nu.vercel.app/">
              <div className="text-center border border-orange-600 py-2 px-6 rounded-full text-black hover:bg-orange-600 hover:text-white cursor-pointer mb-4">
                Vercel
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
