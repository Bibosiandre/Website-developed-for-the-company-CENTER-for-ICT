// Получаем ссылку на блок спиннера и основное меню
var spinner = document.querySelector('.loader');
var mainMenu = document.querySelector('.main-menu');

// Показываем спиннер и скрываем основное меню
spinner.style.display = 'block';
mainMenu.style.display = 'none';

// Задержка в 2 секунды перед переходом к основному меню
setTimeout(function() {
    // Плавно скрываем спиннер
    spinner.style.opacity = '0';
    spinner.style.transition = 'opacity 0.5s ease-in-out';
    
    // Задержка в 0.5 секунды перед изменением стилей
    setTimeout(function() {
        // Скрываем спиннер
        spinner.style.display = 'none';
        spinner.style.transition = ''; // Остановка анимации после скрытия блока
        // Плавно показываем основное меню
        mainMenu.style.display = 'block';
        mainMenu.style.opacity = '0';
        mainMenu.style.transition = 'opacity 0.5s ease-in-out';
        
        // Задержка в 50 миллисекунд перед изменением стилей
        setTimeout(function() {
            mainMenu.style.opacity = '1';
        }, 50);
    }, 500);
}, 1000);

// Получаем ссылки на якори (например, ваши элементы меню)
var links = document.querySelectorAll('a[data-scroll-nav]');

// Обрабатываем клик по ссылкам
links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Получаем значение атрибута data-scroll-nav
        var target = this.getAttribute('data-scroll-nav');
        
        // Получаем ссылку на целевой элемент якоря
        var targetElement = document.querySelector(target);
        
        // Прокручиваем до якоря с плавностью
        targetElement.scrollIntoView({
            behavior: 'smooth',block: "center"
        });
    });
});

// Получаем ссылку на элементы
var links = document.querySelectorAll('.menu a');
var sideMenu = document.querySelector('.side-menu');

// Добавляем обработчик событий для каждой ссылки
links.forEach(function(link) {
    link.addEventListener('click', function() {
        sideMenu.checked = false; // Закрываем меню при клике на ссылку
    });
});
function removeBootstrapEffects(button) {
    button.classList.remove("collapsed");
    button.setAttribute("aria-expanded", "true");
    var collapseTarget = document.querySelector(button.dataset.bsTarget);
    collapseTarget.classList.add("show");
  }

// Скрипт карусели
  var x = 0,
  container = $('.carousel-body'),
  items = container.find('li'),
  containerHeight = 0,
  numberVisible = 2,
  intervalSec = 3000;

if(!container.find('li:first').hasClass("first")){
container.find('li:first').addClass("first");
}

items.each(function(){
if(x < numberVisible){
  containerHeight = containerHeight + $(this).outerHeight();
  x++;
}
});

container.css({ height: containerHeight, overflow: "hidden"});

function vertCycle() {
var firstItem = container.find('li.first').html();
  
container.append('<li>'+firstItem+'</li>');
firstItem = '';
container.find('li.first').animate({marginTop: "-320px" }, 1200, function(){  $(this).remove(); container.find('li:first').addClass("first"); });
}

if(intervalSec < 200){
intervalSec = 200;
}
var init = setInterval("vertCycle()",intervalSec);

container.hover(function(){
clearInterval(init);
}, function(){
init = setInterval("vertCycle()",intervalSec);
});

