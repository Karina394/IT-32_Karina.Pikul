"use client";

export default function Error({
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div>
            <h2>Не вдалося завантажити публікації.</h2>
            <button onClick={() => reset()}>
                Спробувати ще раз
            </button>
        </div>
    );
}