import Link from 'next/link';

function ClientsPage() {
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        <li><Link href="clients/andrew">Andrew</Link></li>
        <li><Link href="clients/trieu">Trieu</Link></li>
      </ul>
    </div>
  )
}

export default ClientsPage;