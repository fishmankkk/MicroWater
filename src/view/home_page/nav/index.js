import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Layout, Icon, Row, Col } from 'antd';
import { Menu, Button } from 'antd';
import {
  Link
} from 'react-router-dom'
import '../../../gobal/style-import';
import MenuNav from '../../../components/menu-nav/menu-nav';
import HeadDetail from '../../../components/head/head';
import navList from '../../../gobal/configure/nav-configure';
import Routes from '../../../routes/routes'
import HomeMainAction from './action/action'
import logoImg from '../../../assets/image/mricowater.png'
import styles from './style/style.scss'
const { Header, Sider, Content } = Layout;
const routes=Routes
const menus = navList;
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  logoutFunc = () => {
    console.log('logout')
  }
  render() {
    return (
      <Router>
        <Layout className="height-100">
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            breakpoint="lg"
            collapsedWidth="0"
          >
            <div className={styles.logo}>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={5}><img alt="logo" src={logoImg}/></Col>
                <Col span={19}><span className="m_water_font-b m_water_f-keyword">MRICOWATER</span></Col>
              </Row>
            </div>
            {/*<Menu
              mode="inline"
              theme="dark"
            >
            <Menu.Item key="1">
              <Link to={`/Homepage`}>
              <Icon type="pie-chart" />
              <span>Option 1</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={`/Homepage/Test`}>
              <Icon type="pie-chart" />
              <span>Option 2</span>
              </Link>
            </Menu.Item>
            </Menu>*/}
            <MenuNav menuList={menus}/>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Row type="flex" justify="end">
              <Col span={1}>
                <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              </Col>
              <Col span={23}>
                <HeadDetail img={logoImg} username="超级管理员" logout={this.logoutFunc}/>
              </Col>
            </Row>
              
              
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
              <Switch>
                {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route}/>
                ))}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default SiderDemo;
