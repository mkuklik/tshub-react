import * as React from 'react';
import types from 'prop-types';
import styled from 'styled-components';
import { isNil } from 'ramda';
import {
  Alignment, Button, TextArea, NavbarDivider, NavbarHeading, Divider,
} from '@blueprintjs/core';
import ColorIndicator from './ColorIndicator';
import { StyledNavbarGroup, StyledNavbar } from './common';

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
`;


const StyledErrorMessageSpan = styled.div`
  color: red;
`;

const ErrorMessage = (props) => (
  <>
    <StyledErrorMessageSpan>
      {props.children}
    </StyledErrorMessageSpan>
    <Divider />
  </>
);


class SeriesEditor extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expr: props.expr || '',
    };
  }

  handleChange = (event) => this.setState({ expr: event.target.value })

  keyPressed = (event) => {
    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault();
      this.setState((prevState) => ({ expr: `${prevState.expr}\n` }));
    }
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.handleConfirm();
    }
  }

  handleConfirm = () => {
    const { confirmExprFuncEditor, gid, wsid } = this.props;
    const { expr } = this.state;
    confirmExprFuncEditor({ gid, wsid, expr });
  }

  render() {
    const {
      closeFuncEditor, wsid, name, color, height, className, style, errors,
    } = this.props;
    const { expr } = this.state;
    const intent = (errors.length > 0) ? 'danger' : 'primary'; // 'none'
    return (
      <ContentContainer className={className} style={style}>
        <StyledNavbar>
          <StyledNavbarGroup align={Alignment.LEFT}>
            <Button minimal icon="arrow-left" onClick={closeFuncEditor} />
            <NavbarDivider />
            { isNil(wsid)
              && <NavbarHeading>Add New Series</NavbarHeading>}
            { !isNil(wsid)
              && [
                <Button minimal><ColorIndicator color={color} /></Button>,
                <NavbarHeading>{name}</NavbarHeading>,
              ]}
          </StyledNavbarGroup>
          <StyledNavbarGroup align={Alignment.RIGHT}>
            <Button
              minimal
              intent="primary"
              text="Confirm"
              onClick={this.handleConfirm}
            />
          </StyledNavbarGroup>
        </StyledNavbar>

        <TextArea
          style={{ height: height - 60, resize: 'none' }}
          intent={intent}
          fill
          onChange={this.handleChange}
          onKeyPress={this.keyPressed}
          value={expr}
          placeholder="Enter the expression"
        />
        <StyledNavbar>
          <StyledNavbarGroup align={Alignment.LEFT}>
            {errors.map((txt) => <ErrorMessage key={txt}>{txt}</ErrorMessage>)}
          </StyledNavbarGroup>
          {/* <StyledNavbarGroup align={Alignment.RIGHT}>
            <Button minimal intent="primary" text="Confirm" onClick={this.handleConfirm} />
          </StyledNavbarGroup> */}
        </StyledNavbar>

      </ContentContainer>
    );
  }
}

SeriesEditor.defaultProps = {
  color: null,
  name: '',
  expr: '',
  gid: undefined,
  wsid: undefined,
  errors: [],
};

SeriesEditor.propTypes = {
  color: types.string,
  name: types.string,
  expr: types.string,
  gid: types.string,
  wsid: types.string,
  errors: types.arrayOf(types.string),
  height: types.number.isRequired,
  closeFuncEditor: types.func.isRequired,
  confirmExprFuncEditor: types.func.isRequired,
};

export default SeriesEditor;
