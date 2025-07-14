import { images } from "@/assets/images";

export const getImageUrl = (imagePath: string): string =>
  images[imagePath as keyof typeof images] || imagePath;
