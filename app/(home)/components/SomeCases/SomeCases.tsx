import Image from 'next/image';

import { SomeCasesProps } from 'common/types';

type BlogCardProps = {
  src: string;
  date: string;
  CardTitle: string;
  CardDescription: string;
};

const BlogCard = ({ src, date, CardTitle, CardDescription }: BlogCardProps) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 w-full">
        <div className="overflow-hidden rounded">
          <Image
            src={src}
            alt="Case"
            width={352}
            height={390}
            quality={99}
            className="h-auto w-full"
            loading="lazy"
          />
        </div>
        <div>
          {date && (
            <span className="bg-primary mb-5 inline-block rounded px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
              {date}
            </span>
          )}
          <h3>
            <a
              href="/#"
              className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-body-color dark:text-dark-6 text-base">
            {CardDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

const SomeCases = ({ title, subtitle, items }: SomeCasesProps) => {
  return (
    <>
      <section className="bg-white py-16 lg:py-24 lg:pt-[120px]" id="cases">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <h2 className="text-dark mb-4 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px]">
                  {title}
                </h2>
                <p className="text-body-color dark:text-dark-6 text-base">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            {items.map((item, index) => (
              <BlogCard
                key={index}
                date="Dec 22, 2023"
                CardTitle={item.title}
                CardDescription={item.description}
                src={item?.image?.url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SomeCases;
