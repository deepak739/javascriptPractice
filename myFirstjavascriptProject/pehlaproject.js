
// let firstName = document.getElementById('firstname')
// let saveMessage = document.getElementById('saveButton');
// saveMessage.addEventListener('click', function(){
//     console.log(firstName);
//     if(firstName.value.trim() === " ")
// {
//     alert("Please enter the first name")
// }
// else{
//     alert("Saved Successfully");
// }
    
// });

//console.log(firstName);

document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    let firstName = document.getElementById('firstname');
    let saveMessage = document.getElementById('saveButton');

    saveMessage.addEventListener('click', function(event){
        console.log(firstName.value);

        if(firstName.value.trim() === "") {
            alert("Please enter the first name");
            event.preventDefault();
        } else {
            alert("Saved Successfully");
            event.preventDefault();
        }
    });
});






