let els = document.querySelectorAll('.element');
let del = document.getElementsByClassName('delete');
let add = document.getElementById('addButton');

// EventListener for Delete btn
for (let value of del) {
    value.addEventListener('click', () => {
        let parent = value.closest('.element');
        parent.remove();
    });
}

// EventListener for Add btn
add.addEventListener('click', () => {
    let parent = document.getElementById('list');
    let inputValue = document.getElementById('add').value;
    let div = document.createElement('div');
    div.className += 'element row';
    div.innerHTML = "<span class='col-xs-6 col-sm-4 col-md-3'>" + inputValue + "</span>";
    div.innerHTML += "<button class='up btn btn-secondary pull-xs-right col-xs-2 col-sm-2' type='button'>Up</button>";
    div.innerHTML += "<button class='down btn btn-secondary pull-xs-right col-xs-2 col-sm-2' type='button'>Down</button>";
    div.innerHTML += "<button class='delete btn btn-danger pull-xs-right col-xs-2 col-sm-2' type='button'>Delete</button>";
    parent.appendChild(div);
});