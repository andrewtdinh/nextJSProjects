import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    // load data ...
    // router.push(`/clients/${router.query.id}/projecta`);
    router.push({
      pathname: '[id]/[clientprojectid]',
      query: {id: router.query.id, clientprojectid: 'projecta'}
    })
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}

export default ClientProjectsPage;