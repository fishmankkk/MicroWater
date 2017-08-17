import React, {Component, PropTypes} from 'react';
import {Row, Col, Icon, Modal } from 'antd';
import styles from './style/style.scss'
import logo from '../../assets/image/mricowater.png'
const confirm = Modal.confirm;
export default class HeadDetail extends Component {
  render() {
    function loginOut() {
      confirm({
        title: '退出?',
        content: '确定退出MIRCOWATER系统吗',
        onOk() {
          this.props.history.push('/')
        },
        onCancel() {},
      });
    }
      return (
        <Row type="flex" justify="end"  align="middle">
          <Col span={1}>
            <div className={styles.headImg}>
              <img src={logo}/>
            </div>
          </Col>
          <Col span={1}>
            <span className="m_water_f-keyword_s">超级管理员</span>
          </Col>
          <Col span={2} className="m_water_align-center m_water_pull-center ">
            <div className="m_water_cusor-point login_out m_water_font-m m_water_fc-red" onClick={loginOut}>
              <Icon type="logout" />注销
            </div>
          </Col>
        </Row>
        
        
      );
  }
}

HeadDetail.propTypes = {
  HeadDetail: PropTypes.object
};