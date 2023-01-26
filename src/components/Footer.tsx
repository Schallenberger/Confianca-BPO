
export function Footer(){
  
  return(
	<footer className="p-4 shadow md:px-6 md:py-8 bg-blue-400">
		<div className="sm:flex sm:items-center sm:justify-between">
			<a href="#" target="_blank" className="flex items-center mb-4 sm:mb-0">
				<img src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...eHrxNKmRzOwXs1M3EMoAJtliYlhvFi...Psz" className=" w-36" alt="Flowbite Logo" />
			</a>
			<ul className="flex flex-wrap items-center mb-6 sm:mb-0">
				<li>
					<a href="KnowMore" className="mr-4 text-sm text-white hover:underline md:mr-6">Sobre</a>
				</li>
				<li>
					<a href="mailto:confiancabpo@confiancabpo.com.br"
						className="mr-4 text-sm text-white hover:underline md:mr-6">Enviar e-mail</a>
				</li>
				<li>
					<a href="tel:5198917-6677" className="text-sm text-white hover:underline">(51) 98917-6677</a>
				</li>
			</ul>
		</div>
		<hr className="my-6 border-white sm:mx-auto lg:my-8" />
		<span className="block text-sm text-white sm:text-center">© 2022 <a target="_blank">Schallen™</a>. All Rights Reserved.
    </span>
	</footer>
)}