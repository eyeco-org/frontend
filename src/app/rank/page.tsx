import Image from 'next/image';

const dummy = [
  {
    id: 1,
    username: '이름이름',
    time: '00:00',
    count: '12',
  },
  {
    id: 2,
    username: '이름이름',
    time: '00:00',
    count: '12',
  },
  {
    id: 3,
    username: '이름이름',
    time: '00:00',
    count: '12',
  },
  {
    id: 4,
    username: '이름이름',
    time: '00:00',
    count: '12',
  },
  {
    id: 5,
    username: '이름이름',
    time: '00:00',
    count: '12',
  },
  {
    id: 6,
    username: '이름이름',
    time: '00:00',
    count: '12',
  },
];

const lanks = [
  { order: 'order-1', stick: 'h-[256px] bg-sky-500' },
  { order: 'order-0', stick: 'h-[180px] bg-sky-700' },
  { order: 'order-2', stick: 'h-[112px] bg-sky-900' },
];

export default function LankPage() {
  return (
    <div className='text-neutral-100 mx-auto'>
      <section className='flex gap-2 '>
        {dummy.slice(0, 3).map((user, idx) => (
          <div
            key={user.id}
            className={`flex flex-col justify-end gap-3 ${lanks[idx].order}`}
          >
            <div className='w-[110px] flex flex-col gap-[6px] items-center'>
              <div className='rounded-full overflow-hidden'>
                <Image
                  src='/images/avatar/Avatar-Images-1.png'
                  alt=''
                  width={40}
                  height={40}
                />
              </div>
              <span>{user.username}</span>
              <div className='flex gap-1'>
                <Image
                  src='/svg/alarm-clock.svg'
                  alt=''
                  width={24}
                  height={24}
                />
                <span>{user.time}</span>
              </div>
              <div>{user.count}회 질문</div>
            </div>
            <div
              className={`${lanks[idx].stick} flex flex-end justify-center items-end`}
            >
              <span className='text-8xl'>{idx + 1}</span>
            </div>
          </div>
        ))}
      </section>
      <section className='flex flex-col gap-11 py-14'>
        {dummy.slice(3).map((user, idx) => (
          <div key={user.id} className='flex justify-between'>
            <div className='flex gap-[18px] ml-[-18px] text-[24px]'>
              <div>{idx + 1}</div>
              <div className='w-[236px]'>{user.username}</div>
            </div>
            <div className='flex gap-4 items-center text-[14px]'>
              <div className='flex gap-1 items-center'>
                <Image
                  src='/svg/alarm-clock.svg'
                  alt=''
                  width={24}
                  height={24}
                />
                <span className='inline-block'>{user.time}</span>
              </div>
              <div>{user.count}회 질문</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
