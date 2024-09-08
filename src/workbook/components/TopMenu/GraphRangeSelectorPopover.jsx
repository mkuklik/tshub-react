import React from 'react';
import styled from 'styled-components';
import types from 'prop-types';
import {
  Position, Button, Popover, PopoverInteractionKind, Classes,
} from '@blueprintjs/core';
import { connect } from 'react-redux';
import { isNil } from 'ramda';
import GraphRangeSelectorContainer from '../../../viewer/components/graph/GraphRangeSelectorContainer';
import { currentGraphGidSelector } from '../../../viewer/selectors/graph';


const ContentContainer = styled.div`
  padding: 5px;
`;

const TargetContainer = styled.div`
  margin-left: 3px;
`;


class GraphRangeSelectorPopover extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleInteraction = (nextOpenState) => {
    this.setState({ isOpen: nextOpenState });
  }

  render() {
    const { gid } = this.props;
    const isDisabled = isNil(gid);

    return (
      <Popover
        disabled={isDisabled}
        content={(
          <ContentContainer>
            <GraphRangeSelectorContainer afterClick={() => this.handleInteraction(false)} />
          </ContentContainer>
        )}
        position={Position.BOTTOM}
        interactionKind={PopoverInteractionKind.CLICK_TARGET_ONLY}
        preventOverflow
        className={Classes.POPOVER_DISMISS}
        isOpen={this.state.isOpen}
        onInteraction={(state) => this.handleInteraction(state)}
      >
        <TargetContainer>
          <Button disabled={isDisabled} text="Range" />
        </TargetContainer>
      </Popover>
    );
  }
}


GraphRangeSelectorPopover.defaultProps = {
  gid: undefined,
};

GraphRangeSelectorPopover.propTypes = {
  gid: types.string,
};

const mapStateToProps = (state, ownProps) => ({
  gid: currentGraphGidSelector(state),
});

export default connect(mapStateToProps, undefined)(GraphRangeSelectorPopover);
