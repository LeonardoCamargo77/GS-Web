import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="text-5xl font-bold text-center mt-16 mb-24">Como evitar doenças cardiovasculares?</h1>

      <div className="flex justify-center space-x-8">
        <div className="mb-2 overflow-hidden rounded-xl transform hover:rotate-3 transition-transform duration-300">
          <figure className="flex flex-col items-right">
            <Image src="/img/doenca.webp" alt="Doença" width={800} height={800} />
          </figure>
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
            Aproveite e conheça 6 alimentos que melhoram a saúde do coração!
          </div>
        </Link>
      </figure>

      <h2 className="text-2xl font-bold text-left mt-16 mb-4">
        2. Pratique atividades físicas
      </h2>

      <figure className="flex flex-col items-left ">
        <Image
          src="/img/atividadesfisicas.png"  
          alt="Atividades Fisicas"
          width={500}
          height={500}
        />
        <figcaption className="text-left font-arial text-lg mb-4">
          A prática de atividades físicas é uma forma de prevenir não apenas as doenças cardiovasculares, mas diversas outras, além de promover mais qualidade de vida, com resultados positivos para o corpo e para a mente.
          A indicação são os exercícios aeróbicos, no mínimo, 3 vezes por semana, tais como corrida, caminhada, ciclismo, natação, dança, entre outros.
        </figcaption>
        <Link href="https://www.ctcor.com.br/blog/vida-ativa-coracao-saudavel-conheca-os-melhores-exercicios-fisicos-para-a-saude-cardiovascular/#:~:text=Caminhar%20regularmente%20fortalece%20o%20cora%C3%A7%C3%A3o,a%20manuten%C3%A7%C3%A3o%20do%20peso%20corporal.&text=A%20corrida%20%C3%A9%20uma%20forma,significativos%20%C3%A0%20sa%C3%BAde%20do%20cora%C3%A7%C3%A3o.">
          <div className="border border-orange-600 py-2 px-10 rounded-full text-black hover:bg-orange-600 hover:text-white cursor-pointer text-center">
            Conheça as melhores atividades físicas para o coração!
          </div>
        </Link>
      </figure>

      <h2 className="text-2xl font-bold text-left mt-16 mb-4">
        3. Controle o peso
      </h2>

      <figure className="flex flex-col items-left">
        <Image
          src="/img/balanca.avif" 
          alt="Balança"
          width={500}
          height={500}
        />
        <figcaption className="text-left font-arial text-lg mb-4">
          Consequência da má alimentação e da falta de atividades físicas, estar acima do peso contribui para o desencadeamento de diversas doenças cardiovasculares, por exemplo, hipertensão e colesterol alto.
          A sugestão para controlar o peso, ou mesmo eliminar a obesidade, é unir as dicas 1 e 2, ou seja, melhorar a alimentação e sair do sedentarismo.
        </figcaption>
        <Link href="https://semprebem.paguemenos.com.br/calculadora-de-IMC?gclid=CjwKCAiAjfyqBhAsEiwA-UdzJLNm7LAAYCOFcwRimxDe0LYZQw5-U4cXG5uHphgLmA6l6yinTp18hRoCmlcQAvD_BwE">
          <div className="border border-orange-600 py-2 px-10 rounded-full text-black hover:bg-orange-600 hover:text-white cursor-pointer text-center">
            Calcule seu Índice de Massa Corporal 
          </div>
        </Link>
      </figure>

      <h2 className="text-2xl font-bold text-left mt-16 mb-4">
        4. Evite cigarro e consumo de bebidas alcoólicas
      </h2>

      <figure className="flex flex-col items-left">
        <Image
          src="/img/naodrogas.jpg" 
          alt="NãoDrogas"
          width={500}
          height={500}
        />
        <figcaption className="text-left font-arial text-lg mb-4">
          Além de causar doenças como hepatite, cirrose hepática, câncer no esôfago, faringe, fígado, entre outros, o álcool contribui para o desencadeamento de doenças cardiovasculares, a exemplo do infarto e da insuficiência cardíaca. 
          O motivo é que a substância causa danos às células do coração, além de estar associada a arritmias e à obstrução das artérias.
          Já o tabagismo, além de câncer de pulmão e outros tipos, contribui para o estreitamento das artérias e para a elevação da pressão arterial. Somado a isso, o dióxido de carbono do cigarro obriga o coração a trabalhar mais para gerar níveis maiores de oxigênio para o organismo. 
        </figcaption>
        <Link href="https://lapacdourados.com.br/diga-nao-ao-cigarro/">
          <div className="border border-orange-600 py-2 px-10 rounded-full text-black hover:bg-orange-600 hover:text-white cursor-pointer text-center">
            Combata o tabagismo!
          </div>
        </Link>
      </figure>

      <h2 className="text-2xl font-bold text-left mt-16 mb-4">
        5. Procure maneiras de reduzir o estresse
      </h2>

      <figure className="flex flex-col items-left">
        <Image
          src="/img/estresse.png" 
          alt="Estresse"
          width={500}
          height={500}
        />
        <figcaption className="text-left font-arial text-lg mb-4">
          Com a rotina cada vez mais agitada, chega a ser difícil fugir de situações de estresse, por menores que elas sejam. Mas é importante saber que esse quadro provoca uma série de alterações no organismo que podem contribuir para o surgimento de diversas patologias, por isso, precisa ser controlado.
          Entre as consequências que têm ligação direta com as doenças cardiovasculares está o aumento da pressão arterial, decorrente da descarga de adrenalina disparada pelas glândulas suprarrenais quando estamos em condições estressantes.
        </figcaption>
        <Link href="https://cmosdrake.com.br/blog/estresse/">
          <div className="border border-orange-600 py-2 px-10 rounded-full text-black hover:bg-orange-600 hover:text-white cursor-pointer text-center">
            Entenda como o estresse influencia nos problemas de coração.
          </div>
        </Link>
      </figure>

      <h2 className="text-2xl font-bold text-left mt-16 mb-4">
        6. Faça acompanhamento médico
      </h2>

      <figure className="flex flex-col items-left mb-2 overflow-hidden rounded-xl">
        <Image
          src="/img/acompanhamento.png" 
          alt="AcompanhamentoMedico"
          width={500}
          height={500}
        />
        <figcaption className="text-left font-arial text-lg mb-4">
          No começo deste texto falamos que algumas doenças cardiovasculares são silenciosas, ou seja, só diagnosticadas quando a pessoa passa por algum tipo de exame clínico. Justamente por esse motivo é tão importante ter acompanhamento médico periódico.
          Testes sanguíneos para verificar taxas de colesterol, nível de glicose, de triglicérides e de vitaminas, são apenas alguns exemplos de exames laboratoriais que o médico pode solicitar. Além desses, o teste ergométrico, ou de esforço, avalia o sistema cardiovascular e traz um panorama completo da saúde do coração.
          Além do check-up anual, é fundamental também controlar a pressão arterial com uma periodicidade maior, principalmente quando se tem histórico de doenças cardiovasculares na família, para quem é hipertenso, a recomendação é realizar a verificação a cada 3 meses, ou de acordo com a orientação do cardiologista.
        </figcaption>
        <Link href="/previnatech/hospitais">
          <div className="border border-orange-600 py-2 px-10 rounded-full text-black hover:bg-orange-600 hover:text-white cursor-pointer text-center">
            Veja as unidades hospitalares do PrevinaTech!
          </div>
        </Link>
      </figure>
    </div>
  );
}
