import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
   name: 'journal',
   initialState: {
       isSaving: false,
       messageSaved: '',
       notes: [],
       active: null, 
    //    active: {
    //     id: 'ABC123',
    //     title: '',
    //     body: '',
    //     date: 1234567,
    //     imageUrls: [], // https://foto1.jpg, https://foto2.jpg ...
    //    }
   },
   reducers: {
       creatingNewNote: ( state ) => {
            state.isSaving = true;
       },
       addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
       },
       setActiveNote: ( state, action ) => {
            state.active = action.payload;
       },
       setNotes: ( state, action ) => {
            state.notes = action.payload;
       },
       setSaving: ( state ) => {
          state.isSaving = true;
          // TODO: mensaje de error...
       },
       noteUpdated: ( state, action ) => {
          state.isSaving = false;
          const updatedNote = action.payload
          state.notes = state.notes.map((note) => {
               if (note.id === updatedNote.id) {
                    return updatedNote;
               }
               return note;
          });

          // TODO: mostrar mensaje de actualización
       },
       deleteNodeById: ( state, action ) => {

       },
    }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    creatingNewNote,
    deleteNodeById,
    setActiveNote,
    setNotes,
    setSaving,
    noteUpdated,
} = journalSlice.actions;