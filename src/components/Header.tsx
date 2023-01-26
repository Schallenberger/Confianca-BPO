import classNames from "classnames";
import { Link } from "react-router-dom";

export function Header(){

  const isHomeActive = window.location.href == 'http://localhost:3000/';
  const isProjectsActive = window.location.href == 'http://localhost:3000/Projects';
  const isAboutActive = window.location.href == 'http://localhost:3000/About';
  const isContactActive = window.location.href == 'http://localhost:3000/Contact';

  return(
    <header className="w-full py-5 flex items-center justify-evenly absolute">
      <Link 
        className={classNames('hover:text-blue-400 transition ease-in-out delay-50 text-lg',{
          'text-blue-400': isHomeActive
        })}
        to={`/`}>
        Home
      </Link>
      <Link 
        className={classNames('hover:text-blue-400 transition ease-in-out delay-50 text-lg',{
          'text-blue-400': isProjectsActive
        })}
        to={`/Projects`}>
          Projects
      </Link>
      <img className="w-48" src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...eHrxNKmRzOwXs1M3EMoAJtliYlhvFi9...o4" alt="" srcSet="" />
      <Link
        className={classNames('hover:text-blue-400 transition ease-in-out delay-50 text-lg',{
          'text-blue-400': isAboutActive
        })}
        to={`/About`}>
          About
      </Link>
      <Link 
        className={classNames('hover:text-blue-400 transition ease-in-out delay-50 text-lg',{
          'text-blue-400': isContactActive
        })} 
        to={`/Contact`}>
          Contact
      </Link>
    </header>
  )
}