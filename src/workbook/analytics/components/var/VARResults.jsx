import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { path, isNil, mapObjIndexed } from 'ramda';
import styled from 'styled-components';
import {
  Icon, FormGroup, HTMLTable, ControlGroup, Label, Divider, Callout,
} from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import NumberFormat from 'react-number-format';
import Moment from 'react-moment';
import { LMAnalyticsType } from '../../types';
import { AnalyticsStatus } from '../../definitions/AnalyticsStatus';
import { addDataSeriesToGraphAction, createGraph } from '../../../../viewer/actions/graphActions';
import { workbookAddNewGraphTabAction } from '../../../action/workbookActions';
import { analyticsLMGraphsAction } from '../../actions/analyticsLM';
import WsidDisplay from '../common/WsidDisplay';
import AnalyticsErrors from '../common/AnalyticsErrors';
import NumericDisplay from '../common/NumericDisplay';
import DateDisplay from '../common/DateDisplay';


const Styledtd = styled.td`
padding-top: 1px !important;
padding-bottom: 1px !important;
`;

const ResultsTable = styled.table`
  margin-right: 10px;
`;


const FlexByRow = styled.div`
  display: flex; 
  flex-wrap: wrap;
  // justify-content: space-between;
`;


const TopLeft = ({ results, resolvedParameters }) => (
  <ResultsTable>
    <tbody>
      <tr>
        <Styledtd>Dep. Variable</Styledtd>
        <Styledtd><WsidDisplay wsid={path(['dependent', 'wsid'], resolvedParameters)} /></Styledtd>
      </tr>
      <tr>
        <Styledtd>Method</Styledtd>
        <Styledtd>Least Squares</Styledtd>
      </tr>
      <tr>
        <Styledtd>Time</Styledtd>
        <Styledtd><DateDisplay date={results.datetime} freq="datetime" /></Styledtd>
      </tr>
      <tr>
        <Styledtd>Nobs</Styledtd>
        <Styledtd>{results.nobs}</Styledtd>
      </tr>
      <tr>
        <Styledtd>Df Residuals</Styledtd>
        <Styledtd>{results.df_resid}</Styledtd>
      </tr>
      <tr>
        <Styledtd>Df Model</Styledtd>
        <Styledtd>{results.df_model}</Styledtd>
      </tr>
      <tr>
        <Styledtd>Covariance Type</Styledtd>
        <Styledtd>{results.cov_type}</Styledtd>
      </tr>
    </tbody>
  </ResultsTable>
);

const TopRight = ({ results, precision }) => (
  <ResultsTable>
    <tbody>
      <tr>
        <Styledtd>Nobs</Styledtd>
        <Styledtd>{results.nobs}</Styledtd>
      </tr>
      <tr>
        <Styledtd>
          R-squared
          {results.rsquared_type}
        </Styledtd>
        <Styledtd><NumericDisplay value={results.rsquared} /></Styledtd>
      </tr>
      <tr>
        <Styledtd>
          Adj. R-squared
          {results.rsquared_type}
        </Styledtd>
        <Styledtd><NumericDisplay value={results.rsquared_adj} /></Styledtd>
      </tr>
      <tr>
        <Styledtd>F-statistic</Styledtd>
        <Styledtd>
          <NumericDisplay value={results.fvalue} />
          {/* {Math.round(results.fvalue, precision)} */}
        </Styledtd>
      </tr>

      <tr>
        <Styledtd>Prob (F-statistic)</Styledtd>
        <Styledtd><NumericDisplay value={results.f_pvalue} /></Styledtd>
      </tr>

      <tr>
        <Styledtd>Log-Likelihood</Styledtd>
        <Styledtd><NumericDisplay value={results.llf} /></Styledtd>
      </tr>
      <tr>
        <Styledtd>AIC</Styledtd>
        <Styledtd><NumericDisplay value={results.aic} /></Styledtd>
      </tr>

      <tr>
        <Styledtd>BIC</Styledtd>
        <Styledtd><NumericDisplay value={results.bic} /></Styledtd>
      </tr>
    </tbody>
  </ResultsTable>
);

