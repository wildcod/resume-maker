import React, { Component } from 'react';
import Layout from '../Layout/Layout'
import * as firebase from 'firebase';
import 'firebase/firestore'

  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: 'AIzaSyAVqePDFsuvuFpHnMsQzRPEjpvQztk0THw',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    storageBucket: 'gs://myfirstapp-a061c.appspot.com/'
  };
  firebase.initializeApp(config);

  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();


class Main extends Component {

  state = {
       FullName : "Sahil Arya",
       Experience : {
                //  JobTitle : "Job-title",
                // Company : "Google",
                // StartDate : "01/12/2015",
                // EndDate : "01/12/2017"
       },
       temp : "",

       JobTitle : "Job-title",
       Address : "New Delhi ,India",
       Company : "Google",
       StartDate : "01/12/2015",
       EndDate : "01/12/2017",
       Description : ` Summarize your key responsibilities, leadership, and most stellar accomplishments. 
                         Dont list everything keep it relevant and include data that shows the impact `,


       Education : "type your eduction qualification...",
       Institution : "Ambedkar institute of Advanced Communication Technologies and Research",
       Degree : "B-Tech",
       Year : "2020",
       Location : "Geeta Calony,New Delhi",
       DescriptionEdu : ` Summarize your key responsibilities, leadership, and most stellar accomplishments. 
                         Dont list everything keep it relevant and include data that shows the impact `,

       Project :` Summarize your key responsibilities, leadership, and most stellar accomplishments. 
               Dont list everything keep it relevant and include data that shows the impact `,


      Certificate :` Summarize your key responsibilities, leadership, and most stellar accomplishments. 
               Dont list everything keep it relevant and include data that shows the impact `,

      Objective : `To enhance my working capacities, professional skills, business efficiencies and 
                   to serve my organization in best possible way with sheer determination and commitment..`,

       

       Skills : ["C++", "Java","python"],
       ContactInformation : "type your contact information...",
       Email : 'kanojias494@gmail.com',
       ResAddress : 'C-131 Ashok Hotel Staff Quarter Chanakya Puri , New Delhi',
       Phone : '7042989596',
       Photo : null,
       Url : null
  }



   allChangeHandler = (e) => {
      const {name,value} = e.target
      this.setState({ [name] : value})
   }

 




SkillsChangedHandler = () => {

 let OldSkills = this.state.Skills
 console.log("old" + OldSkills)

  OldSkills.push(this.state.temp)
  console.log("new " +OldSkills)
  this.setState({
       Skills: OldSkills,
       temp : ""
  })
}

DeleteSkillsChangedHandler = () => {
  
  let OldSkills = this.state.Skills
  console.log("old" + OldSkills)
   OldSkills.pop()
   console.log("new " +OldSkills)
   this.setState({
        Skills: OldSkills
   })
 }



PhotoChangedHandler = (event) => {
     
 
  this.setState({
      Photo : event.target.files[0]
  })  


  var file = event.target.files[0];

  console.log(file)

 // create a storage ref
  var storageRef = firebase.storage().ref('sahil/' + file.name);
  
  // upload file
  var task = storageRef.put(file);

  task.on('state_changed',
          function progress (snapshot) {
             var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
             var uploader = document.getElementById('uploader')
             uploader.value = percentage;
          },
          function error (err){

          },
          function complete (){

          }
)

 
}

uploadPhotoHandler = () => {
  
  // // get file
  var file = this.state.Photo;

  console.log(file)

 // create a storage ref
  var storageRef = firebase.storage().ref('sahil/' + file.name);
  
  // upload file
  storageRef.put(file);


  // Download the url only

  var gsReference = storage.refFromURL('gs://myfirstapp-a061c.appspot.com/')


  gsReference.child('sahil/'+ file.name).getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    var img = document.getElementById('myimg');
    img.src = url;

  }).catch(function(error) {
    // Handle any errors
  });
  

}




//database part

DbNameChangedHandler = () => {
      console.log("hi from db")
    // Initialize Cloud Firestore through Firebase
      let db = firebase.firestore();
      
      let name = this.state.FullName;

     // Add a new document in collection "cities"
        db.collection("Users").doc("one").set({
          Name : name
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });

      // Get data from firebase
      var docRef = db.collection("Users").doc("one");

        docRef.get().then(function(doc) {
            if (doc.exists) {
              let name = doc.data().Name;
              console.log(name);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

        this.setState({
          FullName : name
  })

}


  render() {
    return ( 

      <div className="App">
       <Layout
       State = {this.state}
       AllChange = {this.allChangeHandler}
       DbNameChange = {this.DbNameChangedHandler}
       PhotoChange = {this.PhotoChangedHandler}
       uploadPhoto = {this.uploadPhotoHandler}
       DeleteSkillsChange = {this.DeleteSkillsChangedHandler}
       />
      </div>
      
    );
  }
}

export default Main;
