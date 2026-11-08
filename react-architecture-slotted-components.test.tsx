import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Card } from './react-architecture-slotted-components.card';
import { FormField } from './react-architecture-slotted-components.form-field';

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

describe('FormField', () => {
  it('renders label before control regardless of JSX order', () => {
    render(
      <FormField>
        <FormField.Control>
          <input aria-label="email" />
        </FormField.Control>
        <FormField.Label>Email</FormField.Label>
      </FormField>,
    );

    const field = screen.getByTestId('form-field');
    const order = Array.from(field.children).map((el) => el.getAttribute('data-testid'));

    expect(order).toEqual(['form-field-label', 'form-field-control']);
  });

  it('logs in development when required slots are missing', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <FormField>
        <FormField.Label>Only label</FormField.Label>
      </FormField>,
    );

    expect(errorSpy).toHaveBeenCalledWith('[FormField] Missing required slot: Control');

    errorSpy.mockRestore();
  });

  it('omits optional hint and error when not provided', () => {
    render(
      <FormField>
        <FormField.Label>Email</FormField.Label>
        <FormField.Control>
          <input />
        </FormField.Control>
      </FormField>,
    );

    expect(screen.queryByTestId('form-field-hint')).toBeNull();
    expect(screen.queryByTestId('form-field-error')).toBeNull();
  });
});
