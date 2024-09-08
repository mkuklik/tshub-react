import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Segment, Icon, Divider } from 'semantic-ui-react';
import GraphSeriesSelector from './GraphSeriesSelector';


class GraphSeriesSelectorAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleToggle = () => {
    this.setState((previous) => ({ visible: !previous.visible }));
  }

  render() {
    const { visible } = this.state;
    return (
      <>
        <Segment basic size="small" onClick={this.handleToggle} style={{ marginBottom: 0 }}>
          {(!visible) && <Icon name="caret right" />}
          {(visible) && <Icon name="caret down" />}
          Graph options
        </Segment>
        {visible && (<GraphSeriesSelector />)}
        <Divider />
      </>
    );
  }
}


GraphSeriesSelectorAccordion.defaultProps = {};

GraphSeriesSelectorAccordion.propTypes = {};

const mapStateToProps = (state, ownProps) => ({

});
const mapDispatchToProps = (dispatch, getState) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GraphSeriesSelectorAccordion);
