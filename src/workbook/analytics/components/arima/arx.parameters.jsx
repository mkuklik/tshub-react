




/*
Autoregressive AR-X(p) model.

parameters:
- endogenous variable, expr but has to be a single variable
- exogenous variables, expr
- lags, number or list
- trend: 
    ‘n’ - No trend.
    ‘c’ - Constant only.
    ‘t’ - Time trend only.
    ‘ct’ - Constant and time trend.
seasonal: bool
periods: // number of seasonal dummies
missing: [none, drop]

*/

