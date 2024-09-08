import * as React from 'react';
import PropTypes from 'prop-types';
import { Button, Segment, Dropdown } from 'semantic-ui-react';
import Axios from 'axios';
import { isNil } from 'ramda';
// import { jwtSelector } from '../selectors/apiSelectors';

const formatOptions = [
  {
    key: 'xlsx',
    text: 'Excel (.xlsx)',
    value: 'xlsx',
  },
  {
    key: 'csv',
    text: 'Comma Separated (.csv)',
    value: 'csv',
  },
];

class DownloadTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestPending: false,
      error: undefined,
      format: 'xlsx',
    };
  }

  handleDownload = () => {
    const { collId, tsid } = this.props;
    const { format } = this.state;
    this.setState({ requestPending: true, error: null });
    Axios.get('download', {
      // headers: {
      //   Authorization: `Bearer ${jwt}`,
      //   'Access-Control-Allow-Origin': '*',
      // },
      params: {
        collId,
        tsid,
        file_format: format,
      },
      responseType: 'arraybuffer',
    })
      .then((response) => {
        const filename = response.headers['x-suggested-filename'] || `download.${format}`;
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename); // or any other extension
        document.body.appendChild(link);
        link.click();
        this.setState({ requestPending: false, error: undefined });
      })
      .catch((error) => {
        // handle error
        this.setState({ requestPending: false, error: String(error) });
      });
  }

  handleFormatChange = (e, data) => {
    this.setState({ format: data.value });
  }

  render() {
    const { requestPending, error, format } = this.state;
    return (
      <Segment basic>
        <Dropdown
          style={{ display: 'inline', marginRight: '5px' }}
          placeholder="Select Format"
          fluid
          selection
          options={formatOptions}
          value={format}
          onChange={this.handleFormatChange}
        />
        <Button
          onClick={this.handleDownload}
          disabled={requestPending}
        >
          Download
        </Button>

        {requestPending
          && (
          <div className="ui icon message">
            <i className="notched circle loading icon" />
            <div className="content">
              <div className="header">
                Just one second
              </div>
              {/* <p>.</p> */}
            </div>
          </div>
          )}
        {!isNil(error)
          && (
          <div className="ui negative message">
            <div className="header">
              Failed to download timeseries
            </div>
            <p>{error}</p>
          </div>
          )}
      </Segment>
    );
  }
}

DownloadTab.defaultProps = {};

DownloadTab.propTypes = {
  collId: PropTypes.string.isRequired,
  tsid: PropTypes.string.isRequired,
};

export default DownloadTab;
