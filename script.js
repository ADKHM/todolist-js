let button = document.getElementById('switch');
let icon = document.querySelector('.bx-moon');
let html = document.querySelector('html');
let sendBtn = document.getElementById('sendBtn');
let input = document.getElementById('searchinput');
let ul = document.querySelector('ul')

button.addEventListener('click' , () => {
    html.classList.toggle('dark')
    icon.classList.toggle('bx-sun',);
});

function addData() {
    let li = document.createElement('li');
    li.classList.add('flex', 'justify-between', 'items-center', 'py-2', 'px-4', 'border-b', 'border-[#6C63FF]', 'dark:border-[#333333]');
    li.innerHTML = `<div class="flex gap-3 items-center">
          <input type="checkbox" name="" id="" class="check">
          <label class="font-medium text-2xl dark:text-white" for="">${input.value}</label>
        </div>
        <div>
          <i class='bxr  bx-pencil text-2xl text-[#CDCDCD] cursor-pointer'></i>
          <i class='bxr  bx-trash text-2xl text-[#CDCDCD] cursor-pointer' ></i> 
        </div>`

    input.value = '';

    ul.appendChild(li);
}

sendBtn.addEventListener('click', () => {
    if (input.value === '') {
        return;
    }
    addData();
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value !== '') {
        addData();
    }
});

ul.addEventListener('click', (e) => {
    // delete
    if(e.target.classList.contains('bx-trash')) {
        e.target.closest('li').remove();
    }

    // checkbox
    let li = e.target.closest('li');
    let label = li.querySelector('label');
    if (e.target.classList.contains('check')) {
        label.classList.toggle('line-through');
    }

    // edit
    if (e.target.classList.contains('bx-pencil')) {
        let inputcreate = document.createElement('input');
        inputcreate.type = 'text';
        inputcreate.value = label.textContent;
        inputcreate.classList.add('border', 'border-[#6C63FF]', 'dark:border-[#333333]', 'rounded', 'px-2', 'py-1', 'text-lg', 'dark:bg-[#333333]', 'bg-white');
        label.replaceWith(inputcreate);

        inputcreate.addEventListener('change' , () => saveEdit(inputcreate, label));
    }

    const saveEdit = (inputcreate, label) => {
        if(inputcreate.value !== '') {
            label.textContent = inputcreate.value;
        }
        inputcreate.replaceWith(label);
    }
});