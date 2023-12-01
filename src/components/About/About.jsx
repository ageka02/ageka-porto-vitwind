import { greeting } from "../../portfolio";
import imagesFrontEnd from "../../assets/img/front-end.jfif";
import imagesAnalyst from "../../assets/img/analyst.jfif";

const About = () => {
  return <section id="about" className="pt-20 pb-32 dark:bg-dark">
  <div className="container">

    <div className="w-full px-4">
      <div className="mx-auto mb-20 max-w-xl text-center">
        <h4 className="mb-2 text-lg font-semibold uppercase text-purple">{"About Me"}</h4>
        <h2 className="text-3xl font-bold text-dark lg:text-4xl">{"Here's What I do"}</h2>
      </div>
    </div>

    <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
      <div className="flex flex-col items-center mb-10 px-4 text-center md:w-1/2">
        <div className="mb-6 overflow-hidden rounded-3xl shadow-xl w-full h-56 lg:h-80 text-center items-center ">
          <img src={imagesFrontEnd} alt="imgFrontEnd"></img>
        </div>
        <h3 className="mb-1 max-w-md text-xl font-bold text-dark dark:text-white lg:text-2xl">
          {greeting.job}
        </h3>
        <p className="max-w-xl text-base text-secondary font-medium">
          {greeting.subTitle}
        </p>
      </div>

      <div className="flex flex-col items-center mb-10 px-4 text-center md:w-1/2">
        <div className="mb-6 overflow-hidden rounded-3xl shadow-xl w-full h-56 lg:h-80 text-center items-center ">
          <img src={imagesAnalyst} alt="imgFrontEnd"></img>
        </div>
        <h3 className="mb-1 max-w-md text-xl font-bold text-dark dark:text-white lg:text-2xl">
          {greeting.job2}
        </h3>
        <p className="max-w-xl text-base text-secondary font-medium">
          {greeting.jobDesc2}
        </p>
      </div>

    </div>
  </div>

  </section>
}
export default About;