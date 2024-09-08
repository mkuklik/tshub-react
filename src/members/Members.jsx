/* eslint-disable camelcase */
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown, Button, Grid, Segment, Message, Label, Icon, Table, Header, Image,
} from 'semantic-ui-react';
import { getGravatarUrl } from 'react-awesome-gravatar';
import {
  ApiClient,
  RawGroupApi,
  RawSpaceApi,
  RawCollectionApi,
  CollectionPermissionPost,
  GroupMemberPost,
  UserApi,
  SpaceMemberPost,
} from '../client';


const spaceRoleOptions = [

  {
    key: 'annotator',
    text: 'Annotator',
    value: 'annotator',
  },
  {
    key: 'uploader',
    text: 'Uploader',
    value: 'uploader',
  },
  {
    key: 'analyst',
    text: 'Analyst',
    value: 'analyst',
  },
  {
    key: 'maintainer',
    text: 'Maintainer',
    value: 'maintainer',
  },
  {
    key: 'owner',
    text: 'Owner',
    value: 'owner',
  },
];

const groupRoleOptions = [
  {
    key: 'member',
    text: 'Member',
    value: 'member',
  },
  {
    key: 'manager',
    text: 'Manager',
    value: 'manager',
  },
  {
    key: 'owner',
    text: 'Owner',
    value: 'owner',
  },
];

const collectionRoleOptions = [
  {
    key: 'annotator',
    text: 'Annotator',
    value: 'annotator',
  },
  {
    key: 'uploader',
    text: 'Uploader',
    value: 'uploader',
  },
  {
    key: 'analyst',
    text: 'Analyst',
    value: 'analyst',
  },
  {
    key: 'maintainer',
    text: 'Maintainer',
    value: 'maintainer',
  },
];

const EffectOptions = [
  {
    key: 'allow',
    text: 'Allow',
    value: 'allow',
  },
  {
    key: 'deny',
    text: 'Deny',
    value: 'deny',
  },
];


