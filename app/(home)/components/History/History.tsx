import CounterUp from 'components/CenterUp/CenterUp';

const History = () => {
  return (
    <section className="pb-4">
      <div className="container">
        <div className="flex flex-wrap justify-between px-3 pb-16 pt-8">
          <div
            className="hover-up-5 wow animate__animated animate__fadeIn flex w-1/2 py-4 lg:w-auto"
            data-wow-delay=".2s"
          >
            <div className="bg-blueGray-50 flex size-12 items-center justify-center rounded-xl text-primary-500 sm:size-20">
              <svg
                className="size-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <div className="ml-2 sm:ml-6 sm:py-2">
              <div className="flex">
                <span className="font-heading font-bold sm:text-2xl">+ </span>
                <span className="font-heading count font-bold sm:text-2xl">
                  <CounterUp count={150} time={3} />
                </span>
              </div>
              <p className="text-blueGray-400 text-xs sm:text-base">
                Parceiros
              </p>
            </div>
          </div>
          <div
            className="hover-up-5 wow animate__animated animate__fadeIn flex w-1/2 py-4 lg:w-auto"
            data-wow-delay=".4s"
          >
            <div className="bg-blueGray-50 flex size-12 items-center justify-center rounded-xl text-primary-500 sm:size-20">
              <svg
                className="size-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                ></path>
              </svg>
            </div>
            <div className="ml-2 sm:ml-6 sm:py-2">
              <div className="flex">
                <span className="font-heading font-bold sm:text-2xl">+ </span>
                <span className="font-heading count font-bold sm:text-2xl">
                  <CounterUp count={58} time={3} />
                </span>
                <span className="font-heading font-bold sm:text-2xl"> k </span>
              </div>
              <p className="text-blueGray-400 text-xs sm:text-base">
                Projetos completados
              </p>
            </div>
          </div>
          <div
            className="hover-up-5 wow animate__animated animate__fadeIn flex w-1/2 py-4 lg:w-auto"
            data-wow-delay=".6s"
          >
            <div className="bg-blueGray-50 flex size-12 items-center justify-center rounded-xl text-primary-500 sm:size-20">
              <svg
                className="size-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
            </div>
            <div className="ml-2 sm:ml-6 sm:py-2">
              <div className="flex">
                <span className="font-heading font-bold sm:text-2xl">+ </span>
                <span className="font-heading count font-bold sm:text-2xl">
                  <CounterUp count={500} time={3} />
                </span>
              </div>
              <p className="text-blueGray-400 text-xs sm:text-base">
                Clientes Felizes
              </p>
            </div>
          </div>
          <div
            className="hover-up-5 wow animate__animated animate__fadeIn flex w-1/2 py-4 lg:w-auto"
            data-wow-delay=".8s"
          >
            <div className="bg-blueGray-50 flex size-12 items-center justify-center rounded-xl text-primary-500 sm:size-20">
              <svg
                className="size-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <div className="ml-2 sm:ml-6 sm:py-2">
              <div className="flex">
                <span className="font-heading font-bold sm:text-2xl">+ </span>
                <span className="font-heading count font-bold sm:text-2xl">
                  <CounterUp count={320} time={3} />
                </span>
              </div>
              <p className="text-blueGray-400 text-xs sm:text-base">
                Trabalho de Pesquisa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
