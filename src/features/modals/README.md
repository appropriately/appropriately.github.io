# Modals <!-- omit in toc -->

Manages a modal at the root of the application. Utilises tailwind classes to manage the size of the modal.

- [Structure](#structure)
- [Usage](#usage)
- [Options](#options)
  - [Size](#size)
  - [Close on backdrop click](#close-on-backdrop-click)

## Structure

```bash
modals
├── context
│   └── modal.ts # The context for the modal
├── components
│   ├── modal-provider.tsx # The provider for the modal, must be wrapped in the root of the application
│   └── modal.tsx # The modal component
└── types
│   └── modal.d.ts # Modal types
├── hooks
│   └── use-modal.ts # The hook for the modal
├── index.ts # The entry point for the modals, exports the ModalProvider and useModal hook
```

## Usage

```tsx
import { ModalProvider } from "@/features/modals";

// ...

export function App() {
  return (
    <ModalProvider>
      <div>Hello</div>
    </ModalProvider>
  );
}
```

```tsx
import { useModal } from "@/features/modals";

const { openModal } = useModal();

// ...

openModal(<div>Hello</div>);
```

## Options

### Size

Manages the maximum width of the modal. On mobile, the modal will be full width regardless of the size.

```tsx
import { ModalOptions } from "@/features/modals/types/modal";

const options: ModalOptions = {
  size: "sm",
};
```

Options:

- `sm` - 300px
- `md` - 500px
- `lg` - 700px (default)
- `xl` - 1200px
- `full` - 100% (full width)

### Close on backdrop click

Manages whether the modal should be closed when the backdrop is clicked. Default is `false`.

```tsx
import { ModalOptions } from "@/features/modals/types/modal";

const options: ModalOptions = {
  closeOnBackdropClick: true,
};
```
