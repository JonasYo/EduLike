'use client';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { BannerProps } from 'common/types';
import { TextEffect } from 'components';

const Banner = (content: BannerProps) => {
  const [onlyTitle, ...texts] = content?.title.split('-');
  let textColor = content.isTextBlack ? 'text-black' : 'text-white';

  console.log('content.video.url', content.video.url);

  return (
    <section className="rounded-[60px]" id="home">
      <div className="px-8">
        <div className="relative size-full min-h-[84vh] rounded-[60px]">
          <Image
            src={'/assets/imgs/backgrounds/skin.png'}
            alt="Imagem do banner"
            layout="fill"
            objectFit="cover"
            priority
            className="absolute inset-0 z-[2] size-full rounded-[60px] object-cover mix-blend-multiply"
          />

          {content.image.url && (
            <video
              src={content.video.url}
              className="absolute inset-0 z-[1] size-full rounded-[60px] object-cover"
              autoPlay
              muted
              loop
            />
          )}

          {/* {isMobile && content?.image?.url && (
            <Image
              src={content.image.url}
              alt="Imagem do banner"
              layout="fill"
              objectFit="cover"
              priority
            />
          )} */}

          <div className="absolute inset-x-0 z-[3]">
            <div className="container z-[3] flex min-h-[88vh] flex-col justify-center">
              <div className="montserrat py-12 text-center">
                <div className="mx-auto mb-8 max-w-3xl">
                  <h1
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
                      <span className="inline text-[#fce041]">
                        <TextEffect texts={texts} />
                      </span>
                    )}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