/*
Omnibus:                        0.176   Durbin-Watson:                   2.346
Prob(Omnibus):                  0.916   Jarque-Bera (JB):                0.167
Skew:                           0.141   Prob(JB):                        0.920
Kurtosis:                       2.786   Cond. No.                         176.
*/
const BottomResults = ({ results, precision }) => (
  <FlexByRow>
    <ResultsTable>
      <tbody>
        <tr>
          <Styledtd>Omnibus</Styledtd>
          <Styledtd><NumericDisplay value={results.omni} /></Styledtd>

        </tr>
        <tr>
          <Styledtd>
            Prob(Omnibus)
          </Styledtd>
          <Styledtd><NumericDisplay value={results.omnipv} /></Styledtd>

        </tr>
        <tr>
          <Styledtd>Skew</Styledtd>
          <Styledtd><NumericDisplay value={results.skew} /></Styledtd>

        </tr>
        <tr>
          <Styledtd>Kurtosis</Styledtd>
          <Styledtd><NumericDisplay value={results.kurtosis} /></Styledtd>

        </tr>
      </tbody>
    </ResultsTable>

    <ResultsTable>
      <tbody>

        <tr>
          <Styledtd>Durbin-Watson</Styledtd>
          <Styledtd><NumericDisplay value={results.dw} /></Styledtd>
        </tr>

        <tr>
          <Styledtd>Jarque-Bera (JB)</Styledtd>
          <Styledtd><NumericDisplay value={results.jb} /></Styledtd>
        </tr>
        <tr>
          <Styledtd>Prob(JB)</Styledtd>
          <Styledtd><NumericDisplay value={results.jbpv} /></Styledtd>
        </tr>

        <tr>
          <Styledtd>Condition No.</Styledtd>
          <Styledtd><NumericDisplay value={results.condition_number} /></Styledtd>
        </tr>
      </tbody>
    </ResultsTable>
  </FlexByRow>

);

const DepVar = ({ resolvedParameters, handleGraph }) => {
  const wsid = path(['dependent', 'wsid'], resolvedParameters);
  return (
    <FormGroup
  // helperText="Hodrick-Prescott smoothing parameter."
      label="Dependent Variable"
      inline
    >
      <ControlGroup fill>
        <WsidDisplay wsid={wsid} />
        <Icon style={{ marginLeft: '5px' }} icon="series-add" iconSize={10} onClick={(e) => handleGraph('dependent', false)} />
        <Icon style={{ marginLeft: '5px' }} icon="chart" iconSize={10} onClick={(e) => handleGraph('dependent', true)} />
      </ControlGroup>

    </FormGroup>
  );
};


const re = /x(\d+)/;

const VarName = (name, regressors) => {
  let n = re.exec(name);
  if (!isNil(n)) {
    n = Number(n[1]);
    const { wsid } = regressors[n];
    return <WsidDisplay wsid={wsid} />;
  }
  return <Label>{name}</Label>;
};


const Regressors = ({
  results, precision, resolvedParameters, handleGraph,
}) => {
  const reglist = Object.values(mapObjIndexed((v, k) => (
    <tr>
      <td>
        <ControlGroup>
          {VarName(k, resolvedParameters.regressors)}
          {(k !== 'const') && (
          <>
            <Icon style={{ marginLeft: '5px' }} icon="series-add" iconSize={10} onClick={(e) => handleGraph(k, false)} />
            <Icon style={{ marginLeft: '5px' }} icon="chart" iconSize={10} onClick={(e) => handleGraph(k, true)} />
          </>
          )}
        </ControlGroup>
      </td>
      <td><NumericDisplay value={v} /></td>
      <td><NumericDisplay value={v / results.tvalues[k]} /></td>
      <td><NumericDisplay value={results.tvalues[k]} /></td>
      <td><NumericDisplay value={results.pvalues[k]} /></td>
      <td><NumericDisplay value={results.conf_int[k][0]} /></td>
      <td><NumericDisplay value={results.conf_int[k][1]} /></td>
    </tr>
  ), results.params));
  /*
            Coef.    Std.Err.      t      P>|t|     [0.025   0.975]
  ------------------------------------------------------------------
  const      0.7915     0.4335    1.8259   0.1106   -0.2335   1.8166
  */
  return (
    <HTMLTable>
      <thead>
        <tr>
          <th />
          <th>Coef.</th>
          <th>Std. Err.</th>
          <th>t-stat</th>
          <th>P > |t|</th>
          <th>[0.025</th>
          <th>0.975]</th>
        </tr>
      </thead>
      <tbody>
        {reglist}
      </tbody>
    </HTMLTable>
  );
};


