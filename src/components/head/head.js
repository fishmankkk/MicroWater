import React, {Component, PropTypes} from 'react';
import {Row, Col, Icon, Modal } from 'antd';
import styles from './style/style.scss'
const confirm = Modal.confirm;
export default class HeadDetail extends Component {
  constructor(props) {
    super(props);
    this.logout = props.logout
    console.log(props.logout)
  }
  render() {
    const logout = this.props.logout;
    function logoutConfirm() {
      confirm({
        title: '退出?',
        content: '确定退出MIRCOWATER系统吗',
        onOk() {
          logout()
        },
        onCancel() {},
      });
    }
      return (
        <Row type="flex" justify="end"  align="middle">
          <Col span={1}>
            <div className={styles.headImg}>
              <img src={this.props.img}/>
            </div>
          </Col>
          <Col span={2} className="m_water_flex m_water_flex-center">
            <span className="m_water_f-keyword_s">{this.props.username}</span>
          </Col>
          <Col span={2} className={styles.logout+" m_water_align-center m_water_flex m_water_flex-center"}>
            <div className={styles.logout+" m_water_cusor-point m_water_font-m m_water_fc-red"} onClick={logoutConfirm}>
              <Icon type="logout" />注销
            </div>
          </Col>
        </Row>
      );
  }
}

HeadDetail.propTypes = {
  img: PropTypes.string,
  username: PropTypes.string,
  logout: PropTypes.func
};