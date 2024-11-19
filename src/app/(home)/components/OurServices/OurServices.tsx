import { OurServicesProps } from 'common/types';
import { CustomTitle } from 'components';
import DynamicIcon from 'components/DynamicIcon';

const OurServices = async ({ title, items }: OurServicesProps) => {
  return (
    <section className="bg-white py-16 lg:py-24" id="services">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
          {title && (
            <CustomTitle
              title={title}
              partTextColor="text-secondary-500"
              styles="mx-auto max-w-7xl pl-4 text-center font-sans text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-5xl"
            />
          )}
        </div>

        <div className="-mx-3 flex flex-wrap">
          {items?.map((item, index) => (
            <div
              key={index}
              className="w-full px-4 pt-8 sm:w-1/2 md:w-1/3"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="flex flex-col rounded-xl bg-white px-6 pb-6 pt-8 hover:bg-[#F9F8FE] ">
                <div
                  className={`p-4 ${item?.icon?.backgroundColor} w-fit rounded-2xl`}
                >
                  <DynamicIcon
                    name={item?.icon?.iconName}
                    color={item?.icon?.iconColor}
                  />
                </div>

                <h3 className="##343434] my-2 text-left text-xl font-bold">
                  {item.title}
                </h3>
                <p className="##343434] text-left text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
