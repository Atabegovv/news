import { FirebaseApp, initializeApp } from 'firebase/app';
import {
    collection,
    getDocs,
    getFirestore,
    addDoc,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
    query,
    orderBy,
    limit,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { IPartnerArticle } from './types';
import { getAuth } from 'firebase/auth';

export let firebaseApp: FirebaseApp;

export const initializeAPI = (): FirebaseApp => {
    firebaseApp = initializeApp({
        apiKey: 'AIzaSyC5t0qq0Ei_cIKKSA7AXoOskkafl8NOmL8',
        authDomain: 'news-c74c8.firebaseapp.com',
        projectId: 'news-c74c8',
        storageBucket: 'news-c74c8.appspot.com',
        messagingSenderId: '572477197111',
        appId: '1:572477197111:web:983482f2170cb16911a8b2',
        measurementId: 'G-R8J3GK6CY3',
    });

    getFirestore(firebaseApp);
    getStorage(firebaseApp);
    getAuth(firebaseApp);
    return firebaseApp;
};

const partnersPostsCollection = 'partners-posts';

export const getPartnersArticles = async (): Promise<IPartnerArticle[]> => {
    const db = getFirestore();
    const articles: IPartnerArticle[] = [];

    try {
        const querySnapshot = await getDocs(collection(db, partnersPostsCollection));

        querySnapshot.forEach((doc) => {
            const data = doc.data() as Omit<IPartnerArticle, 'id'>;

            articles.push({
                id: doc.id,
                ...data,
            });
        });
    } catch (error) {
        return Promise.reject(error);
    }

    return articles;
};

export const createPartnerArticle = async (data: Omit<IPartnerArticle, 'id' | 'created'>): Promise<any> => {
    const db = getFirestore();

    try {
        await addDoc(collection(db, partnersPostsCollection), data);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const updatePartnerArticle = async (id: string, data: Omit<IPartnerArticle, 'id' | 'created'>): Promise<any> => {
    const db = getFirestore();
    const ref = doc(db, partnersPostsCollection, id);

    try {
        await updateDoc(ref, data);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const deletePartnerArticle = async (id: string): Promise<any> => {
    const db = getFirestore();
    const ref = doc(db, partnersPostsCollection, id);

    try {
        await deleteDoc(ref);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getPartnerArticle = async (id: string): Promise<IPartnerArticle> => {
    const db = getFirestore();
    const docRef = doc(db, partnersPostsCollection, id);

    try {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data() as Omit<IPartnerArticle, 'id'>;

            return {
                id: docSnap.id,
                ...data,
            };
        } else {
            throw Error('Такой статьи нет');
        }
    } catch (error) {
        return Promise.reject(error);
    }
};

export const uploadFile = async (file: File): Promise<string> => {
    const storage = getStorage();
    const storageRef = ref(storage, `${file.name}-${Date.now()}`);

    try {
        const snapshot = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);

        return url;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getMainPartnerArticle = async (): Promise<IPartnerArticle | null> => {
    const db = getFirestore();
    let article = null;

    try {
        const q = query(collection(db, partnersPostsCollection), orderBy('created', 'desc'), limit(1));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            const data = doc.data() as Omit<IPartnerArticle, 'id'>;

            article = {
                id: doc.id,
                ...data,
            };
        });
    } catch (error) {
        return Promise.reject(error);
    }

    return article;
};
