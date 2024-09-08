import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { addExprSeriesToGraphAction } from '../../actions/graphActions';
import GraphSeriesEditor from './GraphSeriesEditor';

/*

*/
class GraphAddTimeseriesEditor extends React.PureComponent {

  handleAddSeries = ({ expr }) => {
    this.props.addExprSeriesToGraph({ expr });
  };

  render() {
    return (
      <GraphSeriesEditor initValue="$GNP.macro.richa2" submit={this.handleAddSeries} />
    );
  }
}

GraphAddTimeseriesEditor.defaultProps = {};

GraphAddTimeseriesEditor.propTypes = {
  addExprSeriesToGraph: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  gid: state.graphs.currentGraphId,
  graph: state.graphs.objects[state.graphs.currentGraphId],
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addExprSeriesToGraph: addExprSeriesToGraphAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GraphAddTimeseriesEditor);
