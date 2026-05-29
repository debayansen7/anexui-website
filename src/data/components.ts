// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for all component metadata.
// Drives: sidebar nav, catalog page, component builder, landing page grid.
// ─────────────────────────────────────────────────────────────────────────────

export type ComponentCategory =
  | "Basic"
  | "Layout"
  | "Navigation"
  | "Feedback"
  | "Overlay"
  | "Data Display"
  | "Form";

export interface ComponentEntry {
  id: string;
  label: string;
  description: string;
  category: ComponentCategory;
  /** Folder name inside /public/registry/components/<categorySlug>/<folderName>/ */
  folderName: string;
  /** Category folder slug matching the ui-library directory name */
  categorySlug: string;
  /** IDs of other components that must be included alongside this one */
  requires: string[];
  /** Files inside the component folder (excluding .stories) */
  files: string[];
}

export interface CategoryMeta {
  /** Short sentence shown under the category heading in the catalog */
  description: string;
  /** Full color classes for builder category pills (text + border + bg) */
  color: string;
  /** Text-only color class for catalog headings */
  textColor: string;
}

// ── Category metadata ─────────────────────────────────────────────────────────

export const categoryOrder: ComponentCategory[] = [
  "Basic",
  "Layout",
  "Navigation",
  "Feedback",
  "Overlay",
  "Data Display",
  "Form",
];

export const categoryMeta: Record<ComponentCategory, CategoryMeta> = {
  Basic: {
    description: "Form primitives and core interactive elements.",
    color: "text-violet-400 border-violet-500/30 bg-violet-500/10",
    textColor: "text-violet-400",
  },
  Layout: {
    description: "Structural helpers for spacing and arrangement.",
    color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    textColor: "text-blue-400",
  },
  Navigation: {
    description: "Components for moving between views and steps.",
    color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    textColor: "text-cyan-400",
  },
  Feedback: {
    description: "Status indicators and user notifications.",
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    textColor: "text-amber-400",
  },
  Overlay: {
    description: "Floating and modal UI layers.",
    color: "text-pink-400 border-pink-500/30 bg-pink-500/10",
    textColor: "text-pink-400",
  },
  "Data Display": {
    description: "Components for presenting structured content.",
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    textColor: "text-emerald-400",
  },
  Form: {
    description: "Composite form controls with built-in a11y wiring.",
    color: "text-orange-400 border-orange-500/30 bg-orange-500/10",
    textColor: "text-orange-400",
  },
};

// ── Component registry ────────────────────────────────────────────────────────

