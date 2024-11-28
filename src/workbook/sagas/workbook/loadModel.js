import { Model } from "flexlayout-react";
import saveModel from "./saveModel";

export default function* LoadModel({ model }) {
  console.log("model", model);
  const flexModel = Model.fromJson(model);
  yield saveModel(flexModel);
}
