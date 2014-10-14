/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){


    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.
        var dom ={
            name:document.querySelector("#f_username"),
            email:document.querySelector("#f_email"),
            phone:document.querySelector("#f_phone"),
            password:document.querySelector("#f_password"),
            ssn:document.querySelector("#f_ssn")

        };

        validateField(dom.name);  //id = is the form input field ID
        validateField(dom.email);
        validateField(dom.phone);
        validateField(dom.password);
        validateField(dom.ssn);

        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

        if (inputName.name === 'f_username'){
            var pattern = /[^A-Za-z0-9_@\.]|@{2,}|\.{5,}/;
        }else if(inputName.name=== 'f_email'){
            var pattern = /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/;
        }else if(inputName.name=== 'f_phone'){
            var pattern = /^[\\(]{0,1}([0-9]){3}[\\)]{0,1}[ ]?([^0-1]){1}([0-9]){2}[ ]?[-]?[ ]?([0-9]){4}[ ]*((x){0,1}([0-9]){1,5}){0,1}$/;
        }else if(inputName.name=== 'f_password'){
            var pattern = /^[a-zA-Z]\w{3,14}$/;
        }else {
            var pattern = /^\d{3}-\d{2}-\d{4}$/;




            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.


        };
        var pass = pattern.test(inputName.value);
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        console.log(pass);

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



