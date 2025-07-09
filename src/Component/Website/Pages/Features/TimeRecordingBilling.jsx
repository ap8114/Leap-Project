import React, { useState } from 'react';
import Header from '../../HomePages/Header';
import FooterSection from '../../HomePages/FooterSection';

const TimeRecordingBilling = () => {
    const [activeTab, setActiveTab] = useState('features');

    return (
        <div className='w-100'>

            {/* Header */}
            <Header />

            <div className="w-100 mt-3">
                {/* Hero Section */}
                <section className="bg-dark text-white py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-1 mb-5 mb-lg-0">
                                <h1 className="display-4 fw-bold mb-4">
                                    Time recording and billing software for law firms
                                </h1>
                                <p className="lead mb-4 opacity-75">
                                    With revolutionary AI time-tracking tools, capture every billable minute to maximize your potential earnings.
                                    Issue invoices in minutes and get paid on time with online payments.
                                </p>
                                <div className="d-flex flex-column flex-sm-row gap-3">
                                    <button className="btn btn-warning text-white px-4 py-3 fw-bold">
                                        Book Demonstration
                                    </button>
                                    <button className="btn btn-outline-light px-4 py-3 fw-bold">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2">
                                <div className="position-relative rounded overflow-hidden shadow-lg">
                                    <img
                                        className="img-fluid w-100 h-auto"
                                        style={{ minHeight: '300px', objectFit: 'cover', objectPosition: 'top' }}
                                        src="https://readdy.ai/api/search-image?query=Professional%20time%20tracking%20and%20billing%20software%20interface%20for%20law%20firms%20with%20clean%20design%2C%20showing%20invoices%20and%20time%20sheets%20on%20desktop%20and%20mobile%20devices%2C%20blue%20gradient%20background%2C%20modern%20UI%20design%2C%20high%20quality%20professional&width=700&height=500&seq=1&orientation=landscape"
                                        alt="Time tracking software interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Tabs */}
                <div className="container py-5">
                    <div className="border-bottom border-gray">
                        <nav className="nav nav-tabs border-0 gap-3">
                            <button
                                onClick={() => setActiveTab('features')}
                                className={`nav-link ${activeTab === 'features' ? 'active border-custom text-custom' : 'text-secondary'}`}
                            >
                                Key Features
                            </button>
                            <button
                                onClick={() => setActiveTab('billing')}
                                className={`nav-link ${activeTab === 'billing' ? 'active border-custom text-custom' : 'text-secondary'}`}
                            >
                                Billing Solutions
                            </button>
                            <button
                                onClick={() => setActiveTab('integrations')}
                                className={`nav-link ${activeTab === 'integrations' ? 'active border-custom text-custom' : 'text-secondary'}`}
                            >
                                Integrations
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Features Content */}
                {activeTab === 'features' && (
                    <div className="container py-5">
                        {/* Feature 1 */}
                        <div className="row align-items-center mb-5 mb-lg-6">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="text-custom text-uppercase small fw-semibold">Time tracking</div>
                                <h2 className="mt-2 display-5 fw-bold">Capture everything</h2>
                                <p className="mt-3 fs-5 text-secondary">
                                    FastTrack's intelligent time capture tool eliminates the need for timers to capture your billable time.
                                    Start working, and every activity will be tracked. FastTrack converts your activities into billable time,
                                    making you more profitable.
                                </p>
                                <div className="mt-4">
                                    <button className="btn btn-link text-custom fw-medium p-0 text-decoration-none">
                                        Learn more about time tracking
                                        <i className="fas fa-arrow-right ms-2"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img
                                    className="img-fluid rounded shadow"
                                    src="https://readdy.ai/api/search-image?query=Modern%20time%20tracking%20dashboard%20interface%20with%20clean%20design%2C%20showing%20time%20entries%2C%20project%20tracking%2C%20and%20analytics%2C%20professional%20UI%20with%20blue%20accent%20colors%2C%20high%20resolution%2C%20minimal%20design&width=600&height=400&seq=2&orientation=landscape"
                                    alt="Time tracking dashboard"
                                />
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="row align-items-center mb-5 mb-lg-6">
                            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
                                <div className="text-custom text-uppercase small fw-semibold">Invoicing</div>
                                <h2 className="mt-2 display-5 fw-bold">Simplified billing</h2>
                                <p className="mt-3 fs-5 text-secondary">
                                    FastTrack's intelligent billing engine effortlessly captures all billable time, fees and disbursements
                                    in an easy-to-understand invoice. Different templates cater for different types of work, and sharing
                                    online gives your client complete transparency over their liability.
                                </p>
                                <div className="mt-4">
                                    <button className="btn btn-link text-custom fw-medium p-0 text-decoration-none">
                                        Explore billing features
                                        <i className="fas fa-arrow-right ms-2"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <img
                                    className="img-fluid rounded shadow"
                                    src="https://readdy.ai/api/search-image?query=Professional%20invoice%20template%20for%20law%20firms%20with%20clean%20layout%2C%20showing%20itemized%20billing%2C%20payment%20terms%2C%20and%20firm%20branding%2C%20white%20background%20with%20blue%20accents%2C%20high%20quality%20professional%20design&width=600&height=400&seq=3&orientation=landscape"
                                    alt="Simplified billing interface"
                                />
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="text-custom text-uppercase small fw-semibold">Online payments</div>
                                <h2 className="mt-2 display-5 fw-bold">A smarter way to get paid</h2>
                                <p className="mt-3 fs-5 text-secondary">
                                    Improve your cash flow by getting paid on time with FastTrack online payments powered by FeeWise.
                                    With flexible repayment plans and automated receipting accompanying payment reminders,
                                    your bills will be paid on time.
                                </p>
                                <div className="mt-4">
                                    <button className="btn btn-link text-custom fw-medium p-0 text-decoration-none">
                                        Learn more about FastTrack Online Payments
                                        <i className="fas fa-arrow-right ms-2"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img
                                    className="img-fluid rounded shadow"
                                    src="https://readdy.ai/api/search-image?query=Online%20payment%20interface%20for%20legal%20services%20showing%20payment%20options%2C%20secure%20transaction%20details%2C%20and%20digital%20receipt%2C%20clean%20modern%20design%20with%20blue%20and%20white%20color%20scheme%2C%20professional%20UI&width=600&height=400&seq=4&orientation=landscape"
                                    alt="Online payment interface"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="bg-dark py-5">
                    <div className="container">
                        <div className="d-lg-flex justify-content-between align-items-center">
                            <h2 className="display-5 fw-bold text-white mb-4 mb-lg-0">
                                <span className="d-block">Ready to streamline your billing?</span>
                                <span className="d-block text-custom-light">Start your free trial today.</span>
                            </h2>
                            <div className="d-flex gap-3">
                                <button className="btn btn-warning text-white px-5 py-3 fw-medium">
                                    Get started
                                </button>
                                <button className="btn btn-light text-custom px-5 py-3 fw-medium">
                                    Book a demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="bg-white py-5 py-sm-6">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="text-custom text-uppercase small fw-semibold">Testimonials</h2>
                            <p className="mt-3 display-5 fw-bold">
                                Trusted by law firms worldwide
                            </p>
                            <p className="mt-3 fs-5 text-secondary mx-auto" style={{ maxWidth: '42rem' }}>
                                See what our customers are saying about our time recording and billing software.
                            </p>
                        </div>

                        <div className="mt-5">
                            <div className="row g-4">
                                {/* Testimonial 1 */}
                                <div className="col-md-6 col-lg-4">
                                    <div className="bg-light rounded shadow-sm p-4 h-100">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="rounded-circle bg-custom-light d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                                                <i className="fas fa-user text-custom fs-5"></i>
                                            </div>
                                            <div className="ms-3">
                                                <h3 className="h5 fw-medium mb-0">Sarah Johnson</h3>
                                                <p className="text-secondary small mb-0">Partner, Johnson & Associates</p>
                                            </div>
                                        </div>
                                        <p className="text-secondary fst-italic mb-3">
                                            "This software has revolutionized our billing process. We've increased our billable hours by 15%
                                            and reduced the time spent on administrative tasks. The AI time tracking is a game-changer."
                                        </p>
                                        <div className="text-warning">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial 2 */}
                                <div className="col-md-6 col-lg-4">
                                    <div className="bg-light rounded shadow-sm p-4 h-100">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="rounded-circle bg-custom-light d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                                                <i className="fas fa-user text-custom fs-5"></i>
                                            </div>
                                            <div className="ms-3">
                                                <h3 className="h5 fw-medium mb-0">Michael Chen</h3>
                                                <p className="text-secondary small mb-0">Managing Partner, Chen Legal Group</p>
                                            </div>
                                        </div>
                                        <p className="text-secondary fst-italic mb-3">
                                            "The online payment system has dramatically improved our cash flow. Clients appreciate the
                                            transparency and ease of payment, and we've reduced our outstanding invoices by over 40%."
                                        </p>
                                        <div className="text-warning">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial 3 */}
                                <div className="col-md-6 col-lg-4">
                                    <div className="bg-light rounded shadow-sm p-4 h-100">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="rounded-circle bg-custom-light d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                                                <i className="fas fa-user text-custom fs-5"></i>
                                            </div>
                                            <div className="ms-3">
                                                <h3 className="h5 fw-medium mb-0">Emily Rodriguez</h3>
                                                <p className="text-secondary small mb-0">Office Manager, Rodriguez & Partners</p>
                                            </div>
                                        </div>
                                        <p className="text-secondary fst-italic mb-3">
                                            "Implementation was seamless and the support team is exceptional. The software has simplified
                                            our billing workflow and helped us capture billable time we were previously missing."
                                        </p>
                                        <div className="text-warning">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Footer */}
            <FooterSection />
        </div>
    );
};

export default TimeRecordingBilling;