import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";



export function Projects(){
  const {slug} = useParams<{slug: string}>()

  return(
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex items-center justify-center">
        <div className="grid gap-4 p-5 mb-8 md:mb-12 md:grid-cols-2 xl:grid-cols-3 min-h-[89vh]">
          <figure className="min-h-[300px] max-w-lg flex flex-col items-center justify-center p-8 text-center border border-gray-100 rounded-2xl shadow-xl">
              <blockquote className="max-w-lg mx-auto mb-4 text-black lg:mb-8">
                  <h3 className="text-lg font-semibold text-gray-900">Contas a pagar</h3>
                  <p className="my-4 font-light">Controlamos e gerenciamos as contas a pagar de sua empresa, independente da entrada (nota fiscal de compra, cartões de crédito, boletos). Enviamos a programação das contas a serem pagas no período determinado (diário, semanal, quinzenal ou outro), trazendo ciência e previsibilidade. Realizamos o agendamento na plataforma do banco, mas é você quem autoriza os pagamentos. Periodicamente enviamos relatórios demonstrando as operações realizadas e a realizar.</p>
              </blockquote>
          </figure>
          <figure className="min-h-[300px] max-w-lg flex flex-col items-center justify-center p-8 text-center border border-gray-100 rounded-2xl shadow-xl">
              <blockquote className="max-w-lg mx-auto mb-4 text-black lg:mb-8">
                  <h3 className="text-lg font-semibold text-gray-900">Contas a receber</h3>
                  <p className="my-4 font-light">Controlamos e gerenciamos o faturamento de sua empresa, as previsões de recebimento de suas contas a receber, auxiliando na projeção do fluxo de caixa. Acompanhamos as liquidações por parte dos seus clientes sejam elas através de boletos ou diretamente nas contas bancárias (depósitos, pix ou outra forma), mantendo controle dos inadimplentes.</p>
              </blockquote>
          </figure>
          <figure className="min-h-[300px] max-w-lg flex flex-col items-center justify-center p-8 text-center border border-gray-100 rounded-2xl shadow-xl">
              <blockquote className="max-w-lg mx-auto mb-4 text-black lg:mb-8">
                  <h3 className="text-lg font-semibold text-gray-900">Conciliação bancária</h3>
                  <p className="my-4 font-light">Realizamos a conciliação dos movimentos bancários apresentados no extrato versus todos os lançamentos previstos para o banco, apresentando o saldo real e garantindo o controle de todas as operações bancárias, evitando fraudes.</p>
              </blockquote>
          </figure>
          <figure className="min-h-[400px] max-w-lg flex flex-col items-center justify-center p-8 text-center border border-gray-100 rounded-2xl shadow-xl">
              <blockquote className="max-w-lg mx-auto mb-4 text-black lg:mb-8">
                  <h3 className="text-lg font-semibold text-gray-900">DRE financeiro</h3>
                  <p className="my-4 font-light">Montamos e apresentamos mensalmente a DRE – Demonstração do Resultado do Exercício, onde são listadas de forma resumida, as receitas e as despesas no período, trazendo um resumo financeiro que aponta ao final se a empresa obteve lucro ou prejuízo.</p>
              </blockquote>
          </figure>
          <figure className="min-h-[400px] max-w-lg flex flex-col items-center justify-center p-8 text-center border border-gray-100 rounded-2xl shadow-xl">
              <blockquote className="max-w-lg mx-auto mb-4 text-black lg:mb-8">
                  <h3 className="text-lg font-semibold text-gray-900">Relatório Fluxo de caixa</h3>
                  <p className="my-4 font-light">Apresentamos periodicamente o saldo de sua empresa, considerando as entradas e as saídas, dia a dia.</p>
              </blockquote>
          </figure>
        </div>
      </div>
      <Footer/>
    </div>
  )
}