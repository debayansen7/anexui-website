"use client";
import { Carousel } from "anexui";

const SLIDES = [
  { bg: "var(--color-primary-subtle)", label: "53 accessible components" },
  { bg: "var(--color-success-subtle)", label: "WCAG AA out of the box" },
  { bg: "var(--color-info-subtle)", label: "Light & dark themes" },
  { bg: "var(--color-warning-subtle)", label: "React 19 · TypeScript · Tailwind v4" },
];

export default function CarouselPreview() {
  return (
    <div className="w-full max-w-md">
      <Carousel autoPlay interval={3000} loop showArrows showDots label="Feature highlights">
        {SLIDES.map(({ bg, label }) => (
          <div key={label} style={{ background: bg, borderRadius: "var(--radius-md)", padding: "var(--space-8) var(--space-6)", textAlign: "center", fontSize: "var(--text-sm)", color: "var(--color-text)", fontWeight: 500 }}>
            {label}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
