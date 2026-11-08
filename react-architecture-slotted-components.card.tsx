import { type ReactElement, type ReactNode } from 'react';

import {
  SLOT_NAME_KEY,
  defineSlots,
} from './react-architecture-slotted-component-base.define-slots';

const { Body, Footer, collectSlots } = defineSlots({
  slots: ['Header', 'Body', 'Footer'] as const,
  displayName: 'Card',
});

type CardHeaderProps = {
  title: string;
  className?: string;
};

function CardHeader(props: CardHeaderProps): ReactElement {
  const className = ['card__header', props.className].filter(Boolean).join(' ');
  return (
    <header className={className} data-testid="card-header">
      <h2>{props.title}</h2>
    </header>
  );
}

(CardHeader as { [SLOT_NAME_KEY]: string })[SLOT_NAME_KEY] = 'Header';
CardHeader.displayName = 'Card.Header';

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className }: CardProps): ReactElement {
  const slots = collectSlots(children);
  const rootClass = ['card', className].filter(Boolean).join(' ');

  return (
    <article className={rootClass} data-testid="card">
      {slots.Header}
      {slots.Body}
      {slots.Footer}
    </article>
  );
}

Card.Header = CardHeader;
Card.Body = Body;
Card.Footer = Footer;

export { Card, type CardHeaderProps, type CardProps };
