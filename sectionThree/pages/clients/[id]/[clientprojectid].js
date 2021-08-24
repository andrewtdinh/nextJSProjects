import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
      <div>{`The id is ${router.query.id}`}</div>
      <div>{`The clientprojectid is ${router.query.clientprojectid}`}</div>
    </div>
  )
}

export default SelectedClientProjectPage;