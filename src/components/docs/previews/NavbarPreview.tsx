"use client";
import { Navbar, NavbarBrand, NavbarNav, NavbarActions, Button } from "anexui";

export default function NavbarPreview() {
  return (
    <div
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        width: "100%",
        maxWidth: "720px",
      }}
    >
      <Navbar sticky={false}>
        <NavbarBrand>Anex UI</NavbarBrand>
        <NavbarNav>
          <a href="#" style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>Docs</a>
          <a href="#" style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>Components</a>
          <a href="#" style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>Changelog</a>
        </NavbarNav>
        <NavbarActions>
          <Button variant="primary" size="sm">Get started</Button>
        </NavbarActions>
      </Navbar>
    </div>
  );
}
