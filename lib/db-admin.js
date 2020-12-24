import { compareDesc, parseISO } from 'date-fns';
import { db } from './firebase-admin';

export async function getAllFeedback(siteId) {
  try {
    const snapshot = await db
      .collection('feedback')
      .where('siteId', '==', siteId)
      .get();

    const feedback = [];

    snapshot.forEach((doc) => {
      if (doc.exists) {
        feedback.push({ id: doc.id, ...doc.data() });
      }
    });
    feedback.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    return { feedback };
  } catch (err) {
    return { error };
  }
}

export async function getAllSites() {
  try {
    const snapshot = await db.collection('sites').get();

    const sites = [];

    snapshot.forEach((doc) => {
      if (doc.exists) {
        sites.push({ id: doc.id, ...doc.data() });
      }
    });

    return { sites };
  } catch (err) {
    return { error };
  }
}

export async function getUserSites(userId) {
  const snapshot = await db
    .collection('sites')
    .where('authorId', '==', userId)
    .get();

  const sites = [];

  snapshot.forEach((doc) => {
    if (doc.exists) {
      sites.push({ id: doc.id, ...doc.data() });
    }
  });

  return sites;
}
