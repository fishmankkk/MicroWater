import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

// import './css/style.less';
const { Header, Content, Footer } = Layout;
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout className="layout">
        <Header>
        <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
        </Footer>
    </Layout>
    );
  }
}

export default SiderDemo;
