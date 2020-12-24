import admin from 'firebase-admin';

const privateKey =
  process.env.NODE_ENV === 'development'
    ? process.env.FIREBASE_PRIVATE_KEY
    : JSON.parse(process.env.FIREBASE_PRIVATE_KEY);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL: 'https://fast-feedback-demo-7210a.firebaseio.com',
  });
}

const auth = admin.auth();
const db = admin.firestore();

export { auth, db };
