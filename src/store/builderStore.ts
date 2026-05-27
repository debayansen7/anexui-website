import { create } from "zustand";

interface BuilderStore {
  selected: Set<string>;
  toggle: (id: string) => void;
  toggleCategory: (categoryIds: string[]) => void;
  selectAll: (allIds: string[]) => void;
  clearAll: () => void;
}

export const useBuilderStore = create<BuilderStore>((set) => ({
  selected: new Set(),

  toggle: (id) =>
    set((state) => {
      const next = new Set(state.selected);
      next.has(id) ? next.delete(id) : next.add(id);
      return { selected: next };
    }),

  toggleCategory: (categoryIds) =>
    set((state) => {
      const next = new Set(state.selected);
      const allSelected = categoryIds.every((id) => next.has(id));
      categoryIds.forEach((id) => (allSelected ? next.delete(id) : next.add(id)));
      return { selected: next };
    }),

  selectAll: (allIds) => set({ selected: new Set(allIds) }),

  clearAll: () => set({ selected: new Set() }),
}));
