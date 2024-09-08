import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Header, Icon, Image, Menu, Segment, Sidebar, Button } from 'semantic-ui-react';
import {
  updateGraphTitle
} from '../../actions/graphActions';


class GraphEditSidebar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  setVisible = (x) => this.setState({ visible: x });

  handleVisibilityChange = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }));

  handleTitleChange = (e, data) => this.updateGraphTitle()

  render() {
    const { visible, setVisible } = this.state; //useBooleanKnob({ name: 'visible' })
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Segment}
          animation='scale down' // "scale down", 
          icon='labeled'
          onHide={() => this.setVisible(false)}
          vertical
          visible={visible}
          width='thin'
        >
          <input name="title" value="" onChange={this.handleTitleChange} />
        </Sidebar>

        <Button onClick={this.handleVisibilityChange}>Edit</Button>
        <Sidebar.Pusher dimmed={visible}>
          {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}


GraphEditSidebar.defaultProps = {};

GraphEditSidebar.propTypes = {};

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, getState) => bindActionCreators({
  updateGraphTitle,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GraphEditSidebar);

