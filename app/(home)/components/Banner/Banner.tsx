import useDeviceDetection from 'hooks/useDeviceDetection';

import TextEffect from 'components/TextEffect/TextEffect';

const Banner = () => {
  const { isMobile } = useDeviceDetection();

  return (
    <section
      className="relative -mt-24 bg-cover bg-top bg-no-repeat pb-8 pt-24"
      style={{
        backgroundImage: "url('assets/imgs/placeholders/banner.webp')",
      }}
    >
      <div className="container flex min-h-[72vh] flex-col justify-center">
        <div className="montserrat py-12 text-center">
          <div className="mx-auto mb-8 max-w-3xl">
            <p className="text-3xl leading-relaxed md:text-3xl  lg:text-4xl">
              Soluções de{' '}
              <strong className="">
                <br className="md:hidden" />
                marketing digital
              </strong>
              <br />
              que geram {isMobile && <br />}
              <span className="typewrite d-inline text-brand text-primary-500">
                <TextEffect
                  texts={['equity de marca', 'credibilidade', 'conversões']}
                />
              </span>
            </p>
          </div>
        </div>

        {/* <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center pb-4 pt-12">
              <div
                className="mb-8 w-1/2 px-8 md:w-1/3 lg:w-1/5"
                
              >
                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-2.png" alt="Imagem" />
              </div>
              <div
                className="mb-8 w-1/2 px-8 md:w-1/3 lg:w-1/5"
                
              >
                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-2.png" alt="Imagem" />
              </div>
              <div
                className="mb-8 w-1/2 px-8 md:w-1/3 lg:w-1/5"
                
              >
                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-2.png" alt="Imagem" />
              </div>
              <div
                className="mb-8 w-1/2 px-8 md:w-1/3 lg:w-1/5"
                
              >
                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-2.png" alt="Imagem" />
              </div>
              <div
                className="mb-8 w-1/2 px-8 md:w-1/3 lg:w-1/5"
                
              >
                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-2.png" alt="Imagem" />
              </div>
            </div> */}
      </div>
    </section>
  );
};

export default Banner;
