'use client';

import { useMemo } from 'react';

import Image from 'next/image';

import { SomeCasesProps } from 'common/types';
import { CustomTitle } from 'components';
import Apple from 'components/ui/apple-cards-carousel';

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={'dummy-content' + index}
            className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 dark:bg-neutral-800 md:p-14"
          >
            <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{' '}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="mx-auto size-full object-contain md:size-1/2"
            />
          </div>
        );
      })}
    </>
  );
};

const SomeCases = ({ title, subtitle, items }: SomeCasesProps) => {
  const cards = useMemo(() => {
    return items.map((item, index) => (
      <Apple.Card
        key={index}
        card={{
          category: item.title,
          title: item.description,
          src: item.image.url,
          content: <DummyContent />,
        }}
        index={index}
      />
    ));
  }, [items]);

  return (
    <div className="size-full py-20">
      {title && (
        <CustomTitle
          title={title}
          partTextColor="text-secondary-500"
          styles="mx-auto max-w-7xl pl-4 text-center font-sans text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-5xl"
        />
      )}
      {subtitle && (
        <p className="animated mx-auto mt-4 max-w-xl text-center font-sans text-sm font-normal text-[#645e80] md:text-base">
          {subtitle}
        </p>
      )}

      <Apple.Carousel items={cards} />
    </div>
  );
};

export default SomeCases;
