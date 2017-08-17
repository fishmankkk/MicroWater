import React from 'react';
import { Layout, Icon, Row, Col } from 'antd';
import '../../../gobal/style-import';
import MenuNav from '../../../components/menu-nav/menu-nav';
import HeadDetail from '../../../components/head/head';
import navList from '../../../gobal/configure/nav-configure';
import logoImg from '../../../assets/image/mricowater.png'
import styles from './style/style.scss'
const { Header, Sider, Content } = Layout;
const menus = navList;
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
          <MenuNav menuList={menus}/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <HeadDetail/>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
