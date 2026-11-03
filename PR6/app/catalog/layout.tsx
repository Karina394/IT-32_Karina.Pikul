import Link from "next/link";

export default function CatalogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h2>Категорії товарів</h2>

            <div className="catalog-menu">
                <Link href="/catalog">Усі товари</Link>
                <Link href="/catalog/smartphones">Смартфони</Link>
                <Link href="/catalog/laptops">Ноутбуки</Link>
            </div>

            {children}
        </div>
    );
}
