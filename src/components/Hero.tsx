
export function Hero
(){
  
  return(
		<div className="bg-white relative pt-40 pb-20 lg:pt-44 h-[90vh]">
			<div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
				<h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-400 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl">Conheça um pouco mais a<br className="lg:block hidden" /> <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">Confiança BPO</span>.</h1>
				<div className="lg:flex">
						<div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
								<p className="sm:text-lg text-gray-700 lg:w-11/12">
								Do sonho nasceu o despertar empreendedor e o movimento das ações fez o sonho virar realidade. Sonhar... empreender... e a certeza de sempre trabalhar de forma eficiente e inovadora, gerando confiança em cada entrega realizada aos clientes.
								<br/>
								<br/>
								Somos uma empresa formada em sua base por profissionais qualificados tecnicamente e de longa experiência na área. Nossa missão é Gerar valor financeiro aos clientes, transformando sua operação financeira
								</p>
								<span className="block font-semibold text-gray-500">A melhor opção para transformar sua operação financeira</span>
								<div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
										<a aria-label="go to instagram" href="https://www.instagram.com/confianca_bpo/" className="p-4 border border-gray-200 rounded-full duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-400/20">
												<div className="flex justify-center space-x-4">
														<img className="w-6 h-6" src="../assets/instagram.png" alt="slack logo" loading="lazy" width="128" height="128" />
														<span className="hidden font-medium md:block">Instagram</span>
												</div>
										</a>  
								</div>
						</div>
				</div>
			</div>
		</div>
)}