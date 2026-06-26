export type GalleryItem = {
  type: "image" | "video";
  src: string;
  height: "small" | "medium" | "tall" | "large" | "xlarge";
};