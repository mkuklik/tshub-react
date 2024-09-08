import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
} from '../../actions/graphActions';


class GraphAxisEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  handleTitleChange = (e, data) => this.updateGraphTitle()

  render() {
    const { visible, setVisible } = this.props;

    /*
    style (font type, size, boold, italic, color)
    axis type: linear, log, datetime, category
    reversed side: T/F
    reversed direction
    */

    return (
      <>
        <input onChange={this.handleTitleChange} />
      </>
    );
  }
}


GraphAxisEditor.defaultProps = {
  i: 0,
};

GraphAxisEditor.propTypes = {
  type: PropTypes.string(['x', 'y']),
  i: PropTypes.number,
};

const mapStateToProps = (state) => ({
  gid: state.graphs.currentGraphId,
  graph: state.graphs.objects[state.graphs.currentGraphId],
});

const mapDispatchToProps = (dispatch, getState) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GraphAxisEditor);
