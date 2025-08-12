export interface PropertyProps {
  name: string;
  description: string;
  address: { state: string; city: string; country: string };
  rating: number;
  category: string[]; // tags like "Pool", "Self Checkin"
  price: number;
  offers: { bed: string; shower: string; occupants: string };
  image: string;
  discount?: string;
}

import * as React from "react";

export interface ReactComponentProps {
  children: React.ReactNode;
}

import { ReactNode } from "react";

export interface ReactComponentProps {
  children: ReactNode;
}

export interface GeneratedImageProps {
  imageUrl: string;
  prompt: string;
  width?: string;
  height?: string;
  action: (imagePath: string) => void;
}

export type ImageProps = Pick<GeneratedImageProps, "imageUrl" | "prompt">;
