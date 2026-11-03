"use client";

import { useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
};

type Props = {
  books: Book[];
};

export default function InteractiveList({ books }: Props) {
  const [search, setSearch] = useState("");
  const [onlyFiction, setOnlyFiction] = useState(false);

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre = !onlyFiction || book.genre === "Роман" || book.genre === "Фентезі";

    return matchesSearch && matchesGenre;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук книжки..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />

      <label>
        <input
          type="checkbox"
          checked={onlyFiction}
          onChange={(e) => setOnlyFiction(e.target.checked)}
        />
        Тільки художні
      </label>

      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> — {book.author} ({book.genre})
          </li>
        ))}
      </ul>

      {filteredBooks.length === 0 && <p>Нічого не знайдено</p>}
    </div>
  );
}