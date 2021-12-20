import React from "react";
import { Formik, Form } from "formik";
import { Box, Button, Link, Flex } from "@chakra-ui/core";
import { InputField } from "../components/InputField";
import { useLoginMutation, MeQuery, MeDocument } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import NextLink from "next/link";
import { withApollo } from "../utils/withApollo";

const Login: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [login] = useLoginMutation();
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      <div className="relative md:h-screen md:flex">
        <div className="relative flex flex-col items-center justify-center h-screen px-2 lg:h-auto w-full">
          <div className="w-full px-4 py-8 pt-5 mx-3 bg-white sm:w-96">
            <h2 className="text-xl font-semibold md:text-2xl">Sign in</h2>
            <p className="text-sm">
              New to Nolp?{" "}
              <a className="font-medium" href="/register">
                Sign up for an account
              </a>
              .
            </p>
            <div className="mt-4">
              <Formik
                initialValues={{ usernameOrEmail: "", password: "" }}
                onSubmit={async (values, { setErrors }) => {
                  const response = await login({
                    variables: values,
                    update: (cache, { data }) => {
                      cache.writeQuery<MeQuery>({
                        query: MeDocument,
                        data: {
                          __typename: "Query",
                          me: data?.login.user,
                        },
                      });
                      cache.evict({ fieldName: "posts:{}" });
                    },
                  });
                  if (response.data?.login.errors) {
                    console.log(response.data?.login.errors);
                    setErrors(toErrorMap(response.data.login.errors));
                  } else if (response.data?.login.user) {
                    if (typeof router.query.next === "string") {
                      router.push(router.query.next);
                    } else {
                      // worked
                      router.push("/");
                    }
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-3">
                      <InputField
                        name="usernameOrEmail"
                        placeholder="username or email"
                        label="Username or Email"
                      />
                    </div>
                    <div className="mb-3">
                      <InputField
                        name="password"
                        placeholder="password"
                        label="Password"
                        type="password"
                      />
                    </div>
                    <div className="flex justify-between mb-4">
                      <a
                        className="text-sm transition-colors hover:text-red-500"
                        href="/forgot-password"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button type="submit" className="form_red_button w-full">
                      Sign in
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

export default withApollo({ ssr: false })(Login);
