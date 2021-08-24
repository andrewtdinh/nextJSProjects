import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <div>{`The id of a client is ${router.query.id}`}</div>
    </div>
  )
}

export default ClientProjectsPage;