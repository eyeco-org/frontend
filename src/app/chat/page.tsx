'use client';

import { KeyboardEvent, useState } from 'react';

import Chat from '@/components/Chat';

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const isNoChat = true;

  const handleEnterDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      e.key === 'Enter' &&
      !e.shiftKey &&
      e.nativeEvent.isComposing === false
    ) {
      e.preventDefault();
      if (message.trim()) {
        // Here, you can handle the message sending logic
        setMessage('');
      }
    }
  };

  return (
    <div className='w-full max-w-full h-full flex flex-col relative'>
      {isNoChat && (
        <div className='absolute inset-0 flex justify-center items-center'>
          <p className='text-center text-neutral-100'>나는 누구일까요?</p>
        </div>
      )}
      <div className='relative h-full w-full px-4 flex flex-col flex-1 overflow-auto transition-width'>
        <div className='flex flex-col gap-2 flex-1 overflow-hidden'>
          <Chat direction='right'>안녕</Chat>
          <Chat direction='left'>안녕</Chat>
        </div>
        <div className='w-full md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent juice:w-full mb-4'>
          <div className='px-3 text-base m-auto md:px-5 lg:px-1 xl:px-5'>
            <div className='mx-auto flex flex-1 gap-3 text-base juice:gap-4 juice:md:gap-6'>
              <form className='w-full'>
                <div className='relative flex h-full max-w-full flex-1 flex-col'>
                  <div className='absolute bottom-full left-0 right-0' />
                  <div className='flex w-full items-center'>
                    <div className='flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#f4f4f4] dark:bg-token-main-surface-secondary'>
                      <div className='flex items-end gap-1.5 md:gap-3.5'>
                        <button
                          aria-haspopup='dialog'
                          aria-expanded='false'
                          aria-controls='radix-:rau:'
                          data-state='closed'
                        ></button>
                        <div className='flex min-w-0 flex-1 flex-col'>
                          <textarea
                            id='prompt-textarea'
                            tabIndex={0}
                            data-id='request-WEB:d2fc1231-e713-474b-8a3e-b03e31f43cc2-4'
                            dir='auto'
                            rows={1}
                            placeholder='메시지 ChatGPT'
                            style={{
                              height: 40,
                              overflowY: 'hidden',
                              background: 'transparent',
                            }}
                            className='m-0 resize-none border-0 bg-transparent px-0 text-token-text-primary focus:ring-0 focus-visible:ring-0 max-h-[25dvh] max-h-52'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleEnterDown}
                          />
                        </div>
                        <button
                          className='mb-1 mr-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:bg-[#D7D7D7] disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary'
                          disabled={message === ''}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={32}
                            height={32}
                            fill='none'
                            viewBox='0 0 32 32'
                            className='icon-2xl'
                          >
                            <path
                              fill='currentColor'
                              fillRule='evenodd'
                              d='M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
