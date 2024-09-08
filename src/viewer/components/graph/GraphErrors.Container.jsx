import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as R from 'ramda';
import types from 'prop-types';
import { Segment, Message } from 'semantic-ui-react';
import { GraphType } from '../../types/Graph';

const ErrorMessage = (err, name, i) => (
  <Message negative key={i}>
    <Message.Header>{name || null}</Message.Header>
    <p>{err.message}</p>
  </Message>
);

class GraphErrors extends React.PureComponent {
  // renderRow = (err, i) => {
  //   const { message } = err;

  //   return (
  //     <Table.Row key={i}>
  //       <Table.Cell style={{ paddingLeft: '10px', paddingRight: '10px' }}>
  //         {message}
  //       </Table.Cell>
  //     </Table.Row>
  //   );
  // }

  render() {
    const { graph, series } = this.props;
    let rows = null;
    if (graph !== undefined) {
      rows = graph.errors.map(
        (x, i) => ErrorMessage(x, R.path([x.wsid, 'name'], series), i),
      );
    }

    return (
      <Segment basic>
        {rows}
      </Segment>
    );
  }
}
/*
      <Table selectable basic="very" size="small" style={{ marginTop: 0, marginBottom: 0 }}>
        <Table.Body>
          {rows}
        </Table.Body>
      </Table>

      */

GraphErrors.defaultProps = {};

GraphErrors.propTypes = {
  graph: GraphType.isRequired,
  // errors: PropTypes.arrayOf(ErrorType).isRequired,
};

const mapStateToProps = (state) => ({
  graph: state.graphs.objects[state.graphs.currentGraphId],
  series: state.series.definition,
  // errors: (state.graphs.objects[state.graphs.currentGraphId] !== undefined)
  //   ? state.graphs.objects[state.graphs.currentGraphId].errors
  //   : undefined,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GraphErrors);
