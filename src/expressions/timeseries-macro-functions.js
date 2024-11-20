
// const result = (async (hpFilterParams) => {
//   try {
//     console.log(await callHPFilter(hpFilterParams))
//   } catch (e) {
//     console.log(e)
//   }
import Moment from 'moment';
import { TS } from './timeseries';
import { HPFilterParameters, WSeries } from '../analytics_client';


const callHPFilter = (hpFilterParams) => (
  // TODO
  new Promise((resolve, reject) => {
    window._chronosdb.analyticsApi.analyticsApiTsaHpfilter(
      hpFilterParams,
      (error, data) => {
        if (error) {
          throw new Error(error);
        }
        return resolve(data);
      },
    );
  })
);


export async function hpfilter(ts, lambda) {
/*
Returns a series smoothed by using the Hodrick-Prescott method with the specified lambda factor, which must be a number greater than zero.

Notes
-----
The HP filter removes a smooth trend, `T`, from the data `x`. by solving
min sum((x[t] - T[t])**2 + lamb*((T[t+1] - T[t]) - (T[t] - T[t-1]))**2)
  T   t
Here we implemented the HP filter as a ridge-regression rule using
scipy.sparse. In this sense, the solution can be written as
T = inv(I + lamb*K'K)x
where I is a nobs x nobs identity matrix, and K is a (nobs-2) x nobs matrix
such that
K[i,j] = 1 if i == j or i == j + 2
K[i,j] = -2 if i == j + 1
K[i,j] = 0 otherwise
References
----------
Hodrick, R.J, and E. C. Prescott. 1980. "Postwar U.S. Business Cycles: An
    Empirical Investigation." `Carnegie Mellon University discussion
    paper no. 451`.
Ravn, M.O and H. Uhlig. 2002. "Notes On Adjusted the Hodrick-Prescott
    Filter for the Frequency of Observations." `The Review of Economics and
    Statistics`, 84(2), 371-80.

A typical value for lambda when used for quarterly data is 1600.
*/

  if (ts instanceof TS) {
    // let out;
    const params = new HPFilterParameters();
    params.input = WSeries.constructFromObject(ts);
    params.lambda = lambda || 1600;
    const out = await callHPFilter(params).then((x) => {
      const { trend } = x;
      const data = trend.data.map((x) => [Moment.utc(x[0]), x[1]]);
      const y = new TS(data, trend.freq, trend.fparams, trend.dtype, trend.dparams,
        trend.units, trend.options);
      return y;
    }).catch((e) => {
      console.log(e);
      throw e;
    });
    return out;
  }
  throw Error('hpfilter: not a timeseries');

  //   const n = npy(ts);
  //   const I = tf.eye(n,n);
  //   const val = ts.data.map(x=>z[1]);
  //   const offsets = tf.tensor1d([0.0, 1.0, 2.0]);
  //   tf.layers.repeatVector()
  //   // const K =

  //   tf.linalg.solve(
  //     matrix, rhs, adjoint=False, name=None
  // )
  // }

  // pw = PandasWrapper(x)
  // x = array_like(x, 'x', ndim=1)
  // nobs = len(x)
  // I = sparse.eye(nobs, nobs)  # noqa:E741
  // offsets = np.array([0, 1, 2])
  // data = np.repeat([[1.], [-2.], [1.]], nobs, axis=1)
  // K = sparse.dia_matrix((data, offsets), shape=(nobs - 2, nobs))

  // use_umfpack = True
  // trend = spsolve(I+lamb*K.T.dot(K), x, use_umfpack=use_umfpack)

  // cycle = x - trend
  // return pw.wrap(cycle, append='cycle'), pw.wrap(trend, append='trend')
  // return new TS(data, ts.freq, ts.fparas, ts.dtype, ts.dparams, ts.units, ts.options);
}

export function bkfilter(ts) {
/*
BKFilter(series, shortPeriod, longPeriod, leadLags)
Returns the Baxter-King bandpass filtered series with the specified properties.
*/

}

export function cfrfilter(ts) {
  /* CFRandomWalkFilter(series, shortPeriod, longPeriod)

  Returns the series filtered with asymmetric Christiano-Fitzgerald bandpass filter for non-stationary series with the specified properties.
  */

}

export function cfsfilter(ts) {
  /*
  CFStationaryFilter(series, shortPeriod, longPeriod)
  Returns the series filtered with asymmetric Christiano-Fitzgerald bandpass filter for stationary series with the specified properties.
  */

}
