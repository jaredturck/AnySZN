import React, { useMemo, useState, type FormEvent } from "react";

type PaymentMethod = "card" | "paypal" | "gpay" | "shoppay";
type ShippingId = "standard" | "express";
type DiscountCode = "ANY10" | "FREESHIP";

interface FasterCheckoutProps {
  prefilledEmail?: string;
}

interface Address {
  firstName: string;
  lastName: string;
  line1: string;
  line2: string;
  city: string;
  region: string;
  postcode: string;
  country: string;
}

interface CardDetails {
  nameOnCard: string;
  number: string;
  expiry: string;
  cvc: string;
}

interface ShippingOption {
  id: ShippingId;
  label: string;
  price: number;
  hint: string;
}

interface CartItem {
  id: string;
  brand: string;
  name: string;
  size: string;
  colour: string;
  price: number;
  qty: number;
  imageSrc: string | null;
}

function formatGBP(value: number): string {
  const safe = Number.isFinite(value) ? value : 0;
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(safe);
}

function clampQty(value: number | string): number {
  const n = Number(value);
  if (!Number.isFinite(n)) return 1;
  return Math.max(1, Math.min(99, Math.round(n)));
}

function isDiscountCode(code: string): code is DiscountCode {
  return code === "ANY10" || code === "FREESHIP";
}

