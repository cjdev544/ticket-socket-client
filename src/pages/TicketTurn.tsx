import { Col, Row, Typography, List, Card, Tag, Divider } from 'antd'

import BasicLayout from '../layouts/BasicLayout'
import useTicket from '../hooks/useTicket'

const { Title, Text } = Typography

export default function TicketTurn() {
  const { tickets } = useTicket()

  return (
    <BasicLayout hiddenSider>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(ticket) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color='volcano'> {ticket.name} </Tag>,
                    <Tag color='magenta'> Escritorio: {ticket.descktop} </Tag>,
                  ]}
                >
                  <Title> No. {ticket.ticketNumber}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>

        <Col span={12}>
          <Divider> Historial </Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(ticket) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${ticket.ticketNumber}`}
                  description={
                    <>
                      <Text type='secondary'>En el escritorio: </Text>
                      <Tag color='magenta'> {ticket.ticketNumber} </Tag>
                      <Text type='secondary'> Agente: </Text>
                      <Tag color='volcano'> {ticket.name} </Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </BasicLayout>
  )
}
