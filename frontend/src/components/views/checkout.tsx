import React, { useMemo, useState, type FormEvent } from 'react';
import '../../styles/checkout.scss';

type PaymentMethod = 'card' | 'paypal' | 'gpay' | 'shoppay';
type ShippingId = 'standard' | 'express';
type DiscountCode = 'ANY10' | 'FREESHIP';

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
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(safe);
}

function clampQty(value: number | string): number {
  const n = Number(value);
  if (!Number.isFinite(n)) return 1;
  return Math.max(1, Math.min(99, Math.round(n)));
}

function isDiscountCode(code: string): code is DiscountCode {
  return code === 'ANY10' || code === 'FREESHIP';
}

export function FasterCheckout({ prefilledEmail = 'you@example.com' }: FasterCheckoutProps) {
  const serviceCharge = 0.99;

  const [contactEmail, setContactEmail] = useState<string>(prefilledEmail);
  const [contactPhone, setContactPhone] = useState<string>('');

  const [address, setAddress] = useState<Address>({
    firstName: '',
    lastName: '',
    line1: '',
    line2: '',
    city: '',
    region: '',
    postcode: '',
    country: 'United Kingdom',
  });

  const [shippingId, setShippingId] = useState<ShippingId>('standard');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [billingSameAsShipping, setBillingSameAsShipping] = useState<boolean>(true);

  const [discountInput, setDiscountInput] = useState<string>('');
  const [appliedDiscountCode, setAppliedDiscountCode] = useState<DiscountCode | ''>('');
  const [discountError, setDiscountError] = useState<string>('');

  const [card, setCard] = useState<CardDetails>({
    nameOnCard: '',
    number: '',
    expiry: '',
    cvc: '',
  });

  const [isPlacingOrder, setIsPlacingOrder] = useState<boolean>(false);

  const shippingOptions = useMemo<ShippingOption[]>(
    () => [
      {
        id: 'standard',
        label: 'Standard (2–4 business days)',
        price: 4.99,
        hint: 'Tracked delivery',
      },
      {
        id: 'express',
        label: 'Express (1–2 business days)',
        price: 7.99,
        hint: 'Priority handling',
      },
    ],
    []
  );

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'itm_1',
      brand: 'MISBHV',
      name: 'Hugo Boss – Graphic Tee',
      size: 'M',
      colour: 'Black',
      price: 195.0,
      qty: 1,
      imageSrc: null,
    },
    {
      id: 'itm_2',
      brand: 'Supreme',
      name: 'Martin Wong – Crewneck',
      size: 'L',
      colour: 'White',
      price: 169.0,
      qty: 1,
      imageSrc: null,
    },
    {
      id: 'itm_3',
      brand: 'Primo Collection',
      name: 'Camo Cargo Shorts',
      size: 'L',
      colour: 'Camo',
      price: 48.0,
      qty: 1,
      imageSrc: null,
    },
  ]);

  const shippingPrice = useMemo<number>(() => {
    const found = shippingOptions.find((o) => o.id === shippingId);
    return found ? found.price : 0;
  }, [shippingId, shippingOptions]);

  const subtotal = useMemo<number>(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [cartItems]);

  const discountAmount = useMemo<number>(() => {
    const code = (appliedDiscountCode || '').trim().toUpperCase();

    if (code === 'ANY10') {
      return subtotal * 0.1;
    }

    return 0;
  }, [appliedDiscountCode, subtotal]);

  const shippingDiscount = useMemo<number>(() => {
    const code = (appliedDiscountCode || '').trim().toUpperCase();
    if (code === 'FREESHIP') return shippingPrice;
    return 0;
  }, [appliedDiscountCode, shippingPrice]);

  const total = useMemo<number>(() => {
    const discountedShipping = Math.max(0, shippingPrice - shippingDiscount);
    const discountedSubtotal = Math.max(0, subtotal - discountAmount);
    return discountedSubtotal + discountedShipping + serviceCharge;
  }, [subtotal, shippingPrice, discountAmount, shippingDiscount]);

  function updateQty(itemId: CartItem['id'], nextQty: number | string): void {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id !== itemId) return item;
        return { ...item, qty: clampQty(nextQty) };
      })
    );
  }

  function removeItem(itemId: CartItem['id']): void {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  }

  function applyDiscount(): void {
    const raw = (discountInput || '').trim().toUpperCase();

    setDiscountError('');
    setAppliedDiscountCode('');

    if (!raw) {
      setDiscountError('Enter a code to apply.');
      return;
    }

    if (!isDiscountCode(raw)) {
      setDiscountError('That code doesn’t look right. Try ANY10 or FREESHIP.');
      return;
    }

    setAppliedDiscountCode(raw);
    setDiscountInput('');
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    setIsPlacingOrder(true);

    // Simulated delay. Replace with real checkout / payment intent logic.
    await new Promise<void>((resolve) => setTimeout(resolve, 650));

    setIsPlacingOrder(false);

    // eslint-disable-next-line no-alert
    alert('Order placed (demo). Hook this up to your backend/payment provider.');
  }

  const canCheckout = cartItems.length > 0;

  return (
    <div className="checkout">
      <div className="checkout__wrap">
        <header className="checkout__header">
          <div className="checkout__titleBlock">
            <div className="checkout__kicker">
              <span className="checkout__dot" aria-hidden="true" />
              Secure checkout
            </div>
            <h1 className="checkout__title">Checkout</h1>
            <p className="checkout__subtitle">
              We’ll match brands, sizing and delivery options. Your service fee is always <strong>£0.99</strong>.
            </p>
          </div>

          <div className="checkout__trust">
            <div className="checkout__trustItem">
              <span className="checkout__trustIcon" aria-hidden="true">
                ✓
              </span>
              Tracked delivery
            </div>
            <div className="checkout__trustItem">
              <span className="checkout__trustIcon" aria-hidden="true">
                ✓
              </span>
              Easy returns
            </div>
            <div className="checkout__trustItem">
              <span className="checkout__trustIcon" aria-hidden="true">
                ✓
              </span>
              Encrypted payments
            </div>
          </div>
        </header>

        <div className="checkout__grid">
          <main className="checkout__main">
            <form id="checkoutForm" className="checkout__form" onSubmit={onSubmit}>
              <section className="checkout__panel">
                <div className="checkout__panelHeader">
                  <h2 className="checkout__panelTitle">Contact</h2>
                  <span className="checkout__panelBadge">Account linked</span>
                </div>

                <div className="checkout__fieldRow">
                  <div className="checkout__field">
                    <label className="checkout__label" htmlFor="contactEmail">
                      Email
                    </label>
                    <input
                      id="contactEmail"
                      className="checkout__input"
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      autoComplete="email"
                      placeholder="you@domain.com"
                      required
                    />
                  </div>

                  <div className="checkout__field">
                    <label className="checkout__label" htmlFor="contactPhone">
                      Phone
                    </label>
                    <input
                      id="contactPhone"
                      className="checkout__input"
                      type="tel"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      autoComplete="tel"
                      placeholder="+44 7..."
                      required
                    />
                  </div>
                </div>

                <label className="checkout__checkbox">
                  <input type="checkbox" />
                  <span>Text/email me order updates and drops (optional)</span>
                </label>
              </section>

              <section className="checkout__panel">
                <div className="checkout__panelHeader">
                  <h2 className="checkout__panelTitle">Delivery address</h2>
                  <span className="checkout__panelSubtle">Where should we send your fit?</span>
                </div>

                <div className="checkout__fieldRow">
                  <div className="checkout__field">
                    <label className="checkout__label" htmlFor="firstName">
                      First name
                    </label>
                    <input
                      id="firstName"
                      className="checkout__input"
                      value={address.firstName}
                      onChange={(e) => setAddress((p) => ({ ...p, firstName: e.target.value }))}
                      autoComplete="given-name"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="checkout__field">
                    <label className="checkout__label" htmlFor="lastName">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      className="checkout__input"
                      value={address.lastName}
                      onChange={(e) => setAddress((p) => ({ ...p, lastName: e.target.value }))}
                      autoComplete="family-name"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div className="checkout__field">
                  <label className="checkout__label" htmlFor="line1">
                    Address line 1
                  </label>
                  <input
                    id="line1"
                    className="checkout__input"
                    value={address.line1}
                    onChange={(e) => setAddress((p) => ({ ...p, line1: e.target.value }))}
                    autoComplete="address-line1"
                    placeholder="House number and street"
                    required
                  />
                </div>

                <div className="checkout__field">
                  <label className="checkout__label" htmlFor="line2">
                    Address line 2 (optional)
                  </label>
                  <input
                    id="line2"
                    className="checkout__input"
                    value={address.line2}
                    onChange={(e) => setAddress((p) => ({ ...p, line2: e.target.value }))}
                    autoComplete="address-line2"
                    placeholder="Apartment, suite, etc."
                  />
                </div>

                <div className="checkout__fieldRow">
                  <div className="checkout__field">
                    <label className="checkout__label" htmlFor="city">
                      City
                    </label>
                    <input
                      id="city"
                      className="checkout__input"
                      value={address.city}
                      onChange={(e) => setAddress((p) => ({ ...p, city: e.target.value }))}
                      autoComplete="address-level2"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div className="checkout__field">
                    <label className="checkout__label" htmlFor="region">
                      County / State
                    </label>
                    <input
                      id="region"
                      className="checkout__input"
                      value={address.region}
                      onChange={(e) => setAddress((p) => ({ ...p, region: e.target.value }))}
                      autoComplete="address-level1"
                      placeholder="County / State"
                      required
                    />
                  </div>
                </div>

                <div className="checkout__fieldRow">
                  <div className="checkout__field">
                    <label className="checkout__label" htmlFor="postcode">
                      Postcode
                    </label>
                    <input
                      id="postcode"
                      className="checkout__input"
                      value={address.postcode}
                      onChange={(e) => setAddress((p) => ({ ...p, postcode: e.target.value }))}
                      autoComplete="postal-code"
                      placeholder="Postcode"
                      required
                    />
                  </div>
                  <div className="checkout__field">
                    <label className="checkout__label" htmlFor="country">
                      Country
                    </label>
                    <input
                      id="country"
                      className="checkout__input"
                      value={address.country}
                      onChange={(e) => setAddress((p) => ({ ...p, country: e.target.value }))}
                      autoComplete="country-name"
                      placeholder="Country"
                      required
                    />
                  </div>
                </div>
              </section>

              <section className="checkout__panel">
                <div className="checkout__panelHeader">
                  <h2 className="checkout__panelTitle">Shipping</h2>
                  <span className="checkout__panelSubtle">Choose what works for you.</span>
                </div>

                <div className="checkout__radioList" role="radiogroup" aria-label="Shipping options">
                  {shippingOptions.map((opt) => (
                    <label
                      key={opt.id}
                      className={`checkout__radioCard ${shippingId === opt.id ? 'checkout__radioCard--active' : ''}`}
                    >
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingId === opt.id}
                        onChange={() => setShippingId(opt.id)}
                      />
                      <span className="checkout__radioMain">
                        <span className="checkout__radioTitle">{opt.label}</span>
                        <span className="checkout__radioHint">{opt.hint}</span>
                      </span>
                      <span className="checkout__radioPrice">{formatGBP(opt.price)}</span>
                    </label>
                  ))}
                </div>
              </section>

              <section className="checkout__panel">
                <div className="checkout__panelHeader">
                  <h2 className="checkout__panelTitle">Payment</h2>
                  <span className="checkout__panelSubtle">All payments are encrypted.</span>
                </div>

                <div className="checkout__segmented" role="tablist" aria-label="Payment methods">
                  <button
                    type="button"
                    className={`checkout__segmentedBtn ${
                      paymentMethod === 'card' ? 'checkout__segmentedBtn--active' : ''
                    }`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    Card
                  </button>
                  <button
                    type="button"
                    className={`checkout__segmentedBtn ${
                      paymentMethod === 'paypal' ? 'checkout__segmentedBtn--active' : ''
                    }`}
                    onClick={() => setPaymentMethod('paypal')}
                  >
                    PayPal
                  </button>
                  <button
                    type="button"
                    className={`checkout__segmentedBtn ${
                      paymentMethod === 'gpay' ? 'checkout__segmentedBtn--active' : ''
                    }`}
                    onClick={() => setPaymentMethod('gpay')}
                  >
                    Google Pay
                  </button>
                  <button
                    type="button"
                    className={`checkout__segmentedBtn ${
                      paymentMethod === 'shoppay' ? 'checkout__segmentedBtn--active' : ''
                    }`}
                    onClick={() => setPaymentMethod('shoppay')}
                  >
                    Shop Pay
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="checkout__cardForm" role="region" aria-label="Card details">
                    <div className="checkout__field">
                      <label className="checkout__label" htmlFor="nameOnCard">
                        Name on card
                      </label>
                      <input
                        id="nameOnCard"
                        className="checkout__input"
                        value={card.nameOnCard}
                        onChange={(e) => setCard((p) => ({ ...p, nameOnCard: e.target.value }))}
                        autoComplete="cc-name"
                        placeholder="Name on card"
                        required
                      />
                    </div>

                    <div className="checkout__field">
                      <label className="checkout__label" htmlFor="cardNumber">
                        Card number
                      </label>
                      <input
                        id="cardNumber"
                        className="checkout__input"
                        value={card.number}
                        onChange={(e) => setCard((p) => ({ ...p, number: e.target.value }))}
                        autoComplete="cc-number"
                        inputMode="numeric"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>

                    <div className="checkout__fieldRow">
                      <div className="checkout__field">
                        <label className="checkout__label" htmlFor="cardExpiry">
                          Expiry
                        </label>
                        <input
                          id="cardExpiry"
                          className="checkout__input"
                          value={card.expiry}
                          onChange={(e) => setCard((p) => ({ ...p, expiry: e.target.value }))}
                          autoComplete="cc-exp"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="checkout__field">
                        <label className="checkout__label" htmlFor="cardCvc">
                          CVC
                        </label>
                        <input
                          id="cardCvc"
                          className="checkout__input"
                          value={card.cvc}
                          onChange={(e) => setCard((p) => ({ ...p, cvc: e.target.value }))}
                          autoComplete="cc-csc"
                          inputMode="numeric"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>

                    <label className="checkout__checkbox">
                      <input
                        type="checkbox"
                        checked={billingSameAsShipping}
                        onChange={(e) => setBillingSameAsShipping(e.target.checked)}
                      />
                      <span>Billing address same as delivery</span>
                    </label>
                  </div>
                )}

                {paymentMethod !== 'card' && (
                  <div className="checkout__altPay">
                    <p className="checkout__altPayText">
                      You’ll be redirected to complete payment with{' '}
                      <strong>
                        {paymentMethod === 'paypal' ? 'PayPal' : paymentMethod === 'gpay' ? 'Google Pay' : 'Shop Pay'}
                      </strong>
                      .
                    </p>
                    <div className="checkout__altPayBadge">Fast • Secure • One-tap</div>
                  </div>
                )}
              </section>
            </form>
          </main>

          <aside className="checkout__aside">
            <div className="checkout__summary">
              <div className="checkout__summaryHeader">
                <h2 className="checkout__summaryTitle">Order summary</h2>
                <span className="checkout__summaryCount">
                  {cartItems.length} item{cartItems.length === 1 ? '' : 's'}
                </span>
              </div>

              <div className="checkout__items">
                {cartItems.length === 0 && (
                  <div className="checkout__empty">
                    <div className="checkout__emptyTitle">Your bag is empty</div>
                    <div className="checkout__emptyHint">Add something tasty and come back.</div>
                  </div>
                )}

                {cartItems.map((item) => (
                  <div className="checkout__item" key={item.id}>
                    <div className={`checkout__thumb ${item.imageSrc ? '' : 'checkout__thumb--placeholder'}`}>
                      {item.imageSrc ? (
                        <img className="checkout__thumbImg" src={item.imageSrc} alt={`${item.brand} ${item.name}`} />
                      ) : (
                        <div className="checkout__thumbPlaceholder" aria-hidden="true">
                          <span className="checkout__thumbMark">ANY</span>
                        </div>
                      )}
                    </div>

                    <div className="checkout__itemMain">
                      <div className="checkout__itemTop">
                        <div className="checkout__itemTitle">
                          <span className="checkout__itemBrand">{item.brand}</span>
                          <span className="checkout__itemName">{item.name}</span>
                        </div>

                        <button
                          type="button"
                          className="checkout__remove"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                        >
                          Remove
                        </button>
                      </div>

                      <div className="checkout__itemMeta">
                        <span>Size: {item.size}</span>
                        <span className="checkout__metaDot" aria-hidden="true">
                          •
                        </span>
                        <span>Colour: {item.colour}</span>
                      </div>

                      <div className="checkout__itemBottom">
                        <div className="checkout__qty">
                          <button
                            type="button"
                            className="checkout__qtyBtn"
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <input
                            className="checkout__qtyInput"
                            value={item.qty}
                            onChange={(e) => updateQty(item.id, e.target.value)}
                            inputMode="numeric"
                            aria-label="Quantity"
                          />
                          <button
                            type="button"
                            className="checkout__qtyBtn"
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        <div className="checkout__itemPrice">{formatGBP(item.price * item.qty)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="checkout__discount">
                <div className="checkout__discountRow">
                  <input
                    className={`checkout__input checkout__input--discount ${discountError ? 'checkout__input--error' : ''}`}
                    value={discountInput}
                    onChange={(e) => setDiscountInput(e.target.value)}
                    placeholder="Discount code (ANY10 / FREESHIP)"
                    aria-label="Discount code"
                  />
                  <button className="checkout__secondaryBtn" type="button" onClick={applyDiscount}>
                    Apply
                  </button>
                </div>

                {discountError && <div className="checkout__error">{discountError}</div>}

                {!!appliedDiscountCode && !discountError && (
                  <div className="checkout__applied">
                    <span className="checkout__appliedDot" aria-hidden="true" />
                    Applied: <strong>{appliedDiscountCode}</strong>
                    <button type="button" className="checkout__linkBtn" onClick={() => setAppliedDiscountCode('')}>
                      Remove
                    </button>
                  </div>
                )}
              </div>

              <div className="checkout__totals">
                <div className="checkout__totalRow">
                  <span>Subtotal</span>
                  <span>{formatGBP(subtotal)}</span>
                </div>

                <div className="checkout__totalRow">
                  <span>Shipping</span>
                  <span>
                    {shippingDiscount > 0 ? (
                      <>
                        <span className="checkout__strike">{formatGBP(shippingPrice)}</span>
                        <span className="checkout__accent">{formatGBP(Math.max(0, shippingPrice - shippingDiscount))}</span>
                      </>
                    ) : (
                      formatGBP(shippingPrice)
                    )}
                  </span>
                </div>

                <div className="checkout__totalRow">
                  <span>Service charge</span>
                  <span>{formatGBP(serviceCharge)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="checkout__totalRow">
                    <span>Discount</span>
                    <span className="checkout__accent">− {formatGBP(discountAmount)}</span>
                  </div>
                )}

                <div className="checkout__totalDivider" />

                <div className="checkout__totalRow checkout__totalRow--grand">
                  <span>Total</span>
                  <span>{formatGBP(total)}</span>
                </div>

                <div className="checkout__totalNote">VAT included where applicable.</div>
              </div>

              <button className="checkout__cta" type="submit" form="checkoutForm" disabled={!canCheckout || isPlacingOrder}>
                {isPlacingOrder ? 'Placing order…' : `Pay ${formatGBP(total)}`}
              </button>

              <div className="checkout__fineprint">
                By placing your order you agree to our{' '}
                <button type="button" className="checkout__linkBtn">
                  Terms
                </button>{' '}
                and{' '}
                <button type="button" className="checkout__linkBtn">
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
