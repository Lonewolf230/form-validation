
function checkForm(){
    let x=document.getElementById("name").value;
    let y=document.getElementById("e-mail").value;
    let radio=document.querySelector('input[name="exams"]:checked');
    let z=document.getElementById("Country").value;
    let w=document.getElementById("Program").value;
    let ph=document.getElementById("ph").value;
    let f1=document.getElementById("10th").files;
    let f2=document.getElementById("12th").files;
    let c1=document.getElementById("t&c1").checked;
    let c2=document.getElementById("t&c2").checked;
    let score=document.getElementById("score").value;
    if(!x.match(/^[a-zA-Z]+$/)){
        alert("Please enter a valid name");
        return false;
    }
    if(!y.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)){
        alert("Please enter a valid email-id");
        return false;
    }
    if(z===""){
        alert("Select a country");
        return false;
    }
    if(w===""){
        alert("Select a program");
        return false;
    }
    if(ph){
        let len=ph.length;
        if(z==="India"){
            if(len!=10)
                alert("Indian phone numbers should be of 10 digits");
        }
        if(z==="Pakistan"){
            if(len!=10)
                alert("Pakistani phone numbers should be of 10 digits");
        }
        if(z==="New Zealand"){
            if(len!=8)
                alert("Nz phone numbers should be of 8 digits");
        }
        if(z==="Australia"){
            if(len!=8)
                alert("Australian phone numbers should be of 8 digits");
        }
        if(z==="United States"){
            if(len!=7)
                alert("US phone numbers should be of 7 digits");
        }
        
    }
    if(f1.length==0 || f2.length==0){
        alert("Please upload the necessary markseets");
        return false;
    }
    
    if(score===null){
        alert("Please enter your EPT score");
        return false;
    }
    
    if(!(c1 && c2)){
        alert("Please agree to our terms and conditions");
        return false;
    }
}

function codegen(){
    let country=document.getElementById("Country").value;
    let Codes=document.getElementById("code");
    if(country==="India"){
        Codes.value="91";
    }
    else if(country=="Pakistan"){
        Codes.value=92;
    }
    else if(country=="New Zealand"){
        Codes.value=64;
    }
    else if(country=="Australia"){
        Codes.value=61;
    }
    else if(country=="United States"){
        Codes.value=1;
    }
}

function dispmark(){
    let select=document.querySelector("input[name='exams']:checked");
    if(select){
        document.getElementById("score").classList.add("visible");
    }
    
}
function removemark(){
    document.getElementById("score").classList.remove("visible");
}

function sizecheck(){
    let fileup1=document.getElementById("10th");
    let fileup2=document.getElementById("12th");
    if(fileup1.files[0].size>2097152){
        alert("Please upload files under 2Mb");
        document.getElementById("10th").value=null;
    }
    if(fileup2.files[0].size>2097152){
        alert("Please upload files under 2Mb");
        document.getElementById("12th").value=null;
    }
}