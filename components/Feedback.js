import { Box, Heading, Text, Divider } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';

export default function Feedback({ author, text, createdAt }) {
  return (
    <Box borderRadius={4} maxWidth="full" w="700px">
      <Heading size="sm" as="h3" mb={0} fontWeight="medium" color="gray.900">
        {author}
      </Heading>
      <Text color="gray.500" mb={4} fontSize="xs">
        {format(parseISO(createdAt), 'PPpp')}
      </Text>
      <Text color="gray.800">{text}</Text>
      <Divider my={6} borderColor="gray.200" backgroundColor="gray.200" />
    </Box>
  );
}
