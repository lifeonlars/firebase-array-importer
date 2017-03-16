// Initialize Firebase (copy and paste your Firebase web config settings from your Firebase Console here)
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);



$(document).ready(function() {
  $('.btn-import').on('click',function(){

    // Clear progress list before importing another script
    $('#progress').html('');

    var fileInput = $('#fileInput')[0];
    var dbRef     = $('#firebaseRef').val();
    var file      = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
      var db = firebase.database();
      var ref = db.ref(dbRef);
      var jsonData = JSON.parse(reader.result);
      var arrayLength = jsonData.length;
        for (var i = 0; i < arrayLength; i++) {
          var newItem = ref.push(jsonData[i]);
          $('#summary').append('<li>New entity '+i + ' pushed to Firebase '+newItem+'</li>' )
          //console.log(newItem.key);
        };
    }
    reader.readAsText(file);

  });

});