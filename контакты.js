// Обработчик формы обратной связи
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Отправка данных на сервер (для демонстрации просто выводим в консоль)
    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('Сообщение:', message);
    
    alert('Сообщение отправлено!');
});

// Инициализация карты (для демонстрации используется простой div)
// Для реальной карты используйте API Google Maps или аналогичные сервисы
document.getElementById('map').innerHTML = 'Карта';
