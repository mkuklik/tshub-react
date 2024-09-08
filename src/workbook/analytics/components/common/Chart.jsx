import * as React from 'react';
import types from 'prop-types';
import { path, isNil } from 'ramda';
import styled from 'styled-components';
import {
  Button, Icon, FormGroup, Classes, ControlGroup, Label, Divider,
} from '@blueprintjs/core';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsBullet from 'highcharts/modules/bullet';


HighchartsMore(Highcharts);
HighchartsBullet(Highcharts);


class Chart extends React.PureComponent {
  render() {
    return (
      <div />
    );
  }
}

Chart.propTypes = {

};
