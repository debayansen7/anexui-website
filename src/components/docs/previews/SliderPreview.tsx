"use client";
import { Slider } from "anexui";

export default function SliderPreview() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <Slider defaultValue={40} aria-label="Volume" />
      <Slider min={0} max={100} step={5} defaultValue={60} showValue aria-label="Brightness" />
      <Slider min={0} max={10} step={1} defaultValue={7} showValue aria-label="Rating" />
    </div>
  );
}
