var spinner = document.querySelector('.loader');
var mainMenu = document.querySelector('.main-menu');
spinner.style.display = 'block';
mainMenu.style.display = 'none';
setTimeout(function () {
  spinner.style.opacity = '0';
  spinner.style.transition = 'opacity 0.5s ease-in-out';
  setTimeout(function () {
    spinner.style.display = 'none';
    spinner.style.transition = '';
    mainMenu.style.display = 'block';
    mainMenu.style.opacity = '0';
    mainMenu.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(function () {
      mainMenu.style.opacity = '1';
    }, 50);
  }, 500);
}, 1000);
var links = document.querySelectorAll('a[data-scroll-nav]');
links.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var target = this.getAttribute('data-scroll-nav');
    var targetElement = document.querySelector(target);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: "center",
      inline: "center"
    });
  });
});
var links = document.querySelectorAll('.menu a');
var sideMenu = document.querySelector('.side-menu');
links.forEach(function (link) {
  link.addEventListener('click', function () {
    sideMenu.checked = false;
  });
});
function removeBootstrapEffects(button) {
  button.classList.remove("collapsed");
  button.setAttribute("aria-expanded", "true");
  var collapseTarget = document.querySelector(button.dataset.bsTarget);
  collapseTarget.classList.add("show");
}
var x = 0,
  container = $('.carousel-body'),
  items = container.find('li'),
  containerHeight = 0,
  numberVisible = 2,
  intervalSec = 3000;
if (!container.find('li:first').hasClass("first")) {
  container.find('li:first').addClass("first");
}
items.each(function () {
  if (x < numberVisible) {
    containerHeight = containerHeight + $(this).outerHeight();
    x++;
  }
});
container.css({
  height: containerHeight,
  overflow: "hidden"
});
function vertCycle() {
  var firstItem = container.find('li.first').html();
  container.append('<li>' + firstItem + '</li>');
  firstItem = '';
  container.find('li.first').animate({
    marginTop: "-320px"
  }, 1200, function () {
    $(this).remove();
    container.find('li:first').addClass("first");
  });
}
if (intervalSec < 200) {
  intervalSec = 200;
}
var init = setInterval("vertCycle()", intervalSec);
container.hover(function () {
  clearInterval(init);
}, function () {
  init = setInterval("vertCycle()", intervalSec);
});
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}