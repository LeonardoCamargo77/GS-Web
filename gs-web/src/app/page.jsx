import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="text-6xl font-serif text-center mt-16 mb-24">PrevinaTech</h1>

      <div className="flex justify-center space-x-8">
        <div className="mb-8 overflow-hidden rounded-xl">
          <figure className="flex flex-col items-center">
            <Image src="/img/frontal.jpg" alt="CoraçãoÁrvore" width={900} height={900} />
            <figcaption className="text-left font-arial text-lg mb-4">
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
      

     
    </div>
  );
}
