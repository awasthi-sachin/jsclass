// “You only live once, but if you do it right, once is enough.”

// var text1 =`“You only live once, but if you do it right, once is enough.”`;
// document.write(text1);


// “In order to write about life first you must live it.”– Ernest Hemingway

// var text2 =`<br><br><br>“In order to write about life first you must live it.”– Ernest Hemingway<br>`;
// document.write(text2);



 
 //  Two Line text in document
// console.log(`In order to write about life 
// first you must live it`);
  
 

//  Two Line text in console
// console.log(`In order to write about life 
// first you must live it`);


// let firstName = "sachin";
// let lastName = "awasthi";

// let fullName = `${firstName}    ${lastName}`;
// document.write(fullName);


// && --and -- both condition true
 // || --- or --- one of  ture


 let isverified = false
 let isLoggedIn = true
 let hasPaymentToken = true
 let isGuest = true

 if(isverified && isLoggedIn && hasPaymentToken) {
     console.log('Greeting message to user')
     console.log('Grant access to paid courese')

 } else if (isGuest || isverified) {
     console.log('Allow free courese')
 } else{
     console.log('Please contact to admin')
 }

 

