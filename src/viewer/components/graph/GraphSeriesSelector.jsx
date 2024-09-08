/* eslint-disable max-classes-per-file */
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { any as Rany, isNil } from 'ramda';
import { Table } from 'semantic-ui-react';
import { Button, Icon } from '@blueprintjs/core';
import {
  removeSeriesAction,
  reorderSeriesAction,
  updateSeriesPropsAction,
  selectSeriesAction,
} from '../../actions/graphActions';

import GraphSeriesName from './GraphSeriesName';

import { GraphType, SeriesDefinitionType } from '../../types/Graph';
import { SeriesType } from '../../types/Series';
import {
  currentGraphGidSelector,
  currentGraphSeriesDefSelector,
  currentGraphSelector,
} from '../../selectors/graph';
import { resolvedSeriesListSelector } from '../../selectors/series';
import GraphSeriesLineStyleSelector from './GraphSeriesLineStyleSelector';

const divider = (
  <span style={{ opacity: '50%', marginRight: '5px', marginLeft: '5px' }}>
    |
  </span>
);

class SeriesVisibility extends React.PureComponent {
  handleShow = () => this.props.updateSeriesProps({
    gid: this.props.gid,
    wsid: this.props.wsid,
    props: { visible: true },
  });

  handleHide = () => this.props.updateSeriesProps({
    gid: this.props.gid,
    wsid: this.props.wsid,
    props: { visible: false },
  });

  render() {
    const { visible } = this.props;
    return (
      <>
        {visible && (
          <Button onClick={this.handleHide} minimal>
            <Icon icon="eye-on" />
          </Button>
        )}
        {!visible && (
          <Button onClick={this.handleShow} minimal>
            <Icon icon="eye-off" />
          </Button>
        )}
      </>
    );
  }
}

class GraphSeriesSelector extends React.Component {
  handleSelect = (wsid) => () => this.props.selectSeries({ gid: this.props.gid, wsid });

  handleRemove = (wsid) => () => {
    this.props.removeSeries({ gid: this.props.gid, wsid });
  };

  handleChangeOrder = (wsid, pos) => () => this.props.reorderSeries({ gid: this.props.gid, wsid, pos });

  renderRow = (x, i, n, realized, hasErrors) => {
    const { wsid, visible } = x;

    const indicator = (
      <div
        style={{
          display: 'inline-block',
          background: x.color,
          height: '15px',
          width: '15px',
          verticalAlign: 'sub',
          marginRight: '5px',
        }}
      />
    );
    return (
      <Table.Row key={wsid}>
        <Table.Cell style={{ paddingLeft: '10px', paddingRight: '10px' }}>
          {indicator}
          <GraphSeriesName
            wsid={wsid}
            key={isNil(realized) ? null : realized.name}
          />
          {hasErrors && <Icon icon="error" color="red" />}
        </Table.Cell>
        <Table.Cell style={{ paddingLeft: '10px', paddingRight: '10px' }}>
          {(realized && realized.expr) || null}
          {' '}
          (
          {wsid}
          )
        </Table.Cell>
        <Table.Cell textAlign="right">
          <SeriesVisibility
            gid={this.props.gid}
            wsid={wsid}
            visible={visible}
            updateSeriesProps={this.props.updateSeriesProps}
          />
          {divider}
          <GraphSeriesLineStyleSelector wsid={x.wsid} />
          {divider}
          <Button
            disabled={i <= 0}
            onClick={this.handleChangeOrder(wsid, i - 1)}
            minimal
          >
            <Icon icon="circle-arrow-up" />
          </Button>
          {divider}
          <Button
            disabled={i >= n - 1}
            onClick={this.handleChangeOrder(wsid, i + 1)}
            minimal
          >
            <Icon icon="circle-arrow-down" />
          </Button>
          {divider}
          <Button onClick={this.handleRemove(x.wsid)} minimal>
            <Icon icon="small-cross" />
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  };

  render() {
    const { graph, seriesDef, realizedSeries } = this.props;

    let rows = null;
    if (!isNil(graph)) {
      const n = seriesDef.length;
      rows = seriesDef.map((x, i) => this.renderRow(
        x,
        i,
        n,
        realizedSeries[x.wsid],
        Rany((e) => e.wsid === x.wsid, graph.errors),
      ));
    }

    return (
      <Table
        selectable
        basic="very"
        size="small"
        style={{ marginTop: 0, marginBottom: 0 }}
      >
        <Table.Body>{rows}</Table.Body>
      </Table>
    );
  }
}

GraphSeriesSelector.defaultProps = {};

GraphSeriesSelector.propTypes = {
  gid: PropTypes.string,
  graph: GraphType,
  seriesDef: PropTypes.arrayOf(SeriesDefinitionType).isRequired,
  realizedSeries: PropTypes.objectOf(SeriesType).isRequired,
};

const mapStateToProps = (state) => ({
  gid: currentGraphGidSelector(state),
  seriesDef: currentGraphSeriesDefSelector(state),
  realizedSeries: resolvedSeriesListSelector(state),
  graph: currentGraphSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    selectSeries: selectSeriesAction,
    removeSeries: removeSeriesAction,
    reorderSeries: reorderSeriesAction,
    updateSeriesProps: updateSeriesPropsAction,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphSeriesSelector);
