import React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  isNil, find, propEq, path,
} from 'ramda';
import styled from 'styled-components';
import { Switch, Divider, FormGroup } from '@blueprintjs/core';
import { TabHeader, TabContainer } from '../CommonContainers';
import {
  updateSeriesPropsAction,
  selectSeriesAction,
} from '../../../viewer/actions/graphActions';
import {
  currentGraphGidSelector,
  currentGraphSelectedSeriesSelector,
  currentGraphSeriesDefSelector,
} from '../../../viewer/selectors/graph';
import { SeriesDefinitionType } from '../../../viewer/types/Graph';
import DropdownSeriesSelector from './DropdownSeriesSelector';
import YAxisSelector from './YAxisSelector';
import Select from '../GraphOptions/Select';
import NumericValue from '../common/NumericValue';
import { seriesDefListSelector } from '../../../viewer/selectors/series';
import ColorEditor from '../GraphOptions/ColorEditor';
import SeriesNameEditor from '../SeriesList/SeriesNameEditor';
import { updateSeriesAction } from '../../../viewer/actions/seriesActions';
import SeriesMethods from './SeriesMethods';

/*
properties
  name: 'Snitt',
  dashStyle: 'shortdot',
  lineWidth: 4,
  shadow: false,
  color: '#888',
  visible: false
  data label
*/


const dashStylesChoices = [
  'Solid',
  'ShortDash',
  'ShortDot',
  'ShortDashDot',
  'ShortDashDotDot',
  'Dot',
  'Dash',
  'LongDash',
  'DashDot',
  'LongDashDot',
  'LongDashDotDot',
];

const SeriesType = [
  ['Area', 'area'],
  ['Line', 'line'],
  ['Bar', 'bar'],
  ['Column', 'column'],
];

const SymbolOptions = [
  ['circle', 'circle'],
  ['square', 'square'],
  ['diamond', 'diamond'],
  ['triangle', 'triangle'],
  ['triangle-down', 'triangle-down'],
];

const StyledNumericValue = styled(NumericValue)`
  max-width: 40px;
`;

class SeriesOptions extends React.PureComponent {
  handlePropsUpdate = (props) => {
    const { gid, wsid, updateSeriesProps } = this.props;
    updateSeriesProps({ gid, wsid, props });
  }

  handleEnableMarkerChange = () => {
    const {
      gid, wsid, series, updateSeriesProps,
    } = this.props;
    const enabled = !path(['marker', 'enabled'], series);
    updateSeriesProps({ gid, wsid, props: { marker: { enabled } } });
  }


  handleVisbileChange = () => {
    const {
      gid, wsid, series, updateSeriesProps,
    } = this.props;
    updateSeriesProps({ gid, wsid, props: { visible: !series.visible } });
  }

  handleConnectNullsChange = () => {
    const {
      gid, wsid, series, updateSeriesProps,
    } = this.props;
    updateSeriesProps({ gid, wsid, props: { connectNulls: !series.connectNulls } });
  }

