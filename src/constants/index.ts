import { assets } from "@/assets/images";

export const sneakerImages: SneakerImage[] = [
  {
    id: 1,
    thumbnail: assets["image-product-1-thumbnail"],
    src: assets["image-product-1"],
  },
  {
    id: 2,
    thumbnail: assets["image-product-2-thumbnail"],
    src: assets["image-product-2"],
  },
  {
    id: 3,
    thumbnail: assets["image-product-3-thumbnail"],
    src: assets["image-product-3"],
  },
  {
    id: 4,
    thumbnail: assets["image-product-4-thumbnail"],
    src: assets["image-product-4"],
  },
];

export const sneakerImagesMap = new Map<number, SneakerImage>(
  sneakerImages.map((img) => [img.id, img]),
);
