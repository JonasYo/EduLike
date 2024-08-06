'use client';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { BannerProps } from 'common/types';
import { TextEffect } from 'components';
import useDeviceDetection from 'hooks/useDeviceDetection';

const Banner = (content: BannerProps) => {
  const { isMobile } = useDeviceDetection();

  const [onlyTitle, ...texts] = content?.title.split('-');
  let textColor = content.isTextBlack ? 'text-black' : 'text-white';

  return (
    <section className="pb-8" id="home">
      <div className="relative mb-8 min-h-[88vh]" id="home">
        <div className="absolute size-full min-h-[84vh]">
          <div className="relative size-full">
            <Image
              src={'/assets/imgs/backgrounds/skin.png'}
              alt="Imagem do banner"
              layout="fill"
              objectFit="cover"
              priority
              className="absolute inset-0 z-[2] size-full object-cover mix-blend-multiply"
            />

            {!isMobile && (
              <video
                src={content.video.url}
                className="absolute inset-0 z-[1] size-full object-cover"
                autoPlay
                muted
                loop
              />
            )}

            {isMobile && (
              <Image
                src={content.image.url}
                alt="Imagem do banner"
                layout="fill"
                objectFit="cover"
                priority
              />
            )}
          </div>
        </div>

        <div className="absolute inset-x-0 z-[3]">
          <div className="container z-[3] flex min-h-[88vh] flex-col justify-center">
            <div className="montserrat py-12 text-center">
              <div className="mx-auto mb-8 max-w-3xl">
                <p
                  className={`inline text-2xl leading-relaxed md:text-lg lg:text-4xl`}
                  data-aos="fade-down"
                >
                  <ReactMarkdown
                    rehypePlugins={[remarkGfm]}
                    className={`markdown-content space-y-3 ${textColor}`}
                  >
                    {onlyTitle}
                  </ReactMarkdown>{' '}
                  {texts && (
                    <span className="inline text-primary-300">
                      <TextEffect texts={texts} />
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
