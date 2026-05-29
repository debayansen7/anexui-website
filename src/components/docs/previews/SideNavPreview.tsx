"use client";
import { useState } from "react";
import { SideNav, SideNavGroup, SideNavItem } from "anexui";

const NAV = [
  {
    group: "Getting Started",
    items: [
      { id: "installation", label: "Installation" },
      { id: "theming",      label: "Theming" },
      { id: "changelog",    label: "Changelog" },
    ],
  },
  {
    group: "Components",
    items: [
      { id: "button",    label: "Button" },
      { id: "input",     label: "Input" },
      { id: "modal",     label: "Modal" },
    ],
  },
];

export default function SideNavPreview() {
  const [active, setActive] = useState("installation");

  return (
    <div
      style={{
        width: "240px",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        padding: "var(--space-3)",
      }}
    >
      <SideNav>
        {NAV.map(({ group, items }) => (
          <SideNavGroup key={group} label={group}>
            {items.map(({ id, label }) => (
              <SideNavItem
                key={id}
                active={active === id}
                onClick={() => setActive(id)}
              >
                {label}
              </SideNavItem>
            ))}
          </SideNavGroup>
        ))}
      </SideNav>
    </div>
  );
}
