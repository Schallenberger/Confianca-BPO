import { Link } from "react-router-dom";

export function Footer(){
  
  return(
	<footer className="p-4 shadow md:px-6 md:py-8 bg-blue-400">
		<div className="sm:flex sm:items-center sm:justify-between">
			<Link to={`/`} className="flex items-center mb-4 sm:mb-0">
				<img src="https://imgur.com/qakOR08.png" className=" w-48" alt="Flowbite Logo" />
			</Link>
			<ul className="flex flex-wrap items-center mb-6 sm:mb-0">
				<li>
					<Link to={`/About`} className="mr-4 text-sm text-white hover:underline md:mr-6">Sobre</Link>
				</li>
				<li>
					<Link to={`/Contact`}
						className="mr-4 text-sm text-white hover:underline md:mr-6">Enviar e-mail</Link>
				</li>
				<li>
					<a href="tel:5198917-6677" className="mr-4 text-sm text-white hover:underline">(51) 98917-6677</a>
				</li>
				<li>
					<a href="https://icons8.com/" className="text-sm text-white hover:underline">icons8.com</a>
				</li>
			</ul>
		</div>
		<hr className="my-6 border-white sm:mx-auto lg:my-8" />
		<span className="block text-sm text-white sm:text-center">© 2022 <a>Schallen™</a>. All Rights Reserved.
    </span>
	</footer>
)}