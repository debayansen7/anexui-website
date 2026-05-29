"use client";
import { useState } from "react";
import { Banner, Button } from "anexui";

export default function BannerPreview() {
  const [promo, setPromo] = useState(true);
  return (
    <div className="w-full flex flex-col gap-3">
      {promo ? (
        <Banner variant="promo" title="Special offer" description="Get 3 months free — upgrade before Friday." action={{ label: "Claim offer", onClick: () => {} }} onDismiss={() => setPromo(false)} />
      ) : (
        <Button size="sm" variant="ghost" onClick={() => setPromo(true)}>Restore promo banner</Button>
      )}
      <Banner variant="warning" title="Scheduled maintenance" description="Services offline Sunday 2–4 AM UTC." />
      <Banner variant="info" title="New components available" description="Carousel, Banner, and Timeline were just released." />
    </div>
  );
}
