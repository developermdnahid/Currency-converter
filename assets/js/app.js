//      get element

const currency_form = document.getElementById('currency_form');
const msg = document.querySelector('.msg');
const details = document.querySelector('.msg-details');


//       form submit

currency_form.onsubmit = (e) => {
  e.preventDefault();


  //      get values

  let amount = currency_form.querySelector('input[name="amount"]');
  let currency = currency_form.querySelector('select[name="currency"]');


  if( amount.value == '' || currency.value == '' ){
    msg.innerHTML = setAlert('All fields are required');
  }else{

    let rate = 0 ;

    switch(currency.value){
      case 'USD' : 
        rate = 89 ;
        break;
      case 'CAD' : 
        rate = 70 ;
        break;
      case 'POUND' : 
        rate = 111 ;
        break;
      case 'EURO' : 
        rate = 95 ;
        break;
      case 'RUPEE' : 
        rate = 1.15 ;
        break;
    }


    let amount_final = Math.round(amount.value * rate);

    details.innerHTML = setAlert(`${amount.value} ${currency.value} = ${amount_final.toFixed(2)} BDT`, 'success');





  }






}