import { Box, Button, Flex, Heading, Link, Stack, Text } from "@chakra-ui/core";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import { useState } from "react";
import { EditDeletePostButtons } from "../components/EditDeletePostButtons";
import { Layout } from "../components/Layout";
import { UpdootSection } from "../components/UpdootSection";
import { usePostsQuery, PostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withApollo } from "../utils/withApollo";
import BackgroundSlider from "../components/BackgroundSlider";
import HeroSection from "../components/HeroSection";
import { NextSeo } from "next-seo";

const Index = () => {
  const { data, error, loading, fetchMore, variables } = usePostsQuery({
    variables: {
      limit: 15,
      cursor: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (!loading && !data) {
    return (
      <div>
        <div>you got query failed for some reason</div>
        <div>{error?.message}</div>
      </div>
    );
  }

  return (
    <Layout>
      <NextSeo
        title="Nolp - Discover where you shouldn't go next"
        description="Discover where you shouldn't go next"
        canonical="https://nolp.vercel.app"
      />
      <HeroSection
        children={
          <BackgroundSlider
            images={[
              "images/clothesShop.jpg",
              "images/coffeeShop.jpg",
              "images/coffeeShop2.jpg",
              "images/handicraftShop.jpg",
            ]}
            duration={8}
            transition={2}
          />
        }
        icon={
          <>
            <img
              src="images/logo2.png"
              alt="LogoIcon"
              className="mx-auto"
              width="50"
              height="50"
            />
          </>
        }
        title="Separating the rest from the best"
        subtitle="Discover where you shouldn't go next"
      />
      <Box mt={8} mx="auto" maxW={"800px"} w="100%">
        {!data && loading ? (
          <div>loading...</div>
        ) : (
          <Stack spacing={8}>
            {data!.posts.posts.map((p) =>
              !p ? null : (
                <Flex key={p.id} p={5} shadow="md" borderWidth="1px">
                  <UpdootSection post={p} />
                  <Box flex={1}>
                    <NextLink href="/post/[id]" as={`/post/${p.id}`}>
                      <Link>
                        <Heading fontSize="xl">{p.title}</Heading>
                      </Link>
                    </NextLink>
                    <Text>posted by {p.creator.username}</Text>
                    <Flex align="center">
                      <Text flex={1} mt={4}>
                        {p.textSnippet}
                      </Text>
                      <Box ml="auto">
                        <EditDeletePostButtons
                          id={p.id}
                          creatorId={p.creator.id}
                        />
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              )
            )}
          </Stack>
        )}
        {data && data.posts.hasMore ? (
          <Flex>
            <Button
              onClick={() => {
                fetchMore({
                  variables: {
                    limit: variables?.limit,
                    cursor:
                      data.posts.posts[data.posts.posts.length - 1].createdAt,
                  },
                  // updateQuery: (
                  //   previousValue,
                  //   { fetchMoreResult }
                  // ): PostsQuery => {
                  //   if (!fetchMoreResult) {
                  //     return previousValue as PostsQuery;
                  //   }

                  //   return {
                  //     __typename: "Query",
                  //     posts: {
                  //       __typename: "PaginatedPosts",
                  //       hasMore: (fetchMoreResult as PostsQuery).posts.hasMore,
                  //       posts: [
                  //         ...(previousValue as PostsQuery).posts.posts,
                  //         ...(fetchMoreResult as PostsQuery).posts.posts,
                  //       ],
                  //     },
                  //   };
                  // },
                });
              }}
              isLoading={loading}
              m="auto"
              my={8}
            >
              load more
            </Button>
          </Flex>
        ) : null}
      </Box>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Index);
