import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Menu, Row, Col } from 'antd';

import LocaleToggle from 'containers/LocaleToggle';
import A from './A';
import Brand from './Brand';
// import NavBar from './NavBar';
import Logo from './logo.png';
import HeaderLink from './HeaderLink';
import messages from './messages';
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
          <Col span={24}>
            <A href="/">
              <Brand src={Logo} alt="EUCA - Logo" />
            </A>
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <LocaleToggle />
            </div>
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
                    <FormattedMessage {...messages[navItem.localeKey]} />
                  </HeaderLink>
                </span>
              }
            >
              {navItem.list.map(listItem => (
                <Menu.Item key={listItem.title}>
                  <HeaderLink to={listItem.path}>
                    <FormattedMessage {...messages[listItem.localeKey]} />
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