const roleColorMapping = {
  owner: 'teal',
  manager: 'olive',
  member: 'blue',

  annotator: 'grey',
  uploader: 'brown',
  analyst: 'blue',
  maintainer: 'green',
};

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startup: true,
      members: [],
      isFetching: false,
      multiple: true,
      search: true,
      value: [],
      groupOptions: [],
      userOptions: [],
      options: [],
      role: undefined,
      messages: [],
    };

    this.client = new ApiClient();
    this.client.basePath = props.chronos_address;
    this.client.authentications.jwt.accessToken = props.jwt;

    this.apiUser = new UserApi(this.client);
    this.apiGroup = new RawGroupApi(this.client);
    this.apiSpace = new RawSpaceApi(this.client);
    this.apiCollection = new RawCollectionApi(this.client);

    console.error('here', props.space_id !== undefined, props.space_id);

    if (props.gid !== undefined && props.space_id !== undefined && props.coll_id !== undefined) {
      console.error('parameter error: either gid or space_id should be used; not both');
      this.postMessage('parameter error: either gid or space_id should be used; not both', true, false);
    } else if (props.gid !== undefined) {
      this.which = 'group';
      this.roleOptions = groupRoleOptions;
      this.state.role = 'member';
    } else if (props.space_id !== undefined) {
      this.which = 'space';
      this.roleOptions = spaceRoleOptions;
      this.state.role = 'analyst';
    } else if (props.coll_id !== undefined) {
      this.which = 'collection';
      this.roleOptions = collectionRoleOptions;
      this.state.role = 'analyst';
    } else {
      console.error('here', props.space_id !== undefined, props.space_id);
      console.error('unknown object to manage');
      this.postMessage('unknown object to manage', true, false);
    }
    console.log('props', props);
  }

  componentDidMount() {
    this.apiGet(this.handleGet);
  }

  apiGet = (callback) => {
    const {
      gid, jwt, space_id, coll_id,
    } = this.props;
    this.client.authentications.jwt.accessToken = jwt;
    if (gid !== undefined) {
      this.apiGroup.appApiGroupRawGetGroup(gid, callback);
    } else if (space_id !== undefined) {
      this.apiSpace.appApiSpaceRawGet(space_id, callback);
    } else if (coll_id !== undefined) {
      this.apiCollection.appApiCollectionRawGet(coll_id, callback);
    } else {
      console.error('unsupported object type');
    }
  }

  apiAddMember = (body, callback) => {
    const {
      gid, jwt, space_id, coll_id,
    } = this.props;
    this.client.authentications.jwt.accessToken = jwt;
    switch (this.which) {
      case 'group':
        this.apiGroup.appApiGroupRawAddMember(gid, { groupMemberPost: body }, callback);
        break;
      case 'space':
        this.apiSpace.appApiSpaceRawAddMember(space_id, { spaceMemberPost: body }, callback);
        break;
      case 'collection':
        this.apiCollection.appApiCollectionRawAddPermission(
          coll_id, { collectionPermissionPost: body },
          callback,
        );
        break;
      default:
        console.error('unsupported object type');
    }
  }

  apiRemoveMember = (type, id, callback) => {
    const {
      gid, jwt, space_id, coll_id,
    } = this.props;
    this.client.authentications.jwt.accessToken = jwt;
    switch (this.which) {
      case 'group':
        this.apiGroup.appApiGroupRawDeleteMember(gid, type, id, callback);
        break;
      case 'space':
        this.apiSpace.appApiSpaceRawDeleteMember(space_id, type, id, callback);
        break;
      case 'collection':
        this.apiCollection.appApiCollectionRawDeletePermission(coll_id, type, id, callback);
        break;
      default:
        console.error('unsupported object type');
    }
  }

  handleGet = (error, data) => {
    if (error) {
      console.error(error);
      if (error.status === undefined) {
        this.postMessage('server can not be reached; please contact support.', true, false);
      } else if (error.response !== undefined) {
        this.postMessage(`Failed to retrieve data due to ${error.response.body.title} (${error.status}); ${error.response.body.detail}`, true, false);
      }
    } else if (['space', 'group'].includes(this.which)) this.setState({ members: data.members, startup: false });
    else {
      this.setState({ members: data.permissions, startup: false });
    }
  };

  updateGroupOptions = (error, data, response) => {
    const { members } = this.state;
    if (error) {
      console.error(error, data, response);
      this.setState({ isFetching: false });
    } else {
      const optIds = members.map((x) => x.id);
      const tmp = data.filter((x) => !optIds.includes(x.gid));
      const opts = tmp.map((x) => ({
        key: x.groupname,
        text: `Group ${x.groupname}`,
        value: { type: 'g', id: x.gid },
      }));
      this.setState((state) => ({
        groupOptions: opts,
        options: [...state.userOptions, ...opts],
        isFetching: false,
      }));
    }
  };

  updateUserOptions = (error, data) => {
    const { members } = this.state;
    if (error) {
      console.error(error);
    } else {
      const optIds = members.map((x) => x.id);
      const tmp = data.filter((x) => !optIds.includes(x.uid));
      const opts = tmp.map((x) => ({
        key: x.username,
        text: `User ${x.username}`,
        value: { type: 'u', id: x.uid },
      }));
      this.setState((state) => ({
        userOptions: opts,
        options: [...opts, ...state.groupOptions],
      }));
    }
  };

  handleChange = (e, { value }) => {
    this.setState({ value });
  };

  handleSearchChange = (e, { searchQuery }) => {
    const { jwt } = this.props;
    this.setState({ isFetching: true });
    this.client.authentications.jwt.accessToken = jwt;
    this.apiGroup.appApiGroupRawListGroups({ query: searchQuery }, this.updateGroupOptions);
    this.apiUser.appApiUserListUsers({ query: searchQuery }, this.updateUserOptions);
  }

  postMessage = (message, error, timer = true) => {
    this.setState((state) => ({
      messages: [
        ...state.messages,
        {
          text: message,
          error,
        },
      ],
    }));
    if (timer) {
      this.hideTimeout = setTimeout(() => this.setState(
        (state) => ({
          messages: state.messages.filter((m) => m.text !== message),
        }),
      ), 3000);
    }
  }

  getPost = (which) => {
    switch (which) {
      case 'group':
        return new GroupMemberPost();
      case 'space':
        return new SpaceMemberPost();
      case 'collection':
        return new CollectionPermissionPost();
      default:
        console.error('unsupported object type');
        return undefined;
    }
  }

  handleAddMembersEffect = (effect) => () => {
    // submit new members
    const { value, role } = this.state;
    value.forEach((m) => {
      const data = this.getPost(this.which);
      data.type = m.type;
      data.id = m.id;
      data.role = role;
      if (effect !== undefined) {
        data.effect = effect;
      }
      this.apiAddMember(data, this.callbackAddMember);
    });
  }

  // eslint-disable-next-line react/sort-comp
  handleAddMembers = this.handleAddMembersEffect(undefined)

  callbackAddMember = (error, data) => {
    if (error) {
      console.error(error);
      this.postMessage(`Failed adding a member, ${error}`, true);
    } else if (['space', 'group'].includes(this.which)) this.setState({ members: data.members, value: [] });
    else this.setState({ members: data.permissions, value: [] });
  }

  callbackRemoveMember = (error, data, response, id) => {
    if (error) {
      console.error(error);
      this.postMessage(`Failed removing a member, ${error.response.body.detail}`, true);
    } else if (data !== undefined) {
      let members = data.members ? (['space', 'group'].includes(this.which)) : data.permissions;
      members = members.filter((x) => x.id !== id);
      this.setState({ members, value: [] });
    } else {
      console.error('callbackRemoveMember: data is missing', data, response);
    }
  };

  handleRemoveMember = (e, type, id) => {
    // remove the member
    this.apiRemoveMember(type, id, (error, data, response) => this.callbackRemoveMember(error, data, response, id));
  }

  typeLabel = {
    u: 'User',
    g: 'Group',
  }

  memberRender = (data) => {
    const email = data.email || 'default@default.com';
    return (
      <Table.Row key={data.id}>
        <Table.Cell>
          <Header as="h4" image>
            <Image src={getGravatarUrl(email, { size: 50, default: 'identicon', rating: 'g' })} rounded size="mini" />
            <Header.Content>
              {data.name}
              <Header.Subheader>
                {this.typeLabel[data.type]}
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          {(data.effect === 'allow')
            && <Label className="right floated" color="green">Allowed</Label>}
          {(data.effect === 'deny')
            && <Label className="right floated" color="red">Denied</Label>}

          <Label className="right floated" color={roleColorMapping[data.role]}>{data.role}</Label>
        </Table.Cell>
        <Table.Cell textAlign="right">
          <Icon name="trash alternate" onClick={(e) => this.handleRemoveMember(e, data.type, data.id)} />
        </Table.Cell>
      </Table.Row>
    );
  }

  render() {
    const {
      startup, multiple, options, isFetching, search, value, members, messages, role,
    } = this.state;

    const listItems = members.map((m) => this.memberRender(m));

    const renderedMessages = messages.map((m) => <Message error={m.error}>{m.text}</Message>);

    return (
      // eslint-disable-next-line react/jsx-fragments
      <React.Fragment>
        <Segment
          basic
          style={{ margin: '0px', padding: '0px' }}
          loading={startup}
        >
          <Grid stackable>
            <Grid.Column width={10}>
              <span><b>Add new members</b></span>
              <Dropdown
                fluid
                selection
                multiple={multiple}
                search={search}
                options={options}
                value={value}
                placeholder="Search for Users/Groups"
                onChange={this.handleChange}
                onSearchChange={this.handleSearchChange}
                disabled={isFetching}
                loading={isFetching}
              />
              <h5 className="ui header" style={{ marginTop: '5px' }}>
                <div className="content">
                  <div className="sub header">Search for members by name, username, or email.</div>
                </div>
              </h5>
            </Grid.Column>
            <Grid.Column width={3}>
              <span><b>Role</b></span>
              <Dropdown
                placeholder="Select Role"
                fluid
                selection
                onChange={(e, data) => this.setState({ role: data.value })}
                value={role}
                options={this.roleOptions}
              />
              <h5 className="ui header" style={{ marginTop: '5px' }}>
                <div className="content">
                  <div className="sub header">Search for members by name, username, or email.</div>
                </div>
              </h5>
            </Grid.Column>
            {['space', 'group'].includes(this.which) && (
              <Grid.Column width={3}>
                <span>&zwnj;</span>
                <Button
                  fluid
                  primary
                  onClick={(e) => this.handleAddMembers(e)}
                  disabled={value.length === 0}
                >
                  {(this.which === 'group') ? 'Add to group' : 'Add to space'}
                </Button>
              </Grid.Column>
            )}
            {
              (this.which === 'collection')
              && (
                <Grid.Column width={3}>
                  <span>&zwnj;</span>
                  <Button.Group size="tiny">
                    <Button
                      negative
                      onClick={this.handleAddMembersEffect('deny')}
                      disabled={value.length === 0}
                    >
                      Deny
                    </Button>
                    <Button.Or />
                    <Button
                      positive
                      onClick={this.handleAddMembersEffect('allow')}
                      disabled={value.length === 0}
                    >
                      Allow
                    </Button>
                  </Button.Group>
                </Grid.Column>
              )
            }
          </Grid>

          {(!startup) && (messages.length > 0) && renderedMessages}

          <Segment basic>
            <Table basic="very" striped>
              <Table.Body>
                {listItems}
              </Table.Body>
            </Table>
          </Segment>
        </Segment>
        {startup && (messages.length > 0) && renderedMessages}
      </React.Fragment>
    );
  }
}

Members.defaultProps = {
  gid: undefined, // group id
  space_id: undefined, // space id
  coll_id: undefined, // collection id
};

Members.propTypes = {
  gid: PropTypes.string,
  space_id: PropTypes.string,
  coll_id: PropTypes.string,
  jwt: PropTypes.string.isRequired,
  chronos_address: PropTypes.string.isRequired,
};


export default Members;
