import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
export interface CustomTitleProps {
  title: string;
  style?: string;
}

const CustomTitle = ({ title, style }: CustomTitleProps) => {
  const parts = title.split('|');

  return (
    <div className="w-full">
      <h2 className={`font-heading text-3xl font-bold md:text-4xl ${style}`}>
        {parts.reduce<JSX.Element[]>((acc, part, index) => {
          const isHighlighted = index % 2 === 1;
          acc.push(
            <span
              key={index}
              className={isHighlighted ? 'text-primary-500' : ''}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
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
