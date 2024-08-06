import Image from 'next/image';

import { OurServicesProps } from 'common/types';
import { CustomTitle } from 'components';

const OurServices = ({ title, items }: OurServicesProps) => {
  return (
    <section className="pt-16 lg:pt-24" id="services">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
          <CustomTitle title={title} />
        </div>

        <div className="-mx-3 flex flex-wrap">
          {items?.map((item, index) => (
            <div
              key={index}
              className="w-full px-4 pt-8 sm:w-1/2 md:w-1/3"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="flex flex-col items-center rounded border border-gray-100 bg-white px-6 pb-6 pt-8 text-center shadow hover:shadow-lg">
                <Image
                  src={item?.image?.url}
                  alt="Logo Image"
                  width={100}
                  height={100}
                />
                <h3 className="font-heading mb-2 font-bold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
