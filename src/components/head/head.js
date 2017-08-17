import React, {Component, PropTypes} from 'react';
import {Row, Col } from 'antd';
import logo from '../../assets/image/mricowater.png'
export default class HeadDetail extends Component {
  render() {
      return (
        <Row type="flex" justify="end">
          <Col span={4}>
            <div className="head_img">
              <img src={logo}/>
            </div>
          </Col>
          <Col span={4}>
            <div className="login_out">
              注销
            </div>
          </Col>
        </Row>
        
        
      );
  }
}

HeadDetail.propTypes = {
  HeadDetail: PropTypes.object
};