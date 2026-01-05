import { useState, type FormEvent } from "react";
import { GenericPageSection } from "./generic_text";
import { postJson } from "../api_fetch";
import '../../styles/auth_form.scss';

type ContactApiResponse = {
    status: "success" | "error";
    message: string;
};

type StatusBanner = {
    type: "success" | "error";
    message: string;
} | null;

export function ContactUs() {
    const [statusBanner, setStatusBanner] = useState<StatusBanner>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: formData.get("name")?.toString() ?? "",
            email: formData.get("email")?.toString() ?? "",
            subject: formData.get("subject")?.toString() ?? "",
            message: formData.get("message")?.toString() ?? "",
        };

        setStatusBanner(null);

        try {
            const data = await postJson<ContactApiResponse>("/api/contact-us/", payload);

            if (data.status === "success") {
                setStatusBanner({
                    type: "success",
                    message: data.message || "Your message has been received.",
                });

                form.reset();
            } else {
                setStatusBanner({
                    type: "error",
                    message:
                        data.message ||
                        "Something went wrong sending your message. Please try again.",
                });
            }
        } catch (error) {
            setStatusBanner({
                type: "error",
                message:
                    "We couldn't send your message right now. Please try again in a moment.",
            });
        }
    };

    return (
        <div className="padding-top-4rem auth-page">
            <GenericPageSection
                label="Support"
                title="Contact AnySzn"
                subtitle="Questions, feedback or style advice? Send us a message and we’ll be in touch."
            >
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-form__header">
                        <p className="auth-form__hint">
                            Fill in the form below and our team will typically reply within 1–2
                            business days.
                        </p>
                    </div>

                    {statusBanner && (
                        <div
                            className={`auth-form__banner auth-form__banner--${statusBanner.type}`}
                        >
                            {statusBanner.message}
                        </div>
                    )}

                    <div className="auth-form__field">
                        <label htmlFor="contact-name" className="auth-form__label">
                            Name
                        </label>
                        <input
                            id="contact-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            className="auth-form__input"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="auth-form__field">
                        <label htmlFor="contact-email" className="auth-form__label">
                            Email address
                        </label>
                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="auth-form__input"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="auth-form__field">
                        <label htmlFor="contact-subject" className="auth-form__label">
                            Subject
                        </label>
                        <input
                            id="contact-subject"
                            name="subject"
                            type="text"
                            className="auth-form__input"
                            placeholder="What can we help you with?"
                        />
                    </div>

                    <div className="auth-form__field">
                        <label htmlFor="contact-message" className="auth-form__label">
                            Message
                        </label>
                        <textarea
                            id="contact-message"
                            name="message"
                            className="auth-form__input"
                            rows={5}
                            placeholder="Share a few details so we can help you as quickly as possible."
                        />
                    </div>

                    <button type="submit" className="auth-form__submit">
                        <span>Send message</span>
                    </button>
                </form>
            </GenericPageSection>
        </div>
    );
}
