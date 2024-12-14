import { IFreq } from "../viewer/types/Tcommon";

// Create a type alias for the keys of the enum
export type IFreqKeys = keyof typeof IFreq;

// Use the type alias in the index signature
export interface IFreqOrder {
  [key: IFreqKeys]: number; // Correct syntax
}

export const freqOrder: IFreqOrder = {
  D: 100,
  W: 80,
  M: 60,
  Q: 40,
  A: 20,
  // TODO and algin with server ordering
};

export const frequencies = ["D", "W", "M", "Q", "A"];
