'use client';

import Image from 'next/image';

import { AboutUsProps } from 'common/types';
import { CustomTitle } from 'components';
import useDeviceDetection from 'hooks/useDeviceDetection';

const AboutUs = ({ title, subtitle, items }: AboutUsProps) => {
  const { isMobile } = useDeviceDetection();

  return (
    <section className="relative py-16 text-white lg:py-24 lg:pb-32" id="about">
      <div className="absolute inset-0 z-0">
        <Image
          src={'assets/imgs/backgrounds/gradient-intersect.svg'}
          alt="Banner Image"
          layout="fill"
          objectFit={isMobile ? 'none' : 'cover'}
          objectPosition={isMobile ? '50% 0%' : '0% 100%'}
          priority
          className="background-image"
        />
      </div>

      <div className="container relative z-[2]">
        <div className="mb-12 flex max-w-2xl flex-wrap items-center justify-between lg:max-w-full">
          <div className="mb-4 w-full lg:mb-0 lg:w-1/3" data-aos="fade-up">
            <CustomTitle
              title={title}
              styles="flex flex-wrap"
              partTextColor="text-secondary-500"
            />
          </div>
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <p className="leading-loose">{subtitle}</p>
          </div>
        </div>
        <div className="-mx-3 -mb-6 flex flex-wrap text-center">
          {items?.map((item, index) => (
            <div
              key={index}
              className="hover-up-5 mb-6 w-full px-3 md:w-1/2 lg:w-1/3"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="rounded bg-white p-10 text-black shadow">
                {item?.image?.url && (
                  <Image
                    className="mx-auto my-4"
                    src={item?.image?.url}
                    alt={item.title}
                    width={144}
                    height={144}
                    style={{ width: 'auto', height: '9rem' }}
                  />
                )}
                <h3 className="font-heading mb-2 text-xl font-bold">
                  {item?.title}
                </h3>
                <p className="text-sm leading-relaxed">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
