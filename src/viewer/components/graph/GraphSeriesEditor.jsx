import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup } from '@blueprintjs/core';


class GraphSeriesEditor extends React.PureComponent {
  constructor(props) {
    super(props);
    const { initValue } = this.props;
    this.state = {
      value: initValue,
    };
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (this.state.value) this.props.submit({ expr: this.state.value });
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    const { value } = this.state;

    return (
      <>
        <FormGroup
          helperText="Type the expression and press enter"
          label="Add Series"
          labelFor="eq-input"
          // labelInfo="(required)"
        >
          <InputGroup
            id="eq-input"
            value={value}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder="e.g. ln($gdp.fredmdf.public)"
          />
        </FormGroup>
      </>
    );
  }
}


GraphSeriesEditor.defaultProps = {
  initValue: '',
};

GraphSeriesEditor.propTypes = {
  initValue: PropTypes.string,
  submit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  gid: state.graphs.currentGraphId,
  graph: state.graphs.objects[state.graphs.currentGraphId],
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GraphSeriesEditor);
