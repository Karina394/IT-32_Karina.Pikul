import InteractiveList from "../InteractiveList";

const books = [
    { id: 1, title: "Гаррі Поттер", author: "Джоан Роулінг", genre: "Фентезі" },
    { id: 2, title: "Воно", author: "Стівен Кінг", genre: "Жахи" },
    { id: 3, title: "Гордість і упередження", author: "Джейн Остін", genre: "Роман" },
    { id: 4, title: "Хоббіт", author: "Джон Толкін", genre: "Фентезі" },
    { id: 5, title: "Шерлок Холмс", author: "Артур Конан Дойл", genre: "Детектив" },
    { id: 6, title: "Маленький принц", author: "Антуан де Сент-Екзюпері", genre: "Казка" },
];

export default function PracticePage() {
    return (
        <main>
            <h1>Моя бібліотека</h1>
            <p>Усього книжок: {books.length}</p>
            <InteractiveList books={books} />
        </main>
    );
}