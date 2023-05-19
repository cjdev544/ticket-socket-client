import { useContext, useEffect, useState } from 'react'

import { SocketContext } from '../context/socketContext'
import { TicketInterface } from '../interfaces/socket'

export default function useTicket() {
  const { socket } = useContext(SocketContext)
  const [tickets, setTickets] = useState<TicketInterface[]>([])
  const [lastTicket, setLastTicket] = useState<number | null>(null)
  const [nextTicket, setNextTicket] = useState<number | null>(null)

  useEffect(() => {
    fetch('http://localhost:3000/tickets')
      .then((res) => res.json())
      .then((result) => setTickets(result.tickets))
  }, [])

  useEffect(() => {
    socket.on('tickets-pending', (tickets) => {
      setTickets(tickets)
    })
  }, [socket])

  const createTicket = () => {
    socket.emit('create-ticket', null, (ticket) => {
      setLastTicket(ticket.ticketNumber)
    })
  }

  const getNextTicketToServer = (name: string, desktop: number) => {
    socket.emit('next-ticket', { name, desktop }, (ticket) => {
      setNextTicket(ticket?.ticketNumber)
    })
  }

  return {
    tickets,
    lastTicket,
    nextTicket,
    createTicket,
    getNextTicketToServer,
  }
}
