import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GenericPageSection } from "./generic_text";
import { postJson } from "../api_fetch";
import '../../styles/auth_form.scss';

export type AuthStatusResponse = {
    isAuthenticated: boolean;
    user: {
        id: number;
        username: string;
        email: string;
    } | null;
};

export type LoginApiResponse = {
    status: "success" | "error";
    message: string;
    user?: {
        id: number;
        username: string;
        email: string;
    } | null;
};

export type StatusBanner = {
    type: "success" | "error";
    message: string;
} | null;

export type LoginProps = {
    setAuth: (auth: AuthStatusResponse) => void;
    auth: AuthStatusResponse | null;
};


type RegisterApiResponse = {
    status: "success" | "error";
    message: string;
    user?: {
        id: number;
        username: string;
        email: string;
    } | null;
};

type RegisterProps = {
    setAuth: (auth: AuthStatusResponse) => void;
    auth: AuthStatusResponse | null;
};

export function Login({ setAuth, auth }: LoginProps) {
    const [statusBanner, setStatusBanner] = useState<StatusBanner>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const isAuthenticated = auth?.isAuthenticated === true;

    if (isAuthenticated) {
        return (
            <div className="padding-top-4rem auth-page">
                <GenericPageSection
                    label="Account"
                    title="You’re already logged in"
                    subtitle="You can manage your details, orders and preferences from your account."
                >
                    <div className="auth-form">
                        <div className="auth-form__header">
                            <p className="auth-form__hint">
                                You’re currently signed in to AnyHJS.
                            </p>
                        </div>
                        <Link to="/account" className="auth-form__submit login">
                            <span>Go to my account</span>
                        </Link>
                    </div>
                </GenericPageSection>
            </div>
        );
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            email: formData.get("email")?.toString() ?? "",
            password: formData.get("password")?.toString() ?? "",
        };

        setStatusBanner(null);
        setIsSubmitting(true);

        try {
            const data = await postJson<LoginApiResponse>("/api/auth/login/", payload);

            if (data.status === "success") {
                setStatusBanner({
                    type: "success",
                    message: data.message || "You are now logged in.",
                });

                setAuth({
                    isAuthenticated: true,
                    user: data.user ?? null,
                });
                navigate("/account", { replace: true });

            } else {
                setStatusBanner({
                    type: "error",
                    message:
                        data.message ||
                        "Login failed. Please check your details and try again.",
                });
            }
        } catch (error) {
            const err = error as any;

            if (err?.data?.message) {
                setStatusBanner({ type: "error", message: err.data.message });
            } else {
                setStatusBanner({
                    type: "error",
                    message: "We couldn't log you in right now. Please try again in a moment.",
                });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="padding-top-4rem auth-page">
            <GenericPageSection
                label="Account"
                title="Login to Your Account"
                subtitle="Access your personalised wardrobe, saved favourites and orders."
            >
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-form__header">
                        <p className="auth-form__hint">
                            Use the email address or username you registered with AnyHJS.
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
                        <label htmlFor="login-email" className="auth-form__label">
                            Email or username
                        </label>
                        <input
                            id="login-email"
                            name="email"
                            type="text"
                            autoComplete="username"
                            className="auth-form__input"
                            placeholder="you@example.com or your username"
                        />
                    </div>

                    <div className="auth-form__field">
                        <label htmlFor="login-password" className="auth-form__label">
                            Password
                        </label>
                        <input
                            id="login-password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            className="auth-form__input"
                            placeholder="••••••••"
                        />
                        <div className="auth-form__field-row">
                            <label className="auth-form__checkbox">
                                <input
                                    type="checkbox"
                                    className="auth-form__checkbox-input"
                                />
                                <span className="auth-form__checkbox-label">
                                    Remember me
                                </span>
                            </label>

                            <Link to="/forgot-password" className="auth-form__link-button">
                                Forgot password?
                            </Link>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="auth-form__submit"
                        disabled={isSubmitting}
                    >
                        <span>{isSubmitting ? "Logging in..." : "Log in"}</span>
                    </button>

                    <p className="auth-form__footer">
                        New to AnyHJS?{" "}
                        <Link to="/register" className="auth-form__footer-link">
                            Create an account
                        </Link>
                    </p>
                </form>
            </GenericPageSection>
        </div>
    );
}

export function Register({ setAuth }: RegisterProps) {
    const [statusBanner, setStatusBanner] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = (formData.get("name") ?? "").toString().trim();
        const email = (formData.get("email") ?? "").toString().trim();
        const password = (formData.get("password") ?? "").toString();
        const passwordConfirm = (formData.get("passwordConfirm") ?? "").toString();
        const termsChecked = formData.get("terms") === "on";

        const payload = {
            name,
            email,
            password,
            passwordConfirm,
            termsAccepted: termsChecked,
        };

        setStatusBanner(null);
        setIsSubmitting(true);

        try {
            const data = await postJson<RegisterApiResponse, typeof payload>(
                "/api/auth/register/",
                payload,
            );

            if (data.status === "success") {
                setAuth({
                    isAuthenticated: true,
                    user: data.user ?? null,
                });

                form.reset();
                navigate("/account", { replace: true });
            } else {
                setStatusBanner(
                    data.message ||
                        "We couldn't create your account. Please check your details and try again.",
                );
            }
        } catch (error) {
            console.error("Register failed", error);
            setStatusBanner(
                "We couldn't create your account right now. Please try again in a moment.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="padding-top-4rem auth-page">
            <GenericPageSection
                label="Account"
                title="Join AnyHJS Today"
                subtitle="Save your favourites, track orders and unlock personalised outfits."
            >
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-form__header">
                        <p className="auth-form__hint">
                            Fill in your details below to get started with AnyHJS.
                        </p>
                    </div>

                    {statusBanner && (
                        <div className="auth-form__banner auth-form__banner--error">
                            {statusBanner}
                        </div>
                    )}

                    <div className="auth-form__field">
                        <label htmlFor="register-name" className="auth-form__label">
                            Name
                        </label>
                        <input
                            id="register-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            className="auth-form__input"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="auth-form__field">
                        <label htmlFor="register-email" className="auth-form__label">
                            Email address
                        </label>
                        <input
                            id="register-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="auth-form__input"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="auth-form__field">
                        <label htmlFor="register-password" className="auth-form__label">
                            Password
                        </label>
                        <input
                            id="register-password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            className="auth-form__input"
                            placeholder="Create a password"
                        />
                    </div>

                    <div className="auth-form__field">
                        <label
                            htmlFor="register-password-confirm"
                            className="auth-form__label"
                        >
                            Confirm password
                        </label>
                        <input
                            id="register-password-confirm"
                            name="passwordConfirm"
                            type="password"
                            autoComplete="new-password"
                            className="auth-form__input"
                            placeholder="Repeat your password"
                        />
                    </div>

                    <div className="auth-form__field">
                        <label className="auth-form__checkbox">
                            <input
                                type="checkbox"
                                className="auth-form__checkbox-input"
                                name="terms"
                            />
                            <span className="auth-form__checkbox-label">
                                I agree to the{" "}
                                <Link
                                    to="/terms-and-conditions"
                                    className="auth-form__footer-link"
                                >
                                    Terms &amp; Conditions
                                </Link>{" "}
                                and{" "}
                                <Link
                                    to="/privacy-policy"
                                    className="auth-form__footer-link"
                                >
                                    Privacy Policy
                                </Link>
                                .
                            </span>
                        </label>
                    </div>

                    <button type="submit" className="auth-form__submit" disabled={isSubmitting}>
                        <span>{isSubmitting ? "Creating account..." : "Create account"}</span>
                    </button>

                    <p className="auth-form__footer">
                        Already have an account?{" "}
                        <Link to="/login" className="auth-form__footer-link">
                            Log in
                        </Link>
                    </p>
                </form>
            </GenericPageSection>
        </div>
    );
}

export function ForgotPassword() {
    return (
        <div className="padding-top-4rem auth-page">
            <GenericPageSection
                label="Account"
                title="Reset Your Password"
                subtitle="Enter the email linked to your AnyHJS account and we’ll send you a reset link."
            >
                <form className="auth-form">
                    <div className="auth-form__header">
                        <p className="auth-form__hint">
                            If there’s an AnyHJS account associated with this email, you’ll receive a message
                            with a secure link to create a new password.
                        </p>
                    </div>

                    <div className="auth-form__field">
                        <label htmlFor="forgot-email" className="auth-form__label">
                            Email address
                        </label>
                        <input
                            id="forgot-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="auth-form__input"
                            placeholder="you@example.com"
                        />
                    </div>

                    <button type="submit" className="auth-form__submit">
                        <span>Send reset link</span>
                    </button>

                    <p className="auth-form__footer">
                        Remember your password?{" "}
                        <Link to="/login" className="auth-form__footer-link">
                            Back to login
                        </Link>
                    </p>
                </form>
            </GenericPageSection>
        </div>
    );
}

export function ChangePassword() {
    return (
        <div className="padding-top-4rem auth-page">
            <GenericPageSection
                label="Account"
                title="Change Your Password"
                subtitle="Update your password securely using your current login details."
            >
                <form className="auth-form">
                    <div className="auth-form__header">
                        <p className="auth-form__hint">
                            Enter your current password and then choose a new one. We’ll verify your
                            existing password before updating it.
                        </p>
                    </div>

                    <div className="auth-form__field">
                        <label htmlFor="change-current-password" className="auth-form__label">
                            Current password
                        </label>
                        <input
                            id="change-current-password"
                            name="currentPassword"
                            type="password"
                            autoComplete="current-password"
                            className="auth-form__input"
                            placeholder="Enter your current password"
                        />
                    </div>

                    <div className="auth-form__field">
                        <label htmlFor="change-new-password" className="auth-form__label">
                            New password
                        </label>
                        <input
                            id="change-new-password"
                            name="newPassword"
                            type="password"
                            autoComplete="new-password"
                            className="auth-form__input"
                            placeholder="Create a new password"
                        />
                    </div>

                    <button type="submit" className="auth-form__submit">
                        <span>Change password</span>
                    </button>
                </form>
            </GenericPageSection>
        </div>
    );
}

export function ResetEmail() {
    return (
        <div className="padding-top-4rem auth-page">
            <GenericPageSection
                label="Account"
                title="Change Your Email Address"
                subtitle="Update the primary email linked to your AnyHJS account."
            >
                <form className="auth-form">
                    <div className="auth-form__header">
                        <p className="auth-form__hint">
                            Enter the email currently on your account and the new email you’d like to
                            use. We’ll update your details once we’ve confirmed your existing email.
                        </p>
                    </div>

                    <div className="auth-form__field">
                        <label htmlFor="reset-email-current" className="auth-form__label">
                            Current email address
                        </label>
                        <input
                            id="reset-email-current"
                            name="currentEmail"
                            type="email"
                            autoComplete="email"
                            className="auth-form__input"
                            placeholder="current@example.com"
                        />
                    </div>

                    <div className="auth-form__field">
                        <label htmlFor="reset-email-new" className="auth-form__label">
                            New email address
                        </label>
                        <input
                            id="reset-email-new"
                            name="newEmail"
                            type="email"
                            autoComplete="email"
                            className="auth-form__input"
                            placeholder="new@example.com"
                        />
                    </div>

                    <button type="submit" className="auth-form__submit">
                        <span>Change email</span>
                    </button>
                </form>
            </GenericPageSection>
        </div>
    );
}
