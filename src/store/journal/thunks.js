import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, creatingNewNote, setActiveNote } from "./journalSlice";

export const startNewNote = () => {
    return async( dispatch, getState ) => {

        // Todo: tarea dispatch
        dispatch ( creatingNewNote() );

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );
        const setDocResp = await setDoc( newDoc, newNote );

        newNote.id = newDoc.id
        

        dispatch ( addNewEmptyNote( newNote ) );
        dispatch ( setActiveNote( newNote ) );
    }
}