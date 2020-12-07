import { Container, Menu } from 'semantic-ui-react';

export const TopMenu = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item header>
        Thank You Gifts
      </Menu.Item>
      <Menu.Item href="https://www.freeformportland.org" as="a">Home</Menu.Item>
      <Menu.Item className="snipcart-checkout" href="#">
        <i className="shopping cart icon" />
      </Menu.Item>
    </Container>
  </Menu>
);
