import { greeting } from "../../portfolio";
import Social from "../Social/Social";
import FeelingProud from "./FeelingProud";

const Greeting = () => {
  return (
    <section id="home" className=" pt-24 lg:pt-16 dark:bg-dark  ">
      <div className="container">
        <div className="flex flex-wrap ">
          {/* hero left */}
          <div className="w-full self-center px-4 lg:w-1/2 mb-5">
            <h1 className="text-base font-semibold text-purple md:text-xl">
              {greeting.title}
              <span className="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">
                {greeting.username}
              </span>
            </h1>
            <h2 className="mb-5 text-lg font-medium text-secondary lg:text-2xl">
              {greeting.job}
            </h2>
            <p className="mb-4 font-medium leading-relaxed text-secondary">
              {greeting.jobDesc}
            </p>
            <Social/>
            <div className="pt-3">
              <a
                href="#"
                className="rounded-lg bg-purple py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
              >
                {greeting.btnTitle}
              </a>
            </div>
          </div>

          {/* hero right */}
          <div className="w-full self-center lg:px-4 lg:w-1/2 ">
            <FeelingProud classNames="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
