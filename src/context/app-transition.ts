import { createContext } from 'react';

export const enum TransitionsOptions {
  chats = 'chats',
  calls = 'calls',
  contacts = 'contacts',
}

type TransitionContextProps = {
  currentTransition: TransitionsOptions;
  prevTransition?: TransitionsOptions;
  changeTransition: (transition: TransitionsOptions, prevTransition: TransitionsOptions) => void;
};

export const TransitionContext = createContext<TransitionContextProps>({
  currentTransition: TransitionsOptions.chats,
  prevTransition: TransitionsOptions.chats,
  changeTransition: () => {},
});
