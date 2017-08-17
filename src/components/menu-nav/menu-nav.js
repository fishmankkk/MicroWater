import React, {Component, PropTypes} from 'react';
import {Menu, Icon } from 'antd';
export default class MenuNav extends Component {
  render() {
      function NavList(props) {
        console.log(props.menuList)
        const menus = props.menuList;
        const menusList = menus.map((menu) =>
          <Menu.Item key={menu.page_name}>
            <Icon type={menu.icon}/>
            <span>{menu.title}</span>
          </Menu.Item>
        );
        return (
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['m_water_home']}>{menusList}</Menu>
        );
      }
      return (
        <NavList menuList={this.props.menuList} />
      );
  }
}

MenuNav.propTypes = {
  menuList: PropTypes.object
};