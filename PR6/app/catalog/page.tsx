
export default async function Catalog() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return (
        <div>
            <h1 className="page-title">Каталог товарів</h1>
            <p>У нашому магазині ви можете обрати техніку:</p>

            <div className="products">
                <div className="product-card">
                    <h3>Смартфони</h3>
                    <p>Великий вибір сучасних смартфонів.</p>
                </div>

                <div className="product-card">
                    <h3>Ноутбуки</h3>
                    <p>Ноутбуки для навчання та роботи.</p>
                </div>
            </div>
        </div>
    );
}
