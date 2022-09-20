let form = document.querySelector("#book-form")

let tbody = document.querySelector("#book-list")

form.addEventListener("submit",(e) =>{
  e.preventDefault()  
  let title = document.getElementById("title").value
  let author = document.querySelector("#author").value
  let isbn = document.querySelector("#isbn").value
  if(title == "" || author == "" || isbn == ""){
    ShowAlert("Please Fill All The Fields","danger")
    return
  }
addBookToList(title,author,isbn) 
addBookToStore(title,author,isbn)
})

tbody.addEventListener("click",function(e){
  deleteBook(e)
})

function addBookToList(title,author,isbn){
    let tablebody = document.querySelector("#book-list")
    let tr = document.createElement("tr")
    tr.innerHTML = `
     <td>${title}</td>
     <td>${author}</td>
     <td>${isbn}</td>
     <td><a href="#" class="btn btn-danger btn-right delete">X</a></td>
    
    `
    tablebody.appendChild(tr)
    clearfield()
    ShowAlert("Book Added Successfully","success")
}

function clearfield(){
    document.querySelector("#title").value = ''
    document.querySelector("#author").value = ''
    document.querySelector("#isbn").value = ''
}

function deleteBook(e){
    if(e.target.classList.contains("delete")){
      tbody.removeChild(e.target.parentElement.parentElement)
      ShowAlert("Book Deleted Successfully", "danger") 
    }
}

function ShowAlert(msg,className){
    const div = document.createElement('div')
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000)
}

function addBookToStore(title,author,isbn){
  
}