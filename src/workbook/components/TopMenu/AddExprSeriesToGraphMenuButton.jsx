import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import types from 'prop-types';
import styled from 'styled-components';
import { isNil } from 'ramda';
import {
  AnchorButton,
  Button,
  Popover,
  Position,
  Icon,
  InputGroup,
  Tooltip,
} from '@blueprintjs/core';
import { addExprSeriesToGraphAction } from '../../../viewer/actions/graphActions';
import {
  currentGraphGidSelector,
} from '../../../viewer/selectors/graph';

const Container = styled.div`
  padding: 10px;
`;

class AddExprSeriesToGraphMenuButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expr: '',
    };
  }

  handleChange = (event) => this.setState({ expr: event.target.value })

  handleConfirm = () => {
    const { addExprSeriesToGraph } = this.props;
    const { expr } = this.state;
    addExprSeriesToGraph({ expr });
  }

  handleKeypress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleConfirm();
    }
  }

  render() {
    const { expr } = this.state;
    const disabled = isNil(this.props.gid);
    const menu = (
      <Container>
        <InputGroup
          autoFocus
          disabled={disabled}
          leftelement={<Icon icon="function" />}
          onChange={this.handleChange}
          onKeyPress={this.handleKeypress}
          placeholder="Enter expression"
          rightElement={<Button icon="arrow-right" onClick={this.handleConfirm} />}
          small
          value={expr}
        />
      </Container>
    );
    return (
      <Popover content={menu} position={Position.BOTTOM}>
        <Tooltip
          content="Add series using expression"
          position={Position.BOTTOM}
          hoverOpenDelay={1000}
        >
          <AnchorButton
            icon="series-add"
            disabled={disabled}
          />
        </Tooltip>
      </Popover>
    );
  }
}

AddExprSeriesToGraphMenuButton.defaultProps = {
  gid: undefined,
};

AddExprSeriesToGraphMenuButton.propTypes = {
  addExprSeriesToGraph: types.func.isRequired,
  gid: types.string,
};

const mapStateToProps = (state) => ({
  gid: currentGraphGidSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    addExprSeriesToGraph: addExprSeriesToGraphAction,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(AddExprSeriesToGraphMenuButton);
