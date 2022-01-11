import React, { Component } from 'react';

const NotesEditor = ({text, handleChange}) =>{
    return(
        <textarea value ={text} 
            onChange={(e)=>{ handleChange(e.target.value)}}
        />
    )
}

export default class NotesDetail extends Component{
    state = {
        isEditing: false,
        draftText: this.props.note.text,
        id: this.props.note.id
    }
    
    static getDerivedStateFromProps(props, state){

        //must return an object that describes any modifications to state
        if (props.note.id !== state.id){
            return {
                id: props.note.id,
                draftText: props.note.text
            };
        } else{
            return null;
        }
        
    }

    render(){
        // declares the className and Note variables 
        // and assigns them to the properties from this.props
        // where the name matches
        const {className, note} = this.props
        const {isEditing, draftText} = this.state;
        return(
            <div className={className}>
                {
                    isEditing ? <NotesEditor 
                        handleChange = {this._changeDraftText}
                        text={draftText} 
                    
                    /> : note.text
                    
                }
                <br/>
                <button onClick={this._toggleIsEditing}>Toggle</button>
                <button onClick={this._saveDraft}>Save</button>
            </div>
        )
    }

    _saveDraft = () =>{
        this.props.handleSave(this.state.id, this.state.draftText)
    }

    _changeDraftText = (newText) =>{
        this.setState({
            draftText: newText
        })
    }

    _toggleIsEditing = () =>{
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
}