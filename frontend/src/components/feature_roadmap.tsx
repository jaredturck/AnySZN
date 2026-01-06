import '../styles/FeatureRoadmap.scss';

export function FeatureRoadmap() {
    return (
        <section className="FeatureRoadmap">
            <div className="FeatureRoadmap__title">
                <h2 className="FeatureRoadmap__title-main">ANYHJS FEATURE ROADMAP</h2>
                <p className="FeatureRoadmap__title-sub">(5-10 YEAR PLAN)</p>
            </div>

            <div className="FeatureRoadmap__timeline">
                <div className="FeatureRoadmap__timeline-date">
                    <span className="FeatureRoadmap__timeline-month">November</span>
                    <span className="FeatureRoadmap__timeline-year">2025</span>
                </div>
                <div className="FeatureRoadmap__timeline-date">
                    <span className="FeatureRoadmap__timeline-month">December</span>
                    <span className="FeatureRoadmap__timeline-year">2025</span>
                </div>
                <div className="FeatureRoadmap__timeline-date">
                    <span className="FeatureRoadmap__timeline-month">March</span>
                    <span className="FeatureRoadmap__timeline-year">2026</span>
                </div>
                <div className="FeatureRoadmap__timeline-date">
                    <span className="FeatureRoadmap__timeline-month">June</span>
                    <span className="FeatureRoadmap__timeline-year">2026</span>
                </div>
                <div className="FeatureRoadmap__timeline-track">
                    <div className="FeatureRoadmap__timeline-track-node FeatureRoadmap__timeline-track-node--start">
                        <span className="FeatureRoadmap__timeline-dot"></span>
                    </div>
                    <div className="FeatureRoadmap__timeline-track-node">
                        <span className="FeatureRoadmap__timeline-dot"></span>
                    </div>
                    <div className="FeatureRoadmap__timeline-track-node">
                        <span className="FeatureRoadmap__timeline-dot"></span>
                    </div>
                    <div className="FeatureRoadmap__timeline-track-node FeatureRoadmap__timeline-track-node--end">
                        <span className="FeatureRoadmap__timeline-dot"></span>
                    </div>
                </div>
                <div className="FeatureRoadmap__timeline-content">
                    <h3 className="FeatureRoadmap__timeline-content-title">
                        Launch of AnyHJS MVP
                    </h3>
                    <ul className="FeatureRoadmap__timeline-content-list">
                        <li>Basic user onboarding and interface.</li>
                        <li>Price comparison tool for popular fashion items.</li>
                        <li>Curated seasonal outfits and AI-driven suggestions.</li>
                    </ul>
                </div>
                <div className="FeatureRoadmap__timeline-content">
                    <h3 className="FeatureRoadmap__timeline-content-title">
                        Enhanced Discovery
                    </h3>
                    <ul className="FeatureRoadmap__timeline-content-list">
                        <li>Budget and seasonal filters for outfit selection.</li>
                    </ul>
                </div>
                <div className="FeatureRoadmap__timeline-content">
                    <h3 className="FeatureRoadmap__timeline-content-title">
                        E-commerce Integration
                    </h3>
                    <ul className="FeatureRoadmap__timeline-content-list">
                        <li>Partner with brands for direct purchasing.</li>
                    </ul>
                </div>
                <div className="FeatureRoadmap__timeline-content">
                    <h3 className="FeatureRoadmap__timeline-content-title">
                        User Engagement
                    </h3>
                    <ul className="FeatureRoadmap__timeline-content-list">
                        <li>User profiles and social features.</li>
                        <li>“Fit of the Week” contests.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}