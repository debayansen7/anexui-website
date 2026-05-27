export type ComponentCategory =
  | "Basic"
  | "Layout"
  | "Navigation"
  | "Feedback"
  | "Overlay"
  | "Data Display"
  | "Form";

export interface RegistryComponent {
  id: string;
  label: string;
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

export const components: RegistryComponent[] = [
  // ── Basic ──────────────────────────────────────────────────────────────────
  {
    id: "button",
    label: "Button",
    category: "Basic",
    folderName: "Button",
    categorySlug: "basic",
    requires: [],
    files: ["Button.tsx", "Button.module.css", "Button.Type.ts"],
  },
  {
    id: "input",
    label: "Input",
    category: "Basic",
    folderName: "Input",
    categorySlug: "basic",
    requires: [],
    files: ["Input.tsx", "Input.module.css", "Input.Type.ts"],
  },
  {
    id: "textarea",
    label: "Textarea",
    category: "Basic",
    folderName: "Textarea",
    categorySlug: "basic",
    requires: [],
    files: ["Textarea.tsx", "Textarea.module.css", "Textarea.Type.ts"],
  },
  {
    id: "select",
    label: "Select",
    category: "Basic",
    folderName: "Select",
    categorySlug: "basic",
    requires: [],
    files: ["Select.tsx", "Select.module.css", "Select.Type.ts"],
  },
  {
    id: "checkbox",
    label: "Checkbox",
    category: "Basic",
    folderName: "Checkbox",
    categorySlug: "basic",
    requires: [],
    files: ["Checkbox.tsx", "Checkbox.module.css", "Checkbox.Type.ts"],
  },
  {
    id: "radio-group",
    label: "Radio Group",
    category: "Basic",
    folderName: "RadioGroup",
    categorySlug: "basic",
    requires: [],
    files: ["RadioGroup.tsx", "RadioGroup.module.css", "RadioGroup.Type.ts"],
  },
  {
    id: "switch",
    label: "Switch",
    category: "Basic",
    folderName: "Switch",
    categorySlug: "basic",
    requires: [],
    files: ["Switch.tsx", "Switch.module.css", "Switch.Type.ts"],
  },
  {
    id: "slider",
    label: "Slider",
    category: "Basic",
    folderName: "Slider",
    categorySlug: "basic",
    requires: [],
    files: ["Slider.tsx", "Slider.module.css", "Slider.Type.ts"],
  },
  {
    id: "label",
    label: "Label",
    category: "Basic",
    folderName: "Label",
    categorySlug: "basic",
    requires: [],
    files: ["Label.tsx", "Label.module.css", "Label.Type.ts"],
  },

  // ── Layout ─────────────────────────────────────────────────────────────────
  {
    id: "container",
    label: "Container",
    category: "Layout",
    folderName: "Container",
    categorySlug: "layout",
    requires: [],
    files: ["Container.tsx", "Container.module.css", "Container.Type.ts"],
  },
  {
    id: "stack",
    label: "Stack",
    category: "Layout",
    folderName: "Stack",
    categorySlug: "layout",
    requires: [],
    files: ["Stack.tsx", "Stack.module.css", "Stack.Type.ts"],
  },
  {
    id: "grid",
    label: "Grid",
    category: "Layout",
    folderName: "Grid",
    categorySlug: "layout",
    requires: [],
    files: ["Grid.tsx", "Grid.module.css", "Grid.Type.ts"],
  },
  {
    id: "divider",
    label: "Divider",
    category: "Layout",
    folderName: "Divider",
    categorySlug: "layout",
    requires: [],
    files: ["Divider.tsx", "Divider.module.css", "Divider.Type.ts"],
  },

  // ── Navigation ─────────────────────────────────────────────────────────────
  {
    id: "tabs",
    label: "Tabs",
    category: "Navigation",
    folderName: "Tabs",
    categorySlug: "navigation",
    requires: [],
    files: ["Tabs.tsx", "Tabs.module.css", "Tabs.Type.ts"],
  },
  {
    id: "breadcrumb",
    label: "Breadcrumb",
    category: "Navigation",
    folderName: "Breadcrumb",
    categorySlug: "navigation",
    requires: [],
    files: ["Breadcrumb.tsx", "Breadcrumb.module.css", "Breadcrumb.Type.ts"],
  },
  {
    id: "pagination",
    label: "Pagination",
    category: "Navigation",
    folderName: "Pagination",
    categorySlug: "navigation",
    requires: [],
    files: ["Pagination.tsx", "Pagination.module.css", "Pagination.Type.ts"],
  },
  {
    id: "stepper",
    label: "Stepper",
    category: "Navigation",
    folderName: "Stepper",
    categorySlug: "navigation",
    requires: [],
    files: ["Stepper.tsx", "Stepper.module.css", "Stepper.Type.ts"],
  },

  // ── Feedback ───────────────────────────────────────────────────────────────
  {
    id: "alert",
    label: "Alert",
    category: "Feedback",
    folderName: "Alert",
    categorySlug: "feedback",
    requires: [],
    files: ["Alert.tsx", "Alert.module.css", "Alert.Type.ts"],
  },
  {
    id: "badge",
    label: "Badge",
    category: "Feedback",
    folderName: "Badge",
    categorySlug: "feedback",
    requires: [],
    files: ["Badge.tsx", "Badge.module.css", "Badge.Type.ts"],
  },
  {
    id: "progress",
    label: "Progress",
    category: "Feedback",
    folderName: "Progress",
    categorySlug: "feedback",
    requires: [],
    files: ["Progress.tsx", "Progress.module.css", "Progress.Type.ts"],
  },
  {
    id: "spinner",
    label: "Spinner",
    category: "Feedback",
    folderName: "Spinner",
    categorySlug: "feedback",
    requires: [],
    files: ["Spinner.tsx", "Spinner.module.css", "Spinner.Type.ts"],
  },
  {
    id: "skeleton",
    label: "Skeleton",
    category: "Feedback",
    folderName: "Skeleton",
    categorySlug: "feedback",
    requires: [],
    files: ["Skeleton.tsx", "Skeleton.module.css", "Skeleton.Type.ts"],
  },
  {
    id: "toast",
    label: "Toast",
    category: "Feedback",
    folderName: "Toast",
    categorySlug: "feedback",
    requires: [],
    files: ["Toast.tsx", "Toast.module.css", "Toast.Type.ts"],
  },

  // ── Overlay ────────────────────────────────────────────────────────────────
  {
    id: "modal",
    label: "Modal",
    category: "Overlay",
    folderName: "Modal",
    categorySlug: "overlay",
    requires: [],
    files: ["Modal.tsx", "Modal.module.css", "Modal.Type.ts"],
  },
  {
    id: "drawer",
    label: "Drawer",
    category: "Overlay",
    folderName: "Drawer",
    categorySlug: "overlay",
    requires: [],
    files: ["Drawer.tsx", "Drawer.module.css", "Drawer.Type.ts"],
  },
  {
    id: "tooltip",
    label: "Tooltip",
    category: "Overlay",
    folderName: "Tooltip",
    categorySlug: "overlay",
    requires: [],
    files: ["Tooltip.tsx", "Tooltip.module.css", "Tooltip.Type.ts"],
  },
  {
    id: "popover",
    label: "Popover",
    category: "Overlay",
    folderName: "Popover",
    categorySlug: "overlay",
    requires: [],
    files: ["Popover.tsx", "Popover.module.css", "Popover.Type.ts"],
  },

  // ── Data Display ───────────────────────────────────────────────────────────
  {
    id: "avatar",
    label: "Avatar",
    category: "Data Display",
    folderName: "Avatar",
    categorySlug: "data-display",
    requires: [],
    files: ["Avatar.tsx", "Avatar.module.css", "Avatar.Type.ts"],
  },
  {
    id: "card",
    label: "Card",
    category: "Data Display",
    folderName: "Card",
    categorySlug: "data-display",
    requires: [],
    files: ["Card.tsx", "Card.module.css", "Card.Type.ts"],
  },
  {
    id: "table",
    label: "Table",
    category: "Data Display",
    folderName: "Table",
    categorySlug: "data-display",
    requires: [],
    files: ["Table.tsx", "Table.module.css", "Table.Type.ts"],
  },
  {
    id: "accordion",
    label: "Accordion",
    category: "Data Display",
    folderName: "Accordion",
    categorySlug: "data-display",
    requires: [],
    files: ["Accordion.tsx", "Accordion.module.css", "Accordion.Type.ts"],
  },
  {
    id: "tag",
    label: "Tag",
    category: "Data Display",
    folderName: "Tag",
    categorySlug: "data-display",
    requires: [],
    files: ["Tag.tsx", "Tag.module.css", "Tag.Type.ts"],
  },
  {
    id: "carousel",
    label: "Carousel",
    category: "Data Display",
    folderName: "Carousel",
    categorySlug: "data-display",
    requires: [],
    files: ["Carousel.tsx", "Carousel.module.css", "Carousel.Type.ts"],
  },
  {
    id: "banner",
    label: "Banner",
    category: "Data Display",
    folderName: "Banner",
    categorySlug: "data-display",
    requires: [],
    files: ["Banner.tsx", "Banner.module.css", "Banner.Type.ts"],
  },
  {
    id: "timeline",
    label: "Timeline",
    category: "Data Display",
    folderName: "Timeline",
    categorySlug: "data-display",
    requires: [],
    files: ["Timeline.tsx", "Timeline.module.css", "Timeline.Type.ts"],
  },

  // ── Form ───────────────────────────────────────────────────────────────────
  {
    id: "form-field",
    label: "FormField",
    category: "Form",
    folderName: "FormField",
    categorySlug: "form",
    requires: ["label"],
    files: ["FormField.tsx", "FormField.module.css", "FormField.Type.ts"],
  },
  {
    id: "search-input",
    label: "SearchInput",
    category: "Form",
    folderName: "SearchInput",
    categorySlug: "form",
    requires: [],
    files: ["SearchInput.tsx", "SearchInput.module.css", "SearchInput.Type.ts"],
  },
  {
    id: "number-input",
    label: "NumberInput",
    category: "Form",
    folderName: "NumberInput",
    categorySlug: "form",
    requires: [],
    files: ["NumberInput.tsx", "NumberInput.module.css", "NumberInput.Type.ts"],
  },
];

export const categoryOrder: ComponentCategory[] = [
  "Basic",
  "Layout",
  "Navigation",
  "Feedback",
  "Overlay",
  "Data Display",
  "Form",
];

export const categoryColors: Record<ComponentCategory, string> = {
  Basic: "text-violet-400 border-violet-500/30 bg-violet-500/10",
  Layout: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  Navigation: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  Feedback: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  Overlay: "text-pink-400 border-pink-500/30 bg-pink-500/10",
  "Data Display": "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  Form: "text-orange-400 border-orange-500/30 bg-orange-500/10",
};

/** Resolve all required deps recursively, returns full set of ids to include */
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
