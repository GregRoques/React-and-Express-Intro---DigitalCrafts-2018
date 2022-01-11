const IncomingForm = require ('formidable').IncomingForm
    //IncomingForm is a class from the Formidable Library

module.exports = upload = (req,res) =>{
    var form = new IncomingForm()

    form.on('file', (field, file) =>{
    })
    form.on('end', ()=>{
        res.json()
    })
    form.parse(req)
}