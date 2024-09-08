import React from 'react';
import types from 'prop-types';
import { path, isNil } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { Switch, Divider } from '@blueprintjs/core';
import { updateGraphPropsAction } from '../../../viewer/actions/graphActions';
import { currentGraphDefSelector, currentGraphGidSelector } from '../../../viewer/selectors/graph';
import { StyleType } from '../../../viewer/types/Graph';
import StyleEditor from '../Style/StyleEditor';
import ColorEditor from './ColorEditor';
import Select from './Select';
import TextEditor from './TextEditor';
import { GraphProcessingStage } from '../../../viewer/sagas/graph.constants';

const Container = styled.div`
  padding: 10px;
`;

class LegendOptions extends React.Component {
  handleEnable = (event) => {
    const {
      gid, updateGraphProps, enabled,
    } = this.props;
    if (!isNil(gid)) {
      updateGraphProps({ gid, props: { legend: { enabled: !enabled } } });
    }
  }

  handlePropsUpdate = (props) => {
    const {
      gid, updateGraphProps,
    } = this.props;
    updateGraphProps({ gid, props });
  }

  handleStyleUpdate = (style) => {
    const { gid, updateGraphProps } = this.props;
    updateGraphProps({
      gid,
      props: { legend: { title: { style } } },
      stage: GraphProcessingStage.GENERATE,
    });
  }

  handleTitleUpdate = (text) => {
    const { gid, updateGraphProps } = this.props;
    if (!isNil(gid)) {
      updateGraphProps({
        gid,
        props: { legend: { title: { text } } },
        stage: GraphProcessingStage.GENERATE,
      });
    }
  }

  render() {
    const {
      gid,
      updateGraphProps,
      enabled,
      layout,
      align,
      verticalAlign,
      titleText,
      titleStyle,
      backgroundColor,
    } = this.props;

    const disabled = isNil(gid) || !enabled;
    return (
      <Container>
        <Switch
          key={enabled}
          disabled={isNil(gid)}
          checked={enabled}
          label="Enabled"
          onChange={this.handleEnable}
        />
        <Select
          gid={gid}
          disabled={disabled}
          label="Layout"
          section="legend"
          property="layout"
          value={layout}
          options={[['Horizontal', 'horizontal'], ['Vertical', 'vertical'], ['Proximate', 'proximate']]}
          handlePropsUpdate={this.handlePropsUpdate}
        />
        <Select
          gid={gid}
          disabled={disabled}
          label="Horizontal Alignment"
          section="legend"
          property="align"
          value={align}
          options={[['Left', 'left'], ['Center', 'center'], ['Right', 'right']]}
          handlePropsUpdate={this.handlePropsUpdate}
        />
        <Select
          gid={gid}
          disabled={disabled}
          label="Vertical Alignment"
          section="legend"
          property="verticalAlign"
          value={verticalAlign}
          options={[['Top', 'top'], ['Middle', 'middle'], ['Bottom', 'bottom']]}
          handlePropsUpdate={this.handlePropsUpdate}
        />
        <Divider />
        <TextEditor
          disabled={disabled}
          value={titleText}
          label="Title"
          handleUpdate={this.handleTitleUpdate}
        />
        <StyleEditor
          disabled={disabled}
          label="Style"
          style={titleStyle}
          updateStyle={this.handleStyleUpdate}
          makeProps={(value) => ({ legend: { title: { style: value } } })}
        />
        <Divider />
        <ColorEditor
          gid={gid}
          disabled={disabled}
          label="Background color"
          value={backgroundColor}
          section="legend"
          property="backgroundColor"
          handlePropsUpdate={this.handlePropsUpdate}
        />

        {/*  or  or proximate.
          <StyleEditor
            gid={gid}
            label="Style"
            value={titleStyle}
            section="title"
            property="style"
            updateGraphProps={updateGraphProps}
          />
          <Select
            gid={gid}
            label="Horizontal Alignment"
            section="title"
            property="align"
            value={titleAlign}
            options={[['left', 'Left'], ['center', 'Center'], ['right', 'Right']]}
            updateGraphProps={updateGraphProps}
          />
          <Select
            gid={gid}
            label="Vertical Alignment"
            section="title"
            property="verticalAlign"
            value={titleVerticalAlign}
            options={[['top', 'Top'], ['middle', 'Middle'], ['bottom', 'Bottom']]}
            updateGraphProps={updateGraphProps}
          />
        </TabContainer> */}
      </Container>
    );
  }
}


LegendOptions.defaultProps = {
  gid: undefined,
  enabled: undefined,
  layout: undefined,
  align: undefined,
  verticalAlign: undefined,
  titleText: undefined,
  backgroundColor: undefined,
};

LegendOptions.propTypes = {
  gid: types.string,
  enabled: types.bool,
  layout: types.string,
  align: types.string,
  verticalAlign: types.string,
  titleText: types.string,
  titleStyle: StyleType,
  backgroundColor: types.string,
  updateGraphProps: types.func.isRequired,
};


const mapStateToProps = (state) => {
  const graph = currentGraphDefSelector(state);
  return ({
    gid: currentGraphGidSelector(state),
    // graph,
    enabled: path(['legend', 'enabled'], graph),
    layout: path(['legend', 'layout'], graph),
    align: path(['legend', 'align'], graph),
    verticalAlign: path(['legend', 'verticalAlign'], graph),
    titleText: path(['legend', 'title', 'text'], graph),
    titleStyle: path(['legend', 'title', 'style'], graph),
    backgroundColor: path(['legend', 'backgroundColor'], graph),
  });
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateGraphProps: updateGraphPropsAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LegendOptions);
