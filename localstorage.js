
let loginform = document.getElementById('loginForm')
var listitem = document.getElementById('lists');
listitem.addEventListener('click', removeItem);
loginform.addEventListener('submit', function(loginForm) {

const myObject = {
  amount : amount.value,
  description : description.value,
  type : type.value

}
localStorage.setItem(myObject.description, JSON.stringify(myObject))
showuser(myObject);



 }
);
function showuser(myObject)
{

  var listitem = document.getElementById('lists');
  var litag = document.createElement('li');
  litag.textContent = myObject.amount + '-' + myObject.description + '-' + myObject.type;
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete';
 
  var editBtn = document.createElement('button');
  editBtn.className = 'edit';
 
  deleteBtn.appendChild(document.createTextNode('Delete'));
  
  editBtn.appendChild(document.createTextNode('Edit'));
  listitem.appendChild(litag);
  litag.appendChild(deleteBtn);
  litag.appendChild(editBtn);

  // Remove item

  editBtn.onclick = (e) =>{
    if(e.target.classList.contains('edit')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        console.log(li.parentElement);
      
        var editamount = document.getElementById('amount');
        var editdescription = document.getElementById('description');
        var edittype = document.getElementById('type');
        editamount.value = myObject.amount;
        editdescription.value = myObject.description;
        edittype.value = myObject.type;

        listitem.removeChild(li);
        //console.log(editedname.value);
        localStorage.removeItem(description.value);
       
      }
    }
  }

  //delete button 
  deleteBtn.onclick = (e) =>{
    if(e.target.classList.contains('delete')){
    
        var li = e.target.parentElement;
        

        listitem.removeChild(li);
        //console.log(editedname.value);
        localStorage.removeItem(description.value);
       
      }
    }
  }

  






function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
     // var li = e.target.parentElement;
      //listitem.removeChild(li);
      localStorage.removeItem(e);
    }
  }
}



