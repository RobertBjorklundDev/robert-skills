import {
  Children,
  Fragment,
  createElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';

const SLOT_NAME_KEY = '__robertSlotName';

type SlotNameFromTuple<T extends readonly string[]> = T[number];

type SlotComponentProps = {
  children?: ReactNode;
  className?: string;
};

type SlotComponent<N extends string> = ((
  props: SlotComponentProps,
) => ReactElement) & {
  [SLOT_NAME_KEY]: N;
  displayName: string;
};

type DefineSlotsResult<T extends readonly string[]> = {
  [K in SlotNameFromTuple<T>]: SlotComponent<K>;
} & {
  collectSlots: (children: ReactNode) => Partial<Record<SlotNameFromTuple<T>, ReactElement>>;
  slotNames: ReadonlySet<SlotNameFromTuple<T>>;
};

type DefineSlotsInput<T extends readonly string[]> = {
  slots: T;
  displayName?: string;
};

function createSlotComponent<N extends string>(slotName: N): SlotComponent<N> {
  function Slot(props: SlotComponentProps): ReactElement {
    return createElement(Fragment, null, props.children);
  }

  const named = Slot as SlotComponent<N>;
  named[SLOT_NAME_KEY] = slotName;
  named.displayName = `Slot(${slotName})`;

  return named;
}

function readSlotNameFromType(type: unknown): string | null {
  if (typeof type === 'function' || (typeof type === 'object' && type !== null)) {
    const candidate = type as { [SLOT_NAME_KEY]?: string };
    if (typeof candidate[SLOT_NAME_KEY] === 'string') {
      return candidate[SLOT_NAME_KEY];
    }
  }

  return null;
}

function flattenChildren(nodes: ReactNode[]): ReactNode[] {
  const flat: ReactNode[] = [];

  for (const node of nodes) {
    if (node === null || node === undefined || typeof node === 'boolean') {
      continue;
    }

    if (isValidElement(node) && node.type === Fragment) {
      const fragmentChildren = Children.toArray(
        (node.props as { children?: ReactNode }).children,
      );
      flat.push(...flattenChildren(fragmentChildren));
      continue;
    }

    flat.push(node);
  }

  return flat;
}

function warnDev(message: string): void {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(message);
  }
}

function collectSlotElements(input: {
  children: ReactNode;
  knownSlots: ReadonlySet<string>;
  parentDisplayName: string;
}): Partial<Record<string, ReactElement>> {
  const flat = flattenChildren(Children.toArray(input.children));
  const collected: Partial<Record<string, ReactElement>> = {};

  for (const node of flat) {
    if (!isValidElement(node)) {
      if (typeof node === 'string' || typeof node === 'number') {
        warnDev(
          `[${input.parentDisplayName}] Ignoring raw text child in slotted component: ${String(node)}`,
        );
      }
      continue;
    }

    const slotName = readSlotNameFromType(node.type);

    if (slotName === null || !input.knownSlots.has(slotName)) {
      const typeLabel =
        typeof node.type === 'string'
          ? node.type
          : (node.type as { displayName?: string; name?: string }).displayName ??
            (node.type as { name?: string }).name ??
            'Unknown';
      warnDev(
        `[${input.parentDisplayName}] Unknown child <${typeLabel} />. Slots must be direct children (or inside Fragment).`,
      );
      continue;
    }

    if (collected[slotName] !== undefined) {
      warnDev(
        `[${input.parentDisplayName}] Duplicate slot "${slotName}"; keeping the first.`,
      );
      continue;
    }

    collected[slotName] = node;
  }

  return collected;
}

function defineSlots<T extends readonly string[]>(
  input: DefineSlotsInput<T>,
): DefineSlotsResult<T> {
  const slotNames = new Set(input.slots) as ReadonlySet<SlotNameFromTuple<T>>;
  const components = {} as {
    [K in SlotNameFromTuple<T>]: SlotComponent<K>;
  };

  for (const name of input.slots) {
    components[name as SlotNameFromTuple<T>] = createSlotComponent(
      name as SlotNameFromTuple<T>,
    );
  }

  const parentLabel = input.displayName ?? 'SlottedParent';

  function collectSlots(
    children: ReactNode,
  ): Partial<Record<SlotNameFromTuple<T>, ReactElement>> {
    return collectSlotElements({
      children,
      knownSlots: slotNames as ReadonlySet<string>,
      parentDisplayName: parentLabel,
    }) as Partial<Record<SlotNameFromTuple<T>, ReactElement>>;
  }

  return {
    ...components,
    collectSlots,
    slotNames,
  };
}

export {
  SLOT_NAME_KEY,
  collectSlotElements,
  defineSlots,
  type DefineSlotsInput,
  type DefineSlotsResult,
  type SlotComponent,
  type SlotComponentProps,
  type SlotNameFromTuple,
};
