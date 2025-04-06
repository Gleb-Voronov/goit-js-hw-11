import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"; 

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

 
  const formData = new FormData(form);
  const delay = formData.get('delay');
  const state = formData.get('state');


  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Успіх',
        message: `✅ Проміс виконано за ${delay} мс`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Помилка',
        message: `❌ Проміс відхилено за ${delay} мс`,
      });
    });


  form.reset();
});