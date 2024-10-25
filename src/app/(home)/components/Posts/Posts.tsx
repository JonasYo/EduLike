import React from 'react';

import { PostsProps } from 'common/types';
import { CustomTitle } from 'components';

interface InstagramEmbedProps {
  src: string;
  height?: number;
  style?: React.CSSProperties;
}

const InstagramEmbed = ({ src, height = 819, style }: InstagramEmbedProps) => {
  return (
    <iframe
      className="instagram-media instagram-media-rendered"
      title="instagram-media-rendered"
      src={src}
      allow-transparency="true"
      allowFullScreen={true}
      frameBorder="0"
      height={height}
      scrolling="no"
      loading="lazy"
      style={{
        background: 'white',
        maxWidth: '1040px',
        width: 'calc(100% - 12px)',
        borderRadius: '3px',
        border: '1px solid rgb(219, 219, 219)',
        boxShadow: 'none',
        display: 'block',
        margin: '0px 0px 12px',
        minWidth: '300px',
        padding: '0px',
        ...style,
      }}
    ></iframe>
  );
};

const Posts = ({ title, subtitle }: PostsProps) => {
  return (
    <section className="py-16 lg:py-24" id="posts">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="mb-12 w-full text-center" data-aos="fade-up">
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
          </div>

          <div
            className="flex w-full content-between gap-8 overflow-x-scroll lg:overflow-hidden"
            data-aos="fade-up"
          >
            <InstagramEmbed
              src="https://www.instagram.com/p/DApRz1ltMNr/embed/captioned"
              height={719}
              data-aos="fade-up"
              data-aos-delay={2000}
            />
            <InstagramEmbed
              src="https://www.instagram.com/reel/DA2D347NCuM/embed/captioned"
              height={719}
              data-aos="fade-up"
              data-aos-delay={4000}
            />
            <InstagramEmbed
              src="https://www.instagram.com/p/DA63a66vTX8/embed/captioned"
              height={719}
              data-aos="fade-up"
              data-aos-delay={6000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
