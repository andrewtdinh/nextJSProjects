import { useRouter } from 'next/router';

function PortfolioProjectPage() {
  const router = useRouter();

  return <div>
    <h1>The Portfolio Project Page</h1>
    <h3>{router.query.projectid} is the leave</h3>
  </div>
}

export default PortfolioProjectPage;