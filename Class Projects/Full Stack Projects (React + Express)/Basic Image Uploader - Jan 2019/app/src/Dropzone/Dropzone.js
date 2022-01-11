import React, { Component, createRef } from 'react'
import dropzoneStyle from './Dropzone.css'

class Dropzone extends Component {

    state = {
        highlight: false
    }

    fileInputRef = createRef();

    openFileDialog = () =>{
        if(this.props.disabled) return;
        this.fileInputRef.current.click();
    }

    onFilesAdded = e =>{
        if (this.props.disabled) return;
        const files = e.target.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array)
        }
    }
    
    fileListToArray = list =>{
        const array =[];
        for (var i = 0; i <list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }

    onDragOver = e =>{
        e.preventDefault();
        if (this.props.disabled) return;
        this.setState({ hightlight: true });
    }
    
    onDragLeave = () =>{
        this.setState({ highlight: false })
    }

    onDrop = e =>{
        if (this.props.disabled) return;
        const files = e.dataTransfer.files;
        if (this.props.onFilesAdded){
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
        this.setState({ highlight: false })
    }
    

    render () {
        return (
            <div 
                className={ ` ${ dropzoneStyle.Dropzone } this.state.highlight ? ${ dropzoneStyle.highlight } : '' `}
                onDragOver={ this.onDragOver }
                onDragLeave={ this.onDragLeave }
                onDrop={ this.onDrop }
                onClick={ this.openFileDialog }
                style={ { cursor: this.props.disabled ? 'default' : 'pointer' }}
            >
                <img
                    alt="upload"
                    className={ dropzoneStyle.Icon }
                    src="baseline-cloud_upload-24px.svg" 
                />
                <input
                    ref={ this.fileInputRef }
                    className= { dropzoneStyle.fileInput }
                    type='file'
                    multiple
                    onChange= { this.onFilesAdded }
                />
                <span>Upload Files</span>
            </div>
        );
    }
}

export default Dropzone;