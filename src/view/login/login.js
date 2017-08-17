import React from 'react'
import { Button, Row, Form, Input } from 'antd'
import styles from './style/login.scss'
import logoImg from '../../assets/image/mricowater.png'
const FormItem = Form.Item
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleOk = this.handleOk.bind(this);
  }

  handleOk(event) {
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        return
      }
      this.props.history.push('/menuNav')
    })
    let val = this.props.form.getFieldValue()
    console.log(val)
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.form}>
        <div className={styles.logo}>
          <img alt='logo' src={logoImg}/>
        <span>微服务中心</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请输入帐号'
              },
            ],
          })(<Input size="large" onPressEnter={this.handleOk} placeholder="帐号" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入密码'
              },
            ],
          })(<Input size="large" type="password" onPressEnter={this.handleOk} placeholder="密码" />)}
        </FormItem>
        <Row>
          <Button type="primary" size="large" onClick={this.handleOk}>登录</Button>
          <p>
            <span>Username：guest</span>
            <span>Password：guest</span>
          </p>
        </Row>

      </form>
    </div>
    );
  }
}
const Login = Form.create()(NameForm);
export default Login;