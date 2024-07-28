import { HistoryProps } from 'common/types';
import CounterUp from 'components/CounterUp';

const History = ({ stats }: HistoryProps) => {
  return (
    <section className="pb-4" id="history">
      <div className="container">
        <div className="flex flex-wrap justify-between px-3 pb-16 pt-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="hover-up-5 wow animate__animated animate__fadeIn flex w-1/2 py-4 lg:w-auto"
              data-wow-delay={`.${index * 2}s`}
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
                    d={stat.iconPath}
                  ></path>
                </svg>
              </div>
              <div className="ml-2 sm:ml-6 sm:py-2">
                <div className="flex">
                  <span className="font-heading font-bold sm:text-2xl">+ </span>
                  <span className="font-heading count font-bold sm:text-2xl">
                    <CounterUp count={stat.count} time={3} />
                  </span>
                </div>
                <p className="text-blueGray-400 text-xs sm:text-base">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
