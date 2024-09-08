import {
  GraphTabsetId,
  GraphHorizontalRowId,
  FORTH_LAYOUT,
  TABSET,
  ROW,
  FIRST_LAYOUT,
  SECOND_LAYOUT,
  THIRD_LAYOUT,
} from './definitions';

export const SingleGraphLayout = {
  type: ROW,
  id: FIRST_LAYOUT,
  children: [
    {
      type: TABSET,
      id: GraphTabsetId(0),
      weight: 1.5625,
      active: true,
      children: [],
    },
  ],
};

export const TwoHorizontalGraphLayout = {
  type: ROW,
  id: SECOND_LAYOUT,
  config: { layout: 2 },
  children: [
    {
      type: ROW,
      id: GraphHorizontalRowId(0),
      weight: 25,
      children: [
        {
          type: TABSET,
          id: GraphTabsetId(0),
          weight: 50,
          active: true,
          children: [],
        },
        {
          type: TABSET,
          id: GraphTabsetId(1),
          weight: 50,
          children: [],
        },
      ],
    },
  ],
};

export const TwoVerticalGraphLayout = {
  type: ROW,
  id: THIRD_LAYOUT,
  children: [
    {
      type: TABSET,
      id: GraphTabsetId(0),
      weight: 12.5,
      active: true,
      children: [],
    },
    {
      type: TABSET,
      id: GraphTabsetId(1),
      weight: 12.5,
      children: [],
    },
  ],
};


export const FourGraphLayout = {
  type: ROW,
  id: FORTH_LAYOUT,
  children: [
    {
      type: ROW,
      id: GraphHorizontalRowId(0),
      weight: 4.487591911764706,
      children: [
        {
          type: TABSET,
          id: GraphTabsetId(0),
          weight: 50,
          active: true,
          children: [],
        },
        {
          type: TABSET,
          id: GraphTabsetId(1),
          weight: 50,
          children: [],
        },
      ],
    },
    {
      type: ROW,
      id: GraphHorizontalRowId(1),
      weight: 4.487591911764706,
      children: [
        {
          type: TABSET,
          id: GraphTabsetId(2),
          weight: 50,
          children: [],
        },
        {
          type: TABSET,
          id: GraphTabsetId(3),
          weight: 50,
          children: [],
        },
      ],
    },
  ],
};


export const graphLayouts = [
  SingleGraphLayout,
  TwoHorizontalGraphLayout,
  TwoVerticalGraphLayout,
  FourGraphLayout,
];
export const graphLayoutNames = graphLayouts.map((x) => x.id);
export const graphLayoutSize = {
  [FIRST_LAYOUT]: 1,
  [SECOND_LAYOUT]: 2,
  [THIRD_LAYOUT]: 2,
  [FORTH_LAYOUT]: 4,
};
