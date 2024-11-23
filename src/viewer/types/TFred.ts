import { IFrequency, IDType } from "./TTimeseries";

export interface ICategory {
  name: string | null;
  children: number[] | null;
  parentId: number | null;
  fetched: boolean;
}

export interface ITimeseries {
  id: string;
  realtimeStart: string;
  realtimeEnd: string;
  title: string;
  observationStart: string;
  observationEnd: string;
  frequency: string;
  frequencyShort: string;
  units: string;
  unitsShort: string;
  seasonalAdjustment: string;
  seasonalAdjustmentShort: string;
  lastUpdated: string;
  popularity: number;
  groupPopularity: number;
  notes?: string;
}

export interface IFredSeries {
  id: string;  
  realtimeStart: string;
  realtimeEnd: string;
  title: string;
  observationStart: string;
  observationEnd: string;
  frequency: string;
  frequencyShort: string;
  units: string;
  unitsShort: string;
  seasonalAdjustment: string;
  seasonalAdjustmentShort: string;
  lastUpdated: string;
  popularity: number;
  groupPopularity: number;
  notes?: string;
  // derived
  freq: IFrequency; 
  dtype: IDType; 
  isDiscontinued: boolean;
}
