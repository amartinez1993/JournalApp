import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, creatingNewNote, setActiveNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";

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


export const startLoadingNotes = () => {
    
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        if ( !uid ) throw new Error('UID doesnt exists')

        const notes = await loadNotes( uid );

        dispatch( setNotes( notes ) );
    }

}