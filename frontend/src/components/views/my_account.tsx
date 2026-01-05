import myAccountBanner from "../../imgs/banners/my_account.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";
import { Link, Navigate } from "react-router-dom";
import type { AuthStatusResponse } from "./auth";
import { fetchJson, postJson } from "../api_fetch";
import {
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
    type ChangeEvent,
    type FormEvent,
} from "react";
import '../../styles/my_account.scss';

type MyAccountProps = {
    auth: AuthStatusResponse | null;
    setAuth: Dispatch<SetStateAction<AuthStatusResponse | null>>;
};

type ProfileData = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    title: string;
    gender: string;
};

type ProfileUpdatePayload = Omit<ProfileData, "email">;

type ProfileApiResponse = {
    status: "success" | "error";
    message?: string;
    profile?: ProfileData;
};

export function MyAccount({ auth, setAuth }: MyAccountProps) {
    const [profile, setProfile] = useState<ProfileData | null>(null);
    const [isProfileLoading, setIsProfileLoading] = useState(false);
    const [isSavingProfile, setIsSavingProfile] = useState(false);
    const [profileBanner, setProfileBanner] = useState<string | null>(null);

    const handleLogout = async () => {
        try {
            await postJson("/api/auth/logout/", {});
        } catch (error) {
            console.error("Failed to log out", error);
        } finally {
            setAuth({ isAuthenticated: false, user: null });
        }
    };

    // Load profile data when the user is authenticated
    useEffect(() => {
        if (!auth?.isAuthenticated) return;

        setIsProfileLoading(true);
        setProfileBanner(null);

        fetchJson<ProfileApiResponse>("/api/account/profile/")
            .then((data) => {
                if (data.status === "success" && data.profile) {
                    setProfile(data.profile);
                } else if (data.message) {
                    setProfileBanner(data.message);
                }
            })
            .catch((error) => {
                console.error("Failed to load profile", error);
                setProfileBanner("We couldn't load your account details right now.");
            })
            .finally(() => {
                setIsProfileLoading(false);
            });
    }, [auth?.isAuthenticated]);

    const handleProfileChange =
        (field: keyof ProfileUpdatePayload) =>
        (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            if (!profile) return;
            setProfile({ ...profile, [field]: event.target.value });
        };

    const handleProfileSave = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!profile) return;

        setIsSavingProfile(true);
        setProfileBanner(null);

        const { email, ...updatePayload } = profile;
        const payload: ProfileUpdatePayload = updatePayload;

        try {
            const data = await postJson<ProfileApiResponse, ProfileUpdatePayload>(
                "/api/account/profile/",
                payload,
            );

            if (data.status === "success") {
                // Backend may still echo the full profile incl. email
                if (data.profile) {
                    setProfile(data.profile);
                }
                setProfileBanner(data.message || "Your details have been updated.");
            } else if (data.message) {
                setProfileBanner(data.message);
            } else {
                setProfileBanner(
                    "We couldn't save your details. Please check and try again.",
                );
            }
        } catch (error) {
            console.error("Failed to save profile", error);
            setProfileBanner(
                "We couldn't save your details right now. Please try again in a moment.",
            );
        } finally {
            setIsSavingProfile(false);
        }
    };

    if (auth == null) {
        return (
            <div className="my-account-page">
                <GenericPageSection
                    label="Account"
                    title="Loading your account"
                    subtitle="Hang on while we fetch your details."
                >
                    <p>Loading…</p>
                </GenericPageSection>
            </div>
        );
    }

    if (!auth.isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    const userEmail = auth.user?.email ?? "";

    return (
        <div className="my-account-page">
            <ClothingBanner
                title="My Account"
                subtitle="Manage your orders, details and preferences in one place."
                img_src={myAccountBanner}
            />

            <div className="my-account-page__main">
                <button
                    type="button"
                    className="my-account__logout-button"
                    onClick={handleLogout}
                >
                    Log out
                </button>
                <GenericPageSection
                    label="Account"
                    title="My Account"
                    subtitle="Your personal hub for orders, settings, support and smart styling tools."
                >
                    <section className="my-account">
                        {/* Intro (personalised) */}
                        <div className="my-account__intro">
                            <div className="my-account__intro-header">
                                <div className="my-account__intro-text">
                                    <h1 className="my-account__heading">
                                        Welcome back
                                        {userEmail ? (
                                            <>
                                                , <strong>{userEmail}</strong>
                                            </>
                                        ) : null}
                                        .
                                    </h1>
                                    <p>
                                        From here you can keep an eye on your latest orders, update
                                        your personal details, get help when you need it and explore our
                                        AI-powered styling tools – all in one place.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Your details / profile section */}
                        <section className="my-account__section my-account__section--profile">
                            <header className="my-account__section-header">
                                <h2>Your details</h2>
                                <p>
                                    Review and update the information we use for delivery, support and
                                    personalised recommendations.
                                </p>
                            </header>

                            <form
                                className="my-account__profile"
                                onSubmit={handleProfileSave}
                            >
                                {profileBanner && (
                                    <div className="my-account__profile-banner">
                                        {profileBanner}
                                    </div>
                                )}

                                {isProfileLoading && !profile && (
                                    <p>Loading your details…</p>
                                )}

                                {profile && (
                                    <div className="my-account__profile-grid">
                                        <div className="my-account__profile-field">
                                            <label className="my-account__profile-label">
                                                Title
                                            </label>
                                            <select
                                                className="my-account__profile-input"
                                                value={profile.title}
                                                onChange={handleProfileChange("title")}
                                            >
                                                <option value="">Prefer not to say</option>
                                                <option value="Mr">Mr</option>
                                                <option value="Mrs">Mrs</option>
                                                <option value="Ms">Ms</option>
                                                <option value="Mx">Mx</option>
                                                <option value="Dr">Dr</option>
                                            </select>
                                        </div>

                                        <div className="my-account__profile-field">
                                            <label className="my-account__profile-label">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                className="my-account__profile-input"
                                                value={profile.first_name}
                                                onChange={handleProfileChange("first_name")}
                                            />
                                        </div>

                                        <div className="my-account__profile-field">
                                            <label className="my-account__profile-label">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                className="my-account__profile-input"
                                                value={profile.last_name}
                                                onChange={handleProfileChange("last_name")}
                                            />
                                        </div>

                                        <div className="my-account__profile-field">
                                            <label className="my-account__profile-label">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="my-account__profile-input"
                                                value={profile.email}
                                                readOnly   // ← read-only, not editable
                                            />
                                        </div>

                                        <div className="my-account__profile-field">
                                            <label className="my-account__profile-label">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                className="my-account__profile-input"
                                                value={profile.phone}
                                                onChange={handleProfileChange("phone")}
                                            />
                                        </div>

                                        <div className="my-account__profile-field">
                                            <label className="my-account__profile-label">
                                                Gender
                                            </label>
                                            <select
                                                className="my-account__profile-input"
                                                value={profile.gender}
                                                onChange={handleProfileChange("gender")}
                                            >
                                                <option value="">Prefer not to say</option>
                                                <option value="female">Female</option>
                                                <option value="male">Male</option>
                                                <option value="nonbinary">Non-binary</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                <div className="my-account__profile-actions">
                                    <button
                                        type="submit"
                                        className="my-account__profile-save-button"
                                        disabled={isSavingProfile || !profile}
                                    >
                                        <span>
                                            {isSavingProfile
                                                ? "Saving your details…"
                                                : "Save changes"}
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </section>

                        <div className="my-account__intro">
                            <div className="my-account__intro-text">
                                <h1 className="my-account__heading">Account Overview</h1>
                                <p>
                                    Welcome back to <strong>AnySzn</strong>. From here you can keep an eye on
                                    your latest orders, update your personal details, get help when you need it
                                    and explore our AI-powered styling tools – all in one place.
                                </p>
                            </div>
                        </div>

                        <div className="my-account__stats">
                            <article className="my-account__stat-card">
                                <span className="my-account__stat-label">Orders placed</span>
                                <span className="my-account__stat-value">0</span>
                                <span className="my-account__stat-note">
                                    View your full order history and past purchases.
                                </span>
                                <Link to="/track-orders" className="my-account__stat-link">
                                    See your orders
                                </Link>
                            </article>

                            <article className="my-account__stat-card">
                                <span className="my-account__stat-label">On the way</span>
                                <span className="my-account__stat-value">0</span>
                                <span className="my-account__stat-note">
                                    Track deliveries in real time and stay updated.
                                </span>
                                <Link to="/track-orders" className="my-account__stat-link">
                                    Track an order
                                </Link>
                            </article>

                            <article className="my-account__stat-card">
                                <span className="my-account__stat-label">Saved preferences</span>
                                <span className="my-account__stat-value">Personalised</span>
                                <span className="my-account__stat-note">
                                    Keep sizes, addresses and communication settings up to date.
                                </span>
                                <Link to="/account" className="my-account__stat-link">
                                    Manage preferences
                                </Link>
                            </article>
                        </div>

                        <section className="my-account__section">
                            <header className="my-account__section-header">
                                <h2>Recent Orders</h2>
                                <p>
                                    Quickly jump back into your most recent purchases. Open an order to see
                                    tracking details, invoices and return options.
                                </p>
                            </header>

                            <div className="my-account__orders-carousel">
                                <article className="my-account__order-card">
                                    <p className="my-account__order-title">No orders yet</p>
                                    <p className="my-account__order-text">
                                        When you place your first order, it will appear here with a quick
                                        summary and a link to track it.
                                    </p>
                                    <Link
                                        to="/track-orders"
                                        className="my-account__order-link"
                                    >
                                        Go to order history
                                    </Link>
                                </article>
                            </div>
                        </section>

                        <section className="my-account__section">
                            <header className="my-account__section-header">
                                <h2>Quick Actions</h2>
                                <p>
                                    Update your details, manage addresses and keep your account secure in just
                                    a few clicks.
                                </p>
                            </header>

                            <div className="my-account__grid my-account__grid--quick-actions">
                                <article className="my-account__card">
                                    <h3>Personal details</h3>
                                    <p>
                                        Edit your name, contact details and default preferences so everything
                                        stays up to date.
                                    </p>
                                    <Link to="/account" className="my-account__card-link">
                                        Edit personal information
                                    </Link>
                                </article>

                                <article className="my-account__card">
                                    <h3>Addresses</h3>
                                    <p>
                                        Add, edit or remove delivery addresses to speed up checkout and make
                                        sure orders go to the right place.
                                    </p>
                                    <Link to="/account" className="my-account__card-link">
                                        Manage delivery addresses
                                    </Link>
                                </article>

                                <article className="my-account__card">
                                    <h3>Security</h3>
                                    <p>
                                        Change your password and keep your account secure across all your
                                        devices.
                                    </p>
                                    <Link to="/change-password" className="my-account__card-link">
                                        Change password
                                    </Link>
                                </article>

                                <article className="my-account__card">
                                    <h3>Login &amp; email</h3>
                                    <p>
                                        Update the email you use to sign in and receive order updates from
                                        AnySzn.
                                    </p>
                                    <Link to="/reset-email" className="my-account__card-link">
                                        Change email address
                                    </Link>
                                </article>
                            </div>
                        </section>

                        <section className="my-account__section">
                            <header className="my-account__section-header">
                                <h2>Help, Shipping &amp; Returns</h2>
                                <p>
                                    Got a question about delivery, sizing, refunds or anything else? Start
                                    here – or reach out to our team.
                                </p>
                            </header>

                            <div className="my-account__grid my-account__grid--help">
                                <article className="my-account__card my-account__card--highlight">
                                    <span className="my-account__tag">Need help?</span>
                                    <h3>Support Centre</h3>
                                    <p>
                                        Browse FAQs, how-to guides and tips for shopping on AnySzn. If you
                                        still need help, you can contact us directly from there.
                                    </p>
                                    <Link to="/support-centre" className="my-account__card-link">
                                        Go to Support Centre
                                    </Link>
                                </article>

                                <article className="my-account__card">
                                    <h3>Shipping &amp; delivery</h3>
                                    <p>
                                        Learn about delivery times, shipping options and where we deliver.
                                    </p>
                                    <ul className="my-account__inline-links">
                                        <li>
                                            <Link to="/shipping">Shipping information</Link>
                                        </li>
                                        <li>
                                            <Link to="/track-orders">Tracking your order</Link>
                                        </li>
                                    </ul>
                                </article>

                                <article className="my-account__card">
                                    <h3>Returns, refunds &amp; sizing</h3>
                                    <p>
                                        Not quite right? Find out how to return items, when you’ll be refunded
                                        and how to find your perfect fit.
                                    </p>
                                    <ul className="my-account__inline-links">
                                        <li>
                                            <Link to="/refunds">Returns &amp; refunds</Link>
                                        </li>
                                        <li>
                                            <Link to="/sizing-guide">Size &amp; fit guide</Link>
                                        </li>
                                    </ul>
                                </article>

                                <article className="my-account__card">
                                    <h3>Contact us</h3>
                                    <p>
                                        Can’t find what you’re looking for? Our team is here to help with
                                        orders, products and more.
                                    </p>
                                    <Link to="/contact" className="my-account__card-link">
                                        Go to contact page
                                    </Link>
                                </article>
                            </div>
                        </section>

                        <section className="my-account__section">
                            <header className="my-account__section-header">
                                <h2>Discover Our Smart Styling Tools</h2>
                                <p>
                                    Take your wardrobe further with AI-driven features built to help you get
                                    dressed faster and shop smarter.
                                </p>
                            </header>

                            <div className="my-account__feature-grid">
                                <article className="my-account__feature-card">
                                    <span className="my-account__feature-tag">Coming Soon</span>
                                    <h3>VR Wardrobe</h3>
                                    <p>
                                        Snap a photo of pieces you already own and let our AI build outfits
                                        around them using items from AnySzn.
                                    </p>
                                    <Link to="/vr-wardrobe" className="my-account__feature-link">
                                        Learn more
                                    </Link>
                                </article>

                                <article className="my-account__feature-card">
                                    <span className="my-account__feature-tag">Coming Soon</span>
                                    <h3>AI Stylist</h3>
                                    <p>
                                        Describe your occasion in plain language and get complete, ready-to-shop
                                        outfits tailored to your vibe, budget and preferred brands.
                                    </p>
                                    <Link to="/ai-stylist" className="my-account__feature-link">
                                        Meet your AI stylist
                                    </Link>
                                </article>

                                <article className="my-account__feature-card">
                                    <span className="my-account__feature-tag">Coming Soon</span>
                                    <h3>VR Changing Room</h3>
                                    <p>
                                        See outfits on your body in real time using your camera – like a virtual
                                        changing room you can access anywhere.
                                    </p>
                                    <Link to="/vr-changing-room" className="my-account__feature-link">
                                        Preview the experience
                                    </Link>
                                </article>
                            </div>
                        </section>

                        <section className="my-account__section my-account__section--legal">
                            <header className="my-account__section-header">
                                <h2>Legal &amp; Policies</h2>
                                <p>
                                    The important small print – how we run our platform and look after your
                                    data.
                                </p>
                            </header>

                            <div className="my-account__legal-links">
                                <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
                                <span>•</span>
                                <Link to="/privacy-policy">Privacy Policy</Link>
                                <span>•</span>
                                <Link to="/cookie-policy">Cookie Policy</Link>
                            </div>
                        </section>
                    </section>
                </GenericPageSection>
            </div>
        </div>
    );
}
