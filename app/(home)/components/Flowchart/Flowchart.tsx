const Flowchart = ({ url }: { url: string }) => {
  return (
    <section className="py-16 lg:py-24" id="flowchart" data-aos="fade-up">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full">
            <video src={url} className="w-full" autoPlay muted loop />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flowchart;
