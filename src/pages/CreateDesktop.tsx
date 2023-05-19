import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd'
import { SaveOutlined } from '@ant-design/icons'

import BasicLayout from '../layouts/BasicLayout'

const { Text, Title } = Typography

export default function CreateDesktop() {
  const navigate = useNavigate()

  useEffect(() => {
    const infoAgent = localStorage.getItem('infoAgent')

    if (infoAgent) {
      navigate('/escritorio')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onFinish = (values: { name: string; desktop: number }) => {
    localStorage.setItem('infoAgent', JSON.stringify(values))
    navigate('/escritorio')
  }

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <BasicLayout hiddenSider={false}>
      <Title level={2}>Ingresar</Title>
      <Text>Ingrese su nombre y número de escritodio</Text>
      <Divider />
      <Form
        name='basic'
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Nombre del agente'
          name='name'
          rules={[{ required: true, message: 'Por favor ingrese su nombre' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Número de escritorio'
          name='desktop'
          rules={[
            {
              required: true,
              message: 'Por favor ingrese el número de escritorio',
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </BasicLayout>
  )
}
