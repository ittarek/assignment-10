import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Worker,Viewer } from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from "@react-pdf-viewer/default-layout";

import  '@react-pdf-viewer/core/lib/styles/index.css';
import "@react-pdf-Viewer/default-layout/lib/styles/index.css";



const ReactPdf = () => {
 const [pdfFile ,setPdfFile ] = useState(null)
 const [viewPdf, setViewPdf] = useState(null)
 const fileType = ['application/pdf']
 const handleChange = e =>{
          let selectedFile = e.target.files[0]
          if(selectedFile){
              if(selectedFile && fileType.includes(selectedFile.type)){
                    let reader = new FileReader() 
                    reader.readAsDataURL(selectedFile) 
                    reader.onload= (e) =>{
                              setPdfFile(e.target.result)
                    }
              } else{
                    setPdfFile(null);

              }  
             
          }   else{ console.log("please  selected");
                    
          } 
 }

 const handleSubmit = (e) =>{
e.preventDefault();

if(pdfFile !== null) {
          setViewPdf(pdfFile)
}else{
          setViewPdf(null)
}
 }
const newPlugin = defaultLayoutPlugin()
 
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="file" name="" id="" className="form-control" />
        <Button  type="submit" > view pdf</Button>
      </Form>
      <h2>View pdf</h2>


      <div className="pdf-container">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">{
          viewPdf  && <> <Viewer fileUrl = {viewPdf} plugins = {[newPlugin]} /> </>} {!viewPdf && <> no pdf</> }
      
      
      
      
      </Worker>;
      </div>
    </Container>
  );
};

export default ReactPdf;
