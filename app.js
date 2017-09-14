let list = document.getElementById('list'),
    els = document.querySelectorAll('.element'),
    del = document.getElementsByClassName('delete'),
    addBtn = document.getElementById('addButton');

// Helper functions
// Since .insertAfter() doesn't really exist, we create a function equivalent
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// Function add
function add() {
    let input = document.getElementById('add');
    let inputValue = input.value;
    if (inputValue !== '') {
        let amend = inputValue.split('');
        firstLetter = amend[0].toUpperCase();
        amend.shift();
        amend.unshift(firstLetter);
        amend.join('');
        console.log(amend, firstLetter);
        let div = document.createElement('div');
        div.className += 'element row';
        div.innerHTML = "<span class='col-xs-9 col-sm-7 col-md-5'>" + amend + "</span>";
        div.innerHTML += "<button class='up btn btn-primary pull-xs-right col-xs-2 col-sm-2' type='button'>UP</button>";
        div.innerHTML += "<button class='down btn btn-primary pull-xs-right col-xs-2 col-sm-2' type='button'>DOWN</button>";
        div.innerHTML += "<button class='delete btn btn-danger pull-xs-right col-xs-2 col-sm-2' type='button'>DELETE</button>";
        list.appendChild(div);
        input.value = '';
    }
}

// EventListener for Delete btn
    // We will use event delegation instead of caching every btn handler
    list.addEventListener('click', (event) => {
        let target = event.target,
            parentElem = target.closest('.element'),
            parentList = parentElem.closest('#list'),
            prevElem = parentElem.previousElementSibling,
            nextElem = parentElem.nextElementSibling;

        if (target.classList.contains('delete')) {
            parentElem.remove();
        } 
        else if (target.classList.contains('up') && prevElem !== null||undefined) {
            parentList.insertBefore(parentElem, prevElem);
        }
        else if (target.classList.contains('down') && nextElem != null||undefined) {
            insertAfter(parentElem, nextElem);
        }
    });

let input = document.getElementById('add');
// EventListener on Enter Key
input.addEventListener('keypress', () => {
    if (event.which === 13) {
        add();
    }
});

// EventListener for Add btn
addBtn.addEventListener('click', () => { add(); });



