import AuthForm from "@/components/authForm";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const SignUp = async () => {

  const loggedInUser = await getLoggedInUser();
  console.log(loggedInUser);
  return (
    <section className="flex-centre size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
