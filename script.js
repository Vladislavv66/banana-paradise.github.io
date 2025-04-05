// Инициализация баланса и корзины
let balance = parseInt(localStorage.getItem('balance') || 0);
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Обновление отображения баланса
document.getElementById('balance').textContent = balance;

// Функция обновления корзины
function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.name} - ${item.price} ₽</p>
            <button class="remove-btn" data-index="${index}">Удалить</button>
        `;
        cartList.appendChild(cartItem);
        
        totalPrice += item.price; // Суммируем стоимость товаров
    });

    document.getElementById('total-price').textContent = `Итого: ${totalPrice} ₽`;
    
    // Сохраняем корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Обработчик кнопки "Добавить 1 ₽"
document.querySelector('.add-ruble-btn').addEventListener('click', function() {
    balance += 1; // Добавляем 1 рубль
    document.getElementById('balance').textContent = balance;

    // Сохраняем баланс в localStorage
    localStorage.setItem('balance', balance);
    
   
});

// Обработчик кнопок "Купить"
document.querySelectorAll('.buy-btn').forEach(button => {
   button.addEventListener('click', function() {
       const bananaItem = button.parentNode; // Получаем родительский элемент
       const name = bananaItem.querySelector('h3').textContent; // Название товара
       const price = parseInt(bananaItem.querySelector('p').textContent.split(' ')[1]); // Цена товара

       // Добавляем товар в корзину
       cart.push({ name, price });
       updateCart(); // Обновляем корзину
   });
});

// Обработчик кнопок "Удалить"
document.addEventListener('click', function(event) {
   if (event.target.classList.contains('remove-btn')) {
       const index = event.target.dataset.index; // Получаем индекс товара
       cart.splice(index, 1); // Удаляем товар из корзины
       updateCart(); // Обновляем корзину
   }
});

// Обработчик кнопки "Оплатить с баланса"
document.getElementById('pay-with-balance').addEventListener('click', function() {
   const totalPriceElement = document.getElementById('total-price');
   const totalPrice = parseFloat(totalPriceElement.textContent.split(': ')[1]);

   if (balance >= totalPrice && totalPrice > 0) { // Проверяем достаточно ли средств на балансе
       balance -= totalPrice; // Списываем сумму из баланса
       localStorage.setItem('balance', balance); // Сохраняем новый баланс

       // Очищаем корзину
       cart = [];
       updateCart();

       alert('Оплата успешна!');
   } else if (totalPrice === 0) {
       alert('Корзина пуста!');
   } else {
       alert('Недостаточно средств на балансе');
   }
});

// Инициализация корзины при загрузке страницы
updateCart();
// Инициализация истории покупок
let purchasedProducts = JSON.parse(localStorage.getItem('purchasedProducts')) || [];

// Функция отображения купленных товаров
function displayPurchasedProducts() {
    const purchasedList = document.getElementById('purchased-list');
    purchasedList.innerHTML = '';
    
    purchasedProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `
            <p>Товар: ${product.name}</p>
            <p>Цена: ${product.price} ₽</p>
            <p>Дата покупки: ${product.date}</p>
        `;
        purchasedList.appendChild(productItem);
    });
}

// Обработчик кнопки "Оплатить с баланса"
document.getElementById('pay-with-balance').addEventListener('click', function() {
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceElement.textContent.split(': ')[1]);

    if (balance >= totalPrice && totalPrice > 0) { // Проверяем достаточно ли средств на балансе
        balance -= totalPrice; // Списываем сумму из баланса
        localStorage.setItem('balance', balance); // Сохраняем новый баланс

        // Добавляем товары в историю покупок
        cart.forEach(item => {
            purchasedProducts.push({ name: item.name, price: item.price, date: new Date().toLocaleDateString() });
        });
        localStorage.setItem('purchasedProducts', JSON.stringify(purchasedProducts));
        
        // Очищаем корзину
        cart = [];
        updateCart();

        displayPurchasedProducts(); // Отображаем купленные товары

        alert('Оплата успешна!');
    } else if (totalPrice === 0) {
        alert('Корзина пуста!');
    } else {
        alert('Недостаточно средств на балансе');
    }
});

// Инициализация отображения купленных товаров при загрузке страницы
displayPurchasedProducts();
// Обработчик кнопки "Оплатить с баланса"
document.getElementById('pay-with-balance').addEventListener('click', function() {
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceElement.textContent.split(': ')[1]);

    if (balance >= totalPrice && totalPrice > 0) { // Проверяем достаточно ли средств на балансе
        balance -= totalPrice; // Списываем сумму из баланса
        localStorage.setItem('balance', balance); // Сохраняем новый баланс

        // Добавляем товары в историю покупок
        cart.forEach(item => {
            purchasedProducts.push({ name: item.name, price: item.price, date: new Date().toLocaleDateString() });
        });
        localStorage.setItem('purchasedProducts', JSON.stringify(purchasedProducts));
        
        // Очищаем корзину
        cart = [];
        updateCart();

        alert('Оплата успешна!');
    } else if (totalPrice === 0) {
        alert('Корзина пуста!');
    } else {
        alert('Недостаточно средств на баланса');
    }
});


