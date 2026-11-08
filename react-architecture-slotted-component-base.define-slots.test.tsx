import { render, screen } from '@testing-library/react';
import { Fragment, type ReactElement, type ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { defineSlots } from './react-architecture-slotted-component-base.define-slots';

const { Header, Body, Footer, collectSlots } = defineSlots({
  slots: ['Header', 'Body', 'Footer'] as const,
});

type DemoCardProps = {
  children: ReactNode;
};

function DemoCard({ children }: DemoCardProps): ReactElement {
  const slots = collectSlots(children);

  return (
    <article data-testid="card">
      <div data-testid="order">
        {slots.Header}
        {slots.Body}
        {slots.Footer}
      </div>
    </article>
  );
}

describe('defineSlots / collectSlots', () => {
  it('renders slots in parent order regardless of JSX order', () => {
    render(
      <DemoCard>
        <Footer>foot</Footer>
        <Header>head</Header>
        <Body>mid</Body>
      </DemoCard>,
    );

    const order = screen.getByTestId('order');
    expect(order.textContent).toBe('headmidfoot');
  });

  it('flattens Fragment wrappers', () => {
    render(
      <DemoCard>
        <Fragment>
          <Header>head</Header>
          <Body>mid</Body>
        </Fragment>
        <Footer>foot</Footer>
      </DemoCard>,
    );

    expect(screen.getByTestId('order').textContent).toBe('headmidfoot');
  });

  it('omits missing optional slots without error', () => {
    render(
      <DemoCard>
        <Body>only body</Body>
      </DemoCard>,
    );

    expect(screen.getByText('only body')).toBeInTheDocument();
    expect(screen.queryByText('head')).toBeNull();
  });

  it('warns on unknown direct children in development', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    function Wrapper({ children }: { children: ReactNode }): ReactElement {
      return <div>{children}</div>;
    }

    render(
      <DemoCard>
        <Body>body</Body>
        <Wrapper>
          <Header>hidden</Header>
        </Wrapper>
        <span data-testid="stray">stray</span>
      </DemoCard>,
    );

    expect(warnSpy).toHaveBeenCalled();
    expect(screen.getByText('body')).toBeInTheDocument();
    expect(screen.queryByText('hidden')).toBeNull();

    warnSpy.mockRestore();
  });
});
