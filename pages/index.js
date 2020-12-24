import Head from 'next/head';
import NextLink from 'next/link';
import { Button, Flex, Link, Stack, Text } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import { GithubIcon, GoogleIcon, LogoIcon } from '@/styles/theme';

export default function Home() {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('fastfeedback-auth')) {
                window.location.href = "/dashboard"
              }
            `,
          }}
        />
        <title>Fast Feedback</title>
      </Head>

      <LogoIcon w={16} h={16} />
      <Text px={8} py={6} mb={6} fontSize="lg" maxW="full" w="420px">
        <Text as="span" fontWeight="bold">
          Fast Feedback
        </Text>{' '}
        is being built as part of{' '}
        <Link
          href="https://react2025.com"
          isExternal
          textDecoration="underline"
        >
          React 2025
        </Link>
        . It's the easiest way to add comments or reviews to your static site.
      </Text>
      {auth.user ? (
        <Button
          fontWeight="medium"
          variant="outline"
          backgroundColor="white"
          color="gray.900"
          size="lg"
          _hover={{ bg: 'gray.100' }}
          _active={{ bg: 'gray.200', transform: 'scale(0.95)' }}
        >
          <NextLink href="/dashboard">View Dashboard</NextLink>
        </Button>
      ) : (
        <Stack spacing={4}>
          <Button
            fontWeight="medium"
            backgroundColor="gray.900"
            color="white"
            size="lg"
            _hover={{ bg: 'gray.700' }}
            _active={{ bg: 'gray.800', transform: 'scale(0.95)' }}
            leftIcon={<GithubIcon />}
            onClick={() => auth.signInWithGithub()}
          >
            Sign In with Github
          </Button>
          <Button
            fontWeight="medium"
            variant="outline"
            backgroundColor="white"
            color="gray.900"
            size="lg"
            _hover={{ bg: 'gray.100' }}
            _active={{ bg: 'gray.200', transform: 'scale(0.95)' }}
            leftIcon={<GoogleIcon />}
            onClick={() => auth.signInWithGoogle()}
          >
            Sign In with Google
          </Button>
        </Stack>
      )}
    </Flex>
  );
}
