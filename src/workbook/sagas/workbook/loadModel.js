import FlexLayout from 'flexlayout-react';
import saveModel from './saveModel';


export default function* LoadModel({ model }) {
  console.log('model', model);
  const flexModel = FlexLayout.Model.fromJson(model);
  yield saveModel(flexModel);
}
