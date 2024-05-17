import { PropsWithChildren } from 'react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';

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
    borderRadius:
      direction === 'left'
        ? 'rounded-r-lg rounded-bl-lg'
        : 'rounded-l-lg rounded-br-lg',
    bg: direction === 'left' ? 'bg-[#EFF4FC]' : 'bg-[#E6FFFF]',
  };
  const chatWrapperClassName = Object.values(chatWrapperStyle).join(' ');
  const chatClassName = Object.values(chatStyle).join(' ');
  return (
    <div className={chatWrapperClassName}>
      {direction === 'left' && (
        <Avatar className='w-[47px] h-[47px] mr-4'>
          <AvatarImage src='/images/avatar/Avatar-Images-2.png' />
        </Avatar>
      )}
      <div className={chatClassName}>{children}</div>
    </div>
  );
}
