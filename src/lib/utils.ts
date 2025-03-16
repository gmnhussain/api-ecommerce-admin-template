import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// export const randomInteger = (min: number, max: number) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// export const randomFloat = (min: number, max: number) =>
//   Math.random() * (max - min) + min;
