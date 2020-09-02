
var firebaseConfig = {
    apiKey: "AIzaSyCu223FP0ZWyGtlYXW9uI023CsSj8owNX4",
    authDomain: "wallpaper-2298d.firebaseapp.com",
    databaseURL: "https://wallpaper-2298d.firebaseio.com",
    projectId: "wallpaper-2298d",
    storageBucket: "wallpaper-2298d.appspot.com/",
    messagingSenderId: "261484598733",
    appId: "1:261484598733:web:a5d2c7b4818a2d37972084",
    measurementId: "G-31MR8GRM7K"
  };

  firebase.initializeApp(firebaseConfig);

    firebase.auth.Auth.Persistence.LOCAL; 

    $("#btn-login").click(function(){
        
        var email = $("#email").val();
        var password = $("#password").val(); 

        var result = firebase.auth().signInWithEmailAndPassword(email, password);
    
        result.catch(function(error){
            var errorCode = error.code; 
            var errorMessage = error.message; 

            console.log(errorCode);
            console.log(errorMessage);
        });

    });

    $("#btn-logout").click(function(){
        firebase.auth().signOut();
    });

    function switchView(view){
        $.get({
            url:view,
            cache: false,  
        }).then(function(data){
            $("#container").html(data);
        });
    }