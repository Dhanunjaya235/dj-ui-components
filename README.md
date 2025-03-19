# DJ-UI Components

DJ-UI is a collection of reusable styled MUI components designed for consistent and elegant UI development.

## Installation

You can install the package using NPM:

```sh
npm install dj-ui-components
```

Or using Yarn:

```sh
yarn add dj-ui-components
```

## Usage

Import the components in your React project:

```tsx
import { DJButton, DJFileChip, DJFileIcon, DJStatusChip, DJTextField, DJTooltip } from "dj-ui-components";
```

### Components

#### 1. DJButton
A styled button component extending MUI's `<Button>` with customized styles.

**Usage:**
```tsx
<DJButton variant="contained" color="primary" onClick={() => alert('Clicked!')}>
    Click Me
</DJButton>
```

**Props:**
- All MUI `<ButtonProps>` supported.
- `children`: ReactNode - Content inside the button.

---
#### 2. DJFileChip
A file chip component that displays an icon based on the file type.

**Usage:**
```tsx
<DJFileChip label="Report.pdf" filetype="application/pdf" />
```

**Props:**
- All MUI `<ChipProps>` supported.
- `filetype`: string - MIME type of the file to display an appropriate icon.

---
#### 3. DJFileIcon
A file type icon component.

**Usage:**
```tsx
<DJFileIcon filetype="application/vnd.ms-excel" />
```

**Props:**
- `filetype`: string - MIME type of the file.

---
#### 4. DJStatusChip
A status chip component with color-coding based on status.

**Usage:**
```tsx
<DJStatusChip status="Approved" />
```

**Props:**
- `status`: string - The status text to display.

---
#### 5. DJTextField
A styled text field component extending MUI's `<TextField>`.

**Usage:**
```tsx
<DJTextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
```

**Props:**
- All MUI `<TextFieldProps>` except `label`, `value`, `onChange`.
- `label`: string - The label for the text field.
- `value`: string | number - The value of the text field.
- `onChange`: (event) => void - Change handler.

---
#### 6. DJTooltip
A styled tooltip component.

**Usage:**
```tsx
<DJTooltip title="Tooltip text">
    <span>Hover over me</span>
</DJTooltip>
```

**Props:**
- All MUI `<TooltipProps>` supported.
- `color`: string (optional) - Custom color for the tooltip arrow.
- `backgroundColor`: string (optional) - Custom background color.

---

## License
MIT

Author ->  **Dhanunjaya Andavarapu**
