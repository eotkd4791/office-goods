import { useRouter } from 'next/router';
import { useEffect } from 'react';
import PageHead from 'renderer/components/Common/PageHead';

function Home() {
  const { replace } = useRouter();

  useEffect(() => {
    replace('/hiring/post');
  }, []);

  return (
    <>
      <PageHead title="Home" />
      <div className="w-full"></div>
    </>
  );
}

export default Home;
