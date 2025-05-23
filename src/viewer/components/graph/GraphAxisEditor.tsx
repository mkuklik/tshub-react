import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IGraphType } from '../../types/TGraph';

interface IGraphAxisEditorProps {
  type: 'x' | 'y';
  i?: number;
}

interface IState {
  graphs: {
    currentGraphId: string;
    objects: Record<string, IGraphType>;
  };
}

const GraphAxisEditor: React.FC<IGraphAxisEditorProps> = ({ type, i = 0 }) => {
  const dispatch = useDispatch();
  const gid = useSelector((state: IState) => state.graphs.currentGraphId);
  const graph = useSelector((state: IState) => state.graphs.objects[state.graphs.currentGraphId]);

  const updateGraphTitle = () => {
    // TODO: Implement title update logic
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => updateGraphTitle();

  /*
  style (font type, size, boold, italic, color)
  axis type: linear, log, datetime, category
  reversed side: T/F
  reversed direction
  */

  return (
    <>
      <input onChange={handleTitleChange} />
    </>
  );
};

export default GraphAxisEditor; 