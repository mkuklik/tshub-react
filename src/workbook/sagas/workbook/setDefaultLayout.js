import { Model } from "flexlayout-react";
import { blankLayout } from "./switchGraphLayout";
import saveModel from "./saveModel";

export default function* setDefaultLayout() {
  const model = Model.fromJson(blankLayout(0));
  // todo check for missing graph objects
  yield saveModel(model);
}
