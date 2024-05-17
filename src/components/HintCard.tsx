import Image from 'next/image';

interface HintCardProps {
  type: 'cat' | 'movie' | 'plate';
  message: string;
}

export default function HintCard({ type, message }: HintCardProps) {
  const cardType = {
    cat: '/images/card/cat.png',
    movie: '/images/card/movie_clipper.png',
    plate: '/images/card/plate.png',
  };
  return (
    <div className='w-[237px] h-[270px] rounded-lg flex flex-col gap-8 items-center justify-center bg-neutral-900'>
      <Image alt='카드' src={cardType[type]} width={80} height={80} />
      <p className='text-base font-medium text-neutral-100'>{message}</p>
    </div>
  );
}
