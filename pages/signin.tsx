import { stat } from "fs";
import { GetServerSideProps, NextPage } from "next";
import { getCsrfToken, useSession } from "next-auth/react";
import { useRouter } from "next/router";



const SignIn: NextPage = (props: any) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "authenticated") {
    router.replace("/admin")
  }

  return (
    <form method="post" action="/api/auth/signin/email">
      <input name="csrfToken" type="hidden" defaultValue={props.csrfToken} />
      <label>
        Email address
        <input type="email" id="email" name="email" />
      </label>
      <button type="submit">Sign in with Email</button>
    </form>
  );
}

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
