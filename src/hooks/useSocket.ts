/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react'
import { io } from 'socket.io-client'

export default function useSocket(serverPath: string) {
  const socket = useMemo(() => {
    return io(serverPath, { transports: ['websocket'] })
  }, [])

  const [isOnline, setIsOnline] = useState(false)

  useEffect(() => {
    setIsOnline(socket.connected)
  }, [socket])

  useEffect(() => {
    socket.on('connect', () => {
      setIsOnline(true)
    })
  }, [socket])

  useEffect(() => {
    socket.on('disconnect', () => {
      setIsOnline(false)
    })
  }, [socket])

  return {
    isOnline,
    socket,
  }
}
