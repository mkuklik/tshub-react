import React from 'react';
import types from 'prop-types';
import { Text, Button, Intent } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tour from 'reactour';
import { toggleTourOpenAction } from '../action/workbookActions';
import { workbookIsTourOpenSelector } from '../selectors/workbookSelectors';


const steps = [
  {
    content: (
      <Text>
        <h1>Welcome to TSHUB</h1>
        <h5>Timeseries exploration and analytics tool</h5>
        <p>Let's get started!!!</p>
      </Text>),
  },
  {
    selector: '.flexlayout__tabset',
    content: <Text>Graphs are shown in the center of the screen; This is where most of the magic happens.</Text>,
  },
  {
    selector: '.flexlayout__border_left',
    content: (
      <Text>
        <p>
          <b>Timeseries Browser</b>
          {' '}
          is where you access timeseries.
        </p>
        <p>
          <b>Upload</b>
          {' '}
          is where you upload your data.
        </p>
        <p>
          <b>Series Info</b>
          {' '}
          is where you can find details about title, description, and vintages.
        </p>
      </Text>),
  },
  {
    selector: '.flexlayout__border_bottom',
    content: (
      <Text>
        <p>
          <b>Analytics</b>
          {' '}
          is where you run descriptive statitics, filters, regressions, and statistical tests.
        </p>
        <p>
          To review the graph data in a table format check out
          {' '}
          <b>Table</b>
          {' '}
          tab. You can also see annotations and download data here.
        </p>
        <p>
          In
          {' '}
          <b>Graph Series</b>
          {' '}
          tab you edit series in the active graph.
        </p>
      </Text>),
  },
  {
    selector: '.flexlayout__border_right',
    content: (
      <Text>
        <p>
          You can edit title, subtitle, or legend in
          {' '}
          <b>Graph Options</b>
        </p>
        <p>
          Properties of selected series like color, line style, or y-axis, are in
          {' '}
          <b>Series Options</b>
          .
        </p>
        <p>
          Save graph to a file in
          {' '}
          <b>Graph Export</b>
        </p>
      </Text>),
  },
  {
    selector: '[data-tut="reactour__newgraph_button"]',
    content: <Text>Create a new graph use this button.</Text>,
    position: 'left',
  },
  {
    selector: '[data-tut="reactour__newgraph_button2"]',
    content: <Text>or this button.</Text>,
    position: 'left',
  },
  {
    selector: '[data-tut="reactour__addexprseries_button"]',
    content: <Text>Add a series to the active graph using expression editor</Text>,
    position: 'left',
  },
  {
    selector: '[data-tut="reactour__selectseries"]',
    content: (
      <Text>
        Select a series on the active graph, which can be modified using buttons on the right or
        {' '}
        <b>Series Option</b>
        {' '}
        tab at the right edge of workbook.
      </Text>),
    position: 'left',
  },
  {
    selector: '[data-tut="reactour__visibility_button"]',
    content: <Text>The selected series can be hidden, deleted, or moved to other y-axis.</Text>,
    // position: 'left',
  },

  {
    selector: '[data-tut="reactour__modifyseries"]',
    content: (
      <Text>
        Tools in this section allow you to modify selected timeseries.
      </Text>
    ),
    position: 'left',
  },
  {
    selector: '[data-tut="reactour__cloneseries"]',
    content: <Text>Clone selected series in case you want to modify it and keep the original.</Text>,
    // position: 'left',
  },
  {
    selector: '[data-tut="reactour__layout_button"]',
    content: <Text>Change the graph area layout</Text>,
    position: 'left',
  },
  {
    selector: '[data-tut="reactour__realtime"]',
    content: (
      <Text>
        <p>Timeseries in the database are versioned.</p>
        <p>
          You can go back to any historical verions by changing
          {' '}
          <b>Realtime</b>
        </p>
        <p>
          <b>Refresh</b>
          {' '}
          redraw the active graph using the most recent data.
        </p>
      </Text>
    ),
    position: 'left',
  },

  {
    content: (
      <Text>
        <p>
          For the start, checkout
          {' '}
          <b>publicdata</b>
          {' '}
          space in Timeseries Browser for a few macro/financial series to play with.
        </p>
        <p>
          You can also take a look at
          {' '}
          <a
            href="https://chronosdb.io/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            the Tutorial
          </a>
          .
        </p>
        <p>Thank you for rolling with us.</p>
        <p>TSHUB Team</p>
      </Text>
    ),
    position: 'center',
  },
];


class TourMain extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isTourOpen: true,
  //   };
  // }

  handleCloseTour = () => this.props.toggleTourOpen({ isTourOpen: false }); // this.setState({ isTourOpen: false });

  render() {
    const { isTourOpen } = this.props;
    return (
      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={this.handleCloseTour}
        lastStepNextButton={<Button minimal intent={Intent.SUCCESS}>Done!</Button>}
      />
    );
  }
}

TourMain.propTypes = {
  isTourOpen: types.bool,
};

TourMain.defaultProps = {
  isTourOpen: false,
};


const mapStateToProps = (state) => ({
  isTourOpen: workbookIsTourOpenSelector(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleTourOpen: toggleTourOpenAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TourMain);
