import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Divider, Checkbox,
} from 'semantic-ui-react';
import {
  updateGraphTitle,
} from '../../actions/graphActions';


class GraphLegendEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  handleTitleChange = (e, data) => this.updateGraphTitle()

  render() {
    const { visible, setVisible } = this.props;

    /*
    Placement
    - Horizontal alignment
    - Horizontal offset
    - Vertical alignment
    - Vertical offset	0
    - Float on top of plot area	T/F

    Appearance
    - Text style
    - Background color: auto
    - Border width: 0
    - Border corner radius: 0
    - Border color: #99999

    */

    handleChange = (payload) => () => this.props.updateLegend(payload);

    if (this.props.graph.legend === undefined || this.props.graph.legend === null) return null;

    return (
      <>
        <Divider>Legend</Divider>
        <Checkbox label="enabled" checked={this.props.graph.legend} onChange={this.handleChange({ enabled: this.props.graph.legend.enabled })} />

      </>
    );
  }
}


GraphLegendEditor.defaultProps = {};

GraphLegendEditor.propTypes = {
};

const mapStateToProps = (state) => ({
  gid: state.graphs.currentGraphId,
  graph: state.graphs.objects[state.graphs.currentGraphId],
});

const mapDispatchToProps = (dispatch, getState) => bindActionCreators({
  updateGraphTitle,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GraphLegendEditor);
