import React from 'react'
import './BuiltContract.css'
import { useState } from 'react'

function BuiltContract() {
  const [msg, setMsg]=useState(null)

  const validateURL = ()=>{
    console.log("Submitted")
  }

  const onChangeFile=(e)=>{
    let files = e.target.files
    console.log(files)
    
    let reader =new FileReader();
    reader.readAsDataURL(files[0])

    reader.onload=(e)=>{
      // const url='backend/api';//axios or fetch
      // const formData= {file:e.target.result}
      // return post(url, formData)
      // .then(response=>console.log('result', response))
      console.log('data send successfully', e.target.result)
      setMsg('Uploaded successfully')

    }
  }
  
  return (
      <>
        <div className='built-container'>
            <h1 className='title'>Compliance Easy</h1>
        <div className='doc-container'>
        <div id="data-input">
          <div>
            <h4>Paste your Google Spreadsheet URL...</h4>
            <p>(<a href="https://docs.google.com/spreadsheets/d/1HFGm_cSH_XeZtxfREusftu-4S1LYZeAVSVjWMmsRHtY/copy" target="_blank" rel="noreferrer">make a copy</a>)</p>
            <div className="input-container">
              <div className="data-link-input">
                <form onSubmit={validateURL} className='form-container'>
                  <input type="text" className="form-control" placeholder="Paste your Google Spreadsheet URL here." />
                </form>
              </div>
              <h4>... or choose a file from your computer</h4>
              <p>(<a href="https://docs.google.com/spreadsheets/d/1HFGm_cSH_XeZtxfREusftu-4S1LYZeAVSVjWMmsRHtY/export?format=xlsx&gid=0">download sample</a>)</p>
              <div clasName="data-upload-input">
                <label className="custom-file">
                  <input type="file" className="custom-file-input" onChange={onChangeFile}/>
                  {/* <span class="custom-file-control">Choose file...</span> */}
                  <p>{msg}</p>
                </label>
              </div>
            </div>
          </div>
        </div>
  </div>
        </div>
    </>
  )
}

export default BuiltContract