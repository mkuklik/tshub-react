import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import { updateSeriesPropsAction as updateSeries } from '../../actions/graphActions';
import { GraphType } from '../../types/Graph';

const dashStyles = [
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

class GraphSeriesLineStyleSelector extends React.Component {
  handleSelect = (dashStyle) => () => {
    const { gid, wsid, updateSeries } = this.props;
    updateSeries({
      gid,
      wsid,
      props: { dashStyle },
    });
  }

  render() {
    const { graph, wsid } = this.props;
    const series = graph.definition.series.find((x) => x.wsid === wsid) || {};
    return (
      <Dropdown text={series.dashStyle} size="small">
        <Dropdown.Menu>
          {dashStyles.map((x) => <Dropdown.Item key={x} text={x} selected={x === series.dashstyle} onClick={this.handleSelect(x)} />)}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

GraphSeriesLineStyleSelector.defaultProps = {};

GraphSeriesLineStyleSelector.propTypes = {
  gid: PropTypes.string.isRequired,
  wsid: PropTypes.string.isRequired,
  graph: GraphType.isRequired,
  updateSeries: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  gid: state.graphs.currentGraphId,
  graph: state.graphs.objects[state.graphs.currentGraphId],
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateSeries,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GraphSeriesLineStyleSelector);
