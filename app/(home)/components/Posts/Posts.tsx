import React from 'react';

import { PostsProps } from 'common/types';

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
      allowTransparency={true}
      allowFullScreen={true}
      frameBorder="0"
      height={height}
      scrolling="no"
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
          <div className="mb-12 w-full text-center">
            <h2 className="font-heading text-4xl font-bold">{title}</h2>
            <p className="text-blueGray-400">{subtitle}</p>
          </div>

          <div className="flex w-full content-between gap-8 overflow-x-scroll">
            <InstagramEmbed
              src="https://www.instagram.com/p/C9fVuJZRKAH/embed/captioned"
              height={719}
            />
            <InstagramEmbed
              src="https://www.instagram.com/reel/C9z73RkPD4J/embed/captioned"
              height={719}
            />
            <InstagramEmbed
              src="https://www.instagram.com/p/C9SgG2_RMY9/embed/captioned"
              height={719}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
