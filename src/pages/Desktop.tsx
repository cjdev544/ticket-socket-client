import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Divider, Row, Typography } from 'antd'

import BasicLayout from '../layouts/BasicLayout'
import { CloseCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import useTicket from '../hooks/useTicket'

const { Text, Title } = Typography

type InfoAgent = { name: string; desktop: number }

export default function Desktop() {
  const navigate = useNavigate()

  const { nextTicket, getNextTicketToServer } = useTicket()
  const [infoAgent, setInfoAgent] = useState<InfoAgent>({} as InfoAgent)

  useEffect(() => {
    const storage = localStorage.getItem('infoAgent')

    if (!storage) {
      navigate('/')
      return
    }

    setInfoAgent(JSON.parse(storage))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const logout = () => {
    localStorage.clear()
    navigate('/')
  }

  const getNextTicket = () => {
    getNextTicketToServer(infoAgent.name, infoAgent.desktop)
  }

  if (!infoAgent?.name)
    return <h3 style={{ textAlign: 'center' }}>Cargando...</h3>

  return (
    <BasicLayout hiddenSider>
      <Row>
        <Col span={20}>
          <Title level={2}>{infoAgent.name}</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type='success'>{infoAgent.desktop}</Text>
        </Col>
        <Col span={4}>
          <Button shape='round' type='primary' danger onClick={logout}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          {nextTicket === undefined ? (
            <h3>No hay más tickets en este momento</h3>
          ) : (
            <>
              <Text>Está atendiento el ticket número: </Text>
              <Text type='danger' style={{ fontSize: 40 }}>
                {nextTicket}
              </Text>
            </>
          )}
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6}>
          <Button shape='round' type='primary' onClick={getNextTicket}>
            <RightCircleOutlined />
            Siguiente ticket
          </Button>
        </Col>
      </Row>
    </BasicLayout>
  )
}
