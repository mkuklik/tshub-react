/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { updateTimeSeriesDetails } from '../actions/timeseriesActions';
import { timeseriesSelector } from '../selectors/timeseries';

class TimeSeriesSettingsTab extends React.Component {
  constructor(props) {
    super(props);
    if (props.timeseries === undefined) {
      this.state = {
        name: '',
        title: '',
        description: '',
      };
    } else {
      this.state = {
        name: (props.timeseries.name !== undefined) ? props.timeseries.name : '',
        title: (props.timeseries.title !== undefined) ? props.timeseries.title : '',
        description: (props.timeseries.description !== undefined) ? props.timeseries.description : '',
      };
    }
  }

  handleNameChange = (event) => this.setState({ name: event.target.value });

  handleTitleChange = (event) => this.setState({ title: event.target.value });

  handleDescriptionChange = (event) => this.setState({ description: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    const { tsid, collId } = this.props;
    const { name, title, description } = this.state;
    this.props.updateTimeSeriesDetails({
      collId,
      tsid,
      name,
      title,
      description,
    });
  }

  render() {
    const { name, title, description } = this.state;
    const { timeseries } = this.props;
    return (
      <Segment basic loading={timeseries === undefined}>
        <div className="ui segment basic">
          <form
            className="ui form "
            id="create_space_form"
            // action="/timeseries/main/my_test_space2/some_macro_series2/DFF/#settings"
            method="POST"
          >

            <div className="field ">
              <label>Name</label>
              <input name="name" placeholder="Name" value={name} onChange={this.handleNameChange} />
            </div>
            <div className="field ">
              <label>Title</label>
              <input name="title" placeholder="Title" value={title} onChange={this.handleTitleChange} />
            </div>

            <div className="field ">
              <label>Description</label>
              <textarea name="description" placeholder="Description" value={description} onChange={this.handleDescriptionChange} />
            </div>

            <button className="ui primary button" type="submit" onClick={this.handleSubmit}>Save</button>

            <div className="ui error message">
              <div className="header">Form errors</div>
              <ul className="list" />
            </div>
          </form>

        </div>

      </Segment>
    );
  }
}

TimeSeriesSettingsTab.defaultProps = {

};

TimeSeriesSettingsTab.propTypes = {
  collId: PropTypes.string.isRequired,
  tsid: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  timeseries: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

const mapStateToProps = (state, ownProps) => ({
  api: state.api,
  timeseries: timeseriesSelector(ownProps.tsid)(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateTimeSeriesDetails,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TimeSeriesSettingsTab);
