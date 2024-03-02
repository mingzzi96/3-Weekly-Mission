import { useRouter } from "next/router";

const Share = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>the ID Page</h1>
    </div>
  );
};

export default Share;
