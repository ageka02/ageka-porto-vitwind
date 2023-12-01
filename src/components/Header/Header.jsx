import { greeting } from "../../portfolio";

const Header = () => {
  window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    // const toTop = document.querySelector('#to-top');
  
    if (window.scrollY > fixedNav) {
      header.classList.add('navbar-fixed');
      // toTop.classList.remove('hidden');
      // toTop.classList.add('flex');
    } else {
      header.classList.remove('navbar-fixed');
      // toTop.classList.remove('flex');
      // toTop.classList.add('hidden');
    }
  }

  // const hamburger = document.querySelector('#hamburger');
  // const navMenu = document.querySelector('#nav-menu');

  // function onClickBurger () {
  //   hamburger.ariaCurrent.classList.toggle('hamburger-active');
  //   navMenu.ariaCurrent.classList.toggle('hidden');
  // }

  // Klik di luar hamburger
  // function onClickBurger2 (e) {
  //   if (e.target != hamburger && e.target != navMenu) {
  //     hamburger.classList.remove('hamburger-active');
  //     navMenu.classList.add('hidden');
  //   }
  // }

  return (
  <header className="absolute top-0 left z-10 flex w-full items-center bg-transparent navbar-fixed">
    <div className="container">
      <div className="relative flex items-center ">
        <div className="px-4">
          <a href="#home" className="block py-3 text-lg font-semibold">{greeting.initialName}</a>
        </div>
        <div className="flex items-center px-4 flex-1">
          <button name="hamburger" id="hamburger" type="button" className="absolute right-4 block lg:hidden">
          <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
          <span className="hamburger-line transition duration-300 ease-in-out"></span>
          <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
          </button>
          <nav id="nav-menu" className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-3 shadow-lg dark:bg-dark lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent">
            <ul className="block lg:flex lg:justify-center">
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