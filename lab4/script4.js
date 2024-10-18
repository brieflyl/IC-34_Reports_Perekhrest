document.querySelectorAll('.btns-menu').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.btns-menu').forEach(btn => btn.classList.remove('clicked'));
        document.querySelectorAll('.html-btn').forEach(btn => btn.classList.remove('clicked1'));
        
        button.classList.add('clicked');
    });
});

document.querySelectorAll('.html-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.btns-menu').forEach(btn => btn.classList.remove('clicked'));
        document.querySelectorAll('.html-btn').forEach(btn => btn.classList.remove('clicked1'));
        
        button.classList.add('clicked1');
    });
});

function topic() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/theme.png" alt="">
        <br><br> 
        <p>Посилання на живу сторінку <b>веб-застосунку</b><br><br>
            <a href="https://brieflyl.github.io/IC-34_Web_Lab2_Perekhrest/" target="_blank">
                https://brieflyl.github.io/IC-34_Web_Lab2_Perekhrest/
            </a><br><br>
        </p>
        <p>Посилання на <b>репозиторій веб-застосунку</b> <br><br>
            <a href="https://github.com/brieflyl/IC-34_Web_Lab2_Perekhrest" target="_blank">
                https://github.com/brieflyl/IC-34_Web_Lab2_Perekhrest
            </a><br><br>
        </p>
        <p>Посилання на живу сторінку <b>звітів</b> <br><br>
            <a href="https://brieflyl.github.io/IC-34_Reports_Perekhrest/" target="_blank">
                https://brieflyl.github.io/IC-34_Reports_Perekhrest/
            </a><br><br>
        </p>
        <p>Посилання на <b>репозиторій звітів</b> <br><br>
            <a href="https://github.com/brieflyl/IC-34_Reports_Perekhrest" target="_blank">
                https://github.com/brieflyl/IC-34_Reports_Perekhrest
            </a><br><br>
        </p>
    `;
}

function desktop_v() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/pc_view.png" alt="" width="1200px"><br><br>
        <img src="./images/pc_view_code.png" alt="">
    `;
}

function tablet_v() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/tablet_view_1.png" alt=""><br><br>
        <img src="./images/tablet_view_2.png" alt=""><br><br>
        <img src="./images/tablet_view_code_1.png" alt=""><br><br>
        <img src="./images/tablet_view_code_2.png" alt=""><br><br>
    `;
}

function mobile_v() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <img src="./images/mobile_view_1.png" alt=""><br><br>
        <img src="./images/mobile_view_2.png" alt=""><br><br>
        <img src="./images/mobile_view_code_1.png" alt=""><br><br>
        <img src="./images/mobile_view_code_2.png" alt=""><br><br>
    `;
}

function conclusion() {
    var desc = document.querySelector(".desc");

    desc.textContent = '';

    desc.innerHTML =  `
        <h3>Висновки</h3>
        <p>
            На цій лабораторній роботі я дослідила принципи адаптивної верстки веб-сторінок, <br>
            використовуючи медіа-запити для коректного відображення сайту на різних пристроях. <br>
            Також навчилась застосовувати медіа-типи та функції, що дозволяють змінювати стилі залежно від характеристик екрану.
        </p>
    `;
}