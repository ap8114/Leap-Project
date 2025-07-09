import React from 'react'
import { Container, Row, Col, Card, Button, Accordion, ListGroup } from 'react-bootstrap';
import Header from '../../HomePages/Header';
import FooterSection from '../../HomePages/FooterSection';

const DocumentAutomation = () => {
    const features = [
        {
            title: "AI-Powered Automation",
            description: "Leverage artificial intelligence to streamline document creation and matter management processes.",
            icon: "ri-robot-line"
        },
        {
            title: "Legal Form Library",
            description: "Access thousands of up-to-date legal forms and precedents maintained by our expert team.",
            icon: "ri-file-text-line"
        },
        {
            title: "Matter Management",
            description: "Centralized system to track, organize, and manage all your legal matters efficiently.",
            icon: "ri-folder-line"
        },
        {
            title: "Document Security",
            description: "Enterprise-grade security with encrypted storage and controlled access permissions.",
            icon: "ri-shield-check-line"
        },
        {
            title: "Client Portal",
            description: "Secure client communication and document sharing through dedicated portals.",
            icon: "ri-user-line"
        },
        {
            title: "Integration Ready",
            description: "Seamless integration with Microsoft 365, accounting software, and other legal tools.",
            icon: "ri-links-line"
        }
    ];

    const integrations = [
        { name: "Microsoft Word", icon: "ri-file-word-line", color: "text-blue-600" },
        { name: "Microsoft Excel", icon: "ri-file-excel-line", color: "text-green-600" },
        { name: "Microsoft Outlook", icon: "ri-mail-line", color: "text-blue-500" },
        { name: "Microsoft Teams", icon: "ri-team-line", color: "text-purple-600" },
        { name: "OneDrive", icon: "ri-cloud-line", color: "text-blue-400" },
        { name: "SharePoint", icon: "ri-share-line", color: "text-orange-600" }
    ];

    return (
        <div>

            <Header />

            <div className="bg-light">
                {/* Hero Section */}

                <section
                    className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 min-h-screen flex mt-3 items-center"
                    style={{
                        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20professional%20law%20office%20environment%20with%20clean%20minimal%20design%2C%20soft%20natural%20lighting%2C%20contemporary%20workspace%20with%20legal%20documents%20and%20technology%20integration%2C%20sophisticated%20blue%20and%20white%20color%20scheme%2C%20professional%20atmosphere%20with%20subtle%20technological%20elements%2C%20high-end%20corporate%20setting&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'overlay'
                    }}
                >
                    <div className="absolute inset-0 bg-blue-900/70"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-white">
                                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                    Document automation and management software for law firms
                                </h1>
                                <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                                    Thousands of up-to-date and integrated legal forms and precedents out of the box let you work smarter, not harder.
                                </p>
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                                    BOOK DEMONSTRATION
                                </button>
                            </div>
                            <div className="relative">
                                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md ml-auto">
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-lg font-semibold text-gray-800">Template Generator</h3>
                                            <span className="text-blue-600 font-bold">FastTrack UK</span>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="bg-gray-50 p-3 rounded-lg">
                                                <div className="text-sm text-gray-600 mb-1">Document Type</div>
                                                <div className="font-semibold text-gray-800">Contract Agreement</div>
                                            </div>
                                            <div className="bg-gray-50 p-3 rounded-lg">
                                                <div className="text-sm text-gray-600 mb-1">Client Name</div>
                                                <div className="font-semibold text-gray-800">Johnson & Associates</div>
                                            </div>
                                            <div className="bg-gray-50 p-3 rounded-lg">
                                                <div className="text-sm text-gray-600 mb-1">Matter Reference</div>
                                                <div className="font-semibold text-gray-800">MA-2024-001</div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                                        Generate Document
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                Comprehensive Legal Practice Management
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Everything you need to run a modern law firm efficiently, from document automation to client management.
                            </p>
                        </div>
                        <div className="row g-4">
                            {features.map((feature, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-4">
                                    <div className="bg-white p-4 rounded-4 shadow-sm border h-100 d-flex flex-column hover-shadow transition">
                                        <div className="d-flex align-items-center justify-content-center bg-custom bg-opacity-10 rounded-3 mb-4" style={{ width: '48px', height: '48px' }}>
                                            <i className={`${feature.icon} text-custom fs-4`}></i>
                                        </div>
                                        <h3 className="h5 fw-bold text-dark mb-3">{feature.title}</h3>
                                        <p className="text-muted mb-0">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/*  Matter AI Section */}
                <section className="py-5 bg-white">
                    <div className="container px-3 px-md-4">
                        <div className="row align-items-center g-5">
                            {/* Left Content */}
                            <div className="col-lg-6">
                                <div className="d-inline-block bg-custom bg-opacity-10 text-custom px-3 py-1 rounded-pill fw-semibold small mb-4">
                                    Matter AI
                                </div>
                                <h2 className="display-6 fw-bold text-dark mb-4">
                                    Get instant answers from your matters
                                </h2>
                                <p className="fs-5 text-muted mb-4">
                                    FastTrack uses AI to intelligently examine your FastTrack matter to provide instant insights and information.
                                    It examines your correspondence to identify important data and give a detailed response in seconds,
                                    generating professional-quality documents in a fraction of the time. Ask it anything.
                                </p>
                                <button className="btn btn-custom px-4 py-2 fw-semibold">
                                    Find out more about Matter AI
                                </button>
                            </div>

                            {/* Right Image + Floating Card */}
                            <div className="col-lg-6 position-relative">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Modern%20AI%20interface%20showing%20legal%20document%20analysis%20with%20chat%20interface%2C%20clean%20professional%20design%20with%20blue%20accents%2C%20legal%20text%20processing%20visualization%2C%20sophisticated%20technology%20interface%20for%20law%20firms%2C%20AI-powered%20legal%20assistant%20dashboard%20with%20document%20insights&width=600&height=500&seq=matter-ai-001&orientation=landscape"
                                    alt="Matter AI Interface"
                                    className="img-fluid rounded-4 shadow"
                                />

                                <div className="position-absolute bg-white p-3 rounded-4 shadow-lg" style={{ bottom: '-2rem', left: '-2rem', maxWidth: '300px' }}>
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="rounded-circle bg-success me-2" style={{ width: '10px', height: '10px' }}></div>
                                        <span className="small fw-semibold text-dark">AI Analysis Complete</span>
                                    </div>
                                    <p className="small text-muted mb-0">
                                        Found 12 key insights in your correspondence and generated draft response in 3.2 seconds.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* DOCUMENT AUTOMATION Section */}
                <section className="py-5 bg-light">
                    <div className="container px-3 px-md-4">
                        <div className="row align-items-center g-5">
                            {/* Left: Image */}
                            <div className="col-lg-6 order-2 order-lg-1">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Professional%20document%20automation%20interface%20showing%20legal%20forms%20being%20auto-populated%2C%20clean%20modern%20software%20interface%20with%20legal%20document%20templates%2C%20automated%20form%20filling%20system%20for%20law%20firms%2C%20sophisticated%20legal%20technology%20dashboard%20with%20document%20generation%20tools&width=600&height=500&seq=doc-automation-001&orientation=landscape"
                                    alt="Document Automation Interface"
                                    className="img-fluid rounded-4 shadow"
                                />
                            </div>

                            {/* Right: Content */}
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="d-inline-block px-3 py-1 bg-warning bg-opacity-25 text-warning fw-semibold rounded-pill small mb-4">
                                    DOCUMENT AUTOMATION
                                </div>
                                <h2 className="display-6 fw-bold text-dark mb-4">
                                    Produce legal documents with ease
                                </h2>
                                <p className="fs-5 text-muted mb-4">
                                    Automate the generation of pre-populated legal forms and precedents based on your matter data with no setup
                                    or ongoing maintenance requirements. Our experienced team keeps the library up-to-date, saving you time and
                                    eliminating the risk of mistakes.
                                </p>

                                <div className="d-flex flex-column gap-3 mb-4">
                                    <div className="d-flex align-items-center">
                                        <div className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center me-3" style={{ width: '24px', height: '24px' }}>
                                            <i className="ri-check-line text-success small"></i>
                                        </div>
                                        <span className="text-dark">Thousands of legal forms and precedents</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center me-3" style={{ width: '24px', height: '24px' }}>
                                            <i className="ri-check-line text-success small"></i>
                                        </div>
                                        <span className="text-dark">Automatically updated by legal experts</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center me-3" style={{ width: '24px', height: '24px' }}>
                                            <i className="ri-check-line text-success small"></i>
                                        </div>
                                        <span className="text-dark">No setup or maintenance required</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                    Microsoft 365 integration
                                </div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                    Work with the tools you use every day
                                </h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Seamless integration with Word, Excel, Outlook and Teams maximises productivity and increases your billable time. Easily assign documents and emails to matters, synchronise your FastTrack documents across all your connected devices and work collaboratively with your colleagues.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {integrations.map((integration, index) => (
                                        <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                                            <div className="w-10 h-10 flex items-center justify-center mr-3">
                                                <i className={`${integration.icon} text-2xl ${integration.color}`}></i>
                                            </div>
                                            <span className="font-medium text-gray-800">{integration.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                            <i className="ri-check-line text-green-600 text-sm"></i>
                                        </div>
                                        <span className="text-gray-700">Automatic document synchronization</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                            <i className="ri-check-line text-green-600 text-sm"></i>
                                        </div>
                                        <span className="text-gray-700">Email to matter assignment</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                            <i className="ri-check-line text-green-600 text-sm"></i>
                                        </div>
                                        <span className="text-gray-700">Collaborative document editing</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Microsoft%20365%20integration%20dashboard%20showing%20seamless%20connection%20between%20legal%20software%20and%20Office%20applications%2C%20professional%20workspace%20with%20Word%20Excel%20Outlook%20integration%2C%20collaborative%20legal%20document%20editing%20interface%2C%20modern%20office%20productivity%20tools%20for%20law%20firms&width=600&height=500&seq=integration-001&orientation=landscape"
                                    alt="Microsoft 365 Integration"
                                    className="w-full rounded-2xl shadow-2xl object-cover object-top"
                                />
                                <div className="absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-xl">
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                        <span className="text-sm font-semibold text-gray-800">Connected</span>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-1">Microsoft 365 Suite</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-5" style={{ backgroundColor: '#2c3e50', color: 'white' }}>
                    <Container fluid className="px-lg-5">
                        <h2 className="text-center mb-5">Key Features of Our Document Solution</h2>
                        <Row>
                            <Col md={6} lg={3} className="mb-4">
                                <div className="d-flex">
                                    <div className="me-3">
                                        <i className="bi bi-check2-circle fs-3" style={{ color: '#f76b1c' }}></i>
                                    </div>
                                    <div>
                                        <h4>Automated Generation</h4>
                                        <p>Create consistent documents with matter details pre-filled</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={3} className="mb-4">
                                <div className="d-flex">
                                    <div className="me-3">
                                        <i className="bi bi-check2-circle fs-3" style={{ color: '#f76b1c' }}></i>
                                    </div>
                                    <div>
                                        <h4>Template Library</h4>
                                        <p>1,000+ legal forms across common practice areas</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={3} className="mb-4">
                                <div className="d-flex">
                                    <div className="me-3">
                                        <i className="bi bi-check2-circle fs-3" style={{ color: '#f76b1c' }}></i>
                                    </div>
                                    <div>
                                        <h4>Mobile Access</h4>
                                        <p>View and edit documents from anywhere</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={3} className="mb-4">
                                <div className="d-flex">
                                    <div className="me-3">
                                        <i className="bi bi-check2-circle fs-3" style={{ color: '#f76b1c' }}></i>
                                    </div>
                                    <div>
                                        <h4>Fee Calculations</h4>
                                        <p>Automatically include current legal rates</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* FAQ Section */}
                <section className="py-5 bg-white">
                    <Container fluid className="px-lg-5">
                        <h2 className="text-center mb-5" style={{ color: '#2c3e50' }}>Frequently Asked Questions</h2>
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header style={{ color: '#2c3e50' }}>What is automated document creation in legal practice?</Accordion.Header>
                                <Accordion.Body>
                                    Automated document creation uses technology to generate legal forms, contracts, and other documents by populating templates with case-specific information. This eliminates manual data entry, reduces errors, and ensures consistency across all firm documents.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header style={{ color: '#2c3e50' }}>What document systems are available for law firms?</Accordion.Header>
                                <Accordion.Body>
                                    Legal firms can choose between template libraries, document assembly systems, workflow automation platforms, and comprehensive practice management solutions with built-in document generation. The best choice depends on your firm's size, practice areas, and specific needs.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header style={{ color: '#2c3e50' }}>How should we select document automation software?</Accordion.Header>
                                <Accordion.Body>
                                    Consider your firm's volume of documents, need for customization, integration with existing systems, mobile access requirements, and the platform's ability to handle complex legal calculations. Also evaluate the provider's template library and update frequency.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container>
                </section>

                {/* CTA Section */}
                <section
                    className="py-20 relative"
                    style={{
                        backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20law%20firm%20office%20meeting%20room%20with%20modern%20technology%20setup%2C%20clean%20contemporary%20workspace%20with%20legal%20professionals%20collaborating%2C%20sophisticated%20business%20environment%20with%20blue%20and%20white%20color%20scheme%2C%20elegant%20conference%20room%20with%20natural%20lighting%20and%20professional%20atmosphere&width=1920&height=600&seq=cta-bg-001&orientation=landscape')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-blue-900/85"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center max-w-4xl mx-auto text-white">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                Ready to transform your legal practice?
                            </h2>
                            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed">
                                Join thousands of law firms who have already streamlined their operations with FastTrack's comprehensive legal practice management solution.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                                    Book Your Free Demo
                                </button>
                                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                                    Contact Sales Team
                                </button>
                            </div>
                            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-3xl font-bold mb-2">10,000+</div>
                                    <div className="text-blue-200">Legal Professionals</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">99.9%</div>
                                    <div className="text-blue-200">Uptime Guarantee</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">24/7</div>
                                    <div className="text-blue-200">Expert Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

          <FooterSection />

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-[#f76b1c] text-white p-3 rounded-full shadow-lg hover:bg-[#f76b1c] transition-colors cursor-pointer"
            >
                <i className="fas fa-chevron-up"></i>
            </button>
            
        </div>
    )
}

export default DocumentAutomation