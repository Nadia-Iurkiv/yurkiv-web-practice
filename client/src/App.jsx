import React, { useState } from 'react';

export default function App() {
  const [books] = useState([
    { id: 1, title: 'Вища математика', author: 'Б.П. Демидович', condition: 'Добрий', type: 'Обмін' },
    { id: 2, title: 'Алгоритми та структури даних', author: 'Дт Кнут', condition: 'Новий', type: 'Даром' },
    { id: 3, title: 'Історія України', author: 'Полонська-Василенко', condition: 'Задовільний', type: '100 грн' }
  ]);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <h1 style={{ color: '#2563EB' }}>📚 UniBook</h1>
        <nav>
          <a href="#home" style={{ marginRight: '15px', textDecoration: 'none', color: '#1E293B' }}>Головна</a>
          <a href="#catalog" style={{ marginRight: '15px', textDecoration: 'none', color: '#1E293B' }}>Каталог</a>
          <button style={{ background: '#2563EB', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>+ Додати книгу</button>
        </nav>
      </header>

      <main style={{ marginTop: '20px' }}>
        <h2>Каталог доступних підручників</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '15px' }}>
          {books.map(book => (
            <div key={book.id} style={{ border: '1px solid #E2E8F0', borderRadius: '8px', padding: '15px', background: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '16px', margin: '0 0 5px 0' }}>{book.title}</h3>
              <p style={{ color: '#64748B', fontSize: '14px', margin: '0 0 10px 0' }}>Автор: {book.author}</p>
              <p style={{ fontSize: '13px', margin: '0 0 5px 0' }}>Стан: <b>{book.condition}</b></p>
              <span style={{ display: 'inline-block', background: '#16A34A', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '12px' }}>{book.type}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