  render() {
    const {
      gid, wsid, series, updateSeriesProps, updateSeries,
      selectSeries, selected, allGraphSeriesDef, allSeries,
    } = this.props;
    const disabled = isNil(gid) || isNil(wsid) || isNil(series);
    const name = path([wsid, 'name'], allSeries);
    const visible = (disabled) ? undefined : series.visible;
    const color = (disabled) ? undefined : series.color;
    const dashStyle = (disabled) ? undefined : series.dashStyle;
    const lineWidth = (disabled) ? undefined : series.lineWidth;

    const markerEnabled = (disabled) ? false : path(['marker', 'enabled'], series);
    const symbol = (disabled) ? undefined : path(['marker', 'symbol'], series);
    const markerLineColor = (disabled) ? undefined : path(['marker', 'lineColor'], series);
    const markerLineWidth = (disabled) ? undefined : path(['marker', 'lineWidth'], series);
    const markerRadius = (disabled) ? undefined : path(['marker', 'radius'], series);
    const connectNulls = (disabled) ? undefined : series.connectNulls;

    const yAxis = isNil(series) ? undefined : series.yAxis;

    return (
      <div>
        <TabHeader>
          SeriesOptions
        </TabHeader>
        <TabContainer>
          <FormGroup
            // helperText="Helper text with details..."
            label="Selected Series"
            inline={false}
          >
            <DropdownSeriesSelector
              label="Selected Series"
              inline={false}
              trim={10}
            />
          </FormGroup>

          <Divider />
          <FormGroup
            // helperText="Helper text with details..."
            label="Series Name"
          >
            <SeriesNameEditor
              key={name}
              wsid={wsid}
              disabled={disabled}
              name={name}
              updateSeries={updateSeries}
            />
          </FormGroup>

          <Divider />
          <Select
            gid={gid}
            wsid={wsid}
            disabled={disabled}
            label="Type"
            section="type"
            property={undefined}
            value={path(['type'], series)}
            options={SeriesType}
            handlePropsUpdate={this.handlePropsUpdate}
          />


          {/* Axis */}
          <YAxisSelector
            gid={gid}
            wsid={wsid}
            yAxis={yAxis}
            updateSeriesProps={updateSeriesProps}
          />

          <Switch
            disabled={disabled}
            checked={visible}
            label="Visible"
            onChange={this.handleVisbileChange}
          />
          {/* lineColor */}
          {/* lineWidth */}
          <StyledNumericValue
            label="Line Width"
            section="lineWidth"
            property={undefined}
            disabled={disabled}
            value={lineWidth}
            min={0}
            handlePropsUpdate={this.handlePropsUpdate}
          />

          {/* connectNulls */}
          <Switch
            disabled={disabled}
            checked={connectNulls}
            label="Connect NaN"
            onChange={this.handleConnectNullsChange}
          />

          <ColorEditor
            gid={gid}
            disabled={disabled}
            label="Color"
            value={color}
            section="color"
            property={undefined}
            handlePropsUpdate={this.handlePropsUpdate}
          />

          <Select
            gid={gid}
            wsid={wsid}
            disabled={disabled}
            label="Dash Style"
            section="dashStyle"
            property={undefined}
            value={dashStyle}
            options={dashStylesChoices.map((x) => [x, x])}
            handlePropsUpdate={this.handlePropsUpdate}
          />

          <Divider />
          {/* radius */}
          <h4>Marker</h4>
          {/* marker = {enabled, symbol, radius, fillColor, lineColor and lineWidth } */}
          <Switch
            disabled={disabled}
            checked={markerEnabled}
            label="Enable"
            onChange={this.handleEnableMarkerChange}
          />

          <Select
            gid={gid}
            wsid={wsid}
            disabled={disabled}
            label="Symbol"
            section="marker"
            property="symbol"
            value={symbol}
            options={SymbolOptions}
            handlePropsUpdate={this.handlePropsUpdate}
          />

          <ColorEditor
            gid={gid}
            disabled={disabled}
            label="Color"
            value={markerLineColor}
            section="marker"
            property="lineColor"
            handlePropsUpdate={this.handlePropsUpdate}
          />
          <StyledNumericValue
            label="Line Width"
            section="marker"
            property="lineWidth"
            disabled={disabled}
            value={markerLineWidth}
            min={0}
            handlePropsUpdate={this.handlePropsUpdate}
          />
          <StyledNumericValue
            label="Radius"
            section="marker"
            property="radius"
            disabled={disabled}
            value={markerRadius}
            min={0}
            handlePropsUpdate={this.handlePropsUpdate}
          />
          <Divider />

          <ColorEditor
            gid={gid}
            disabled={disabled}
            label="Negative Color"
            value={path(['negativeColor'], series)}
            section="negativeColor"
            property={undefined}
            handlePropsUpdate={this.handlePropsUpdate}
          />
          <Divider />
          <h5>Methods</h5>
          <SeriesMethods
            gid={gid}
            wsid={wsid}
            updateSeriesProps={this.handlePropsUpdate}
            series={series}
          />
        </TabContainer>
      </div>
    );
  }
}

SeriesOptions.defaultProps = {
  gid: undefined,
  wsid: undefined,
  series: undefined,
};

SeriesOptions.propTypes = {
  gid: types.string,
  wsid: types.string,
  series: SeriesDefinitionType,
  updateSeriesProps: types.func.isRequired, // update series in grapg definition
  updateSeries: types.func.isRequired, // update series definition
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
  updateSeries: updateSeriesAction,
  updateSeriesProps: updateSeriesPropsAction,
  selectSeries: selectSeriesAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SeriesOptions);
