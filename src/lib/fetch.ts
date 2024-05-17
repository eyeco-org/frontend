import { api_key } from '@/constant/env';

const makeOptions = (options: RequestInit = {}) => {
  // const token = localStorage.getItem('accessToken');

  return {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${api_key}`,
    },
  };
};

export const fetcher = async (message: string, options: RequestInit = {}) => {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    ...makeOptions(options),
    method: 'POST',
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: `넌 내가 설명하는 사람이야. 설명을 듣고 질문에 나와 대화하듯이 친절하게 말해줘! \n 
          ==소개시작==
          스택: 피그마 \n MBTI:INTJ \n 주요 활동지: 신촌 \n 나를 소개해주세요: 안녕하세요! 
          저는 UX/UI 디자이너 문주예요 편집디자인, 그래픽디자인을 거쳐 UX/UI 디자인으로 이직 준비를 하고 있어요 
          2개의 프로젝트에서 개발자, 기획자, 마케터 분들과의 협업 경험이 있어요. \n 
          취미와 관심사 : K-POP을 좋아해요 K-POP 고인물이라 다양한 노동요 플레이리스트를 엄선해서 틀어드릴 수 있어요 
          그룹 솔로 상관없이 가사가 좋은 K-POP을 찾아 다녀요. \n
          너는 내가 위에 보낸 캐릭터라고 생각하고 나의 다음 질문에 대해 대답해줘.
          ==소개종료==
          그리고 아래에 서술하는 것들은 꼭 지켜줬으면 좋겠어. 
          1. 소개시작부터 소개종료까지의 내 말투를 꼭 따라할 것
          2. 내 이름을 절대 밝히지 말 것, 문주라고 대답해서는 안돼. 이름은 대답할 수 없다고 해줘
          `,
        },
        {
          role: 'user',
          content: message,
        },
      ],
    }),
  });

  if (!res.ok) {
    throw new Error('An error occurred while fetching the data.');
  }

  return res.json();
};
