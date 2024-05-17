import { PropsWithChildren } from 'react';

interface ChatProps {
  direction: 'left' | 'right';
}

export default function Chat({
  direction,
  children,
}: PropsWithChildren<ChatProps>) {
  const chatStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 'px-4 py-2',
    borderRadius: direction === 'left' ? 'rounded-r-lg' : 'rounded-l-lg',
    bg: direction === 'left' ? 'bg-[#F8F8F8]' : 'bg-[#EFF4FC]',
  };

  const className = Object.values(chatStyle).join(' ');
  return <div className={className}>{children}</div>;
}
