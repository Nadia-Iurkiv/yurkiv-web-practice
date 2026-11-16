const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Тестові дані для API платформи UniBook
const books = [
  { id: 1, title: 'Вища математика', author: 'Б.П. Демидович', condition: 'Добрий', type: 'Обмін' },
  { id: 2, title: 'Алгоритми та структури даних', author: 'Дт Кнут', condition: 'Новий', type: 'Даром' },
  { id: 3, title: 'Історія України', author: 'Полонська-Василенко', condition: 'Задовільний', type: '100 грн' }
];

// Маршрут для отримання списку книг
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Головна сторінка сервера
app.get('/', (req, res) => {
  res.send('UniBook Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
