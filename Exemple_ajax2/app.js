document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);


const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
// Load Single Customer
function loadCustomer(e) {
    xhr.open('get','customer.json',true);
    xhr.onload = function () {
      var json = xhr.response;
      document.getElementById('customer').innerHTML = `<ul><li>
        ${json.id}
        <li>${json.name}</li>
        <li>${json.company}</li>
        <li>${json.phone}</li>
        </li></ul>`;
  }
  xhr.send();
}


// Load Customers
function loadCustomers(e) {
    xhr.open('get','customers.json',true);
    xhr.onload = function () {
        var json = xhr.responseText;
        var customers = JSON.parse(json);
        customers.forEach(function (index,value) {
            console.log(value);
        })
    }
    xhr.send();
}