import React, { Component, PropTypes } from 'react'
import { Link,browserHistory } from 'react-router'
var Select = require('react-select');
//import InfiniteScroll from 'react-infinite-scroll-component';
//var Slider = require('react-slick');
var $ = require ('jquery');
import ReactDataGrid from 'react-data-grid';

 

const rows = [];
var options = [];
 
const rowGetter = rowNumber => rows[rowNumber];

export default class RepoPage extends Component {
 
  constructor (props) {
    super(props);
     /*$.get("http://192.168.1.67:9000/api/categories").done((res) => {
      console.log(res);
     
          this.categories = res;
       
     });*/
    
   // this.getAllArticale(); 
   
  }

/*getAllArticale(){

}*/

logChange(val) {
  console.log("Selected: " + val);

}


getOptions(input, callback) {
  setTimeout(function() {

     $.get("http://192.168.1.67:9000/api/categories").done((res) => {
      console.log(res);
       this.categories = res;
      for(var i=0;i<this.categories.length;i++){
                options.push({"value":this.categories[i]._id,"label":this.categories[i].name});
            }
         
       
          callback(null, {
           
    
      options: options,
     
      complete: true
    });
       
     });
    
  }, 500);
};

saveArticle(){
   var data = {
               articleName  : $(".articleName").val(),
               description  : $(".description").val(),
               body  : $(".body").val(),
               categorie : $(".categorie").val(),
              
           };

           console.log("data----",data);
           $.post("http://192.168.1.67:9000/api/article/save",data).done((res) => {
           console.log("lead...........");
           //console.log(res.res);
           
          
          // this.setState();
          
        }); 
}

BackPage(){
    browserHistory.push('/articleGrid');
}


  render() {

/*    $(".save-article").on('click', function () {
           var data = {
               articleName  : $(".articleName").val(),
               description  : $(".description").val()
               //body  : $(".body").val(),
               //categorie : $(".categorie").val(),
              
           };

           console.log("data----",data);
        $.post("http://192.168.1.67:9000/api/article/save",data).done((res) => {
           console.log("lead...........");
           //console.log(res.res);
           
          
          // this.setState();
          
        }); 

         
           
       });*/

    return (
      
      <div style={{"margin-top":"80px"}}>
        <div className="themeA-container">
            <div className="row">
            <div className="col-md-2" style={{"margin-top" : "5px"}}>
                 
               
            </div>
             <div className="col-md-8" style={{"margin-top" : "5px"}}>
              <div className="general-box">
                     <div className="col-md-12">
               <h1>Create Article </h1>

            </div>
            <hr></hr>
            <div className="form-group col-md-12">
               <div className="col-md-4">
                    <label>Article Name</label>
               </div>
               <div className="col-md-8">
                    <input type="text" className="form-control articleName col-md-8" name="articleName"/>
               </div>
            </div>
            <div className="form-group  col-md-12">
               <div className="col-md-4">
                    <label>Description :</label>
               </div>
               <div className="col-md-8">
                    <input type="text" className="form-control description col-md-8" name="description"/>
               </div>
            </div>
            <div className="form-group  col-md-12">
               <div className="col-md-4">
                    <label>Categorie :</label>
               </div>
               <div className="col-md-8">
                   <Select.Async className="categorie" 
    name="form-field-name" simpleValue="true"
    onChange={this.logChange}
    loadOptions={this.getOptions}
/>
               </div>
            </div>
            <div className="form-group col-md-12">
               <div className="col-md-4">
                    <label>Body :</label>
               </div>
               <div className="col-md-8">
                     <textarea name="body" className="form-control body"/>
               </div>
            </div>
            <div className="form-group  col-md-12" style={{"textAlign":"right"}}>
            <button
        className="btn btn-default" style={{"marginRight":"10px"}} onClick={this.BackPage.bind()}
       >Close</button>
                <button
        className="btn btn-default save-article" onClick={this.saveArticle.bind()}
       >Save</button>
            </div>
              </div>
             </div> 
            <div className="col-md-2" style={{"margin-top" : "5px"}}>
                 
               
            </div>
              
            <div className="col-md-12" style={{"margin-top" : "5px"}}>
                
            </div>
           

           
           </div>
         </div>
      </div>
       
    )
  }
}


