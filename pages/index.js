import Head from 'next/head';
import Link from 'next/link';
import { Button, Flex } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import { LogoIcon } from '@/styles/theme';

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

      <LogoIcon w={16} h={16} mb={4} />
      {auth.user ? (
        <Button>
          <Link href="/dashboard">View Dashboard</Link>
        </Button>
      ) : (
        <Button size="sm" onClick={() => auth.signInWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
}
