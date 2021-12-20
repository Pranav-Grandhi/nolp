import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@chakra-ui/core";
import { InputField } from "../components/InputField";
import { useRegisterMutation, MeQuery, MeDocument } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withApollo } from "../utils/withApollo";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const [register] = useRegisterMutation();
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      <div className="relative md:h-screen md:flex">
        <div className="relative flex flex-col items-center justify-center h-screen px-2 lg:h-auto w-full">
          <div className="w-full px-4 py-8 pt-5 mx-3 bg-white sm:w-96">
            <h2 className="text-xl font-semibold md:text-2xl">Sign up</h2>
            <p className="text-sm">
              Already have an account?{" "}
              <a className="font-medium" href="/login">
                Sign in
              </a>
              .
            </p>
            <div className="mt-4">
              <Formik
                initialValues={{ email: "", username: "", password: "" }}
                onSubmit={async (values, { setErrors }) => {
                  const response = await register({
                    variables: { options: values },
                    update: (cache, { data }) => {
                      cache.writeQuery<MeQuery>({
                        query: MeDocument,
                        data: {
                          __typename: "Query",
                          me: data?.register.user,
                        },
                      });
                    },
                  });
                  if (response.data?.register.errors) {
                    console.log(response.data?.register.errors);
                    setErrors(toErrorMap(response.data.register.errors));
                  } else if (response.data?.register.user) {
                    // worked
                    router.push("/");
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-3">
                      <InputField
                        name="username"
                        placeholder="username"
                        label="Username"
                      />
                    </div>
                    <div className="mb-3">
                      <InputField
                        name="email"
                        placeholder="email"
                        label="Email"
                      />
                    </div>
                    <div className="mb-4">
                      <InputField
                        name="password"
                        placeholder="password"
                        label="Password"
                        type="password"
                      />
                    </div>
                    <button type="submit" className="form_red_button w-full">
                      Sign up
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo({ ssr: false })(Register);
