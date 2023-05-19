import { Button, Col, Row, Typography } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

import useTicket from '../hooks/useTicket'
import BasicLayout from '../layouts/BasicLayout'

export default function CreateTicket() {
  const { lastTicket, createTicket } = useTicket()

  const nextTicket = () => {
    createTicket()
  }

  return (
    <BasicLayout hiddenSider>
      <Row>
        <Col span={14} offset={6}>
          <Typography.Title level={3}>
            Presione el boton para un nuevo tiket
          </Typography.Title>
          <Button
            type='primary'
            shape='round'
            icon={<DownloadOutlined />}
            size='large'
            onClick={nextTicket}
          >
            Nuevo ticket
          </Button>
        </Col>
      </Row>
      {lastTicket ? (
        <Row>
          <Col span={14} offset={6}>
            <Typography.Title level={5}>Su número</Typography.Title>
            <Typography.Text type='success' style={{ fontSize: 35 }}>
              {lastTicket}
            </Typography.Text>
          </Col>
        </Row>
      ) : (
        <></>
      )}
    </BasicLayout>
  )
}
