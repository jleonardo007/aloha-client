import { useState } from 'react';
import { TransitionContext, TransitionsOptions } from 'src/context/app-transition';

export function useAppTransitions() {
  const [currentTransition, setCurrentTransition] = useState(TransitionsOptions.chats);
  const [prevTransition, setPrevTransition] = useState(TransitionsOptions.chats);

  function changeTransition(transition: TransitionsOptions, prevTransition: TransitionsOptions) {
    setCurrentTransition(transition);
    setPrevTransition(prevTransition);
  }

  return {
    currentTransition,
    prevTransition,
    changeTransition,
    TransitionContext,
  };
}
