"use client";
import { ImageGallery } from "anexui";

const IMAGES = [
  { src: "https://picsum.photos/seed/anex1/600/600", alt: "Mountain landscape",  caption: "Mountain landscape"  },
  { src: "https://picsum.photos/seed/anex2/600/600", alt: "Ocean at sunset",     caption: "Ocean at sunset"     },
  { src: "https://picsum.photos/seed/anex3/600/600", alt: "Forest path",         caption: "Forest path"         },
  { src: "https://picsum.photos/seed/anex4/600/600", alt: "City skyline",        caption: "City skyline"        },
  { src: "https://picsum.photos/seed/anex5/600/600", alt: "Desert dunes",        caption: "Desert dunes"        },
  { src: "https://picsum.photos/seed/anex6/600/600", alt: "Snowy peaks",         caption: "Snowy peaks"         },
];

export default function ImageGalleryPreview() {
  return (
    <div style={{ width: "100%" }}>
      <ImageGallery images={IMAGES} cols={3} gap="md" lightbox />
    </div>
  );
}
