"use client";
import { useState } from "react";
import { Stepper, Button } from "anexui";

const STEPS = [
  { id: "1", label: "Account", description: "Create your account" },
  { id: "2", label: "Profile", description: "Set up your profile" },
  { id: "3", label: "Review", description: "Confirm details" },
];

export default function StepperPreview() {
  const [step, setStep] = useState(1);
  return (
    <div className="w-full flex flex-col gap-4">
      <Stepper steps={STEPS} activeStep={step} orientation="horizontal" />
      <div className="flex gap-2 justify-center">
        <Button size="sm" variant="outline" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>← Prev</Button>
        <Button size="sm" variant="outline" onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))} disabled={step === STEPS.length - 1}>Next →</Button>
      </div>
    </div>
  );
}
