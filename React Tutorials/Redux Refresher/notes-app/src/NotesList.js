import React from 'react';
import styles from './NotesList.module.css'

const NotesListItem = ({id, text, handleClick}) =>{
    return(
        <li>
            <a  
                href="#"
                onClick ={(e)=>{
                    e.preventDefault();
                    console.log('you clicked');
                    handleClick(id);
                }}
            >
                {text}
            </a>
        </li>
    )
}

export default function NotesList({notes, className, handleSelection}){

    const items = notes.map(note => <NotesListItem id={note.id} text={note.title} handleClick={handleSelection}/>)
    //can also:
    // const items = notes.map(({title}) => <NotesListItem text={title}/>)
    
    return(
        <ul className={`${styles.notesList} ${className}`}>
            {items}
        </ul>
    )
}