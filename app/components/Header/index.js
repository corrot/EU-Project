import React from 'react';
import { Menu, Row, Col } from 'antd';

import A from './A';
import Brand from './Brand';
// import NavBar from './NavBar';
import Logo from './logo.png';
import HeaderLink from './HeaderLink';
import { routes } from '../../utils/routes';
/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 'mail',
    };
  }

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <>
        <Row>
          <Col span={12}>
            <A href="/">
              <Brand src={Logo} alt="EUCA - Logo" />
            </A>
          </Col>
        </Row>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          {routes.map(navItem => (
            <Menu.SubMenu
              key={navItem.title}
              title={
                <span className="submenu-title-wrapper">
                  {/* <Icon type="setting" /> */}
                  <HeaderLink to={navItem.path}>
                    {navItem.title}
                    {/* <FormattedMessage {...messages[title]} /> */}
                  </HeaderLink>
                </span>
              }
            >
              {navItem.list.map(listItem => (
                <Menu.Item key={listItem.title}>
                  <HeaderLink to={listItem.path}>
                    {listItem.title}
                    {/* <FormattedMessage {...messages[title]} /> */}
                  </HeaderLink>
                  {/* <A href={listItem.path}>{listItem.title}</A> */}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu>
      </>
    );
  }
}

export default Header;
