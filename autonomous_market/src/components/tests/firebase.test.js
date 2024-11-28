import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { firebaseConfig } from '../../firebaseConfig';

global.setImmediate = (callback) => setTimeout(callback, 0);

describe('Firebase Communication', () => {
  let app;
  let db;

  beforeAll(() => {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  });

  test('should write and read from Firestore', async () => {
    const testDocRef = doc(db, "testCollection", "testDoc");
    const testData = { testField: "testValue" };

    await setDoc(testDocRef, testData);

    const docSnap = await getDoc(testDocRef);
    const data = docSnap.data();

    expect(data).toEqual(testData);
  });

  test('should update a document in Firestore', async () => {
    const testDocRef = doc(db, "testCollection", "testDoc");
    const initialData = { testField: "initialValue" };
    const updatedData = { testField: "updatedValue" };

    await setDoc(testDocRef, initialData);

    await setDoc(testDocRef, updatedData);

    const docSnap = await getDoc(testDocRef);
    const data = docSnap.data();

    expect(data).toEqual(updatedData);
  });

  test('should delete a document from Firestore', async () => {
    const testDocRef = doc(db, "testCollection", "testDoc");
    const testData = { testField: "testValue" };

    await setDoc(testDocRef, testData);

    await deleteDoc(testDocRef);

    const docSnap = await getDoc(testDocRef);

    expect(docSnap.exists()).toBe(false);
  });
});