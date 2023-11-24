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
            Aproveite e conheça 6 alimentos que melhoram a saúde do coração!
          </div>
        </Link>
      </figure>

    

      <h2 className="text-2xl font-bold text-left mt-16 mb-4">
        2. Pratique atividades físicas
      </h2>

      <figure className="flex flex-col items-left">
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
    </div>

    

  );
}

