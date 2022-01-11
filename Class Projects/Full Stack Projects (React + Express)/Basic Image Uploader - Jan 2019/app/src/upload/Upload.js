import React, { Component } from 'react'
import uploadStyle from './Upload.css'
import Dropzone from '../Dropzone/Dropzone'
import Progress from '../Progress/progress'


class Upload extends Component {
    state ={
        files: [],
        uploading: false,
        uploadProgress: {},
        successfullyUploaded: false
    }

    onFilesAdded = files =>{
        this.setState(prevState =>({
            files:prevState.files.concat(files)
        }))
    }

    renderProgress = file =>{
        const uploadProgress = this.state.uploadProgress[file.name];
        if (this.state.uploading || this.state.successfullyUploaded){
            return(
                <div className={ uploadStyle.progressWrapper }>
                    <Progress progress={ uploadProgress ? uploadProgress.percentage : 0 }/>
                    <img
                        className={ uploadStyle.checkIcon }
                        alt= "done"
                        src= "baseline-check_circle_outline-24px.svg"
                        style = {{ opacity: uploadProgress && this.state.uploadProgress === 'done' ? 0.5 : 0 }}
                    /> 
                </div>
            )
        }
    }

    renderActions = () =>{
        if (this.state.successfullyUploaded){
            return(
                <button
                    onClick={()=>{
                        this.setState({ 
                            files: [], 
                            successfullyUploaded: false})
                    }}
                >
                    Clear
                </button>
            );
        } else {
            return(
                <button
                    disabled={ this.state.files.length < 0 || this.state.uploading }
                    onClick={ this.uploadFiles}
                >
                    Upload
                </button>
            );
        }
    }

    uploadFiles = async ()=> {
        this.setState({ uploadProgress: {}, uploading: true });
        const promises = [];
        this.state.files.forEach(file => {
            promises.push(this.sendRequest(file));
        });
        try {
            await Promise.all(promises);
            this.setState({ successfullyUploaded: true, uploading: false });
        } catch (e) {
            this.setState({ successfullyUploaded: true, uploading: false });
        }
      }

      sendRequest = file =>{
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
          
            req.upload.addEventListener("progress", event => {
             if (event.lengthComputable) {
              const copy = { ...this.state.uploadProgress };
              copy[file.name] = {
               state: "pending",
               percentage: (event.loaded / event.total) * 100
              };
              this.setState({ uploadProgress: copy });
             }
            });
             
            req.upload.addEventListener("load", event => {
             const copy = { ...this.state.uploadProgress };
             copy[file.name] = { state: "done", percentage: 100 };
             this.setState({ uploadProgress: copy });
             resolve(req.response)
            });
             
            req.upload.addEventListener("error", event => {
             const copy = { ...this.state.uploadProgress };
             copy[file.name] = { state: "error", percentage: 0 };
             this.setState({ uploadProgress: copy });
             reject(req.response);
            });
          
            const formData = new FormData();
            formData.append("file", file, file.name);
            req.open("POST", "http://localhost:8000/upload");
            req.send(formData);
           });
      }

    render() {
        return (
            <div className={ uploadStyle.Upload }>
                <span className={ uploadStyle.Title }>Upload Files</span>
                <div className={ uploadStyle.Content}>   
                    <Dropzone
                        onFilesAdded={ this.onFilesAdded }
                        disabled={ this.state.uploading || this.state.successfullyUploaded }
                    /> 
                </div>
                <div className={ uploadStyle.Files}>  
                    {this.state.files.map(file =>{
                        return(
                            <div key={ file.name } className= { uploadStyle.row }>
                                <span className={ uploadStyle.fileName }>{ file.name }</span>
                                { this.renderProgress(file) }
                            </div>
                        )
                    })}  
                </div>
                <div className={ uploadStyle.Actions}>  
                    { this.renderActions() }
                </div>               
            </div>    
        )
    }
}

export default Upload;