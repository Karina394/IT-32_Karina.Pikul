"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="error-box">
            <h2>Щось пішло не так!</h2>
            <p>Не вдалося завантажити товари.</p>

            <button className="button" onClick={() => reset()}>
                Спробувати ще раз
            </button>
        </div>
    );
}
