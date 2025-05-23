import React from 'react';
import {
  Icon, Collapse, Elevation, Card,
} from '@blueprintjs/core';
import styled from 'styled-components';

interface CollapsablePropertiesProps {
  title: string;
  startOpen?: boolean;
  children: React.ReactNode;
}

const Header = styled.div`
  width: 100%;
  height: 30px;
  padding: 5px;
  cursor: pointer;
`;

const Container = styled.div`
	// font-family: 'BebasNeueRegular', 'Arial Narrow', Arial, sans-serif;
	// padding: 5px 20px;
	// position: relative;
	// z-index: 20;
	// display: block;
	// min-height: 30px;
	cursor: pointer;
	color: #777;
	// text-shadow: 1px 1px 1px rgba(255,255,255,0.8);
	// line-height: 33px;
	// font-size: 19px;
	background: linear-gradient(top, #ffffff 1%,#eaeaea 100%);
	box-shadow: 
		0px 0px 0px 1px rgba(155,155,155,0.3), 
		1px 0px 0px 0px rgba(255,255,255,0.9) inset, 
		0px 2px 2px rgba(0,0,0,0.1);
}
`;

class CollapsableProperties extends React.Component<CollapsablePropertiesProps> {
  state: {
    isOpen: boolean;
  };

  constructor(props: CollapsablePropertiesProps) {
    super(props);
    this.state = {
      isOpen: props.startOpen || false,
    };
  }

  handleClick = (): void => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render(): React.ReactElement {
    return (
      <div>
        <Container>
          <Header onClick={this.handleClick}>
            <h4>
              <Icon icon={this.state.isOpen ? 'caret-down' : 'caret-right'} />
              {this.props.title}
            </h4>
          </Header>

          <Collapse isOpen={this.state.isOpen}>
            {this.props.children}
          </Collapse>
        </Container>
      </div>
    );
  }
}

CollapsableProperties.defaultProps = {
  startOpen: false,
};

export default CollapsableProperties;
