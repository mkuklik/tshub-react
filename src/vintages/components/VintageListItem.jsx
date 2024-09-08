import React from 'react';
import { isNil } from 'ramda';
import types from 'prop-types';
import {
  Collapse, Icon, Button,
} from '@blueprintjs/core';
import Moment from 'react-moment';
import { VintageType } from '../types/VintageTypes';
import {
  ErrorDivHeaderIcon, UploadItem, ItemHeader, MutedDiv,
} from './VintageListItem.Containers';


export default class VintageListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleErrorTray = () => this.setState((prev) => ({ isOpen: !prev.isOpen }));

  render() {
    const { item, handleAddToGraph } = this.props;
    const { isOpen } = this.state;

    return (
      <UploadItem key={item.uploadId}>
        <ItemHeader>
          <div>
            {isOpen && <ErrorDivHeaderIcon icon="caret-down" onClick={this.handleErrorTray} />}
            {!isOpen && <ErrorDivHeaderIcon icon="caret-right" onClick={this.handleErrorTray} />}
            <span>
              {item.name}
              <span style={{ marginLeft: '10px' }}>
                <Icon
                  icon="plus"
                  iconSize={14}
                  onClick={handleAddToGraph(item.realtime, item.name)}
                />
              </span>
            </span>
          </div>
          <span>{item.description}</span>
          {!isNil(item.realtime) && <Moment fromNow utc date={item.realtime} />}
          {isNil(item.realtime) && <span />}
        </ItemHeader>
        <Collapse isOpen={isOpen}>
          <MutedDiv>{`Vintage ID: ${item.vid}`}</MutedDiv>
        </Collapse>
      </UploadItem>
    );
  }
}

VintageListItem.propTypes = {
  item: VintageType.isRequired,
  handleAddToGraph: types.func.isRequired,
};
