/* eslint-disable @next/next/no-img-element */
const Flowchart = ({ url }: { url: string }) => {
  return (
    <section className="py-16 lg:py-24" id="flowchart">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full">
            <img
              src={url}
              alt="Meu GIF"
              className="w-full"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flowchart;
