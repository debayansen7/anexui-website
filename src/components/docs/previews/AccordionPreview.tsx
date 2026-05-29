"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from "anexui";

const FAQ = [
  { id: "q1", q: "Is Anex UI free?", a: "Yes — MIT licensed for personal and commercial use." },
  { id: "q2", q: "Does it support dark mode?", a: 'Set data-theme="dark" on <html> to switch at runtime.' },
  { id: "q3", q: "Does it require Tailwind?", a: "Tailwind is used internally. Import the stylesheet and you're done." },
];

export default function AccordionPreview() {
  return (
    <div className="w-full max-w-md">
      <Accordion defaultOpen="q1">
        {FAQ.map(({ id, q, a }) => (
          <AccordionItem key={id} id={id}>
            <AccordionTrigger>{q}</AccordionTrigger>
            <AccordionPanel>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>{a}</p>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
