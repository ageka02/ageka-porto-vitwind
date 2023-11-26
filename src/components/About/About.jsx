import { greeting } from "../../portfolio";

const About = () => {
  return <section id="about" className="pt-20 pb-32 dark:bg-dark">
  <div className="container">
    <div className="flex flex-wrap">
      <div className="mb-10 w-full px-4 lg:w-1/2">
        <h4 className="mb-3 text-lg font-bold uppercase text-purple">{"About Me"}</h4>
        <h2 className="mb-5 max-w-md text-3xl font-bold text-dark dark:text-white lg:text-4xl">
          {greeting.job}
        </h2>
        <p className="max-w-xl text-base font-medium">
          {greeting.subTitle}
        </p>
      </div>
    </div>
  </div>

  </section>
}
export default About;