export const components: ComponentEntry[] = [
  // Basic ─────────────────────────────────────────────────────────────────────
  {
    id: "button",
    label: "Button",
    description: "Solid, outline, ghost, and link variants with loading state.",
    category: "Basic",
    folderName: "Button",
    categorySlug: "basic",
    requires: [],
    files: ["Button.tsx", "Button.module.css", "Button.Type.ts"],
  },
  {
    id: "input",
    label: "Input",
    description: "Text input with error, disabled, and helper text states.",
    category: "Basic",
    folderName: "Input",
    categorySlug: "basic",
    requires: [],
    files: ["Input.tsx", "Input.module.css", "Input.Type.ts"],
  },
  {
    id: "textarea",
    label: "Textarea",
    description: "Multi-line input with optional auto-resize.",
    category: "Basic",
    folderName: "Textarea",
    categorySlug: "basic",
    requires: [],
    files: ["Textarea.tsx", "Textarea.module.css", "Textarea.Type.ts"],
  },
  {
    id: "select",
    label: "Select",
    description: "Native select with accessible custom styling.",
    category: "Basic",
    folderName: "Select",
    categorySlug: "basic",
    requires: [],
    files: ["Select.tsx", "Select.module.css", "Select.Type.ts"],
  },
  {
    id: "checkbox",
    label: "Checkbox",
    description: "Controlled checkbox with indeterminate state support.",
    category: "Basic",
    folderName: "Checkbox",
    categorySlug: "basic",
    requires: [],
    files: ["Checkbox.tsx", "Checkbox.module.css", "Checkbox.Type.ts"],
  },
  {
    id: "radio-group",
    label: "Radio Group",
    description: "Context-linked radio group with arrow key navigation.",
    category: "Basic",
    folderName: "RadioGroup",
    categorySlug: "basic",
    requires: [],
    files: ["RadioGroup.tsx", "RadioGroup.module.css", "RadioGroup.Type.ts"],
  },
  {
    id: "switch",
    label: "Switch",
    description: "Toggle switch with aria-checked and disabled state.",
    category: "Basic",
    folderName: "Switch",
    categorySlug: "basic",
    requires: [],
    files: ["Switch.tsx", "Switch.module.css", "Switch.Type.ts"],
  },
  {
    id: "slider",
    label: "Slider",
    description: "Range slider with min, max, step, and keyboard support.",
    category: "Basic",
    folderName: "Slider",
    categorySlug: "basic",
    requires: [],
    files: ["Slider.tsx", "Slider.module.css", "Slider.Type.ts"],
  },
  {
    id: "label",
    label: "Label",
    description: "Accessible form label with optional required indicator.",
    category: "Basic",
    folderName: "Label",
    categorySlug: "basic",
    requires: [],
    files: ["Label.tsx", "Label.module.css", "Label.Type.ts"],
  },
  {
    id: "segmented-control",
    label: "SegmentedControl",
    description: "Compact button-group toggle for switching between mutually exclusive views.",
    category: "Basic",
    folderName: "SegmentedControl",
    categorySlug: "basic",
    requires: [],
    files: ["SegmentedControl.tsx", "SegmentedControl.module.css", "SegmentedControl.Type.ts"],
  },

  // Layout ────────────────────────────────────────────────────────────────────
  {
    id: "container",
    label: "Container",
    description: "Centered content wrapper with responsive max-width presets.",
    category: "Layout",
    folderName: "Container",
    categorySlug: "layout",
    requires: [],
    files: ["Container.tsx", "Container.module.css", "Container.Type.ts"],
  },
  {
    id: "stack",
    label: "Stack",
    description: "Flexbox stack with direction, gap, align, and justify props.",
    category: "Layout",
    folderName: "Stack",
    categorySlug: "layout",
    requires: [],
    files: ["Stack.tsx", "Stack.module.css", "Stack.Type.ts"],
  },
  {
    id: "grid",
    label: "Grid",
    description: "CSS grid helper with column count and gap presets.",
    category: "Layout",
    folderName: "Grid",
    categorySlug: "layout",
    requires: [],
    files: ["Grid.tsx", "Grid.module.css", "Grid.Type.ts"],
  },
  {
    id: "divider",
    label: "Divider",
    description: "Horizontal or vertical rule with an optional inline label.",
    category: "Layout",
    folderName: "Divider",
    categorySlug: "layout",
    requires: [],
    files: ["Divider.tsx", "Divider.module.css", "Divider.Type.ts"],
  },

  // Navigation ────────────────────────────────────────────────────────────────
  {
    id: "tabs",
    label: "Tabs",
    description: "Tab list and panels with roving tabindex keyboard navigation.",
    category: "Navigation",
    folderName: "Tabs",
    categorySlug: "navigation",
    requires: [],
    files: ["Tabs.tsx", "Tabs.module.css", "Tabs.Type.ts"],
  },
  {
    id: "breadcrumb",
    label: "Breadcrumb",
    description: "Navigation trail with aria-current on the active page.",
    category: "Navigation",
    folderName: "Breadcrumb",
    categorySlug: "navigation",
    requires: [],
    files: ["Breadcrumb.tsx", "Breadcrumb.module.css", "Breadcrumb.Type.ts"],
  },
  {
    id: "pagination",
    label: "Pagination",
    description: "Smart page range with ellipsis and sibling configuration.",
    category: "Navigation",
    folderName: "Pagination",
    categorySlug: "navigation",
    requires: [],
    files: ["Pagination.tsx", "Pagination.module.css", "Pagination.Type.ts"],
  },
  {
    id: "stepper",
    label: "Stepper",
    description: "Progress stepper with horizontal and vertical orientation.",
    category: "Navigation",
    folderName: "Stepper",
    categorySlug: "navigation",
    requires: [],
    files: ["Stepper.tsx", "Stepper.module.css", "Stepper.Type.ts"],
  },
  {
    id: "navbar",
    label: "Navbar",
    description: "Compound sticky header with brand, nav links, and actions slots.",
    category: "Navigation",
    folderName: "Navbar",
    categorySlug: "navigation",
    requires: [],
    files: ["Navbar.tsx", "Navbar.module.css", "Navbar.Type.ts"],
  },
  {
    id: "side-nav",
    label: "SideNav",
    description: "Grouped sidebar navigation with active state and keyboard support.",
    category: "Navigation",
    folderName: "SideNav",
    categorySlug: "navigation",
    requires: [],
    files: ["SideNav.tsx", "SideNav.module.css", "SideNav.Type.ts"],
  },
  {
    id: "table-of-contents",
    label: "TableOfContents",
    description: "Presentational TOC with active heading highlighting.",
    category: "Navigation",
    folderName: "TableOfContents",
    categorySlug: "navigation",
    requires: [],
    files: ["TableOfContents.tsx", "TableOfContents.module.css", "TableOfContents.Type.ts"],
  },

  // Feedback ──────────────────────────────────────────────────────────────────
  {
    id: "alert",
    label: "Alert",
    description: "Status message with role=alert or role=status variants.",
    category: "Feedback",
    folderName: "Alert",
    categorySlug: "feedback",
    requires: [],
    files: ["Alert.tsx", "Alert.module.css", "Alert.Type.ts"],
  },
  {
    id: "badge",
    label: "Badge",
    description: "Dot or label badge with multiple color variants.",
    category: "Feedback",
    folderName: "Badge",
    categorySlug: "feedback",
    requires: [],
    files: ["Badge.tsx", "Badge.module.css", "Badge.Type.ts"],
  },
  {
    id: "progress",
    label: "Progress",
    description: "Progress bar with full ARIA progressbar pattern.",
    category: "Feedback",
    folderName: "Progress",
    categorySlug: "feedback",
    requires: [],
    files: ["Progress.tsx", "Progress.module.css", "Progress.Type.ts"],
  },
  {
    id: "spinner",
    label: "Spinner",
    description: "Animated loading indicator with a screen-reader label.",
    category: "Feedback",
    folderName: "Spinner",
    categorySlug: "feedback",
    requires: [],
    files: ["Spinner.tsx", "Spinner.module.css", "Spinner.Type.ts"],
  },
  {
    id: "skeleton",
    label: "Skeleton",
    description: "Shimmer placeholder in text, circular, or rectangular shapes.",
    category: "Feedback",
    folderName: "Skeleton",
    categorySlug: "feedback",
    requires: [],
    files: ["Skeleton.tsx", "Skeleton.module.css", "Skeleton.Type.ts"],
  },
  {
    id: "toast",
    label: "Toast",
    description: "Imperative toast system with auto-dismiss and aria-live.",
    category: "Feedback",
    folderName: "Toast",
    categorySlug: "feedback",
    requires: [],
    files: ["Toast.tsx", "Toast.module.css", "Toast.Type.ts"],
  },
  {
    id: "callout",
    label: "Callout",
    description: "Left-border accent callout block in info, warning, success, danger, and neutral variants.",
    category: "Feedback",
    folderName: "Callout",
    categorySlug: "feedback",
    requires: [],
    files: ["Callout.tsx", "Callout.module.css", "Callout.Type.ts"],
  },
  {
    id: "empty-state",
    label: "EmptyState",
    description: "Centered placeholder with icon, title, description, and action slot.",
    category: "Feedback",
    folderName: "EmptyState",
    categorySlug: "feedback",
    requires: [],
    files: ["EmptyState.tsx", "EmptyState.module.css", "EmptyState.Type.ts"],
  },

  // Overlay ───────────────────────────────────────────────────────────────────
  {
    id: "modal",
    label: "Modal",
    description: "Native dialog with free focus trap and Escape to close.",
    category: "Overlay",
    folderName: "Modal",
    categorySlug: "overlay",
    requires: [],
    files: ["Modal.tsx", "Modal.module.css", "Modal.Type.ts"],
  },
  {
    id: "drawer",
    label: "Drawer",
    description: "Side sheet from right, left, or bottom using native dialog.",
    category: "Overlay",
    folderName: "Drawer",
    categorySlug: "overlay",
    requires: [],
    files: ["Drawer.tsx", "Drawer.module.css", "Drawer.Type.ts"],
  },
  {
    id: "tooltip",
    label: "Tooltip",
    description: "CSS hover tooltip with role=tooltip and aria-describedby.",
    category: "Overlay",
    folderName: "Tooltip",
    categorySlug: "overlay",
    requires: [],
    files: ["Tooltip.tsx", "Tooltip.module.css", "Tooltip.Type.ts"],
  },
  {
    id: "popover",
    label: "Popover",
    description: "Click-triggered floating panel with aria-expanded on trigger.",
    category: "Overlay",
    folderName: "Popover",
    categorySlug: "overlay",
    requires: [],
    files: ["Popover.tsx", "Popover.module.css", "Popover.Type.ts"],
  },
  {
    id: "command-palette",
    label: "CommandPalette",
    description: "Keyboard-driven search overlay with grouped results and arrow-key navigation.",
    category: "Overlay",
    folderName: "CommandPalette",
    categorySlug: "overlay",
    requires: [],
    files: ["CommandPalette.tsx", "CommandPalette.module.css", "CommandPalette.Type.ts"],
  },

  // Data Display ──────────────────────────────────────────────────────────────
  {
    id: "avatar",
    label: "Avatar",
    description: "Image with fallback initials and an online status dot.",
    category: "Data Display",
    folderName: "Avatar",
    categorySlug: "data-display",
    requires: [],
    files: ["Avatar.tsx", "Avatar.module.css", "Avatar.Type.ts"],
  },
  {
    id: "card",
    label: "Card",
    description: "Compound card with header, body, and footer sub-components.",
    category: "Data Display",
    folderName: "Card",
    categorySlug: "data-display",
    requires: [],
    files: ["Card.tsx", "Card.module.css", "Card.Type.ts"],
  },
  {
    id: "table",
    label: "Table",
    description: "Accessible table with scope, caption, and compound structure.",
    category: "Data Display",
    folderName: "Table",
    categorySlug: "data-display",
    requires: [],
    files: ["Table.tsx", "Table.module.css", "Table.Type.ts"],
  },
  {
    id: "accordion",
    label: "Accordion",
    description: "Expandable items with single or multi-expand mode.",
    category: "Data Display",
    folderName: "Accordion",
    categorySlug: "data-display",
    requires: [],
    files: ["Accordion.tsx", "Accordion.module.css", "Accordion.Type.ts"],
  },
  {
    id: "tag",
    label: "Tag",
    description: "Inline chip with optional dismiss button and aria-label.",
    category: "Data Display",
    folderName: "Tag",
    categorySlug: "data-display",
    requires: [],
    files: ["Tag.tsx", "Tag.module.css", "Tag.Type.ts"],
  },
  {
    id: "carousel",
    label: "Carousel",
    description: "Slide carousel with arrows, dots, autoPlay, and ARIA pattern.",
    category: "Data Display",
    folderName: "Carousel",
    categorySlug: "data-display",
    requires: [],
    files: ["Carousel.tsx", "Carousel.module.css", "Carousel.Type.ts"],
  },
  {
    id: "banner",
    label: "Banner",
    description: "Full-width message bar for info, success, warning, or error.",
    category: "Data Display",
    folderName: "Banner",
    categorySlug: "data-display",
    requires: [],
    files: ["Banner.tsx", "Banner.module.css", "Banner.Type.ts"],
  },
  {
    id: "timeline",
    label: "Timeline",
    description: "Vertical event list with status dots and time elements.",
    category: "Data Display",
    folderName: "Timeline",
    categorySlug: "data-display",
    requires: [],
    files: ["Timeline.tsx", "Timeline.module.css", "Timeline.Type.ts"],
  },
  {
    id: "code-block",
    label: "CodeBlock",
    description: "Syntax-highlighted code block with language label and copy button.",
    category: "Data Display",
    folderName: "CodeBlock",
    categorySlug: "data-display",
    requires: [],
    files: ["CodeBlock.tsx", "CodeBlock.module.css", "CodeBlock.Type.ts"],
  },
  {
    id: "rating",
    label: "Rating",
    description: "Star rating with full, half, and empty states — interactive or read-only.",
    category: "Data Display",
    folderName: "Rating",
    categorySlug: "data-display",
    requires: [],
    files: ["Rating.tsx", "Rating.module.css", "Rating.Type.ts"],
  },

  // Form ──────────────────────────────────────────────────────────────────────
  {
    id: "form-field",
    label: "FormField",
    description: "Label + input + error message bundle with full ARIA wiring.",
    category: "Form",
    folderName: "FormField",
    categorySlug: "form",
    requires: ["label"],
    files: ["FormField.tsx", "FormField.module.css", "FormField.Type.ts"],
  },
  {
    id: "search-input",
    label: "SearchInput",
    description: "Search input with clear button and accessible controls.",
    category: "Form",
    folderName: "SearchInput",
    categorySlug: "form",
    requires: [],
    files: ["SearchInput.tsx", "SearchInput.module.css", "SearchInput.Type.ts"],
  },
  {
    id: "number-input",
    label: "NumberInput",
    description: "Number input with increment/decrement and min/max clamping.",
    category: "Form",
    folderName: "NumberInput",
    categorySlug: "form",
    requires: [],
    files: ["NumberInput.tsx", "NumberInput.module.css", "NumberInput.Type.ts"],
  },
  {
    id: "date-picker",
    label: "DatePicker",
    description: "Calendar dropdown date selector with min/max constraints and form integration.",
    category: "Form",
    folderName: "DatePicker",
    categorySlug: "form",
    requires: [],
    files: ["DatePicker.tsx", "DatePicker.module.css", "DatePicker.Type.ts"],
  },
  {
    id: "combobox",
    label: "Combobox",
    description: "Searchable dropdown with keyboard navigation and optional clear button.",
    category: "Form",
    folderName: "Combobox",
    categorySlug: "form",
    requires: [],
    files: ["Combobox.tsx", "Combobox.module.css", "Combobox.Type.ts"],
  },
  {
    id: "file-upload",
    label: "FileUpload",
    description: "Drag-and-drop file zone with size validation and file list management.",
    category: "Form",
    folderName: "FileUpload",
    categorySlug: "form",
    requires: [],
    files: ["FileUpload.tsx", "FileUpload.module.css", "FileUpload.Type.ts"],
  },
  {
    id: "otp-input",
    label: "OTPInput",
    description: "N-box OTP/PIN input with auto-advance, paste, and onComplete callback.",
    category: "Form",
    folderName: "OTPInput",
    categorySlug: "form",
    requires: [],
    files: ["OTPInput.tsx", "OTPInput.module.css", "OTPInput.Type.ts"],
  },
];

