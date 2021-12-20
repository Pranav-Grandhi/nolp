import React from "react";
import { Box, Flex, Button } from "@chakra-ui/core";
import NextLink from "next/link";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
  const [logout, { loading: logoutFetching }] = useLogoutMutation();
  const apolloClient = useApolloClient();
  const { data, loading } = useMeQuery({
    skip: isServer(),
  });

  let body = null;

  // data is loading
  if (loading) {
    // user not logged in
  } else if (!data?.me) {
    body = (
      <>
        <div className="hidden lg:flex items-center justify-end -mr-4">
          <NextLink href="/login">
            <a className="flex items-center px-4 md:px-5 py-3.5 text-sm font-medium text-black hover:text-red-500 focus:text-red-500 focus:outline-none focus-visible:shadow-none">
              Sign in
            </a>
          </NextLink>
          <NextLink href="/register">
            <a className="flex items-center px-4 md:px-5 py-3.5 text-sm font-medium text-black hover:text-red-500 focus:text-red-500 focus:outline-none focus-visible:shadow-none">
              Sign up
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current ml-1.5 -mr-0.5"
              >
                <path
                  clipRule="evenodd"
                  d="M9.53 4.47L14.06 9l-4.53 4.53-1.06-1.06L12.14 9 8.47 5.53l1.06-1.06z"
                ></path>
                <path
                  clipRule="evenodd"
                  d="M3 8.25l9.5.1v1.3l-9.5.1v-1.5z"
                ></path>
              </svg>
            </a>
          </NextLink>
        </div>
      </>
    );
    // user is logged in
  } else {
    body = (
      <Flex align="center">
        <NextLink href="/create-post">
          <a className="relative flex items-center justify-center font-semibold text-center focus-visible:shadow-blue-ring select-none text-sm rounded-md py-2 my-auto px-4 bg-black bg-opacity-10 text-black hover:bg-opacity-5 hover:text-foreground-600">
            Create Post
          </a>
        </NextLink>
        <button
          onClick={async () => {
            await logout();
            await apolloClient.resetStore();
          }}
          className="ml-4 md:ml-5 relative flex items-center justify-center font-semibold text-center focus-visible:shadow-blue-ring select-none text-sm rounded-md py-2 my-auto px-4 bg-black bg-opacity-10 text-black hover:bg-opacity-5 hover:text-foreground-600"
        >
          logout
        </button>
        <div className="flex items-center">
          <p className="flex items-center pl-4 md:pl-5 py-3.5 text-sm font-medium text-black focus:text-red-500 focus:outline-none focus-visible:shadow-none">
            {data.me.username}
          </p>
        </div>
      </Flex>
    );
  }

  return (
    <>
      <header className="relative py-3 z-20 shadow">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="relative h-auto lg:h-auto flex justify-between ">
            <div className="flex items-center justify-start">
              <NextLink href="/">
                <a className="rounded-lg flex p-2 -ml-2 hover:opacity-75">
                  <img
                    src="/images/logo.svg"
                    alt="Logo"
                    style={{ height: "32px" }}
                  />
                </a>
              </NextLink>
            </div>
            {body}
          </div>
        </div>
      </header>
    </>
  );
};
