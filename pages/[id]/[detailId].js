import react from "React";
import { useRouter } from "next/router";

function DetailIndex() {
  const router = useRouter();

  console.log(router.query);
  return <>hello</>;
}

export default DetailIndex;
