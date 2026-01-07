import { useState, type FormEvent } from "react";
import { GenericPageSection } from "./generic_text";
import { postJson } from "../api_fetch";

type ContactApiResponse = {
  status: "success" | "error";
  message: string;
};

type StatusBanner =
  | {
      type: "success" | "error";
      message: string;
    }
  | null;

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
          message: data.message || "Something went wrong sending your message. Please try again.",
        });
      }
    } catch {
      setStatusBanner({
        type: "error",
        message: "We couldn't send your message right now. Please try again in a moment.",
      });
    }
  };

  const bannerClass =
    statusBanner?.type === "success"
      ? "border-green-900/25 bg-green-900/10 text-green-900"
      : "border-red-700/25 bg-red-700/10 text-red-700";

  return (
    <div className="pt-16">
      <GenericPageSection
        label="Support"
        title="Contact AnyHJS"
        subtitle="Questions, feedback or style advice? Send us a message and we’ll be in touch."
      >
        {/* tiny keyframes (keeps the old glow animation without bringing SCSS back) */}
        <style>
          {`
            @keyframes authFormGlow {
              0%, 100% { box-shadow: 0 16px 40px rgba(0,0,0,0.18); }
              50% { box-shadow: 0 18px 48px rgba(0,0,0,0.22), 0 0 16px rgba(189,255,0,0.22); }
            }
          `}
        </style>

        <form
          onSubmit={handleSubmit}
          className={[
            "relative mx-auto flex w-full max-w-[420px] flex-col gap-6 overflow-hidden rounded-[1.25rem] border border-black/10",
            "bg-[radial-gradient(circle_at_12%_10%,rgba(189,255,0,0.10),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.86)_0%,rgba(255,255,255,0.64)_100%)]",
            "px-7 pb-9 pt-8 shadow-[0_22px_60px_rgba(0,0,0,0.10),0_6px_18px_rgba(0,0,0,0.06)]",
            "before:pointer-events-none before:absolute before:inset-0 before:opacity-75",
            "before:bg-[linear-gradient(135deg,rgba(255,255,255,0.00)_0%,rgba(255,255,255,0.25)_35%,rgba(255,255,255,0.00)_70%)]",
          ].join(" ")}
        >
          <div className="relative z-[1] flex items-center justify-between gap-4">
            <p className="m-0 text-sm text-black/70">
              Fill in the form below and our team will typically reply within 1–2 business days.
            </p>
          </div>

          {statusBanner && (
            <div
              className={[
                "relative z-[1] rounded-xl border px-4 py-3 text-sm shadow-[0_12px_26px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)]",
                "bg-white/75 text-black/85 border-black/10",
                bannerClass,
              ].join(" ")}
            >
              {statusBanner.message}
            </div>
          )}

          <div className="relative z-[1] flex flex-col gap-2">
            <label
              htmlFor="contact-name"
              className="text-[0.85rem] font-extrabold uppercase tracking-[0.14em] text-black/70"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              className={[
                "h-[46px] rounded-[0.85rem] border border-black/15 bg-white/80 px-[0.9rem] text-[0.95rem] text-black/90",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_22px_rgba(0,0,0,0.06)]",
                "transition-[border-color,box-shadow,background-color,transform] duration-150",
                "placeholder:text-black/45",
                "focus:-translate-y-[1px] focus:border-[#BDFF00]/70 focus:bg-white/90 focus:outline-none",
                "focus:shadow-[0_0_0_3px_rgba(189,255,0,0.18),0_18px_40px_rgba(0,0,0,0.10)]",
              ].join(" ")}
            />
          </div>

          <div className="relative z-[1] flex flex-col gap-2">
            <label
              htmlFor="contact-email"
              className="text-[0.85rem] font-extrabold uppercase tracking-[0.14em] text-black/70"
            >
              Email address
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className={[
                "h-[46px] rounded-[0.85rem] border border-black/15 bg-white/80 px-[0.9rem] text-[0.95rem] text-black/90",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_22px_rgba(0,0,0,0.06)]",
                "transition-[border-color,box-shadow,background-color,transform] duration-150",
                "placeholder:text-black/45",
                "focus:-translate-y-[1px] focus:border-[#BDFF00]/70 focus:bg-white/90 focus:outline-none",
                "focus:shadow-[0_0_0_3px_rgba(189,255,0,0.18),0_18px_40px_rgba(0,0,0,0.10)]",
              ].join(" ")}
            />
          </div>

          <div className="relative z-[1] flex flex-col gap-2">
            <label
              htmlFor="contact-subject"
              className="text-[0.85rem] font-extrabold uppercase tracking-[0.14em] text-black/70"
            >
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="What can we help you with?"
              className={[
                "h-[46px] rounded-[0.85rem] border border-black/15 bg-white/80 px-[0.9rem] text-[0.95rem] text-black/90",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_22px_rgba(0,0,0,0.06)]",
                "transition-[border-color,box-shadow,background-color,transform] duration-150",
                "placeholder:text-black/45",
                "focus:-translate-y-[1px] focus:border-[#BDFF00]/70 focus:bg-white/90 focus:outline-none",
                "focus:shadow-[0_0_0_3px_rgba(189,255,0,0.18),0_18px_40px_rgba(0,0,0,0.10)]",
              ].join(" ")}
            />
          </div>

          <div className="relative z-[1] flex flex-col gap-2">
            <label
              htmlFor="contact-message"
              className="text-[0.85rem] font-extrabold uppercase tracking-[0.14em] text-black/70"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Share a few details so we can help you as quickly as possible."
              className={[
                "min-h-[140px] resize-y rounded-[0.85rem] border border-black/15 bg-white/80 px-[0.9rem] py-[0.8rem] text-[0.95rem] text-black/90",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_22px_rgba(0,0,0,0.06)]",
                "transition-[border-color,box-shadow,background-color,transform] duration-150",
                "placeholder:text-black/45",
                "focus:-translate-y-[1px] focus:border-[#BDFF00]/70 focus:bg-white/90 focus:outline-none",
                "focus:shadow-[0_0_0_3px_rgba(189,255,0,0.18),0_18px_40px_rgba(0,0,0,0.10)]",
              ].join(" ")}
            />
          </div>

          <button
            type="submit"
            className={[
              "relative z-[1] mt-3 inline-flex w-full items-center justify-center gap-2",
              "h-[52px] rounded-full border-0 px-4",
              "text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-black",
              "bg-[linear-gradient(135deg,#BDFF00_0%,#72ffb6_50%,#BDFF00_100%)] bg-[length:200%_100%]",
              "shadow-[0_16px_40px_rgba(0,0,0,0.18)]",
              "transition-[background-position,transform,box-shadow] duration-300",
              "hover:bg-[position:100%_0] hover:-translate-y-[1px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.22)]",
              "active:translate-y-0 active:shadow-[0_10px_24px_rgba(0,0,0,0.18)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BDFF00]/90 focus-visible:ring-offset-4",
            ].join(" ")}
            style={{ animation: "authFormGlow 4s ease-in-out infinite" }}
          >
            <span>Send message</span>
          </button>
        </form>
      </GenericPageSection>
    </div>
  );
}
