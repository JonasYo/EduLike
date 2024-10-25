import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

export interface CustomTitleProps {
  title: string;
  styles?: string;
  partTextColor?: string;
}

const CustomTitle = ({ title, styles, partTextColor }: CustomTitleProps) => {
  const parts = title.split('|');
  let partText = partTextColor || 'text-primary-500';

  return (
    <div className="w-full">
      <h2 className={`font-heading text-3xl font-bold md:text-4xl ${styles}`}>
        {parts.reduce<JSX.Element[]>((acc, part, index) => {
          const isHighlighted = index % 2 === 1;

          acc.push(
            <span key={index} className={isHighlighted ? partText : ''}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]} // Adicione o rehypeRaw aqui
              >
                {part.replace(' ', '&nbsp;')}
              </ReactMarkdown>
            </span>,
          );

          return acc;
        }, [])}
      </h2>
    </div>
  );
};

export default CustomTitle;
