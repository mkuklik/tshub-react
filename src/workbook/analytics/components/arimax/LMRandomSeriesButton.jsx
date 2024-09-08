import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import * as R from 'ramda';
import { Button } from '@blueprintjs/core';
import { createDataSeries } from '../../../../viewer/actions/seriesActions';

class LMRandomSeriesButton extends React.PureComponent {

  handleAdd = (e) => {
    const start = moment.utc("2000-01-01");
    const inx = R.range(0, 10);
    const data = R.map((i) => [start.clone().add(i, 'quarters').unix()*1000, Math.random()], inx);
  
    const wsid = this.props.createDataSeries({
      name: "random series", 
      freq: "Q", 
      fparams: {}, 
      dtype: 'float',
      dparams: {}, 
      units: undefined, 
      data,
    }) 

    this.props.wsidCallback(wsid);
  }

  render() {
    return (
        <Button onClick={this.handleAdd} text="Add random series" small/>
    );
  }
}

LMRandomSeriesButton.defaultProps = {
  gid: undefined,
};

LMRandomSeriesButton.propTypes = {
  createDataSeries: PropTypes.func.isRequired,
  wsidCallback: PropTypes.func.isRequired,
  ayid: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, getState) => bindActionCreators({
  createDataSeries,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LMRandomSeriesButton);
