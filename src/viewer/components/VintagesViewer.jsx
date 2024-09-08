import * as React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isNil, path, map } from 'ramda';
import {
  Segment,
  Table,
  Header,
  Icon,
} from 'semantic-ui-react';
import Moment from 'react-moment';
import {
  addRefSeriesToGraphAction,
  addNewSeriesToClearGraphAction,
} from '../actions/graphActions';
import { timeseriesSelector } from '../selectors/timeseries';
import { currentGraphGidSelector } from '../selectors/graph';
import { vintagesListSelector } from '../../vintages/selectors';
import { fetchVintageListAction } from '../../vintages/actions';
import { VintageType } from '../../vintages/types/VintageTypes';

class VintagesViewer extends React.Component {

  componentDidMount() {
    const { collId, tsid, fetchVintageList } = this.props;
    fetchVintageList({ collId, tsid });
  }

  handleAddToGraph = (realtime) => () => {
    const { tsid, collId, gid, addSeriesToGraph } = this.props;
    addSeriesToGraph({
      collId,
      gid,
      tsid,
      realtime,
    });
  };

  handleAddToNewGraph = (realtime, vintageName) => () => {
    const {
      tsid, collId, gid, tsName, addNewSeriesToClearGraph
    } = this.props;
    const name = !isNil(tsName) ? `${tsName} (${vintageName})` : undefined;
    addNewSeriesToClearGraph({
      gid,
      collId,
      tsid,
      realtime,
      name,
    });
  };

  renderVintage = (data) => (
    <Table.Row key={data.vid}>
      <Table.Cell>
        <Header as="h4">
          <Header.Content>
            {data.name}
            {/* <Header.Subheader>{data.name}</Header.Subheader> */}
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>
        <Moment date={data.realtime} format="YYYY-MM-DD HH:mm:ss" />
        {' '}
        (
        <Moment date={data.realtime} fromNow />
        )
      </Table.Cell>
      <Table.Cell textAlign="right">
        <Icon
          name="plus square outline"
          onClick={this.handleAddToGraph(data.realtime)}
        />
        <Icon
          name="external square alternate"
          onClick={this.handleAddToNewGraph(data.realtime, data.name)}
        />
      </Table.Cell>
    </Table.Row>
  );

  render() {
    const { vintages } = this.props;
    const listItems = map((x) => this.renderVintage(x), vintages);

    return (
      <Segment basic>
        <Table basic="very" striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Date/Time</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>
          <Table.Body>{listItems}</Table.Body>
        </Table>
      </Segment>
    );
  }
}

VintagesViewer.defaultProps = {
  vintages: [],
};

VintagesViewer.types = {
  collId: types.string.isRequired,
  tsid: types.string.isRequired,
  gid: types.string.isRequired,
  vintages: types.arrayOf(VintageType),
  fetchVintageList: types.func.isRequired,
  addSeriesToGraph: types.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  gid: currentGraphGidSelector(state),
  vintages: vintagesListSelector(ownProps.tsid)(state),
  tsName: path(['name'], timeseriesSelector(ownProps.tsid)(state)),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    addSeriesToGraph: addRefSeriesToGraphAction,
    addNewSeriesToClearGraph: addNewSeriesToClearGraphAction,
    fetchVintageList: fetchVintageListAction,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(VintagesViewer);
