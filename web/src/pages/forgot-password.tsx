import React, { useState } from "react";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { Formik, Form } from "formik";
import { InputField } from "../components/InputField";
import { Box, Button } from "@chakra-ui/core";
import { useForgotPasswordMutation } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";

const ForgotPassword: React.FC<{}> = ({}) => {
  const [complete, setComplete] = useState(false);
  const [forgotPassword] = useForgotPasswordMutation();
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      <div className="relative md:h-screen md:flex">
        <div className="relative flex flex-col items-center justify-center h-screen px-2 lg:h-auto w-full">
          <div className="w-full px-4 py-8 pt-5 mx-3 bg-white sm:w-96">
            <h2 className="text-xl font-semibold md:text-2xl">
              Forgot password
            </h2>
            <div className="mt-4">
              <Formik
                initialValues={{ email: "" }}
                onSubmit={async (values) => {
                  await forgotPassword({ variables: values });
                  setComplete(true);
                }}
              >
                {({ isSubmitting }) =>
                  complete ? (
                    <Box>
                      if an account with that email exists, we sent you an email
                    </Box>
                  ) : (
                    <Form>
                      <div>
                        <label htmlFor="email" className="form_label">
                          Email
                        </label>
                        <div className="form_input_container">
                          <input
                            id="email"
                            name="email"
                            placeholder="email"
                            type="email"
                            className="form_input mb-3"
                          />
                        </div>
                      </div>
                      <button type="submit" className="form_red_button w-full">
                        Sign up
                      </button>
                    </Form>
                  )
                }
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo({ ssr: false })(ForgotPassword);
