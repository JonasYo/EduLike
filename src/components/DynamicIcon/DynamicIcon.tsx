import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import dynamic from 'next/dynamic';

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports | string;
}

const Icon = ({ name, ...props }: IconProps) => {
  const iconName = (name as keyof typeof dynamicIconImports) || 'alarm-clock';

  const LucideIcon = dynamic(dynamicIconImports[iconName]);

  return <LucideIcon {...props} />;
};

export default Icon;
