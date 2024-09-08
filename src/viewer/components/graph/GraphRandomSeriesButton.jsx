import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import * as R from 'ramda';
import { Button } from '@blueprintjs/core';
import { addDataSeriesToGraphAction } from '../../actions/graphActions';
import { currentGraphGidSelector } from '../../selectors/graph';
import styled from 'styled-components'

const AddRandomSeriesButton = styled(Button)`
// width: 140px;
// margin-top: 10px;
`;

class GraphRandomSeriesButton extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     visible: false,
  //   };
  // }

  handleAdd = (e) => {
    const start = moment.utc("2000-01-01");
    const inx = R.range(0, 10);
    const data = R.map((i) => [start.clone().add(i, 'quarters').unix() * 1000, Math.random()], inx);

    this.props.addDataSeriesToGraph({
      gid: this.props.gid,
      name: "random series",
      freq: "Q",
      fparams: {},
      dtype: 'float',
      dparams: {},
      units: undefined,
      data,
    })
  }

  render() {
    const { gid } = this.props;
    return (
      <AddRandomSeriesButton onClick={this.handleAdd} disabled={gid === undefined}>Rand</AddRandomSeriesButton>
    );
  }
}


GraphRandomSeriesButton.defaultProps = {
  gid: undefined,
};

GraphRandomSeriesButton.propTypes = {
  addDataSeriesToGraph: PropTypes.func.isRequired,
  gid: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
  gid: currentGraphGidSelector(state)
});
const mapDispatchToProps = (dispatch, getState) => bindActionCreators({
  addDataSeriesToGraph: addDataSeriesToGraphAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GraphRandomSeriesButton);
