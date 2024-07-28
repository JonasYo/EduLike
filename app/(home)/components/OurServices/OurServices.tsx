import { OurServicesProps } from 'common/types';
import { CustomTitle } from 'components';

const OurServices = ({ title, items }: OurServicesProps) => {
  return (
    <section className="pt-16 lg:pt-24" id="services">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <CustomTitle title={title} />
        </div>
        <div className="-mx-3 flex flex-wrap">
          {items?.map((item, index) => (
            <div key={index} className="w-full gap-4 px-3 md:w-1/2 lg:w-1/4">
              <div className="hover-up-2 rounded border border-gray-100 bg-white px-6 pb-6 pt-8 text-center shadow transition duration-500 hover:shadow-lg">
                <div className="mx-auto mb-4 text-primary-500">
                  <svg
                    className="mx-auto size-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={item?.image?.url}
                    ></path>
                  </svg>
                </div>
                <h3 className="font-heading mb-2 font-bold">{item.title}</h3>
                <p className="text-blueGray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
