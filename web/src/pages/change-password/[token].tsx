import React, { useState } from "react";
import { NextPage } from "next";
import { Formik, Form } from "formik";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../../components/InputField";
import { Box, Button, Link, Flex } from "@chakra-ui/core";
import {
  useChangePasswordMutation,
  MeDocument,
  MeQuery,
} from "../../generated/graphql";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import NextLink from "next/link";
import { withApollo } from "../../utils/withApollo";

const ChangePassword: NextPage = () => {
  const router = useRouter();
  const [changePassword] = useChangePasswordMutation();
  const [tokenError, setTokenError] = useState("");
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      <div className="relative md:h-screen md:flex">
        <div className="relative flex flex-col items-center justify-center h-screen px-2 lg:h-auto w-full">
          <div className="w-full px-4 py-8 pt-5 mx-3 bg-white sm:w-96">
            <h2 className="text-xl font-semibold md:text-2xl">
              Change password
            </h2>
            <div className="mt-4">
              <Formik
                initialValues={{ newPassword: "" }}
                onSubmit={async (values, { setErrors }) => {
                  const response = await changePassword({
                    variables: {
                      newPassword: values.newPassword,
                      token:
                        typeof router.query.token === "string"
                          ? router.query.token
                          : "",
                    },
                    update: (cache, { data }) => {
                      cache.writeQuery<MeQuery>({
                        query: MeDocument,
                        data: {
                          __typename: "Query",
                          me: data?.changePassword.user,
                        },
                      });
                    },
                  });
                  if (response.data?.changePassword.errors) {
                    const errorMap = toErrorMap(
                      response.data.changePassword.errors
                    );
                    if ("token" in errorMap) {
                      setTokenError(errorMap.token);
                    }
                    setErrors(errorMap);
                  } else if (response.data?.changePassword.user) {
                    // worked
                    router.push("/");
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-4">
                      <label htmlFor="newPassword" className="form_label">
                        New Password
                      </label>
                      <div className="form_input_container">
                        <input
                          id="newPassword"
                          name="newPassword"
                          placeholder="email"
                          type="password"
                          className="form_input mb-3"
                        />
                      </div>
                    </div>
                    {tokenError ? (
                      <Flex>
                        <Box mr={2} style={{ color: "red" }}>
                          {tokenError}
                        </Box>
                        <NextLink href="/forgot-password">
                          <Link>click here to get a new one</Link>
                        </NextLink>
                      </Flex>
                    ) : null}
                    <button type="submit" className="form_red_button w-full">
                      Change password
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

export default withApollo({ ssr: false })(ChangePassword);
