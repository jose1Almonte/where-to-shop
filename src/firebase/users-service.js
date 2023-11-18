import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "./config";



export async function createUserProfile(userId, data) {
    return setDoc(doc(db, 'users', userId), data)
}

export async function getUserProfile(email) {
    
    const userQuery = query(
        collection(db, 'users'),
        where('email', '==', email)
    ) //Busca en la colección de usuarios aquel que tenga el email igual al del parametro

    const results = await getDocs(userQuery); //obtiene los usuarios que estan en la lista de users (si existe, solo deberia de ser un usuario, si no existe, pues no hay nada)

    if (results.size > 0) {
        const users = results.docs.map(item => ({
            ...item.data(),
            id: item.id,
        }))
        const [user] = users;
        return user
    } else {
        return null
    }

}