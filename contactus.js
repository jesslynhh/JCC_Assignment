document.getElementById('form-contactus').addEventListener('submit', (e)=>{
    e.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const subject = document.getElementById('subject').value;
    const message= document.getElementById('message').value;
    const phonebox = document.getElementById('phonebox').checked;
    const emailbox = document.getElementById('emailbox').checked;
    const robot = document.getElementById('robot').checked;
    console.log(fullname, email, phonenumber, subject, message, phonebox, emailbox, robot);
    if(!fullname){
        alert('Name should be filled');
        return;
    }
    if(!email.endsWith('@gmail.com')){
        alert('Email must ends with @gmail.com');
        return
    }

    if(!phonenumber.startsWith('+62')){
        alert('Phone number must starts with +62');
        return;
    }

    if (subject === "subject"){
        alert("Please select an option for Subject!");
        return;
    }

    if(message.trim()=== ""){
        alert("Please enter a message in text area");
        return;
    }

    if(!phonebox && !emailbox){
        alert("Please pick at least one preferred method");
        return;
    }

    if(!robot){
        alert("Please check the 'I'm not a robot' checkbox");
        return
    }

    alert('Thank you for submitting!!');
    window.location.href = 'contactus.html';



})