import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import { isNil, find, propEq } from 'ramda';
import { currentGraphSelectedSeriesSelector, currentGraphGidSelector, currentGraphSeriesDefSelector } from '../../../viewer/selectors/graph';
import { updateSeriesPropsAction } from '../../../viewer/actions/graphActions';
import YAxisDropdownSelector from '../SeriesOptions/YAxisDropdownSelector';

class YAxisMenuButton extends React.PureComponent {
  render() {
    const { gid, wsid, yAxis, updateSeriesProps } = this.props;
    return (
      <YAxisDropdownSelector
        gid={gid}
        wsid={wsid}
        yAxis={yAxis}
        updateSeriesProps={updateSeriesProps}
      />
    );
  }
}

YAxisMenuButton.defaultProps = {
  gid: undefined,
  wsid: undefined,
  yAxis: undefined,
};

YAxisMenuButton.propTypes = {
  gid: types.string,
  wsid: types.string,
  yAxis: types.number,
  updateSeriesProps: types.func.isRequired, // update series in grapg definition
};

const mapStateToProps = (state, ownProps) => {
  const selected = currentGraphSelectedSeriesSelector(state) || [];
  const wsid = (selected.length === 1) ? selected[0] : undefined;
  const series = find(propEq('wsid', wsid))(currentGraphSeriesDefSelector(state));
  const yAxis = isNil(series) ? undefined : series.yAxis;
  return {
    gid: currentGraphGidSelector(state),
    wsid,
    series,
    yAxis,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateSeriesProps: updateSeriesPropsAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(YAxisMenuButton);
