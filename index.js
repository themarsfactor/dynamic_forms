import form from "./form.js";


//console.log(form);



const formElement = document.createElement("form");


const submitBtn = document.createElement("button");
submitBtn.innerText = "Create User";
submitBtn.style.display = "block";
submitBtn.style.marginTop = "12px";

let formField;
form.forEach((form_data) =>{

   const formLabel = document.createElement("label");

    const allowed_flat_inputs = ["text", "email", "password"];


    if(allowed_flat_inputs.includes(form_data.type)){
        formField = document.createElement("input");
    }

   if(form_data.type == "select"){
        formField = document.createElement("select");

        const options = form_data.options;

        options.forEach((option) =>{
            let optionElement = document.createElement("option");

            optionElement.innerText = option.label;
            optionElement.value = option.value;

            formField.appendChild(optionElement);
        });

        


    }   

 
  


   formLabel.style.display = "block";
   formLabel.innerHTML = form_data.label




  let required = form_data.required;

  if(required == true){
      formField.required = "required";
  }


   formElement.appendChild(formLabel);
   formElement.appendChild(formField);




   formElement.appendChild(submitBtn);
    

});
document.getElementsByTagName('body')[0].appendChild(formElement);




