/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import '@blueprintjs/core/lib/css/blueprint.css';
import { Divider } from '@blueprintjs/core';
import { createAnalyticsTabAction } from '../../action/workbookActions';
import { AnalyticsKind } from '../definitions/AnalyticsKind';
import { Link } from './containers';


const Container = styled.div`
  padding: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

// const Link = styled.div`
// color: black;

// &:hover {
//   cursor: pointer;
//   color: red;
// }
// `;

class AnalyticsHome extends React.Component {
  handleLink = (kind) => () => this.props.createAnalytics({ kind });

  render() {
    return (
      <Container>
        <h1>Analytics Home</h1>
        <h3>Models</h3>
        <Link onClick={this.handleLink(AnalyticsKind.LM)}>LM Model</Link>
        <br />
        {/* <Link onClick={this.handleLink(AnalyticsKind.VAR)}>VAR Model</Link>
        <br /> */}
        <Divider />
        <h3>Tests</h3>
        <Link onClick={this.handleLink(AnalyticsKind.Descriptive)}>Descriptive Statistics</Link>
        <br />
        <Link onClick={this.handleLink(AnalyticsKind.Autocorrelation)}>Autocorrelation</Link>
        <br />
        <Link onClick={this.handleLink(AnalyticsKind.ADF)}>Augmented Dickey Fuller Test</Link>
        <br />
        <Link onClick={this.handleLink(AnalyticsKind.KPSS)}>KPSS</Link>
        <br />
        <Link onClick={this.handleLink(AnalyticsKind.PP)}>PP</Link>
        <br />
        <Link onClick={this.handleLink(AnalyticsKind.Coint)}>Cointegration</Link>
        <br />
        {/*
        stattools.coint(y0, y1[, trend, method, …])
          Test for no-cointegration of a univariate equation.

        stattools.bds(x[, max_dim, epsilon, distance])
          BDS Test Statistic for Independence of a Time Series

        stattools.q_stat(x, nobs[, type])
          Compute Ljung-Box Q Statistic.

        stattools.grangercausalitytests(x, maxlag[, …])
          Four tests for granger non causality of 2 time series.
        */}

        <Divider />
        <h3>Filters</h3>
        <Link onClick={this.handleLink(AnalyticsKind.HPFilter)}>Hodrick-Prescott</Link>
        <br />
        <Link onClick={this.handleLink(AnalyticsKind.BKFilter)}>Baxter-King (BK)</Link>
        <br />
        <Link onClick={this.handleLink(AnalyticsKind.CFFilter)}>Christiano-Fitzgerald (CF)</Link>
        <br />

        {/* <Link onClick={this.handleLink(AnalyticsKind.X12)}>X12</Link> */}
        {/* <br /> */}
      </Container>
    );
  }
}

AnalyticsHome.defaultProps = {};

AnalyticsHome.propTypes = {
  createAnalytics: types.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    createAnalytics: createAnalyticsTabAction,
  },
  dispatch,
);

export default connect(null, mapDispatchToProps)(AnalyticsHome);
