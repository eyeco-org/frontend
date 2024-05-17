'use client';

import '@/lib/env';

import AnswerDialog from '@/components/AnswerDialog';

export default function HomePage() {
  return (
    <main>
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
