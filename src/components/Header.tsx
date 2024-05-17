import Image from 'next/image';

export default function Header() {
  return (
    <header className='w-full h-16 px-2.5 top-0 z-10 flex gap-2.5 items-center'>
      <Image alt='로고' src='/images/logo.png' width={100} height={20} />
    </header>
  );
}
