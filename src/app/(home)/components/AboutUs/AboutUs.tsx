// 'use client';

import { AboutUsProps } from 'common/types';
import { CustomTitle } from 'components';

// import Image from 'next/image';

// import { AboutUsProps } from 'common/types';
// import { CustomTitle } from 'components';

// const AboutUs = ({ title, subtitle, items }: AboutUsProps) => {
//   return (
//     <section
//       className="relative bg-[#F5F5F7] py-16 text-black lg:py-24 lg:pb-32"
//       id="about"
//     >
//       <div className="container relative z-[2]">
//         <div className="mb-12 flex max-w-2xl flex-wrap items-center justify-between lg:max-w-full">
//           <div className="mb-4 w-full lg:mb-0 lg:w-1/3" data-aos="fade-up">
//             <CustomTitle
//               title={title}
//               styles="flex flex-wrap"
//               partTextColor="text-secondary-500"
//             />
//           </div>
//           <div
//             className="w-full lg:w-1/2"
//             data-aos="fade-up"
//             data-aos-delay="800"
//           >
//             <p className="leading-loose">{subtitle}</p>
//           </div>
//         </div>
//         <div className="-mx-3 -mb-6 flex flex-wrap text-center">
//           {items?.map((item, index) => (
//             <div
//               key={index}
//               className="hover-up-5 mb-6 w-full px-3 md:w-1/2 lg:w-1/3"
//               data-aos="fade-up"
//               data-aos-delay={100 * (index + 1)}
//             >
//               <div className="rounded bg-white p-10 text-black shadow">
//                 {item?.image?.url && (
//                   <Image
//                     className="mx-auto my-4"
//                     src={item?.image?.url}
//                     alt={item.title}
//                     width={144}
//                     height={144}
//                     style={{ width: 'auto', height: '9rem' }}
//                   />
//                 )}
//                 <h3 className="font-heading mb-2 text-xl font-bold">
//                   {item?.title}
//                 </h3>
//                 <p className="text-sm leading-relaxed">{item?.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

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
        <div className="p-8 md:w-2/4 md:pr-8">
          {title && (
            <CustomTitle
              title={title}
              partTextColor="text-secondary-500"
              styles="mx-auto max-w-7xl pl-4 text-center font-sans text-2xl font-bold text-black dark:text-neutral-200 md:text-5xl"
            />
          )}
          <p className="animated mx-auto mt-4 max-w-xl text-center font-sans text-sm font-normal text-black md:text-base">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:w-5/12 md:grid-cols-2">
        {items?.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
