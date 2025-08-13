import { assets } from "@/assets/images";
import type { Product, SneakerImage } from "@/types/shared";

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

export const products: Product[] = [
  {
    id: 1,
    title: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable runbber outer sole, they'll withstand everything the weather can offer.",
    price: 250,
    discount: 0.5,
    images: sneakerImages,
    quantity: 0,
  },
];

export const sneakerImagesMap = new Map<number, SneakerImage>(
  sneakerImages.map((img) => [img.id, img]),
);
