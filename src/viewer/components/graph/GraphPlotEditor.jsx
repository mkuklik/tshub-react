import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Header, Icon, Image, Menu, Segment, Sidebar, Button } from 'semantic-ui-react';
import {
  updateGraphTitle
} from '../../actions/graphActions';


class GraphPlotEditor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  handleTitleChange = (e, data) => this.updateGraphTitle()

  render() {
    const { visible, setVisible } = this.props;

    /*
    chart size
      width: auto/px, height

    font family

    title, 
      - font size, font type, Bold, Italic, font color 
    subtitle
      - font size, font type, Bold, Italic, font color 

    */

    return (
      <React.Fragment>
        <Input onChange={this.handleTitleChange} />
      </React.Fragment>
    )
  }
}


GraphPlotEditor.defaultProps = {};

GraphPlotEditor.propTypes = {
};

const mapStateToProps = state => ({
  gid: state.graphs.currentGraphId,
  graph: state.graphs.objects[state.graphs.currentGraphId]
});

const mapDispatchToProps = (dispatch, getState) => bindActionCreators({
  updateGraphTitle,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GraphPlotEditor);

