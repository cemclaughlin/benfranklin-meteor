import React from 'react';
import { Container, Dropdown, Menu } from 'semantic-ui-react';

export default class MidMenu extends React.Component {
  render() {
    return (
        <Container>
          <Menu centered fluid widths = {7} inverted color = 'grey'>
            <Menu.Item>Projects</Menu.Item>
            <Dropdown item text="Events">
              <Dropdown.Menu>
                <Dropdown.Item>Calendar</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>Locations</Menu.Item>
            <Menu.Item>Specials</Menu.Item>
            <Dropdown item text="Programs">
              <Dropdown.Menu>
                <Dropdown.Item>Membership</Dropdown.Item>
                <Dropdown.Item>My Locker</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>Blogs</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
          </Menu>
        </Container>
    );
  }
}
