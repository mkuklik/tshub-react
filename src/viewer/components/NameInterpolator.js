
export default function NameInterpolator(txt, ts) {
  // interpolate time series name

  const out = txt
    .replace(/{name}/g, ts.name)
    .replace(/{tsid}/g, ts.tsid)
    .replace(/{wsid}/g, ts.wsid);
  return out;
}
