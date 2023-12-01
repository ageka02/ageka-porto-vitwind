const Portfoliopages = () => {
  return (
    <section id="portfolio" className="bg-anti-flash-white pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-20 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold uppercase text-purple">
              {"Portfolio"}
            </h4>
            <h2 className="text-3xl font-bold text-dark lg:text-4xl">
              {"Projects"}
            </h2>
            <p className="text-md font-medium text-secondary md:text-lg">
            The projects that have been created consist of several website projects and Business Intelligence (BI) dashboard projects.
            </p>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg">
              <img src="https://source.unsplash.com/360x200?programming" alt="Programming" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfoliopages;
