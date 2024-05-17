import Image from 'next/image';

export default function Header() {
  return (
    <header className='w-full h-16 px-2.5 fixed top-0 z-10 flex gap-2.5 items-center'>
      <Image alt='로고' src='/svg/apple.svg' width={24} height={24} />
      <p className='text-sm font-semibold text-neutral-100'>GenMe</p>
    </header>
  );
}
