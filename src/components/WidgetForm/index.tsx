import { CloseButton } from '../CloseButton';
import bugImageUrl from '../../assets/Bug.svg';
import ideaImageUrl from '../../assets/Idea.svg';
import thoughtImageUrl from '../../assets/Thought.svg';
import { useState } from 'react';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problem',
    image: {
      source: bugImageUrl,
      alt: 'image for a bug'
    }
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImageUrl,
      alt: 'image for a light bulb'
    }
  },
  OTHER: {
    title: 'other',
    image: {
      source: thoughtImageUrl,
      alt: 'image for a cloud'
    }
  }
}
export type FeedbackType = keyof typeof feedbackTypes


export function WidgetForm () {
  const [feedbackType, setFeedBackType]= useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedBackType(null)
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      
      { !feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType} />
      ): (
        <FeedbackContentStep 
          feedbackType={feedbackType} 
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}
      <footer className='text-xs text-neutral-400'>
          Made with 💜 by <a className='underline underline-offset-2' href="http://github.com/luciano-ferreira">Rushiam</a>
      </footer>
    </div>
  )
}