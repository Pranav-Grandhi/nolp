import { Box, Button } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../../../components/InputField";
import { Layout } from "../../../components/Layout";
import {
  usePostQuery,
  useUpdatePostMutation,
} from "../../../generated/graphql";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import { useGetIntId } from "../../../utils/useGetIntId";
import { withApollo } from "../../../utils/withApollo";

const EditPost = ({}) => {
  const router = useRouter();
  const intId = useGetIntId();
  const { data, loading } = usePostQuery({
    skip: intId === -1,
    variables: {
      id: intId,
    },
  });
  const [updatePost] = useUpdatePostMutation();
  if (loading) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    );
  }

  if (!data?.post) {
    return (
      <Layout>
        <Box>could not find post</Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative flex flex-col min-h-screen bg-white">
        <div className="relative md:h-screen md:flex">
          <div className="relative flex flex-col items-center justify-center h-screen px-2 lg:h-auto w-full">
            <div className="w-full px-4 py-8 pt-5 mx-3 bg-white sm:w-96">
              <h2 className="text-xl font-semibold md:text-2xl">Edit Post</h2>
              <div className="mt-4">
                <Formik
                  initialValues={{ title: data.post.title, text: data.post.text }}
                  onSubmit={async (values) => {
                    await updatePost({ variables: { id: intId, ...values } });
                    router.back();
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div>
                        <InputField
                          name="title"
                          placeholder="title"
                          label="Title"
                        />
                      </div>
                      <div>
                        <InputField
                          textarea
                          name="text"
                          placeholder="text..."
                          label="Body"
                        />
                      </div>
                      <button type="submit" className="form_red_button w-full">
                        Update post
                      </button>
                    </Form>
                  )}
                  ]
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withApollo({ ssr: false })(EditPost);