class VARResults extends React.Component {
  // eslint-disable-next-line react/destructuring-assignment
  handleGraph = (name, create) => this.props.analyticsLMGraphs(this.props.ayid, name, create);

  // Graphs
  // Actual, Fitted, Residual
  // Residual Graph
  // standarized Residual graph


  render() {
    const status = path(['obj', 'status'], this.props);
    const results = path(['obj', 'results'], this.props);
    const errors = path(['obj', 'errors'], this.props);
    const resolvedParameters = path(['obj', 'resolvedParameters'], this.props);
    const precision = 2;

    if (isNil(results) && status === AnalyticsStatus.completed) {
      return (<div>Results are not available.</div>);
    }
    if ([AnalyticsStatus.running, AnalyticsStatus.initiated, AnalyticsStatus.parameters].includes(status)) {
      return (<div>Specify parameters and estimate to see the results.</div>);
    }

    if (status === AnalyticsStatus.error) {
      return (
        <div>
          <AnalyticsErrors errors={errors} />
        </div>
      );
    }

    return (
      <>

        <h3>Summary:</h3>
        <FlexByRow>
          <TopLeft results={results} resolvedParameters={resolvedParameters} precision={precision} />
          <TopRight results={results} precision={precision} />
        </FlexByRow>
        <Divider />
        <DepVar resolvedParameters={resolvedParameters} handleGraph={this.handleGraph} />
        <Regressors
          results={results}
          resolvedParameters={resolvedParameters}
          precision={precision}
          handleGraph={this.handleGraph}
        />
        <Divider />
        <BottomResults results={results} precision={precision} />
        <br />
        <h3>Graphs:</h3>
        <ControlGroup>
          <span>Residual</span>
          <Icon style={{ marginLeft: '5px' }} icon="series-add" iconSize={10} onClick={(e) => this.handleGraph('Residual', false)} />
          <Icon style={{ marginLeft: '5px' }} icon="chart" iconSize={10} onClick={(e) => this.handleGraph('Residual', true)} />
        </ControlGroup>
        <ControlGroup>
          <span>Fitted</span>
          <Icon style={{ marginLeft: '5px' }} icon="series-add" iconSize={10} onClick={(e) => this.handleGraph('Fitted', false)} />
          <Icon style={{ marginLeft: '5px' }} icon="chart" iconSize={10} onClick={(e) => this.handleGraph('Fitted', true)} />
        </ControlGroup>
        <ControlGroup>
          <span>Actual/Fitted/Residual</span>
          <Icon style={{ marginLeft: '5px' }} icon="series-add" iconSize={10} onClick={(e) => this.handleGraph('ActualFittedResidual', false)} />
          <Icon style={{ marginLeft: '5px' }} icon="chart" iconSize={10} onClick={(e) => this.handleGraph('ActualFittedResidual', true)} />
        </ControlGroup>
        <br />

        {/* <pre>{results.summary}</pre>
        <pre>{results.summary2}</pre> */}
      </>
    );
  }
}

VARResults.defaultProps = {};

VARResults.propTypes = {
  ayid: types.string.isRequired,
  obj: LMAnalyticsType,
  analyticsLMGraphs: types.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createGraph,
  addDataSeriesToGraphAction,
  workbookAddNewGraphTab: workbookAddNewGraphTabAction,
  analyticsLMGraphs: analyticsLMGraphsAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VARResults);
