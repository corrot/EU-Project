import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Menu, Row, Col, Input, Icon } from 'antd';

import LocaleToggle from 'containers/LocaleToggle';
// import { relative } from 'path';
import A from './A';
import Brand from './Brand';
// import NavBar from './NavBar';
import Logo from './logo.png';
import HeaderLink from './HeaderLink';
import { SocialContainer, SocialList, SocialItem } from './styled';
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
    const { Search } = Input;

    const social = [
      { id: 'facebook', path: 'https://facebook.com' },
      { id: 'twitter', path: 'https://twitter.com' },
      { id: 'youtube', path: 'https://youtube.com' },
    ];

    return (
      <>
        <Row>
          <Col span={24}>
            <A href="/">
              <Brand src={Logo} alt="EUCA - Logo" />
              <h2
                style={{
                  display: 'inline-block',
                  position: 'relative',
                  left: '10px',
                  fontWeight: 'bold',
                  color: '#00005a',
                }}
              >
                Competition Agency of Georgia
              </h2>
            </A>
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <Search
                placeholder="Search..."
                // onSearch={value => console.log(value)}
                style={{ width: 160, marginBottom: '20px' }}
              />
              <SocialContainer>
                <SocialList>
                  {social.map(o => (
                    <SocialItem>
                      <A href={o.path} target="_blank">
                        <Icon style={{ fontSize: '20px' }} type={o.id} />
                      </A>
                    </SocialItem>
                  ))}
                  <SocialItem>
                    <LocaleToggle />
                  </SocialItem>
                </SocialList>
              </SocialContainer>
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
