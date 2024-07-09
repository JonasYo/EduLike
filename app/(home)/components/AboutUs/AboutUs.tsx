const AboutUs = () => {
  return (
    <section
      className="bg-top bg-no-repeat py-20 xl:bg-contain"
      style={{
        backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')",
      }}
      id="about"
    >
      <div className="container">
        <div className="mb-12 flex max-w-2xl flex-wrap items-center justify-between lg:max-w-full">
          <div className="mb-4 w-full lg:mb-0 lg:w-1/2">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              <span>Quem </span>
              <span className="text-primary-500">somos </span>
              <span>e o que </span>
              <br />
              <span className="text-primary-500">fazemos</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-blueGray-400 leading-loose">
              A Experimento 636 é a especializada em inbound marketing para
              instituições de ensino, a Experimento 636 tem um papel cada vez
              mais relevante no mercado educacional. Mais que uma agência,
              buscamos a transformação digital da prestação dos serviços
              educacionais, por meio de uma comunicação eficiente e da
              divulgação e valorização do trabalho pedagógico, promovendo o
              fortalecimento da marca da escola e a retenção e captação de
              alunos.
            </p>
          </div>
        </div>
        <div className="-mx-3 -mb-6 flex flex-wrap text-center">
          <div className="hover-up-5 mb-6 w-full px-3 md:w-1/2 lg:w-1/3">
            <div className="rounded bg-white p-10 shadow">
              <img
                className="mx-auto my-4 h-36"
                src="/assets/imgs/illustrations/eating.svg"
                alt="Imagem"
              />
              <h3 className="font-heading mb-2 text-xl font-bold">
                FUNIL DE VENDAS
              </h3>
              <p className="text-blueGray-400 text-sm leading-relaxed">
                Utilizamos o modelo de funil de vendas que é uma forma
                estruturada de atrair leads qualificados (clientes em potencial)
                por meio de estratégias de inbound marketing (marketing pela
                internet), acompanhando a sua jornada.
              </p>
            </div>
          </div>
          <div className="hover-up-5 mb-6 w-full px-3 md:w-1/2 lg:w-1/3">
            <div className="rounded bg-white p-10 shadow">
              <img
                className="mx-auto my-4 h-36"
                src="/assets/imgs/illustrations/space.svg"
                alt="Imagem"
              />
              <h3 className="font-heading mb-2 text-xl font-bold">AUTOMAÇÃO</h3>
              <p className="text-blueGray-400 text-sm leading-relaxed">
                Os recursos de automação auxiliam na gestão do inbound
                marketing, por meio do controle dos leads nas etapas do funil de
                vendas e a mensuração dos resultados, para que os objetivos da
                instituição sejam alcançados.
              </p>
            </div>
          </div>
          <div className="hover-up-5 mb-6 w-full px-3 lg:w-1/3">
            <div className="rounded bg-white p-10 shadow">
              <img
                className="mx-auto my-4 h-36"
                src="/assets/imgs/illustrations/tasks.svg"
                alt="Imagem"
              />
              <h3 className="font-heading mb-2 text-xl font-bold">
                MARKETING DE CONTEÚDO
              </h3>
              <p className="text-blueGray-400 text-sm leading-relaxed">
                As instituições de ensino naturalmente são produtoras de
                conteúdo relevante. A Rabbit Digital auxilia nas publicações por
                meio de um planejamento de postagens nas redes sociais, no blog
                e no site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
