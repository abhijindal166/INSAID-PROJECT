console.log("Hello")

let date=document.getElementById("date");

let cur_date=new Date();
let day=cur_date.getDate();
let year=cur_date.getFullYear();
let month=cur_date.getMonth();

console.log(day, month+1, year)
if (month+1<10){
    month="0"+month.toString();
}
let minDate=year+'-'+(month+1)+'-'+day
let maxDate=year+'-'+(month+1)+'-'+(day+3)

date.setAttribute("min",minDate)
date.setAttribute("max",maxDate)

function validate(){
    let fname=document.getElementById("fname");
    let sname=document.getElementById("sname");
    let email=document.getElementById("email");
    let phone=document.getElementById("phone");
  
    let message=document.getElementById("message");  

    if (fname.value.length <1){
        error_message.innerHTML="Enter a valid first name!"
        return;
    }
    if (sname.value.length <1){
        error_message.innerHTML="Enter a valid second name!"
        return;
    }
    


    if (email.value.indexOf("@")==-1 || email.value.length<7){
        error_message.innerHTML="Enter a valid email!"
        return;
    }

    if (phone.value.length!==10){
        error_message.innerHTML="Enter a valid phone number!"
        return;
    }
    if (message.value.length <1){
        error_message.innerHTML="Enter a valid message!"
        return;
    }
    console.log("First Name: "+fname.value,"Second Name: "+sname.value,"Email: "+email.value,"Phone: "+phone.value,  "Message: "+message.value);
    error_message.style.background="green"
    error_message.style.color="white"
    error_message.innerHTML="Your Message Has Been Sent!"

    fname.value="";
    sname.value="";
    message.value="";
    email.value="";
    phone.value="";
    
    alert("Form submitted successfully!")
}