import { Flex, Link } from '@chakra-ui/react';

export default function FeedbackLink({ siteId }) {
  return (
    <Flex justify="space-between" mt={1} mb={8} w="full">
      <Link fontWeight="bold" fontSize="sm" href={`/p/${siteId}`}>
        Leave a comment
      </Link>
      <Link fontSize="xs" color="blackAlpha.500" href="/">
        Powered by Fast Feedback
      </Link>
    </Flex>
  );
}
