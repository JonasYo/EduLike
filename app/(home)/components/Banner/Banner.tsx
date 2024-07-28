import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { BannerProps } from 'common/types';
import { TextEffect } from 'components';

const Banner = (content: BannerProps) => {
  const [onlyTitle, ...texts] = content?.title.split('-');

  return (
    <section className="relative pb-8 pt-24" id="home">
      <Image
        src={content.image.url}
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        priority
      />

      <div className="container relative z-[2] flex min-h-[72vh] flex-col justify-center">
        <div className="montserrat py-12 text-center">
          <div className="mx-auto mb-8 max-w-3xl">
            <p className="inline text-xl leading-relaxed md:text-lg lg:text-4xl">
              <ReactMarkdown
                rehypePlugins={[remarkGfm]}
                className="markdown-content"
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
    </section>
  );
};

export default Banner;
