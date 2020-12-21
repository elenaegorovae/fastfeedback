import db from '@/lib/firebase-admin';

export default function getSites(req, res) {
  return db
    .collection('sites')
    .get()
    .then((snapshot) => {
      const sites = [];

      snapshot.forEach((doc) => {
        if (doc.exists) {
          sites.push({ id: doc.id, ...doc.data() });
        }
      });

      res.status(200).json({ sites });
    })
    .catch((err) => {
      console.error('Error getting document', err);
    });
}
