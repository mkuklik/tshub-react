import React from 'react';
import types from 'prop-types';
import {
  isNil, path, mergeDeepRight,
} from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import {
  EditableText, FormGroup, HTMLSelect, Switch,
} from '@blueprintjs/core';
import { updateGraphPropsAction } from '../../../viewer/actions/graphActions';
import TextEditor from './TextEditor';
import { currentGraphDefSelector, currentGraphGidSelector } from '../../../viewer/selectors/graph';
import StyleEditor from '../Style/StyleEditor';
import Select from './Select';
import { GraphProcessingStage } from '../../../viewer/sagas/graph.constants';
import { YAxisArrayType } from '../../../viewer/types/Graph';

const Container = styled.div`
  padding: 10px;
`;

const AxisContainer = styled.div`
  margin-top: 10px;
`;

class YAxisOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      iaxis: 0,
    };
  }

  handleYAxisSelect = (event) => this.setState({ iaxis: event.target.value })

  handlePropsUpdate = (props) => {
    const { gid, updateGraphProps } = this.props;
    updateGraphProps({ gid, props });
  }

  handleTitleUpdate = (value) => {
    const { gid, yAxis, updateGraphProps } = this.props;
    const { iaxis } = this.state;
    if (!isNil(gid)) {
      const updatedAxis = mergeDeepRight(yAxis[iaxis], { title: { text: value } });
      updateGraphProps({
        gid,
        props: { yAxis: yAxis.map((x, i) => ((String(i) === String(iaxis)) ? updatedAxis : x)) },
        stage: GraphProcessingStage.GENERATE,
      });
    }
  }

  
  handlePropertyUpdate = (property) => (value) => {
    const { gid, yAxis, updateGraphProps } = this.props;
    const { iaxis } = this.state;
    if (!isNil(gid)) {
      const updatedAxis = mergeDeepRight(yAxis[iaxis], { [property]: value });
      updateGraphProps({
        gid,
        props: { yAxis: yAxis.map((x, i) => ((String(i) === String(iaxis)) ? updatedAxis : x)) },
        stage: GraphProcessingStage.GENERATE,
      });
    }
  }

  handleSwitchBoolPropertyUpdate = (property) => (event) => {
    const { gid, yAxis, updateGraphProps } = this.props;
    const { iaxis } = this.state;
    if (!isNil(gid)) {
      const updatedAxis = mergeDeepRight(yAxis[iaxis], { [property]: event.target.value === 'on' });
      updateGraphProps({
        gid,
        props: { yAxis: yAxis.map((x, i) => ((String(i) === String(iaxis)) ? updatedAxis : x)) },
        stage: GraphProcessingStage.GENERATE,
      });
    }
  }

  handleStyleUpdate = (style) => {
    const { gid, yAxis, updateGraphProps } = this.props;
    const { iaxis } = this.state;
    if (!isNil(gid)) {
      const updatedAxis = mergeDeepRight(yAxis[iaxis], { title: { style } });
      updateGraphProps({
        gid,
        props: { yAxis: yAxis.map((x, i) => ((String(i) === String(iaxis)) ? updatedAxis : x)) },
        stage: GraphProcessingStage.GENERATE,
      }); 
    }
  }

  handleOppositeChange = () => {
    const { gid, updateGraphProps, yAxis } = this.props;
    const { iaxis } = this.state;
    updateGraphProps({ gid, props: { yAxis: "TODO" } });
  }

  render() {
    const {
      gid,
      yAxis,
    } = this.props;
    const { iaxis } = this.state;
    const disabled = isNil(gid);
    const title = path([iaxis, 'title', 'text'], yAxis);
    const titleStyle = path([iaxis, 'title', 'style'], yAxis);
    return (
      <Container>
        <p>add/remove y-axis</p>
        {/*
          visible
          min, max
          soft min, soft max, floor/ceiling
          align
          margin
          offset
          x
          y
          Show Empty	
          Show First Label	
          Show Last Label	
        */}
        <FormGroup
          // helperText="Helper text with details..."
          label="Select Axis"
        >
          <HTMLSelect
            disabled={disabled}
            onChange={this.handleYAxisSelect}
            value={iaxis}
            options={[0, 1]}
          />
        </FormGroup>
        <AxisContainer>
          <Switch
            // key={iaxis}
            disabled={disabled}
            checked={path([iaxis, 'Visible'], yAxis)}
            label="Visible"
            onChange={this.handleSwitchBoolPropertyUpdate('visible')}
          />
          <Switch
            // key={iaxis}
            disabled={disabled || iaxis < 2}
            checked={path([iaxis, 'opposite'], yAxis)}
            label="Opposite side"
            onChange={this.handleOppositeChange}
          />
          <TextEditor
            key={iaxis}
            disabled={disabled}
            value={title}
            label="Text"
            handleUpdate={this.handleTitleUpdate}
          />
          <StyleEditor
            // key={iaxis}
            disabled={disabled}
            label="Style"
            style={titleStyle}
            updateStyle={this.handleStyleUpdate}
          />
        </AxisContainer>
        {/* <Select
          gid={gid}
          disabled={disabled}
          label="Horizontal Alignment"
          section={section}
          property="align"
          value={titleAlign}
          options={[['Left', 'left'], ['Center', 'center'], ['Right', 'right']]}
          handlePropsUpdate={this.handlePropsUpdate}
        />
        <Select
          gid={gid}
          disabled={disabled}
          label="Vertical Alignment"
          section={section}
          property="verticalAlign"
          value={titleVerticalAlign}
          options={[['Top', 'top'], ['Middle', 'middle'], ['Bottom', 'bottom']]}
          handlePropsUpdate={this.handlePropsUpdate}
        /> */}
      </Container>
    );
  }
}


YAxisOptions.defaultProps = {
  gid: undefined,
  yAxis: {},
};

YAxisOptions.propTypes = {
  gid: types.string,
  yAxis: YAxisArrayType,
  updateGraphProps: types.func.isRequired,
};


const mapStateToProps = (state, ownProps) => {
  const graph = currentGraphDefSelector(state);
  return ({
    gid: currentGraphGidSelector(state),
    yAxis: path(['yAxis'], graph),
    // title: path([ownProps.section, 'text'], graph),
    // titleAlign: path([ownProps.section, 'align'], graph),
    // titleVerticalAlign: path([ownProps.section, 'verticalAlign'], graph),
    // titleStyle: path([ownProps.section, 'style'], graph),
  });
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateGraphProps: updateGraphPropsAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(YAxisOptions);
