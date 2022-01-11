import React, { Component } from 'react';
import NotesList from './NotesList'
import NotesDetails from './NotesDetails'

import styles from './NotesApp.module.css'

export default class NotesApp extends Component{
    
    state ={
        selectedNote: '1001',
        notes: [
            {
                id: '1001',
                title: 'first note',
                text: 'this is the first note'
            },
            {
                id: '1002',
                title: 'second note',
                text: 'this is the second note'
            },
            {
                id: '1003',
                title: 'third note',
                text: 'this is the third note'
            }
        ]
    }

    render(){
        const theNote = this.state.notes.find(note => this.state.selectedNote === note.id);
        return(
            <div className={styles.app}>
                <NotesList 
                    className={styles.list}
                    notes={this.state.notes}
                    handleSelection={this._selectNote}
                />
                <NotesDetails 
                    className={styles.detail} 
                    note={theNote}
                    handleSave ={this._updateNote}
                />
            </div>
        )

    }

    _selectNote = (id) => {
        //choose a note to show
        this.setState({
            selectedNote: id
        })

    }

    _updateNote = (idToUpdate, newText) =>{
        const updatedNotes1 = this.state.notes.map(note => {
            if(note.id === idToUpdate){
                return {
                    ...note,
                    text: newText
                }
            }else{
                return {
                    ...note
                };
            }
        })
        this.setState({
            notes: updatedNotes1    
        });
    }
            //====================================================================================

            // const updatedNotes2 = this.state.notes.filter(
            //     note => {
            //         return note.id !== idToUpdate
            //     })
            //     const theNoteToUpdate = this.state.find(note => note.id ===idToUpdate);
            //     this.setState({
            //         notes:[
            //             ...updatedNotes2,
            //             {
            //                 ...theNoteToUpdate,
            //                 text: newText
            //             }
            //         ]
            //     });
                // //Alternatively
                // this.setState({
                //     notes:updatedNotes2.concat({
                //         ...theNoteToUpdate,
                //         text: newText
                //     })
                // })

            
        
    
}

