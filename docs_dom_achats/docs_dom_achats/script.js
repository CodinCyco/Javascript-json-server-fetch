// document.getElementById()
//console.log(document.getElementById('produtInput'));
// // Get things from the element
// console.log(document.getElementById('produtInput').id);
// console.log(document.getElementById('produtInput').className);
// const labelP = document.getElementById('label-product');
// // // Change styling
// //labelP.style.background = '#333';
// labelP.style.color = '#33f';
// labelP.style.padding = '5px';
// //labelP.style.display = 'none';
// // // Change content
// labelP.textContent = 'My product';
// //labelP.innerText = 'My products';
// labelP.innerHTML = '<span style="color:red">Products List</span>';
//// document.querySelector()
//console.log(document.querySelector('#produtInput'));
//console.log(document.querySelector('.form-control'));
console.log(document.querySelector('div'));
// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';
// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(2)').style.color = 'yellow';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
document.querySelector(".card-header").textContent="Mise achat";
//document.querySelector('li:last-child').style.backgroundColor = 'green';





// var list = document.getElementsByClassName("list-group-item");
// var ListG = Array.from(list);
// ListG.forEach(function(item,index){
//     console.log(index);
//    if(index%2 == 0){
//        item.style.backgroundColor="#ccc";
//    }
// });

//
// var list = document.querySelectorAll("ul.list-group li.list-group-item");
// console.log(list);
// list.forEach(function (item,index) {
//     if(index%2==0)
//         item.style.backgroundColor = "#ccc";
// });

const listOdd = document.querySelectorAll('li:nth-child(odd)');//or (even)

listOdd.forEach(function (item, index) {
   item.style.backgroundColor="#ccc";
});



//Display "product:quantity'

refColor();


tab = [];
localStorage.setItem("tab",JSON.stringify(tab));
document.getElementById('add').addEventListener("click",function () {
    var li = document.getElementById('list').firstElementChild.cloneNode(true);

    // var name = document.getElementById('produtInput').value;
   // var qte = document.getElementById('quantityInput').value;
   //
   //  li.firstElementChild.textContent=name;
   //  li.firstElementChild.nextElementSibling.textContent = qte+"kg";
   //  var ul = document.getElementById('list').appendChild(li);
   // console.log(li.firstElementChild.textContent);
    const item = {
        "name":document.getElementById('produtInput').value,
        "qte":document.getElementById('quantityInput').value
    }
    tab.push(item);
    localStorage.setItem("tab",JSON.stringify(tab));

    // localStorage.setItem("produit",document.getElementById('produtInput').value);
    // localStorage.setItem("qte",document.getElementById('quantityInput').value);
    //  li.firstElementChild.textContent=localStorage.getItem("produit");
    //  li.firstElementChild.nextElementSibling.textContent = localStorage.getItem("qte")+"kg";
    var items = JSON.parse(localStorage.getItem("tab"));
    items.forEach(function (item) {
        li.firstElementChild.textContent = item.name;
        li.firstElementChild.nextElementSibling.textContent = item.qte;
        document.getElementById('list').appendChild(li);
    });
    refColor();
    var xs = document.getElementsByClassName("close");

    for(var i=0;i<xs.length;i++){
        xs[i].addEventListener('click',function (e) {
            this.parentElement.remove();
            refColor();
        });}
});


function refColor() {
    var list = document.querySelectorAll("ul.list-group li.list-group-item");
    list.forEach(function (item,index) {
        if(index%2==0)
            item.style.backgroundColor = "#ccc";
        else
            item.style.backgroundColor = "#f4f4f4";

    });
}


document.getElementById('deleteAll').addEventListener('click',function () {
   document.getElementById('list').innerHTML="";
});


var xs = document.getElementsByClassName("close");

for(var i=0;i<xs.length;i++){
    xs[i].addEventListener('click',function (e) {
        this.parentElement.remove();
        refColor();
    });
}
