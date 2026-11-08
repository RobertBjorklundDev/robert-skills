import { type ReactElement, type ReactNode } from 'react';

import {
  SLOT_NAME_KEY,
  defineSlots,
} from '../../slotted-component-base/references/define-slots';

const formFieldSlots = defineSlots({
  slots: ['Label', 'Control', 'Hint', 'Error'] as const,
  displayName: 'FormField',
});

const REQUIRED_FORM_FIELD_SLOTS = ['Label', 'Control'] as const;

type FormFieldLabelProps = {
  id?: string;
  children?: ReactNode;
  className?: string;
};

function FormFieldLabel(props: FormFieldLabelProps): ReactElement {
  const className = ['form-field__label', props.className].filter(Boolean).join(' ');
  return (
    <label id={props.id} className={className} data-testid="form-field-label">
      {props.children}
    </label>
  );
}

(FormFieldLabel as { [SLOT_NAME_KEY]: string })[SLOT_NAME_KEY] = 'Label';
FormFieldLabel.displayName = 'FormField.Label';

type FormFieldControlProps = {
  children?: ReactNode;
  className?: string;
};

function FormFieldControl(props: FormFieldControlProps): ReactElement {
  const className = ['form-field__control', props.className].filter(Boolean).join(' ');
  return (
    <div className={className} data-testid="form-field-control">
      {props.children}
    </div>
  );
}

(FormFieldControl as { [SLOT_NAME_KEY]: string })[SLOT_NAME_KEY] = 'Control';
FormFieldControl.displayName = 'FormField.Control';

type FormFieldHintProps = {
  children?: ReactNode;
  className?: string;
};

function FormFieldHint(props: FormFieldHintProps): ReactElement {
  const className = ['form-field__hint', props.className].filter(Boolean).join(' ');
  return (
    <p className={className} data-testid="form-field-hint">
      {props.children}
    </p>
  );
}

(FormFieldHint as { [SLOT_NAME_KEY]: string })[SLOT_NAME_KEY] = 'Hint';
FormFieldHint.displayName = 'FormField.Hint';

type FormFieldErrorProps = {
  children?: ReactNode;
  className?: string;
};

function FormFieldError(props: FormFieldErrorProps): ReactElement {
  const className = ['form-field__error', props.className].filter(Boolean).join(' ');
  return (
    <p className={className} role="alert" data-testid="form-field-error">
      {props.children}
    </p>
  );
}

(FormFieldError as { [SLOT_NAME_KEY]: string })[SLOT_NAME_KEY] = 'Error';
FormFieldError.displayName = 'FormField.Error';

type FormFieldProps = {
  children: ReactNode;
  className?: string;
};

function assertRequiredFormFieldSlots(
  slots: Partial<Record<(typeof REQUIRED_FORM_FIELD_SLOTS)[number], ReactElement>>,
): void {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  for (const name of REQUIRED_FORM_FIELD_SLOTS) {
    if (slots[name] === undefined) {
      console.error(`[FormField] Missing required slot: ${name}`);
    }
  }
}

function FormField({ children, className }: FormFieldProps): ReactElement {
  const slots = formFieldSlots.collectSlots(children);
  assertRequiredFormFieldSlots(slots);

  const rootClass = ['form-field', className].filter(Boolean).join(' ');

  return (
    <hgroup className={rootClass} data-testid="form-field">
      {slots.Label}
      {slots.Control}
      {slots.Hint}
      {slots.Error}
    </hgroup>
  );
}

FormField.Label = FormFieldLabel;
FormField.Control = FormFieldControl;
FormField.Hint = FormFieldHint;
FormField.Error = FormFieldError;

export {
  FormField,
  REQUIRED_FORM_FIELD_SLOTS,
  type FormFieldControlProps,
  type FormFieldErrorProps,
  type FormFieldHintProps,
  type FormFieldLabelProps,
  type FormFieldProps,
};
