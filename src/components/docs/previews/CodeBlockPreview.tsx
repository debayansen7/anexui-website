"use client";
import { CodeBlock } from "anexui";

const tsxCode = `import { Button } from "anexui";

export default function App() {
  return <Button variant="primary">Click me</Button>;
}`;

const bashCode = `npm install anexui`;

const noLangCode = `{
  "name": "my-app",
  "dependencies": {
    "anexui": "^0.1.0"
  }
}`;

export default function CodeBlockPreview() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        width: "100%",
        maxWidth: "640px",
      }}
    >
      <CodeBlock language="tsx">{tsxCode}</CodeBlock>
      <CodeBlock language="bash">{bashCode}</CodeBlock>
      <CodeBlock>{noLangCode}</CodeBlock>
    </div>
  );
}
