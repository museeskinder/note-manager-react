const BASE_URL = 'http://localhost:200/notes/';
import axios from 'axios';

export class NoteApi {
    static async fetchAllNotes () {
        return (await axios.get(`${BASE_URL}`)).data;
    } 

    static async createNote(note) {
        return (await axios.post(`${BASE_URL}`, note)).data;
    };

    static async updateNote(note) {
        return (await axios.patch(`${BASE_URL}/${note.id}`, note)).data;
    };

    static async deleteNote(noteId) {
        return (await axios.delete(`${BASE_URL}/${noteId}`)).data;
    };
};