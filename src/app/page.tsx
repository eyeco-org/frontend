'use client';

import '@/lib/env';

import AnswerDialog from '@/components/AnswerDialog';
import HintCard from '@/components/HintCard';

export default function HomePage() {
  return (
    <main>
      <HintCard type='cat' message='강아지 vs 고양이' />
      <AnswerDialog
        type='congrat'
        isOpen
        handleOpenDialog={() => {
          return null;
        }}
      />
      <AnswerDialog
        type='wrong'
        isOpen
        handleOpenDialog={() => {
          return null;
        }}
      />
    </main>
  );
}