export function FasterCheckout({ prefilledEmail = "you@example.com" }: FasterCheckoutProps) {
  const serviceCharge = 0.99;

  const [contactEmail, setContactEmail] = useState<string>(prefilledEmail);
  const [contactPhone, setContactPhone] = useState<string>("");

  const [address, setAddress] = useState<Address>({
    firstName: "",
    lastName: "",
    line1: "",
    line2: "",
    city: "",
    region: "",
    postcode: "",
    country: "United Kingdom",
  });

  const [shippingId, setShippingId] = useState<ShippingId>("standard");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [billingSameAsShipping, setBillingSameAsShipping] = useState<boolean>(true);

  const [discountInput, setDiscountInput] = useState<string>("");
  const [appliedDiscountCode, setAppliedDiscountCode] = useState<DiscountCode | "">("");
  const [discountError, setDiscountError] = useState<string>("");

  const [card, setCard] = useState<CardDetails>({
    nameOnCard: "",
    number: "",
    expiry: "",
    cvc: "",
  });

  const [isPlacingOrder, setIsPlacingOrder] = useState<boolean>(false);

  const shippingOptions = useMemo<ShippingOption[]>(
    () => [
      { id: "standard", label: "Standard (2–4 business days)", price: 4.99, hint: "Tracked delivery" },
      { id: "express", label: "Express (1–2 business days)", price: 7.99, hint: "Priority handling" },
    ],
    [],
  );

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "itm_1",
      brand: "MISBHV",
      name: "Hugo Boss – Graphic Tee",
      size: "M",
      colour: "Black",
      price: 195.0,
      qty: 1,
      imageSrc: null,
    },
    {
      id: "itm_2",
      brand: "Supreme",
      name: "Martin Wong – Crewneck",
      size: "L",
      colour: "White",
      price: 169.0,
      qty: 1,
      imageSrc: null,
    },
    {
      id: "itm_3",
      brand: "Primo Collection",
      name: "Camo Cargo Shorts",
      size: "L",
      colour: "Camo",
      price: 48.0,
      qty: 1,
      imageSrc: null,
    },
  ]);

  const shippingPrice = useMemo<number>(() => {
    const found = shippingOptions.find((o) => o.id === shippingId);
    return found ? found.price : 0;
  }, [shippingId, shippingOptions]);

  const subtotal = useMemo<number>(() => cartItems.reduce((sum, item) => sum + item.price * item.qty, 0), [cartItems]);

  const discountAmount = useMemo<number>(() => {
    const code = (appliedDiscountCode || "").trim().toUpperCase();
    if (code === "ANY10") return subtotal * 0.1;
    return 0;
  }, [appliedDiscountCode, subtotal]);

  const shippingDiscount = useMemo<number>(() => {
    const code = (appliedDiscountCode || "").trim().toUpperCase();
    if (code === "FREESHIP") return shippingPrice;
    return 0;
  }, [appliedDiscountCode, shippingPrice]);

  const total = useMemo<number>(() => {
    const discountedShipping = Math.max(0, shippingPrice - shippingDiscount);
    const discountedSubtotal = Math.max(0, subtotal - discountAmount);
    return discountedSubtotal + discountedShipping + serviceCharge;
  }, [subtotal, shippingPrice, discountAmount, shippingDiscount]);

  function updateQty(itemId: CartItem["id"], nextQty: number | string): void {
    setCartItems((prev) =>
      prev.map((item) => (item.id !== itemId ? item : { ...item, qty: clampQty(nextQty) })),
    );
  }

  function removeItem(itemId: CartItem["id"]): void {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  }

  function applyDiscount(): void {
    const raw = (discountInput || "").trim().toUpperCase();

    setDiscountError("");
    setAppliedDiscountCode("");

    if (!raw) {
      setDiscountError("Enter a code to apply.");
      return;
    }

    if (!isDiscountCode(raw)) {
      setDiscountError("That code doesn’t look right. Try ANY10 or FREESHIP.");
      return;
    }

    setAppliedDiscountCode(raw);
    setDiscountInput("");
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    setIsPlacingOrder(true);
    await new Promise<void>((resolve) => setTimeout(resolve, 650));
    setIsPlacingOrder(false);

    // eslint-disable-next-line no-alert
    alert("Order placed (demo). Hook this up to your backend/payment provider.");
  }

  const canCheckout = cartItems.length > 0;

  const inputBase =
    "h-[46px] w-full rounded-2xl border border-black/10 bg-[linear-gradient(180deg,rgba(255,242,227,0.55),rgba(255,255,255,0.75))] px-[0.95rem] text-[0.98rem] text-[#141414] placeholder:text-black/40 transition duration-150 focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)] focus-visible:border-black/20";

  const panelBase = "rounded-[1.5rem] border border-black/5 bg-white p-[1.1rem] shadow-[0_14px_34px_rgba(0,0,0,0.10)]";

  return (
    <div className="min-h-screen px-5 pt-9 pb-16 text-[#141414] max-[600px]:px-4 max-[600px]:pt-6 max-[600px]:pb-12 bg-[radial-gradient(900px_360px_at_18%_10%,rgba(189,255,0,0.20),rgba(189,255,0,0)_60%),radial-gradient(780px_420px_at_82%_18%,rgba(255,242,227,0.95),rgba(255,242,227,0)_68%),#FFF7EE]">
      <div className="mx-auto max-w-[70rem] pt-16">
        <header className="mb-5 flex items-end justify-between gap-5 max-[640px]:flex-col max-[640px]:items-start">
          <div className="max-w-[44rem]">
            <div className="mb-2 inline-flex items-center gap-2 text-[0.9rem] text-black/55">
              <span className="h-[0.6rem] w-[0.6rem] rounded-full bg-[#BDFF00] shadow-[0_0_0_6px_rgba(189,255,0,0.18)]" />
              Secure checkout
            </div>

            <h1 className="m-0 text-[2.2rem] tracking-[-0.03em] max-[600px]:text-[1.9rem]">Checkout</h1>

            <p className="m-0 leading-[1.5] text-[#5C5C5C]">
              We’ll match brands, sizing and delivery options. Your service fee is always <strong>£0.99</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-[1.2rem] border border-black/5 bg-white/75 px-[0.9rem] py-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-[10px] max-[640px]:w-full max-[640px]:justify-between max-[480px]:flex-col max-[480px]:items-start">
            {["Tracked delivery", "Easy returns", "Encrypted payments"].map((t) => (
              <div key={t} className="inline-flex items-center gap-2 text-[0.9rem] text-black/70">
                <span className="inline-flex h-[1.35rem] w-[1.35rem] items-center justify-center rounded-full border border-black/10 bg-[rgba(189,255,0,0.25)] font-bold">
                  ✓
                </span>
                {t}
              </div>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
          <main className="min-w-0">
            <form id="checkoutForm" className="flex flex-col gap-4" onSubmit={onSubmit}>
              {/* Contact */}
              <section className={panelBase}>
                <div className="mb-[0.9rem] flex items-baseline justify-between gap-4 max-[480px]:flex-col max-[480px]:items-start">
                  <h2 className="m-0 text-[1.05rem] tracking-[-0.01em]">Contact</h2>
                  <span className="inline-flex h-7 items-center rounded-full border border-black/10 bg-[rgba(189,255,0,0.22)] px-3 text-[0.85rem] font-bold text-black/80">
                    Account linked
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
                  <div className="mb-3 flex flex-col gap-2">
                    <label className="text-[0.88rem] text-black/70" htmlFor="contactEmail">
                      Email
                    </label>
                    <input
                      id="contactEmail"
                      className={inputBase}
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      autoComplete="email"
                      placeholder="you@domain.com"
                      required
                    />
                  </div>

                  <div className="mb-3 flex flex-col gap-2">
                    <label className="text-[0.88rem] text-black/70" htmlFor="contactPhone">
                      Phone
                    </label>
                    <input
                      id="contactPhone"
                      className={inputBase}
                      type="tel"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      autoComplete="tel"
                      placeholder="+44 7..."
                      required
                    />
                  </div>
                </div>

                <label className="mt-2 flex items-start gap-2 text-[0.95rem] text-black/70">
                  <input type="checkbox" className="mt-[0.2rem] accent-[#BDFF00]" />
                  <span>Text/email me order updates and drops (optional)</span>
                </label>
              </section>

              {/* Delivery address */}
              <section className={panelBase}>
                <div className="mb-[0.9rem] flex items-baseline justify-between gap-4 max-[480px]:flex-col max-[480px]:items-start">
                  <h2 className="m-0 text-[1.05rem] tracking-[-0.01em]">Delivery address</h2>
                  <span className="text-[0.95rem] text-[#5C5C5C]">Where should we send your fit?</span>
                </div>

                <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
                  <div className="mb-3 flex flex-col gap-2">
                    <label className="text-[0.88rem] text-black/70" htmlFor="firstName">
                      First name
                    </label>
                    <input
                      id="firstName"
                      className={inputBase}
                      value={address.firstName}
                      onChange={(e) => setAddress((p) => ({ ...p, firstName: e.target.value }))}
                      autoComplete="given-name"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="mb-3 flex flex-col gap-2">
                    <label className="text-[0.88rem] text-black/70" htmlFor="lastName">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      className={inputBase}
                      value={address.lastName}
                      onChange={(e) => setAddress((p) => ({ ...p, lastName: e.target.value }))}
                      autoComplete="family-name"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3 flex flex-col gap-2">
                  <label className="text-[0.88rem] text-black/70" htmlFor="line1">
                    Address line 1
                  </label>
                  <input
                    id="line1"
                    className={inputBase}
                    value={address.line1}
                    onChange={(e) => setAddress((p) => ({ ...p, line1: e.target.value }))}
                    autoComplete="address-line1"
                    placeholder="House number and street"
                    required
                  />
                </div>

                <div className="mb-3 flex flex-col gap-2">
                  <label className="text-[0.88rem] text-black/70" htmlFor="line2">
                    Address line 2 (optional)
                  </label>
                  <input
                    id="line2"
                    className={inputBase}
                    value={address.line2}
                    onChange={(e) => setAddress((p) => ({ ...p, line2: e.target.value }))}
                    autoComplete="address-line2"
                    placeholder="Apartment, suite, etc."
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
                  <div className="mb-3 flex flex-col gap-2">
                    <label className="text-[0.88rem] text-black/70" htmlFor="city">
                      City
                    </label>
                    <input
                      id="city"
                      className={inputBase}
                      value={address.city}
                      onChange={(e) => setAddress((p) => ({ ...p, city: e.target.value }))}
                      autoComplete="address-level2"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div className="mb-3 flex flex-col gap-2">
                    <label className="text-[0.88rem] text-black/70" htmlFor="region">
                      County / State
                    </label>
                    <input
                      id="region"
                      className={inputBase}
                      value={address.region}
                      onChange={(e) => setAddress((p) => ({ ...p, region: e.target.value }))}
                      autoComplete="address-level1"
                      placeholder="County / State"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
                  <div className="mb-0 flex flex-col gap-2">
                    <label className="text-[0.88rem] text-black/70" htmlFor="postcode">
                      Postcode
                    </label>
                    <input
                      id="postcode"
                      className={inputBase}
                      value={address.postcode}
                      onChange={(e) => setAddress((p) => ({ ...p, postcode: e.target.value }))}
                      autoComplete="postal-code"
                      placeholder="Postcode"
                      required
                    />
                  </div>
                  <div className="mb-0 flex flex-col gap-2">
                    <label className="text-[0.88rem] text-black/70" htmlFor="country">
                      Country
                    </label>
                    <input
                      id="country"
                      className={inputBase}
                      value={address.country}
                      onChange={(e) => setAddress((p) => ({ ...p, country: e.target.value }))}
                      autoComplete="country-name"
                      placeholder="Country"
                      required
                    />
                  </div>
                </div>
              </section>

              {/* Shipping */}
              <section className={panelBase}>
                <div className="mb-[0.9rem] flex items-baseline justify-between gap-4 max-[480px]:flex-col max-[480px]:items-start">
                  <h2 className="m-0 text-[1.05rem] tracking-[-0.01em]">Shipping</h2>
                  <span className="text-[0.95rem] text-[#5C5C5C]">Choose what works for you.</span>
                </div>

                <div className="flex flex-col gap-2" role="radiogroup" aria-label="Shipping options">
                  {shippingOptions.map((opt) => {
                    const active = shippingId === opt.id;

                    return (
                      <label
                        key={opt.id}
                        className={[
                          "grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[1.15rem] border px-[0.85rem] py-[0.85rem] transition duration-150",
                          "bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.01))] border-black/10",
                          "hover:-translate-y-[1px] hover:shadow-[0_14px_34px_rgba(0,0,0,0.09)] hover:border-black/15",
                          "focus-within:ring-4 focus-within:ring-[rgba(189,255,0,0.55)] focus-within:border-black/20 focus-within:outline-none",
                          active
                            ? "bg-[radial-gradient(360px_120px_at_20%_20%,rgba(189,255,0,0.20),rgba(189,255,0,0)_60%),linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.01))] border-black/20"
                            : "",
                        ].join(" ")}
                      >
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingId === opt.id}
                          onChange={() => setShippingId(opt.id)}
                          className="accent-[#BDFF00]"
                        />

                        <span className="flex min-w-0 flex-col gap-1">
                          <span className="font-bold tracking-[-0.01em]">{opt.label}</span>
                          <span className="text-[0.9rem] text-[#5C5C5C]">{opt.hint}</span>
                        </span>

                        <span className="font-extrabold">{formatGBP(opt.price)}</span>
                      </label>
                    );
                  })}
                </div>
              </section>

              {/* Payment */}
              <section className={panelBase}>
                <div className="mb-[0.9rem] flex items-baseline justify-between gap-4 max-[480px]:flex-col max-[480px]:items-start">
                  <h2 className="m-0 text-[1.05rem] tracking-[-0.01em]">Payment</h2>
                  <span className="text-[0.95rem] text-[#5C5C5C]">All payments are encrypted.</span>
                </div>

                <div
                  className="mb-[0.85rem] grid grid-cols-4 gap-2 rounded-[1.25rem] border border-black/5 bg-black/[0.03] p-2 max-[600px]:grid-cols-2"
                  role="tablist"
                  aria-label="Payment methods"
                >
                  {(
                    [
                      ["card", "Card"],
                      ["paypal", "PayPal"],
                      ["gpay", "Google Pay"],
                      ["shoppay", "Shop Pay"],
                    ] as const
                  ).map(([id, label]) => {
                    const active = paymentMethod === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setPaymentMethod(id)}
                        className={[
                          "h-[42px] rounded-2xl border text-[0.95rem] font-bold transition duration-150",
                          "focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)]",
                          active
                            ? "border-black/10 bg-[linear-gradient(135deg,rgba(189,255,0,0.45),rgba(100,255,155,0.28))] text-black/85 shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                            : "border-transparent bg-transparent text-black/70 hover:bg-white/65 hover:border-black/10",
                        ].join(" ")}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                {paymentMethod === "card" && (
                  <div className="mt-1" role="region" aria-label="Card details">
                    <div className="mb-3 flex flex-col gap-2">
                      <label className="text-[0.88rem] text-black/70" htmlFor="nameOnCard">
                        Name on card
                      </label>
                      <input
                        id="nameOnCard"
                        className={inputBase}
                        value={card.nameOnCard}
                        onChange={(e) => setCard((p) => ({ ...p, nameOnCard: e.target.value }))}
                        autoComplete="cc-name"
                        placeholder="Name on card"
                        required
                      />
                    </div>

                    <div className="mb-3 flex flex-col gap-2">
                      <label className="text-[0.88rem] text-black/70" htmlFor="cardNumber">
                        Card number
                      </label>
                      <input
                        id="cardNumber"
                        className={inputBase}
                        value={card.number}
                        onChange={(e) => setCard((p) => ({ ...p, number: e.target.value }))}
                        autoComplete="cc-number"
                        inputMode="numeric"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
                      <div className="mb-3 flex flex-col gap-2">
                        <label className="text-[0.88rem] text-black/70" htmlFor="cardExpiry">
                          Expiry
                        </label>
                        <input
                          id="cardExpiry"
                          className={inputBase}
                          value={card.expiry}
                          onChange={(e) => setCard((p) => ({ ...p, expiry: e.target.value }))}
                          autoComplete="cc-exp"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="mb-3 flex flex-col gap-2">
                        <label className="text-[0.88rem] text-black/70" htmlFor="cardCvc">
                          CVC
                        </label>
                        <input
                          id="cardCvc"
                          className={inputBase}
                          value={card.cvc}
                          onChange={(e) => setCard((p) => ({ ...p, cvc: e.target.value }))}
                          autoComplete="cc-csc"
                          inputMode="numeric"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>

                    <label className="mt-2 flex items-start gap-2 text-[0.95rem] text-black/70">
                      <input
                        type="checkbox"
                        className="mt-[0.2rem] accent-[#BDFF00]"
                        checked={billingSameAsShipping}
                        onChange={(e) => setBillingSameAsShipping(e.target.checked)}
                      />
                      <span>Billing address same as delivery</span>
                    </label>
                  </div>
                )}

                {paymentMethod !== "card" && (
                  <div className="rounded-[1.25rem] border border-black/10 bg-[radial-gradient(300px_120px_at_20%_20%,rgba(189,255,0,0.22),rgba(189,255,0,0)_60%),linear-gradient(180deg,rgba(255,242,227,0.55),rgba(255,255,255,0.75))] p-4">
                    <p className="m-0 mb-3 leading-[1.5] text-black/70">
                      You’ll be redirected to complete payment with{" "}
                      <strong>
                        {paymentMethod === "paypal" ? "PayPal" : paymentMethod === "gpay" ? "Google Pay" : "Shop Pay"}
                      </strong>
                      .
                    </p>
                    <div className="inline-flex h-[30px] items-center rounded-full border border-black/10 bg-black/[0.05] px-3 text-[0.9rem] font-bold text-black/75">
                      Fast • Secure • One-tap
                    </div>
                  </div>
                )}
              </section>
            </form>
          </main>

          <aside className="min-w-0">
            <div className="top-5 rounded-[1.5rem] border border-black/5 bg-white p-[1.1rem] shadow-[0_18px_46px_rgba(0,0,0,0.14)] md:sticky md:top-5">
              <div className="mb-[0.9rem] flex items-baseline justify-between gap-4">
                <h2 className="m-0 text-[1.05rem] tracking-[-0.01em]">Order summary</h2>
                <span className="text-[0.95rem] text-[#5C5C5C]">
                  {cartItems.length} item{cartItems.length === 1 ? "" : "s"}
                </span>
              </div>

              <div className="mb-4 flex flex-col gap-3 border-b border-black/10 pb-4">
                {cartItems.length === 0 && (
                  <div className="rounded-[1.25rem] border border-dashed border-black/20 bg-black/[0.02] p-4">
                    <div className="mb-1 font-black">Your bag is empty</div>
                    <div className="text-[#5C5C5C]">Add something tasty and come back.</div>
                  </div>
                )}

                {cartItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-[74px_minmax(0,1fr)] items-start gap-3">
                    <div
                      className={[
                        "h-[74px] w-[74px] overflow-hidden rounded-[1.1rem] border border-black/10 shadow-[0_10px_24px_rgba(0,0,0,0.08)]",
                        item.imageSrc
                          ? "bg-black/[0.03]"
                          : "bg-[radial-gradient(80px_60px_at_30%_20%,rgba(189,255,0,0.35),rgba(189,255,0,0)_70%),linear-gradient(180deg,rgba(0,0,0,0.03),rgba(0,0,0,0.01))]",
                      ].join(" ")}
                    >
                      {item.imageSrc ? (
                        <img className="h-full w-full object-cover" src={item.imageSrc} alt={`${item.brand} ${item.name}`} />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
                          <span className="font-black tracking-[-0.05em] text-black/65">ANY</span>
                        </div>
                      )}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-[0.85rem] font-bold text-black/55">{item.brand}</div>
                          <div className="truncate font-extrabold tracking-[-0.01em] leading-[1.15]">{item.name}</div>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="shrink-0 bg-transparent text-[0.9rem] text-black/60 underline underline-offset-[3px] hover:text-black/75 focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)] focus-visible:rounded-xl"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-1 flex items-center gap-2 text-[0.9rem] text-[#5C5C5C]">
                        <span>Size: {item.size}</span>
                        <span className="opacity-55">•</span>
                        <span>Colour: {item.colour}</span>
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-black/[0.03] p-[0.35rem]">
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            aria-label="Decrease quantity"
                            className="h-8 w-8 rounded-full border border-black/10 bg-white/75 font-black transition hover:-translate-y-[1px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.10)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)]"
                          >
                            −
                          </button>

                          <input
                            className="h-8 w-[42px] bg-transparent text-center font-extrabold text-black/75 outline-none"
                            value={item.qty}
                            onChange={(e) => updateQty(item.id, e.target.value)}
                            inputMode="numeric"
                            aria-label="Quantity"
                          />

                          <button
                            type="button"
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            aria-label="Increase quantity"
                            className="h-8 w-8 rounded-full border border-black/10 bg-white/75 font-black transition hover:-translate-y-[1px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.10)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)]"
                          >
                            +
                          </button>
                        </div>

                        <div className="font-black tracking-[-0.01em]">{formatGBP(item.price * item.qty)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Discount */}
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <input
                    className={[
                      inputBase,
                      "flex-1",
                      discountError ? "border-[rgba(255,59,48,0.45)] ring-4 ring-[rgba(255,59,48,0.12)]" : "",
                    ].join(" ")}
                    value={discountInput}
                    onChange={(e) => setDiscountInput(e.target.value)}
                    placeholder="Discount code (ANY10 / FREESHIP)"
                    aria-label="Discount code"
                  />

                  <button
                    type="button"
                    onClick={applyDiscount}
                    className="h-[46px] shrink-0 rounded-2xl border border-black/10 bg-black/[0.04] px-4 font-extrabold transition hover:-translate-y-[1px] hover:shadow-[0_12px_26px_rgba(0,0,0,0.08)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)]"
                  >
                    Apply
                  </button>
                </div>

                {discountError && <div className="mt-2 text-[0.92rem] font-bold text-[#ff3b30]">{discountError}</div>}

                {!!appliedDiscountCode && !discountError && (
                  <div className="mt-2 flex items-center gap-2 text-[0.92rem] text-black/70">
                    <span className="h-[0.6rem] w-[0.6rem] rounded-full bg-[#BDFF00] shadow-[0_0_0_6px_rgba(189,255,0,0.18)]" />
                    Applied: <strong>{appliedDiscountCode}</strong>
                    <button
                      type="button"
                      onClick={() => setAppliedDiscountCode("")}
                      className="ml-1 bg-transparent p-0 font-extrabold text-black/65 underline underline-offset-[3px] hover:text-black/85 focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)] focus-visible:rounded-xl"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Totals */}
              <div className="mb-4 rounded-[1.25rem] border border-black/5 bg-[radial-gradient(320px_140px_at_20%_20%,rgba(189,255,0,0.18),rgba(189,255,0,0)_60%),rgba(0,0,0,0.02)] p-4">
                <div className="flex items-baseline justify-between gap-3 py-2 text-black/75">
                  <span>Subtotal</span>
                  <span className="font-extrabold">{formatGBP(subtotal)}</span>
                </div>

                <div className="flex items-baseline justify-between gap-3 py-2 text-black/75">
                  <span>Shipping</span>
                  <span className="font-extrabold">
                    {shippingDiscount > 0 ? (
                      <>
                        <span className="mr-2 text-black/45 line-through">{formatGBP(shippingPrice)}</span>
                        <span className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-[rgba(189,255,0,0.22)] px-2 py-[0.1rem] text-black/85">
                          {formatGBP(Math.max(0, shippingPrice - shippingDiscount))}
                        </span>
                      </>
                    ) : (
                      formatGBP(shippingPrice)
                    )}
                  </span>
                </div>

                <div className="flex items-baseline justify-between gap-3 py-2 text-black/75">
                  <span>Service charge</span>
                  <span className="font-extrabold">{formatGBP(serviceCharge)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex items-baseline justify-between gap-3 py-2 text-black/75">
                    <span>Discount</span>
                    <span className="font-extrabold">
                      <span className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-[rgba(189,255,0,0.22)] px-2 py-[0.1rem] text-black/85">
                        − {formatGBP(discountAmount)}
                      </span>
                    </span>
                  </div>
                )}

                <div className="my-2 h-px bg-black/10" />

                <div className="flex items-baseline justify-between gap-3 py-2 text-black/90">
                  <span className="font-black">Total</span>
                  <span className="text-[1.1rem] font-black">{formatGBP(total)}</span>
                </div>

                <div className="mt-1 text-[0.9rem] text-[#5C5C5C]">VAT included where applicable.</div>
              </div>

              <button
                className="h-[52px] w-full rounded-[1.2rem] border border-black/10 bg-[linear-gradient(135deg,#BDFF00,#64ff9b)] font-black uppercase tracking-[0.02em] text-black/80 shadow-[0_18px_40px_rgba(0,0,0,0.14)] transition hover:-translate-y-[1px] hover:shadow-[0_22px_52px_rgba(0,0,0,0.18)] disabled:cursor-not-allowed disabled:opacity-55 disabled:shadow-none disabled:hover:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)]"
                type="submit"
                form="checkoutForm"
                disabled={!canCheckout || isPlacingOrder}
              >
                {isPlacingOrder ? "Placing order…" : `Pay ${formatGBP(total)}`}
              </button>

              <div className="mt-3 text-[0.9rem] leading-[1.45] text-black/55">
                By placing your order you agree to our{" "}
                <button
                  type="button"
                  className="font-extrabold text-black/65 underline underline-offset-[3px] hover:text-black/85 focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)] focus-visible:rounded-xl"
                >
                  Terms
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="font-extrabold text-black/65 underline underline-offset-[3px] hover:text-black/85 focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(189,255,0,0.55)] focus-visible:rounded-xl"
                >
                  Returns Policy
                </button>
                .
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
