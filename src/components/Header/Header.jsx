import { greeting } from "../../portfolio";

const Header = () => {
  return (
  <header className="absolute top-0 left z-10 flex w-full items-center bg-transparent navbar-fixed">
    <div className="container">
      <div className="relative flex items-center justify-between">
        <div className="px-4">
          <a href="#home" className="block py-3 text-lg font-semibold">{greeting.initialName}</a>
        </div>
        <div className="flex items-center px-4">
          <button name="hamburger" id="hamburger" type="button" className="absolute right-4 block lg:hidden">
          <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
          <span className="hamburger-line transition duration-300 ease-in-out"></span>
          <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
          </button>
          <nav id="nav-menu" className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-3 shadow-lg dark:bg-dark lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent">
            <ul className="block lg:flex">
              <li className="group">
                <a href="#home" className="mx-8 flex py-2 text-base text-dark group-hover:text-purple dark:text-white">Home</a>
              </li>
              <li className="group">
                <a href="#about" className="mx-8 flex py-2 text-base text-dark group-hover:text-purple dark:text-white">About Me</a>
              </li>
              <li className="group">
                <a href="#portfolio" className="mx-8 flex py-2 text-base text-dark group-hover:text-purple dark:text-white">Portfolio</a>
              </li>
              
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>      
  )
}
export default Header;