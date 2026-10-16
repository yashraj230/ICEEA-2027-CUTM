import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string): string {
  // Strip out punctuation and parentheses like (Dr.), Prof., etc.
  const cleaned = name
    .replace(/[().]/g, " ")
    .replace(/\b(Prof|Dr|Mr|Mrs|Ms|Shri|Smt)\b/gi, " ")
    .trim();
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  // Fallback: extract first two letters from the raw name
  const letters = name.replace(/[^a-zA-Z]/g, "");
  return letters.slice(0, 2).toUpperCase() || "NA";
}

