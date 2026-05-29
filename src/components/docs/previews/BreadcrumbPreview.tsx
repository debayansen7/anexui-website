"use client";
import { Breadcrumb } from "anexui";

export default function BreadcrumbPreview() {
  return (
    <Breadcrumb items={[
      { label: "Home", href: "#" },
      { label: "Products", href: "#" },
      { label: "Electronics", href: "#" },
      { label: "Headphones" },
    ]} />
  );
}
