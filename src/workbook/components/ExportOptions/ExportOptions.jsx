import React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  isNil, find, propEq, path, clone,
} from 'ramda';
import styled from 'styled-components';
import { Button, NumericInput, FormGroup, EditableText } from '@blueprintjs/core';
import {
  currentGraphGidSelector,
  currentGraphChartRefSelector,
  currentGraphExportOptionsSelector,
} from '../../../viewer/selectors/graph';
import { TabHeader, TabContainer } from '../CommonContainers';
import { exportGraphAction, saveGraphExportOptionsAction } from '../../../viewer/actions/graphActions';
import TypeSelector from './TypeSelector';


const ExportOptionsContainer = styled.div`
  // padding: 10px;
`;

const StyledNumericInput = styled(NumericInput)`
  max-width: 40px;
`;

class ExportOptions extends React.PureComponent {
  handleExport = () => this.props.exportGraph();

  handleTypeChange = (value) => {
    console.log('Type', value);
    const { gid, saveGraphExportOptions } = this.props;
    saveGraphExportOptions({ gid, opts: { type: value } });
  }


  handleScaleChange = (value) => {
    console.log('Scale', value);
    const { gid, saveGraphExportOptions } = this.props;
    saveGraphExportOptions({ gid, opts: { scale: value } });
  }

  handleHeightChange = (value) => {
    const { gid, saveGraphExportOptions } = this.props;
    saveGraphExportOptions({ gid, opts: { sourceHeight: value } });
  }

  handleWidthChange = (value) => {
    const { gid, saveGraphExportOptions } = this.props;
    saveGraphExportOptions({ gid, opts: { sourceWidth: value } });
  }

  handleFilenameChange = (value) => {
    const { gid, saveGraphExportOptions } = this.props;
    saveGraphExportOptions({ gid, opts: { filename: value } });
  }


  render() {
    const { gid, exportOptions } = this.props;
    const disabled = isNil(gid);
    return (
      <ExportOptionsContainer>
        <TabHeader>
          Export
        </TabHeader>

        <TabContainer>
          <TypeSelector
            gid={gid}
            disabled={disabled}
            value={exportOptions.type}
            handleChange={this.handleTypeChange}
          />
          <FormGroup
            label="Scale"
            // inline
          >
            <StyledNumericInput
              disabled={disabled}
              value={exportOptions.scale}
              onValueChange={this.handleScaleChange}
            />
          </FormGroup>
          <FormGroup
            label="Width"
          >
            <StyledNumericInput
              disabled={disabled}
              value={exportOptions.width}
              onValueChange={this.handleWidthChange}
            />
          </FormGroup>
          <FormGroup
            label="Height"
          >
            <StyledNumericInput
              disabled={disabled}
              value={exportOptions.height}
              onValueChange={this.handleHeightChange}
            />
          </FormGroup>
          <FormGroup
            label="Filename"
          >
            <EditableText
              disabled={disabled}
              placeholder="Filename..."
              value={exportOptions.filename}
              onChange={this.handleFilenameChange}
            />
          </FormGroup>
          <Button
            disabled={disabled}
            onClick={this.handleExport}
          >
            Export
          </Button>
        </TabContainer>
      </ExportOptionsContainer>
    );
  }
}

ExportOptions.defaultProps = {
  gid: undefined,
  chartRef: undefined,
  exportOptions: {
    type: 'image/png',
    scale: 1.0,
  },
};

ExportOptions.propTypes = {
  gid: types.string,
  chartRef: types.object,
  exportOptions: types.object,
  saveGraphExportOptions: types.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  gid: currentGraphGidSelector(state),
  chartRef: currentGraphChartRefSelector(state),
  exportOptions: currentGraphExportOptionsSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  saveGraphExportOptions: saveGraphExportOptionsAction,
  exportGraph: exportGraphAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExportOptions);
