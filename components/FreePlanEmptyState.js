import { Heading, Box, Text, Button } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box backgroundColor="#fff" p={8} borderRadius="8px">
      <Heading size="md" as="h2">
        Get feedback on yout site instantly.
      </Heading>
      <Text>Start today, then grow with us</Text>
      <Button variant="solid" size="md">
        Upgrade to startter
      </Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
