import { AboutUsProps } from 'common/types';
import { CustomTitle } from 'components';

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => (
  <div className="w-full p-4 md:w-80">
    <h3 className="mb-4 text-lg font-semibold">{title}</h3>

    <p className="mb-6 text-gray-700">{description}</p>
  </div>
);

const AboutUs = ({ title, subtitle, items }: AboutUsProps) => {
  return (
    <section className="flex flex-col gap-8 py-8 md:flex-row">
      <div className="flex items-center justify-end bg-[#E1EF3A] text-right text-black md:w-[45%] md:rounded-r-3xl">
        <div className="p-8 md:pr-8 ">
          {title && (
            <CustomTitle
              title={title}
              partTextColor="text-secondary-500"
              styles="mx-auto max-w-7xl pl-4 text-center font-sans text-2xl font-bold text-black dark:text-neutral-200 md:text-5xl"
            />
          )}
          <p className="animated mx-auto mt-4 max-w-xl text-center font-sans text-sm font-normal text-black md:text-base xl:w-3/4">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:w-5/12 xl:grid-cols-2">
        {items?.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
