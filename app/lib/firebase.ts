import { cert, initializeApp, getApps } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import { getStorage } from "firebase-admin/storage"
import "server-only"

// Certificado
const decodedPrivateKey = Buffer.from(
  process.env.AUTH_FIREBASE_PRIVATE_KEY as string,
  "base64"
).toString("utf-8")

export const firebaseCert = cert({
  projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
  clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
  privateKey: decodedPrivateKey,
})

// Instancia do app
if (!getApps().length) {
  initializeApp({
    credential: firebaseCert,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  })
}

export const db = getFirestore()

export const storage = getStorage().bucket()
