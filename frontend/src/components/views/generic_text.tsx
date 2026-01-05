import React from "react";
import '../../styles/generic-page.scss';

type GenericPageSectionProps = {
    label?: string;
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
};

export function GenericPageSection({ label, title, subtitle, children }: GenericPageSectionProps) {
    return (
        <section className="generic-page">
            <div className="generic-page__inner">
                {(label || title || subtitle) && (
                    <header className="generic-page__header">
                        {label && (
                            <span className="generic-page__label">
                                <span className="generic-page__label-dot" />
                                {label}
                            </span>
                        )}
                        {title && <h1 className="generic-page__title">{title}</h1>}
                        {subtitle && (
                            <p className="generic-page__subtitle">{subtitle}</p>
                        )}
                    </header>
                )}

                <div className="generic-page__content">
                    {children}
                </div>
            </div>
        </section>
    );
}
