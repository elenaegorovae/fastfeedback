import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth';
import { getAllFeedback, getAllSites } from '@/lib/db-admin';
import { createFeedback } from '@/lib/db';

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';
import Feedback from '@/components/Feedback';

export default function SiteFeedback({ initialFeedback }) {
  const auth = useAuth();
  const router = useRouter();
  const inputEl = useRef(null);
  const [allFeedback, setAllFeedback] = useState(initialFeedback);
  const toast = useToast();

  const onSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      author: auth.user.name,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      createdAt: new Date().toISOString(),
      text: inputEl.current.value,
      provider: auth.user.provider,
      status: 'pending',
    };

    createFeedback(newFeedback)
      .then((docRef) => {
        setAllFeedback((prev) => [{ id: docRef.id, ...newFeedback }, ...prev]);
      })
      .catch((err) => {
        toast({
          title: 'An error occurred.',
          description: 'Unable to add comment.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        console.error(err);
      });
  };

  return (
    <Flex direction="column" maxW="full" w="700px" m="0 auto">
      <form onSubmit={onSubmit}>
        <FormControl my={8}>
          <FormLabel htmlFor="comment">Comment</FormLabel>
          <Input type="text" mb={2} ref={inputEl} />
          <Button
            type="submit"
            fontWeight="medium"
            backgroundColor="gray.900"
            color="white"
            _hover={{ bg: 'gray.700' }}
            _active={{ bg: 'gray.800', transform: 'scale(0.95)' }}
          >
            Add Comment
          </Button>
        </FormControl>
      </form>
      {allFeedback.map((feedback) => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </Flex>
  );
}

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);

  return {
    props: {
      initialFeedback: feedback,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map((site) => ({ params: { siteId: site.id } }));

  return {
    paths,
    fallback: false,
  };
}
