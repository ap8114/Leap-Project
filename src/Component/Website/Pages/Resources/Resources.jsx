import React, { useState } from 'react';
import Header from '../../HomePages/Header';
import FooterSection from '../../HomePages/FooterSection';

const Resources = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [eventView, setEventView] = useState('calendar');

    const testimonials = [
        {
            id: 1,
            quote: "Clio has transformed our practice efficiency by 40%. The automated document generation and integrated billing system have streamlined our workflows significantly.",
            name: "Sarah Mitchell",
            firm: "Mitchell & Associates",
            image: "https://readdy.ai/api/search-image?query=Professional%20female%20lawyer%20in%20modern%20office%20setting%20with%20confident%20smile%20wearing%20business%20suit%20against%20clean%20white%20background&width=80&height=80&seq=testimonial1&orientation=squarish",
            hasVideo: true
        },
        {
            id: 2,
            quote: "The compliance features in Clio give us peace of mind. We've reduced our administrative overhead by 60% while maintaining the highest standards of client service.",
            name: "David Thompson",
            firm: "Thompson Legal Group",
            image: "https://readdy.ai/api/search-image?query=Professional%20male%20lawyer%20in%20contemporary%20office%20environment%20with%20friendly%20expression%20wearing%20dark%20business%20suit%20against%20neutral%20background&width=80&height=80&seq=testimonial2&orientation=squarish",
            hasVideo: false
        },
        {
            id: 3,
            quote: "ROI was evident within the first quarter. Clio's integration capabilities have unified our entire practice management system into one seamless platform.",
            name: "Emma Rodriguez",
            firm: "Rodriguez Law Firm",
            image: "https://readdy.ai/api/search-image?query=Professional%20female%20attorney%20in%20modern%20law%20office%20with%20warm%20smile%20wearing%20navy%20blazer%20against%20minimalist%20background&width=80&height=80&seq=testimonial3&orientation=squarish",
            hasVideo: true
        }
    ];

    const brochures = [
        {
            title: "Clio Brochure",
            description: "Comprehensive overview of features and benefits for your entire firm",
            icon: "fas fa-file-pdf"
        },
        {
            title: "How to Start a Law Firm",
            description: "Step-by-step guide to setting up a successful legal practice",
            icon: "fas fa-rocket"
        },
        {
            title: "SME Law Firms Guide",
            description: "Tailored brochure specifically designed for mid-size law firms",
            icon: "fas fa-building"
        },
        {
            title: "Choosing Legal Software",
            description: "Decision aid comparing different legal software options",
            icon: "fas fa-balance-scale"
        },
        {
            title: "Streamline Your IT",
            description: "Tips to leverage cloud technology for cost and efficiency gains",
            icon: "fas fa-cloud"
        },
        {
            title: "Document Customisation Engine",
            description: "Explains automation for Word, Outlook, Excel integration",
            icon: "fas fa-cogs"
        },
        {
            title: "5 Essentials of Clio",
            description: "Shows top workflow tools and integrations for maximum productivity",
            icon: "fas fa-star"
        },
        {
            title: "Client Management Best Practices",
            description: "Proven strategies for building stronger client relationships",
            icon: "fas fa-users"
        },
        {
            title: "Legal Technology Trends",
            description: "Latest insights on emerging technologies in legal practice",
            icon: "fas fa-chart-line"
        }
    ];

    const events = [
        {
            date: "2025-01-15",
            time: "2:00 PM GMT",
            title: "Clio Advanced Features Webinar",
            type: "webinar",
            location: "Online"
        },
        {
            date: "2025-01-22",
            time: "10:00 AM GMT",
            title: "Legal Technology Conference London",
            type: "in-person",
            location: "London ExCeL"
        },
        {
            date: "2025-02-05",
            time: "3:00 PM GMT",
            title: "Document Automation Workshop",
            type: "webinar",
            location: "Online"
        }
    ];

    const blogPosts = [
        {
            title: "The Future of Legal Practice Management",
            excerpt: "Exploring how AI and automation are reshaping law firms",
            date: "January 8, 2025"
        },
        {
            title: "Maximizing ROI with Legal Technology",
            excerpt: "Key metrics and strategies for measuring success",
            date: "January 5, 2025"
        },
        {
            title: "Client Communication in the Digital Age",
            excerpt: "Best practices for modern client engagement",
            date: "January 2, 2025"
        }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };


    return (
        <div className="w-100 bg-white">
            {/* Navigation */}
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r mt-3 from-[#f76b1c] text-white py-24">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20professional%20law%20office%20interior%20with%20sleek%20technology%20setup%2C%20contemporary%20legal%20workspace%20with%20computers%20and%20documents%2C%20clean%20minimalist%20design%20with%20blue%20accent%20lighting%20and%20glass%20surfaces&width=1440&height=400&seq=hero1&orientation=landscape')`
                    }}
                ></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6">Clio Resources</h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Discover comprehensive guides, testimonials, and insights to help your law firm thrive with cutting-edge legal technology solutions
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-[#f76b1c] px-8 py-3 !rounded-button font-semibold">
                                Book a Demo
                            </button>
                            <button className="btn btn-outline-light">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Brochures & Guides Section */}
            <section className="bg-gray-50">
                <div className="p-5">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#2c3e50] mb-4">Brochures & Guides</h2>
                        <p className="text-xl text-gray-600">Downloadable resources to help your firm succeed</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {brochures.map((brochure, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer border-t-4 border-[#f76b1c]">
                                <div className="flex items-center mb-4">
                                    <div className="bg-[#f76b1c] bg-opacity-10 rounded-lg p-3 mr-4">
                                        <i className={`${brochure.icon} text-[#f76b1c] text-xl`}></i>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2c3e50]">{brochure.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-6">{brochure.description}</p>
                                <button className="w-full bg-[#f76b1c] text-white py-2 px-4 rounded-lg hover:bg-[#e05e15] transition-colors whitespace-nowrap cursor-pointer">
                                    <i className="fas fa-download mr-2"></i>
                                    Download PDF
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* White Papers Section */}
            <section className="bg-gray-50">
                <div className="p-5 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#2c3e50] mb-4">White Papers</h2>
                        <p className="text-xl text-gray-600">Thought leadership to help your firm excel</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#f76b1c]">
                            <img
                                src="https://readdy.ai/api/search-image?query=Professional%20business%20document%20cover%20design%20with%20modern%20typography%20and%20legal%20symbols%2C%20clean%20corporate%20layout%20with%20blue%20and%20white%20color%20scheme%20on%20minimalist%20background&width=400&height=250&seq=whitepaper1&orientation=landscape"
                                alt="11 Habits of Successful Law Firms"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[#2c3e50] mb-3">11 Habits of Successful Law Firms</h3>
                                <p className="text-gray-600 mb-6">
                                    Discover the proven best practices that distinguish thriving law firms from the rest. This comprehensive guide covers operational improvements, client management strategies, and technology adoption patterns.
                                </p>
                                <button className="bg-[#f76b1c] text-white px-6 py-3 rounded-lg hover:bg-[#e05e15] transition-colors whitespace-nowrap cursor-pointer">
                                    <i className="fas fa-download mr-2"></i>
                                    Download White Paper
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Additional Resources</h3>
                            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow border-l-4 border-[#f76b1c]">
                                <h4 className="font-semibold text-[#2c3e50] mb-2">Clio Ireland Insights</h4>
                                <p className="text-gray-600 mb-4">Region-specific thought leadership and market analysis for Irish legal practices.</p>
                                <button className="text-[#f76b1c] hover:text-[#e05e15] font-medium cursor-pointer">
                                    Access Resources
                                </button>
                            </div>
                            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow border-l-4 border-[#f76b1c]">
                                <h4 className="font-semibold text-[#2c3e50] mb-2">Technology Adoption Guide</h4>
                                <p className="text-gray-600 mb-4">Strategic framework for implementing legal technology in your practice.</p>
                                <button className="text-[#f76b1c] hover:text-[#e05e15] font-medium cursor-pointer">
                                    Download Guide
                                </button>
                            </div>
                            <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow border-l-4 border-[#f76b1c]">
                                <h4 className="font-semibold text-[#2c3e50] mb-2">Compliance Checklist</h4>
                                <p className="text-gray-600 mb-4">Essential compliance requirements and best practices for modern law firms.</p>
                                <button className="text-[#f76b1c] hover:text-[#e05e15] font-medium cursor-pointer">
                                    Get Checklist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Webinars & Events Section */}
            <section className="bg-gray-50">
                <div className="p-5 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#2c3e50] mb-4">Webinars & Events</h2>
                        <p className="text-xl text-gray-600">Join us for upcoming educational sessions and industry events</p>
                    </div>

                    <div className="flex justify-center mb-8">
                        <div className="bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => setEventView('calendar')}
                                className={`px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${eventView === 'calendar'
                                    ? 'bg-white text-[#f76b1c] shadow border border-[#f76b1c]'
                                    : 'text-gray-600 hover:text-[#f76b1c]'
                                    }`}
                            >
                                <i className="fas fa-calendar-alt mr-2"></i>
                                Calendar View
                            </button>
                            <button
                                onClick={() => setEventView('list')}
                                className={`px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${eventView === 'list'
                                    ? 'bg-white text-[#f76b1c] shadow border border-[#f76b1c]'
                                    : 'text-gray-600 hover:text-[#f76b1c]'
                                    }`}
                            >
                                <i className="fas fa-list mr-2"></i>
                                List View
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map((event, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-[#f76b1c]">
                                <div className="flex items-center mb-4">
                                    <div className={`rounded-lg p-3 mr-4 ${event.type === 'webinar'
                                        ? 'bg-[#f76b1c] bg-opacity-10'
                                        : 'bg-[#2c3e50] bg-opacity-10'
                                        }`}>
                                        <i className={`${event.type === 'webinar'
                                            ? 'fas fa-video text-[#f76b1c]'
                                            : 'fas fa-map-marker-alt text-[#2c3e50]'
                                            } text-xl`}></i>
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">{event.date}</div>
                                        <div className="text-sm font-medium text-[#2c3e50]">{event.time}</div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-[#2c3e50] mb-2">{event.title}</h3>
                                <div className="flex items-center text-gray-600 mb-4">
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    <span className="text-sm">{event.location}</span>
                                </div>
                                <button className="w-full bg-[#f76b1c] text-white py-2 px-4 rounded-lg hover:bg-[#e05e15] transition-colors whitespace-nowrap cursor-pointer">
                                    Register Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Thought Leadership Section */}
            {/* <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Thought Leadership</h2>
                        <p className="text-xl text-gray-600">Stay informed with the latest insights and trends</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex items-center mb-6">
                                <i className="fas fa-blog text-blue-600 text-xl mr-3"></i>
                                <h3 className="text-xl font-semibold text-gray-900">Latest Blog Posts</h3>
                            </div>
                            <div className="space-y-4">
                                {blogPosts.map((post, index) => (
                                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                                        <h4 className="font-medium text-gray-900 mb-2 cursor-pointer hover:text-blue-600">
                                            {post.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 mb-2">{post.excerpt}</p>
                                        <div className="text-xs text-gray-500">{post.date}</div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-6 text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                                View All Posts <i className="fas fa-arrow-right ml-1"></i>
                            </button>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex items-center mb-6">
                                <i className="fab fa-linkedin text-blue-600 text-xl mr-3"></i>
                                <h3 className="text-xl font-semibold text-gray-900">LinkedIn Updates</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <p className="text-sm text-gray-700 mb-2">
                                        Excited to announce our latest integration with Microsoft Teams! Seamless collaboration for legal teams. #LegalTech #Innovation
                                    </p>
                                    <div className="text-xs text-gray-500">2 days ago</div>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <p className="text-sm text-gray-700 mb-2">
                                        Join us at the Legal Innovation Summit next month. Our CEO will be speaking about the future of practice management.
                                    </p>
                                    <div className="text-xs text-gray-500">5 days ago</div>
                                </div>
                            </div>
                            <button className="w-full mt-6 text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                                Follow on LinkedIn <i className="fab fa-linkedin ml-1"></i>
                            </button>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex items-center mb-6">
                                <i className="fas fa-question-circle text-blue-600 text-xl mr-3"></i>
                                <h3 className="text-xl font-semibold text-gray-900">Help Centre</h3>
                            </div>
                            <div className="mb-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search help articles..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 !rounded-button focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                    />
                                    <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                    <div className="font-medium text-gray-900">Getting Started Guide</div>
                                    <div className="text-sm text-gray-600">Basic setup and configuration</div>
                                </button>
                                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                    <div className="font-medium text-gray-900">Document Templates</div>
                                    <div className="text-sm text-gray-600">Creating and managing templates</div>
                                </button>
                                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                    <div className="font-medium text-gray-900">Billing & Invoicing</div>
                                    <div className="text-sm text-gray-600">Setting up automated billing</div>
                                </button>
                            </div>
                            <button className="w-full mt-6 text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                                Visit Help Centre <i className="fas fa-arrow-right ml-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Testimonials Section */}
            <section className=" mb-3 bg-gray-50">
                <div className="p-5">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#2c3e50] mb-4">Client Success Stories</h2>
                        <p className="text-xl text-gray-600">Real-world results from law firms using Clio</p>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div key={testimonial.id} className="w-full flex-shrink-0">
                                        <div className="bg-white rounded-lg shadow-lg p-8 mx-4 max-w-4xl mx-auto border-t-4 border-[#f76b1c]">
                                            <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-6 space-y-6 md:space-y-0">
                                                <div className="relative">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-20 h-20 rounded-full object-cover"
                                                    />
                                                    {testimonial.hasVideo && (
                                                        <button className="absolute -bottom-2 -right-2 bg-[#f76b1c] text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-[#e05e15] transition-colors">
                                                            <i className="fas fa-play text-xs"></i>
                                                        </button>
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <blockquote className="text-lg text-gray-700 mb-4 italic">
                                                        "{testimonial.quote}"
                                                    </blockquote>
                                                    <div>
                                                        <div className="font-semibold text-[#2c3e50]">{testimonial.name}</div>
                                                        <div className="text-gray-600">{testimonial.firm}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-[#f76b1c] hover:text-white cursor-pointer transition-colors"
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-[#f76b1c] hover:text-white cursor-pointer transition-colors"
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>

                        <div className="flex justify-center mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${index === currentTestimonial ? 'bg-[#f76b1c]' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA Section */}
            <FooterSection />

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-[#f76b1c] text-white p-3 rounded-full shadow-lg hover:bg-[#f76b1c] transition-colors cursor-pointer"
            >
                <i className="fas fa-chevron-up"></i>
            </button>
        </div>
    );
};

export default Resources;
