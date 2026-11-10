import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Card } from './react-architecture-slotted-components.card';

describe('Card', () => {
  it('renders sections in layout order and hides missing optional slots', () => {
    render(
      <Card>
        <Card.Footer>Save</Card.Footer>
        <Card.Body>Content</Card.Body>
      </Card>,
    );

    const card = screen.getByTestId('card');
    const childTestIds = Array.from(card.children).map((node) =>
      node instanceof HTMLElement ? node.getAttribute('data-testid') : null,
    );

    expect(childTestIds).toEqual(['card-body', 'card-footer']);
    expect(screen.queryByTestId('card-header')).toBeNull();
  });
});
