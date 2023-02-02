let button = document.querySelector('.btn');
let notification = document.querySelectorAll('.dot');
let bcg = document.querySelectorAll('.dot-sec');
let notBtn = document.querySelector('.not-btn');

button.addEventListener('click', () => {
  Array.from(notification);
  console.log(notification)
  notification.forEach(element => {
    element.style.background = 'none';
  });
  Array.from(bcg);
  console.log(bcg)
  bcg.forEach(element => {
    element.style.background = 'none';
  });
  notBtn.innerHTML = '0';
})