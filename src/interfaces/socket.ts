import { Socket } from 'socket.io-client'

interface ServerToClientEvents {
  'tickets-pending': (data: TicketInterface[]) => void
}

interface ClientToServerEvents {
  'create-ticket': (
    payload: null,
    callback: (ticket: TicketInterface) => void
  ) => void
  'next-ticket': (
    payload: { name: string; desktop: number },
    callback: (ticket: TicketInterface) => void
  ) => void
}

export interface TicketInterface {
  id?: string
  name: string
  ticketNumber: number
  descktop: number
}

export type SocketInterface = Socket<ServerToClientEvents, ClientToServerEvents>
