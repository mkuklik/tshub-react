import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import {
  isNil, find, propEq, path,
} from 'ramda';
import {
  MenuItem, Button,
} from '@blueprintjs/core';
import { Select as BlueSelect } from '@blueprintjs/select';
import { isNumber } from 'util';
import ColorIndicator from '../SeriesList/ColorIndicator';
import { currentGraphSelectedSeriesSelector, currentGraphGidSelector, currentGraphSeriesDefSelector } from '../../../viewer/selectors/graph';
import { seriesDefListSelector } from '../../../viewer/selectors/series';
import { updateSeriesPropsAction, selectSeriesAction } from '../../../viewer/actions/graphActions';


import { analyticsParametersSelector } from '../../selectors';
import { LMParameterType } from '../../types';
import { updateAnalyticsParametersAction, updateAnalyticsUIAction } from '../../actions';


class DropdownSeriesSelector extends React.PureComponent {
  handleChange = (value) => {
    const {
      ayid, disabled, name,
    } = this.props;

    if (!disabled) {
      this.props.updateAnalyticsParameters({
        ayid,
        parameters: {
          ...this.props.parameters,
          [name]: {
            value,
          },
        },
      });
    }
  }
  
  handleChange = (wsid) => {
    const { gid, selectSeries } = this.props;

    selectSeries({ gid, wsid, clear: true });
  }

  render() {
    const {
      ayid, options, disabled, value,
    } = this.props;

    const buttonText = '(...)';

    return (

      <BlueSelect
        activeItem={value}
          // disabled={isNil(gid)}
        filterable={false}
        items={options}
        onItemSelect={(item) => this.handleChange(item)}
        itemRenderer={(wsid, { handleClick, modifiers }) => {
          const color = path(['color'], find((x) => x.wsid === wsid, allGraphSeriesDef));
          const name = isNil(allSeries) ? null : allSeries[wsid].name || null;
          return (
            <MenuItem
              key={wsid}
                // label={lab}
              active={modifiers.active}
              onClick={handleClick}
              text={(
                <div>
                  <ColorIndicator color={color} />
                  {' '}
                  <span>{name}</span>
                </div>
              )}
            />
          );
        }}
      >
        <Button
          icon="list"
          disabled={disabled || allGraphSeriesDef.length === 0}
          text={buttonText}
        />
      </BlueSelect>
    );
  }
}

DropdownSeriesSelector.defaultProps = {
  gid: undefined,
  disabled: false,
  trim: undefined,
};

DropdownSeriesSelector.propTypes = {
  gid: types.string,
  disabled: types.bool,
  trim: types.bool,
  allGraphSeriesDef: types.array,
  allSeries: types.object.isRequired,
  selected: types.array,
  selectSeries: types.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const selected = currentGraphSelectedSeriesSelector(state) || [];
  const wsid = (selected.length === 1) ? selected[0] : undefined;
  return {
    gid: currentGraphGidSelector(state),
    wsid,
    selected,
    allGraphSeriesDef: currentGraphSeriesDefSelector(state),
    allSeries: seriesDefListSelector(state),
    series: find(propEq('wsid', wsid))(currentGraphSeriesDefSelector(state)),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateSeriesProps: updateSeriesPropsAction,
  selectSeries: selectSeriesAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DropdownSeriesSelector);
