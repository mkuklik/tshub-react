import React from 'react';
import types from 'prop-types';
import {
  isNil, path, find, propEq,
} from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { updateGraphPropsAction } from '../../../viewer/actions/graphActions';
import TextEditor from './TextEditor';
import { currentGraphDefSelector, currentGraphGidSelector } from '../../../viewer/selectors/graph';
import StyleEditor from '../Style/StyleEditor';
import Select from './Select';
import { GraphProcessingStage } from '../../../viewer/sagas/graph.constants';

const Container = styled.div`
  padding: 10px;
`;

class TitleOptions extends React.PureComponent {
  handlePropsUpdate = (props) => {
    const { gid, updateGraphProps } = this.props;
    updateGraphProps({ gid, props });
  }

  handleTextUpdate = (text) => {
    const { gid, section, updateGraphProps } = this.props;
    updateGraphProps({
      gid,
      props: { [section]: { text } },
      stage: GraphProcessingStage.GENERATE,
    });
  }

  handleStyleUpdate = (style) => {
    const { gid, section, updateGraphProps } = this.props;
    updateGraphProps({
      gid,
      props: { [section]: { style } },
      stage: GraphProcessingStage.GENERATE,
    });
  }

  render() {
    const {
      gid,
      section,
      updateGraphProps,
      title,
      titleVerticalAlign,
      titleAlign,
      titleStyle,
    } = this.props;

    const disabled = isNil(gid);
    return (
      <Container>
        <TextEditor
          key={title}
          // gid={gid}
          disabled={disabled}
          value={title}
          // section={section}
          // property="text"
          label="Text"
          // updateGraphProps={updateGraphProps}
          handleUpdate={this.handleTextUpdate}
        />
        <StyleEditor
          disabled={disabled}
          label="Style"
          style={titleStyle}
          updateStyle={this.handleStyleUpdate}
        />
        <Select
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
        />
      </Container>
    );
  }
}


TitleOptions.defaultProps = {
  gid: undefined,
  title: undefined,
  titleAlign: undefined,
  titleStyle: undefined,
  titleVerticalAlign: undefined,
};

TitleOptions.propTypes = {
  section: types.string.isRequired,
  //
  gid: types.string,
  updateGraphProps: types.func.isRequired,
  title: types.string,
  titleVerticalAlign: types.string,
  titleAlign: types.string,
  titleStyle: types.string,
};


const mapStateToProps = (state, ownProps) => {
  const graph = currentGraphDefSelector(state);
  return ({
    gid: currentGraphGidSelector(state),
    title: path([ownProps.section, 'text'], graph),
    titleAlign: path([ownProps.section, 'align'], graph),
    titleVerticalAlign: path([ownProps.section, 'verticalAlign'], graph),
    titleStyle: path([ownProps.section, 'style'], graph),
  });
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateGraphProps: updateGraphPropsAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TitleOptions);
