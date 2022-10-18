import { getDatabase} from "firebase/database";
import { doc, setDoc} from "firebase/firestore";
import db from './firebase';
export default async function handler(req, res) {
    // Add a new document in collection "cities"
    // logsRef.set({
    //     temperature: 12,
    //     pressure: 222,
    //     altitude: 30.4
    // })
    await setDoc(doc(db, "cities", "new-city-id"), data);
    res.status(200).json({ name: 'John Doe' })
  
  }