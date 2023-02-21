

    var srchItm = window.location.search;
   var urlParams = new URLSearchParams(srchItm);
    
    var userName= urlParams.get('name')
    var address= urlParams.get('address')
    var item_name= urlParams.get('item-name')
    var quantity= urlParams.get('quantity')
    var details=urlParams.get('details')
    var amount=urlParams.get('price')

   var greet= document.getElementById("greeting")
   greet.innerHTML=`
          Greetings! ${userName}
   `
       
    var OrderNo= Math.floor(Math.random() * 9000 + 1000);

    var mainDiv= document.getElementById("slip")
 mainDiv.innerHTML=`
 <h1> Receipt :</h1>
 <h2> Order No : #${OrderNo}</h2>
 <h2> Name : ${userName} </h2> 
  <h2> Address : ${address} </h2> 
  <h2> Item Name : ${item_name} <h2>
  <h2> Quantity : ${quantity} <h2>
  <h2> Total Amount : ${amount} <h2>

  `
