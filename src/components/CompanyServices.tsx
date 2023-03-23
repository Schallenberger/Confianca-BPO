

export default function CompanyServices() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-9xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-screen-2xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Serviços</h2>
          <p className="mt-4 text-gray-500">
            Muitas empresas não possuem uma área específica para tratar das rotinas financeiras. A empresa cresceu mas não possui equipe
            qualificada para avaliar seus resultados financeiros.
            <br/>
            Aí que entra o BPO Financeiro. A contratação de uma empresa terceira, especializada nas rotinas financeiras, dispensa os custos com a
            contratação de profissionais para cuidar do financeiro da empresa.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium font-semibold text-gray-900">Contas a pagar</dt>
                <dd className="mt-2 text-sm text-gray-500">Lançamento de NF de fornecedores</dd>
                <dd className="mt-2 text-sm text-gray-500">Lançamento de previsão de pagamentos</dd>
                <dd className="mt-2 text-sm text-gray-500">Agendamento do pagamento no banco</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium font-semibold text-gray-900">Contas a receber</dt>
                <dd className="mt-2 text-sm text-gray-500">Faturamento</dd>
                <dd className="mt-2 text-sm text-gray-500">Criação de previsão de recebimento</dd>
                <dd className="mt-2 text-sm text-gray-500">Baixa do recebimento</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium font-semibold text-gray-900">Conciliação bancária</dt>
                <dd className="mt-2 text-sm text-gray-500">Controle total de saídas e entradas nas contas bancárias</dd>
                <dd className="mt-2 text-sm text-gray-500">Controle e baixa de francesinha</dd>
                <dd className="mt-2 text-sm text-gray-500">Envio de documentos para a contabilidade</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium font-semibold text-gray-900">Fluxo de caixa</dt>
                <dd className="mt-2 text-sm text-gray-500">Controle de entrada e saída de numerários</dd>
                <dd className="mt-2 text-sm text-gray-500">Lançamento de previsão de pagamentos</dd>
                <dd className="mt-2 text-sm text-gray-500">Agendamento do pagamento no banco</dd>
              </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="/src/assets/contas-a-pagar.png"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/src/assets/contas-a-receber.png"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/src/assets/conciliacao-bancaria.png"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/src/assets/fluxo-caixa.png"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}