import React from 'react'
import { HomeOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import { Link } from 'react-router-dom'

const { Content, Sider } = Layout

type Props = {
  hiddenSider: boolean
  children: JSX.Element | JSX.Element[]
}

export default function BasicLayout({ children, hiddenSider }: Props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider hidden={hiddenSider} collapsedWidth={0} breakpoint='md'>
        <div className='demo-logo-vertical' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key={1} icon={React.createElement(HomeOutlined)}>
            <Link to={'/ingresar'}>Ingresar</Link>
          </Menu.Item>
          <Menu.Item key={2} icon={React.createElement(UploadOutlined)}>
            <Link to={'/cola'}>Cola</Link>
          </Menu.Item>
          <Menu.Item key={3} icon={React.createElement(UserOutlined)}>
            <Link to={'/crear-ticket'}>Crear ticket</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              height: '100%',
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
