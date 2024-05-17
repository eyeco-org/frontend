import { PropsWithChildren } from 'react';

interface ChatProps {
  direction: 'left' | 'right';
}

export default function Chat({
  direction,
  children,
}: PropsWithChildren<ChatProps>) {
  const chatWrapperStyle = {
    width: 'w-full',
    display: 'flex',
    justifyContent: direction === 'left' ? 'justify-start' : 'justify-end',
    alignItems: 'center',
  };

  const chatStyle = {
    padding: 'px-4 py-2',
    borderRadius: direction === 'left' ? 'rounded-r-lg' : 'rounded-l-lg',
    bg: direction === 'left' ? 'bg-[#F8F8F8]' : 'bg-[#EFF4FC]',
  };
  const chatWrapperClassName = Object.values(chatWrapperStyle).join(' ');
  const chatClassName = Object.values(chatStyle).join(' ');
  return (
    <div className={chatWrapperClassName}>
      <div className={chatClassName}>{children}</div>
    </div>
  );
}
