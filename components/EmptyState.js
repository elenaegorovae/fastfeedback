import { Heading, Flex, Text } from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <Flex
    minHeight="300px"
    direction="column"
    align="center"
    justify="center"
    backgroundColor="#fff"
    p={8}
    borderRadius="8px"
  >
    <Heading size="lg" as="h2" mb={2}>
      You haven't added any sites.
    </Heading>
    <Text mb={4}>Let's get started.</Text>
    <AddSiteModal>Add Your First Site</AddSiteModal>
  </Flex>
);

export default EmptyState;
