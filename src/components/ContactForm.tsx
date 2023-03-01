import classNames from "classnames";

export default function ContactForm(){
  return(
    <section className="bg-white min-h-screen">
      <div className="py-8 lg:py-16 px-4 m-auto max-w-screen-md flex-row items-center justify-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Entre em contato</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="nome@gmail.com" required />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Deixe-nos saber como podemos ajudá-lo" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Deixei sua mensagem..."></textarea>
          </div>
          <button type="submit" className="bg-blue-400 py-3 px-9 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-1 focus:outline-none focus:ring-primary-300 transition-all ease-in-out hover:bg-blue-500">
            <a href="mailto:schallenbergerbruno@gmail.com">Enviar</a>
          </button>
        </form>
      </div>
    </section>
  )
}