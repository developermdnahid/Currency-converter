/**
 * Alert function
 */

 const setAlert = (msg, type = 'danger') => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button data-bs-dismiss="alert" class="btn-close"></button></p>`;
}

//      Check value is number or not

const numberCheck = (num) => {
  
  let agePattern = /^[0-9]{1,3}$/;

  return agePattern.test(num);

}


//      Marriage Age Calculator


const marriageAgeCheck = (name, age, gender) => {
  if(gender == 'Male'){
    let marriage_age = 21;
    if(age >= marriage_age){
      return setAlert(`Hi ${name} vhaiya, Your marriage age is okey.` , 'success');
    }else{
      return setAlert(`Hi ${name} vhaiya, Your marriage age is not okey. You have to wait ${marriage_age - age} years`);
    }

  }else{
    let marriage_age = 18;
    if(age >= marriage_age){
      return setAlert(`Hi ${name} Apo, Your marriage age is okey.` , 'success');
    }else{
      return setAlert(`Hi ${name} Apo, Your marriage age is not okey. You have to wait ${marriage_age - age} years`);
    }




  }



};

