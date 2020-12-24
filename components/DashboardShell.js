import NextLink from 'next/link';
import { Flex, Link, Stack, Avatar, Button } from '@chakra-ui/react';
import { LogoIcon } from '@/styles/theme';
import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <Flex flexDirection="column" height="100vh">
      <Flex
        justifyContent="space-between"
        backgroundColor="#fff"
        alignItems="center"
        py={4}
        px={8}
      >
        <Stack spacing={4} isInline alignItems="center">
          <NextLink href="/" passHref>
            <Link>
              <LogoIcon w={8} h={8} />
            </Link>
          </NextLink>
          <NextLink href="/dashboard" passHref>
            <Link>Sites</Link>
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link>Feedback</Link>
          </NextLink>
        </Stack>
        <Flex alignItems="center">
          {user && (
            <Button variant="ghost" mr={2} onClick={() => signout()}>
              Log Out
            </Button>
          )}
          <Avatar size="sm" src={user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor="blackAlpha.50" justify="center" flex="1">
        <Flex maxWidth="full" width="800px" flexDirection="column" p={8}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