// ── Derived structures ────────────────────────────────────────────────────────

/** Sidebar / mobile nav — Getting Started prepended, components grouped by category */
export const docNav = [
  {
    section: "Getting Started",
    items: [
      { label: "Installation", href: "/docs/getting-started" },
      { label: "Theming", href: "/docs/theming" },
      { label: "Changelog", href: "/docs/changelog" },
    ],
  },
  ...categoryOrder.map((category) => ({
    section: category,
    items: components
      .filter((c) => c.category === category)
      .map((c) => ({ label: c.label, href: `/docs/components/${c.id}` })),
  })),
];

/** Catalog page — components grouped by category with category metadata */
export const catalog = categoryOrder.map((category) => ({
  category,
  meta: categoryMeta[category],
  items: components
    .filter((c) => c.category === category)
    .map((c) => ({ id: c.id, label: c.label, description: c.description, href: `/docs/components/${c.id}` })),
}));

/** Landing page component grid — category + top item labels */
export const landingGrid = categoryOrder.map((category) => ({
  category,
  items: components.filter((c) => c.category === category).map((c) => c.label),
}));

/** Resolve all required deps recursively — returns full set of ids to include */
export function resolveDeps(selectedIds: Set<string>): Set<string> {
  const resolved = new Set(selectedIds);
  let changed = true;
  while (changed) {
    changed = false;
    for (const id of resolved) {
      const comp = components.find((c) => c.id === id);
      if (!comp) continue;
      for (const dep of comp.requires) {
        if (!resolved.has(dep)) {
          resolved.add(dep);
          changed = true;
        }
      }
    }
  }
  return resolved;
}
