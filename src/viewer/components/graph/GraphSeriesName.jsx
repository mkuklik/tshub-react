import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { updateSeriesPropsAction } from '../../actions/graphActions';
import GraphType from '../../types/Graph';
// import NameInterpolator from '../NameInterpolator';
// import { TimeseriesDetails } from '../../types/Timeseries';
import { SeriesType } from '../../types/Series';
import { seriesSelector } from '../../selectors/series';

class GraphSeriesName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.series.name, //graph.definition.series.find((x) => x.wsid === props.wsid).name,
      editing: false,
    };
  }

  handleEdit = () => {
    this.setState((state) => ({ editing: !state.editing }));
  }

  handleSave = () => {
    const { gid, wsid, updateSeries } = this.props;
    updateSeries({
      gid,
      wsid,
      props: { name: this.state.value },
    });
    this.setState({ editing: false });
  }

  handleCancelEdit = () => {
    const { graph, wsid } = this.props;
    this.setState({
      editing: false,
      value: graph.definition.series.find((x) => x.wsid === wsid).name,
    });
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') this.handleSave(e);
    else if (e.key === 'Escape') this.handleCancelEdit();
  }

  render() {
    const { wsid, graph } = this.props;
    const { editing, value } = this.state;
    const series = graph.definition.series.find((x) => x.wsid === wsid) || {};
    const { tsid } = series;

    if (editing) {
      return (
        <div className="ui action input transparent small">
          <input
            type="text"
            autoFocus
            value={value}
            onChange={this.handleChange}
            onKeyDown={this._handleKeyDown}
          />
          <button
            type="submit"
            className="ui icon button tiny"
            onClick={this.handleSave}>
            <i aria-hidden="true" className="tiny save icon" />
          </button>
        </div>

      );
    }

    // let interpolatedName;
    // if (timeseries[tsid] !== undefined) {
    //   interpolatedName = NameInterpolator(value, { ...timeseries[tsid] });
    // }
    // interpolatedName = interpolatedName || value;

    return (
      <>
        {value}
        <Icon
          name="edit"
          size="small"
          style={{ verticalAlign: 'middle', marginLeft: '5px' }}
          onClick={this.handleEdit}
        />
      </>
    );
  }
}

GraphSeriesName.defaultProps = {};

GraphSeriesName.propTypes = {
  gid: PropTypes.string.isRequired,
  wsid: PropTypes.string.isRequired,
  graph: GraphType.isRequired,
  series: SeriesType.isRequired,
  updateSeries: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  gid: state.graphs.currentGraphId,
  graph: state.graphs.objects[state.graphs.currentGraphId],
  series: seriesSelector(ownProps.wsid)(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateSeries: updateSeriesPropsAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GraphSeriesName);
