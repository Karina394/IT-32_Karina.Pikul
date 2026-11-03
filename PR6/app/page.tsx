
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Ласкаво просимо до TechStore!</h1>
        <p>
          Відкривай світ сучасних технологій разом із нами.
          Обирай найкращу техніку для роботи та відпочинку.
        </p>
        <Link href="/catalog" className="button">
          Перейти до каталогу
        </Link>
      </section>

      <section>
        <h2 className="section-title">Наші категорії</h2>

        <div className="products">
          <div className="product-card">
            <h3>Смартфони</h3>
            <p>Сучасні смартфони для спілкування, роботи та розваг.</p>
            <br />
            <Link href="/catalog/smartphones" className="button">
              Переглянути
            </Link>
          </div>

          <div className="product-card">
            <h3>Ноутбуки</h3>
            <p>Потужні ноутбуки для навчання, роботи та ігор.</p>
            <br />
            <Link href="/catalog/laptops" className="button">
              Переглянути
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
