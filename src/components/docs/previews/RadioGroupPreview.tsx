"use client";
import { RadioGroup, Radio } from "anexui";

export default function RadioGroupPreview() {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      <RadioGroup legend="Delivery method" name="delivery-prev" direction="vertical">
        <Radio label="Email" value="email" defaultChecked />
        <Radio label="SMS" value="sms" />
        <Radio label="Push notification" value="push" />
      </RadioGroup>
      <RadioGroup legend="Size" name="size-prev" direction="horizontal">
        <Radio label="S" value="s" defaultChecked />
        <Radio label="M" value="m" />
        <Radio label="L" value="l" />
      </RadioGroup>
    </div>
  );
}
