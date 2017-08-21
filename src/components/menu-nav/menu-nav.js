import React, {Component, PropTypes} from 'react';
import {
  Link
} from 'react-router-dom'
import {Menu, Icon } from 'antd';
export default class MenuNav extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.mounted = true;
  }
  render() {
      function handleClick(e) {
        console.log('click ', e);
      }
      function NavList(props) {
        const menus = props.menuList;
        const menusList = menus.map((menu) =>
          <Menu.Item key={menu.page_name}>
            <Link to={`/Homepage/`+ menu.page_route}>
              <Icon type={menu.icon}/>
              <span>{menu.title}</span>
            </Link>
          </Menu.Item>
        );
        return (
          <Menu theme="dark" mode="inline" onSelect={handleClick} defaultSelectedKeys={['m_water_home']}>{menusList}</Menu>
        );
      }
      return (
        <NavList menuList={this.props.menuList} />
      );
  }
}

MenuNav.propTypes = {
  menuList: PropTypes.array
};