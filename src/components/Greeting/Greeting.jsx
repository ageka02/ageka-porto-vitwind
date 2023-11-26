import { greeting } from "../../portfolio";
// import imageRight from "../../assets/img/avatar.png"
import FeelingProud from "./FeelingProud";


const Greeting = () => {
  

  return (
    <section id="home" className="pt-16 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
        {/* hero left */}
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-purple md:text-xl">
              {greeting.title}
              <span className="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">
                {greeting.username}
              </span>
            </h1>
            <h2 className="mb-5 text-lg font-medium text-secondary lg:text-2xl">
              {greeting.job}
            </h2>
            <p className="mb-10 font-medium leading-relaxed text-secondary">
              {greeting.subTitle}
            </p>
            <a
              href="#"
              className="rounded-full bg-purple py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
            >
              {greeting.btnTitle}
            </a>
          </div>

          {/* hero right */}
          <div className="w-full self-center px-4 lg:w-1/2">
            {/* <div className="relative lg:right-0">
              <img src={imageRight} alt="the has sling slash" className="max-w-full mx-auto  "/>
              <span className="absolute -bottom-6 -z-10 left-1/2 -translate-x-1/2 md:scale-125 md:bottom-10">
                <svg
                  width="320"
                  height="320"
                  viewBox="0 0 200 170"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#8e6df6"
                    d="M36.8,-41.5C49.5,-33.1,63.1,-23.3,68,-9.9C72.8,3.5,69,20.6,59.4,31.6C49.8,42.7,34.6,47.8,19.2,54.1C3.8,60.3,-11.8,67.6,-28.6,66.7C-45.4,65.7,-63.5,56.4,-70.7,41.8C-78,27.2,-74.4,7.4,-68.7,-9.9C-63,-27.2,-55.3,-42,-43.5,-50.6C-31.7,-59.2,-15.9,-61.6,-1.9,-59.3C12,-57,24,-49.9,36.8,-41.5Z"
                    transform="translate(100 100) scale(1)"
                  />
                </svg>
              </span>
            </div> */}
            <FeelingProud />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Greeting;
