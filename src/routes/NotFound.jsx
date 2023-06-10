import Layout from "components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="h-screen container flex flex-col justify-center items-center gap-4">
        <h1 className="text-purple text-6xl">404</h1>
        <p>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
    </Layout>
  );
};

export default NotFound;
