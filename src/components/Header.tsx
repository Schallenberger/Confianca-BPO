import { Link } from "react-router-dom";
import { Fragment, useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import classNames from "classnames";


export function Header(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isHomeActive = window.location.href == 'http://www.confiancabpo.com.br/';
  const isProjectsActive = window.location.href == 'http://www.confiancabpo.com.br/Projects';
  const isAboutActive = window.location.href == 'http://www.confiancabpo.com.br/About';
  const isContactActive = window.location.href == 'http://www.confiancabpo.com.br/Contact';

  return(
    <header className="bg-white sticky top-0 z-10">
    <nav className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <img className="w-16" src="https://imgur.com/aKPi4nU.png" alt="logo-confianca-bpo" />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Link 
          className={classNames('font-semibold hover:text-blue-400 transition ease-in-out delay-50 text-lg',{
            'text-blue-400': isHomeActive
          })}
          to={`/`}>
          Home
        </Link>
        <Link 
          className={classNames('font-semibold hover:text-blue-400 transition ease-in-out delay-50 text-lg',{
            'text-blue-400': isProjectsActive
          })}
          to={`/Projects`}>
            Serviços
        </Link>
        <Link
          className={classNames('font-semibold hover:text-blue-400 transition ease-in-out delay-50 text-lg',{
            'text-blue-400': isAboutActive
          })}
          to={`/About`}>
            Sobre
        </Link>
        <Link 
          className={classNames('font-semibold hover:text-blue-400 transition ease-in-out delay-50 text-lg',{
            'text-blue-400': isContactActive
          })} 
          to={`/Contact`}>
            Contato
        </Link>
      </Popover.Group>
    </nav>
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel
        className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="w-12"
              src="https://imgur.com/aKPi4nU.png"
              alt=""
            />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6 flex flex-col">
              <Link 
                className={classNames('font-semibold hover:text-blue-400 transition ease-in-out delay-50 text-lg',{
                  'text-blue-400': isHomeActive
                })}
                to={`/`}>
                Home
              </Link>
              <Link 
                className={classNames('font-semibold hover:text-blue-400 transition ease-in-out delay-50 text-lg',{
                  'text-blue-400': isProjectsActive
                })}
                to={`/Projects`}>
                  Projects
              </Link>
              <Link
                className={classNames('font-semibold hover:text-blue-400 transition ease-in-out delay-50 text-lg',{
                  'text-blue-400': isAboutActive
                })}
                to={`/About`}>
                  About
              </Link>
              <Link 
                className={classNames('font-semibold hover:text-blue-400 transition ease-in-out delay-50 text-lg',{
                  'text-blue-400': isContactActive
                })} 
                to={`/Contact`}>
                  Contact
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </header>
  )
}