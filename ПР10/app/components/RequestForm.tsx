
"use client";

import { useActionState } from "react";
import { submitRequest, type FormState } from "../actions";

const initialState: FormState = {
    success: false,
    message: "",
    errors: {},
};

export default function RequestForm() {
    const [state, formAction, isPending] = useActionState(
        submitRequest,
        initialState
    );

    return (
        <form action={formAction} noValidate>
            <div>
                <label htmlFor="fullName">Ім'я учасника:</label>
                <input
                    id="fullName"
                    name="fullName"
                    type="text"
                />
                {state.errors.fullName && (
                    <p>{state.errors.fullName[0]}</p>
                )}
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                />
                {state.errors.email && (
                    <p>{state.errors.email[0]}</p>
                )}
            </div>

            <div>
                <label htmlFor="topic">Тип події:</label>
                <select id="topic" name="topic" defaultValue="">
                    <option value="" disabled>Оберіть тип події</option>
                    <option value="Лекція">Лекція</option>
                    <option value="Майстер-клас">Майстер-клас</option>
                    <option value="Хакатон">Хакатон</option>
                </select>
                {state.errors.topic && (
                    <p>{state.errors.topic[0]}</p>
                )}
            </div>

            <div>
                <label htmlFor="details">Причина участі:</label>
                <textarea
                    id="details"
                    name="details"
                    rows={4}
                />
                {state.errors.details && (
                    <p>{state.errors.details[0]}</p>
                )}
            </div>

            <button type="submit" disabled={isPending}>
                {isPending ? "Надсилання..." : "Зареєструватися"}
            </button>

            <p aria-live="polite">{state.message}</p>
        </form>
    );
}
