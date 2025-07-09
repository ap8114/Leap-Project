// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../HomePages/Header';
import FooterSection from '../../HomePages/FooterSection';
const Company = () => {
    const [activeTimelineItem, setActiveTimelineItem] = useState(null);
    const [showContactForm, setShowContactForm] = useState(false);
    const timelineData = [
        {
            date: 'Nov 2024',
            title: 'Clio Desktop – AI Prompt Templates',
            description: 'Customisable document-drafting templates with guidance, speeding up work and reducing errors',
            icon: 'fas fa-robot'
        },
        {
            date: 'Sep 2024',
            title: 'New App – Transaction Requests',
            description: 'Centralise and manage payments, approvals, and document attachments across Client and Office accounts',
            icon: 'fas fa-exchange-alt'
        },
        {
            date: 'Jul 2024',
            title: 'Clio Desktop 2.5 + Generator',
            description: 'Enhancements linking LawY, Matter AI, Guides and Precedents; Teams integration; staff signatures',
            icon: 'fas fa-cogs'
        },
        {
            date: 'Jun 2024',
            title: 'App Update – Legal Aid',
            description: 'Bulk receipting, improved Payments on Account, Duty Solicitor compliance reporting',
            icon: 'fas fa-balance-scale'
        },
        {
            date: 'Jun 2024',
            title: 'Desktop – AutoTime',
            description: 'AI-driven automatic time capture, eliminating manual timers and increasing billing accuracy',
            icon: 'fas fa-clock'
        },
        {
            date: 'Jun 2024',
            title: 'App Update – Workflow App',
            description: 'Milestones added, deeply embedded into Clio for matter tracking',
            icon: 'fas fa-tasks'
        },
        {
            date: 'Apr 2024',
            title: 'Clio Desktop – Matter AI',
            description: 'AI-powered insight, correspondence analysis, and document drafting',
            icon: 'fas fa-brain'
        },
        {
            date: 'Apr 2024',
            title: 'New Integration – Power BI Connector',
            description: 'Custom dashboards and reporting via Microsoft Power BI',
            icon: 'fas fa-chart-bar'
        },
        {
            date: 'Mar 2024',
            title: 'Clio Desktop – LawY AI Assistant',
            description: 'Trusted AI answers verified by lawyers',
            icon: 'fas fa-user-tie'
        }
    ];
    const partnerCategories = [
        {
            title: 'Certified Consultants',
            description: 'Expert consultants to help optimize your Clio implementation',
            icon: 'fas fa-user-check'
        },
        {
            title: 'Bookkeepers',
            description: 'Qualified bookkeeping professionals familiar with Clio',
            icon: 'fas fa-calculator'
        },
        {
            title: 'IT Experts',
            description: 'Technical specialists for system integration and support',
            icon: 'fas fa-laptop-code'
        }
    ];
    return (
        <div className="w-100 ">
            {/* Header */}
            <Header />
            {/* Hero Section */}
            <section className="relative min-h-[800px] mt-3 flex items-center pt-24 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://readdy.ai/api/search-image?query=modern%20elegant%20office%20interior%20with%20glass%20walls%20and%20natural%20light%2C%20showing%20professional%20workspace%20with%20minimalist%20design%2C%20clean%20lines%2C%20and%20sophisticated%20technology%20integration%2C%20perfect%20for%20legal%20tech%20company&width=1440&height=800&seq=hero1&orientation=landscape"
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50]/90 to-transparent"></div>
                </div>
                <div className="relative mx-auto px-6">
                    <div className=" text-white">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Transform Your Legal Practice
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
                            The world's most innovative legal practice management software, empowering law firms to work smarter and deliver better client outcomes.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#f76b1c] hover:bg-[#e65b0c] text-white px-8 py-4 !rounded-button font-semibold transition-colors cursor-pointer whitespace-nowrap">
                                Get Started
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 !rounded-button font-semibold transition-colors cursor-pointer whitespace-nowrap">
                                Book a Demo
                            </button>
                        </div>
                        <div className="mt-12 grid grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">20K+</div>
                                <p className="text-white">Law Firms</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">50M+</div>
                                <p className="text-white">Documents Processed</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                                <p className="text-white">Uptime</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Leadership Section */}
            <section id="leadership" className="p-5 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">Leadership</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our experienced leadership team drives innovation and excellence in legal technology,
                            committed to empowering law firms worldwide with cutting-edge solutions.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                                    <img
                                        src={`https://readdy.ai/api/search-image?query=professional%20executive%20portrait%20of%20a%20confident%20business%20leader%20in%20modern%20office%20setting%20with%20clean%20white%20background%20and%20professional%20lighting&width=200&height=200&seq=leader${item}&orientation=squarish`}
                                        alt="Leadership Team Member"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Leadership Team Member</h3>
                                <p className="text-blue-600 font-medium mb-3">Executive Position</p>
                                <p className="text-gray-600 text-sm">
                                    Bringing years of experience in legal technology and business leadership to drive our mission forward.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Careers Section */}
            <section id="careers" className=" bg-white">
                <div className="p-5 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">Join Our Team</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We care deeply about our people and their growth. Explore opportunities and join a collaborative,
                                innovative team dedicated to modern legal practice. At Clio, you'll be part of a company that's
                                transforming the legal industry through cutting-edge technology.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                    <span className="text-gray-700">Collaborative and innovative work environment</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                    <span className="text-gray-700">Professional development opportunities</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                    <span className="text-gray-700">Cutting-edge technology projects</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                    <span className="text-gray-700">Impact on the legal industry</span>
                                </div>
                            </div>
                            <button className="bg-[#f76b1c] text-white px-8 py-4 !rounded-button font-semibold hover:bg-[#e65b0c] transition-colors cursor-pointer whitespace-nowrap">
                                View Open Positions
                            </button>
                        </div>
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://readdy.ai/api/search-image?query=modern%20collaborative%20office%20workspace%20with%20diverse%20team%20of%20professionals%20working%20together%20on%20innovative%20technology%20projects%20in%20bright%20contemporary%20setting&width=600&height=400&seq=careers1&orientation=landscape"
                                    alt="Clio Team Working"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Innovations Section */}
            <section id="innovations" className="p-3 py-5 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Innovations</h2>
                        <div className="bg-[#2c3e50] text-white rounded-2xl p-8 max-w-2xl mx-auto mb-12">
                            <div className="text-3xl font-bold mb-2">£13 Million</div>
                            <p className="text-gray-200">
                                Clio reinvests annually into R&D, delivering cutting-edge technology and the world's best
                                practice management software
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#2c3e50]/20"></div>
                        <div className="space-y-8">
                            {timelineData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative flex items-start cursor-pointer transition-all duration-300 ${activeTimelineItem === index ? 'transform scale-105' : ''
                                        }`}
                                    onClick={() => setActiveTimelineItem(activeTimelineItem === index ? null : index)}
                                >
                                    <div className="absolute left-6 w-4 h-4 bg-[#f76b1c] rounded-full border-4 border-white shadow-lg"></div>
                                    <div className="ml-20 bg-white rounded-xl shadow-lg p-6 flex-1 hover:shadow-xl transition-shadow">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center mb-3">
                                                <i className={`${item.icon} text-[#f76b1c] text-xl mr-3`}></i>
                                                <span className="text-sm font-semibold text-[#2c3e50] bg-[#2c3e50]/5 px-3 py-1 rounded-full">
                                                    {item.date}
                                                </span>
                                            </div>
                                            <i className={`fas fa-chevron-${activeTimelineItem === index ? 'up' : 'down'} text-gray-400`}></i>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                                        <div className={`overflow-hidden transition-all duration-300 ${activeTimelineItem === index ? 'max-h-96 opacity-100' : 'max-h-16 opacity-75'
                                            }`}>
                                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                            {activeTimelineItem === index && (
                                                <div className="mt-4 pt-4 border-t border-gray-100">
                                                    <a
                                                        href="https://community.Clio.co.uk"
                                                        className="text-[#f76b1c] hover:text-[#e65b0c] font-medium cursor-pointer"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Learn more on community.Clio.co.uk <i className="fas fa-external-link-alt ml-1"></i>
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact & Support Section */}
            <section id="contact" className="bg-white">
                <div className="p-5 mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact & Support</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Get in touch with our team or access our comprehensive support resources
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-[#2c3e50]/5 to-[#2c3e50]/10 rounded-2xl p-8">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get Support</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <i className="fas fa-headset text-[#f76b13] text-xl mr-4"></i>
                                        <div>
                                            <div className="font-semibold text-gray-900">24/7 Support</div>
                                            <div className="text-gray-600">Round-the-clock assistance</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-book text-[#f76b13] text-xl mr-4"></i>
                                        <div>
                                            <div className="font-semibold text-gray-900">Knowledge Base</div>
                                            <div className="text-gray-600">Comprehensive documentation</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-video text-[#f76b13] text-xl mr-4"></i>
                                        <div>
                                            <div className="font-semibold text-gray-900">Training Resources</div>
                                            <div className="text-gray-600">Video tutorials and guides</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {!showContactForm ? (
                                <div className="text-center">
                                    <div className="bg-gray-50 rounded-2xl p-12">
                                        <i className="fas fa-envelope text-[#f76b13] text-4xl mb-6"></i>
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Connect?</h3>
                                        <p className="text-gray-600 mb-8">
                                            Our team is here to help you with any questions or support needs
                                        </p>
                                       
                                    <Link to="/contactus" className="text-decoration-none">
                                      <button
                                            onClick={() => setShowContactForm(true)}
                                            className="bg-[#f76b13] text-white px-8 py-4 !rounded-button font-semibold hover:bg-[#f76b1c]  transition-colors cursor-pointer whitespace-nowrap"
                                        >
                                            Contact Us
                                        </button>
                                       </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-white border border-gray-200 rounded-2xl ">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                                <input
                                                    type="text"
                                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="Enter your first name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                                <input
                                                    type="text"
                                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="Enter your last name"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                            <input
                                                type="email"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                            <input
                                                type="text"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="What can we help you with?"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                            <textarea
                                                rows={4}
                                                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                                placeholder="Tell us more about your inquiry..."
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-[#f76b1c] text-white py-3 !rounded-button font-semibold hover:bg-[#e65b0c] transition-colors cursor-pointer whitespace-nowrap"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {/* Business Partners Section */}
            <section id="partners" className="bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="p-5 mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Business Partners</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Connect with our certified partner network or join our growing ecosystem of legal technology experts
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {partnerCategories.map((category, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow cursor-pointer">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <i className={`${category.icon} text-[#f76b13] text-2xl`}></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                                <p className=" mb-6">{category.description}</p>
                                <button className="text-[#f76b13] font-semibold transition-colors cursor-pointer whitespace-nowrap">
                                    Find Partners 
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                        <div className="flex items-center justify-between flex-wrap gap-6">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-[#f76b13] rounded-lg flex items-center justify-center mr-4">
                                    <i className="fas fa-balance-scale text-white text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">The Law Society</h3>
                                    <p className="text-gray-600">Proud strategic partner</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                    Strategic Partner
                                </span>
                                <button className="text-[#f76b13] font-semibold transition-colors cursor-pointer whitespace-nowrap">
                                    Learn More <i className="fas fa-external-link-alt ml-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-[#2c3e50] to-[#2c3e50] rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-semibold mb-4">Become a Partner</h3>
                            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                                Join our partner network and help law firms maximize their potential with Clio.
                                Opportunities available for supporting law firms across various specialties.
                            </p>
                            <button className="bg-white text-[#f76b13] px-8 py-4 !rounded-button font-semibold hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
                                Partner With Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Ideas Hub Section */}
            <section id="ideas" className="bg-white">
                <div className="p-5 mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ideas Hub</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Share feedback, participate in discussions, and vote on feature suggestions.
                            Help shape the future of Clio together with our community.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-[#2c3e50]/5 to-[#2c3e50]/10 rounded-2xl p-8">
                            <div className="w-16 h-16 bg-[#2c3e50]/10 rounded-full flex items-center justify-center mb-6">
                                <i className="fas fa-lightbulb text-[#f76b1c] text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Share Ideas</h3>
                            <p className="text-gray-600 mb-6">
                                Submit your feature requests and improvement suggestions to help us build better solutions.
                            </p>
                            <button className="bg-[#f76b1c] text-white px-6 py-3 !rounded-button font-semibold hover:bg-[#e65b0c] transition-colors cursor-pointer whitespace-nowrap">
                                Submit Idea
                            </button>
                        </div>
                        <div className="bg-gradient-to-br from-[#2c3e50]/5 to-[#2c3e50]/10 rounded-2xl p-8">
                            <div className="w-16 h-16 bg-[#2c3e50]/10 rounded-full flex items-center justify-center mb-6">
                                <i className="fas fa-comments text-[#f76b1c] text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Join Discussions</h3>
                            <p className="text-gray-600 mb-6">
                                Engage with other Clio users, share experiences, and learn from the community.
                            </p>
                            <button className="bg-[#f76b1c] text-white px-6 py-3 !rounded-button font-semibold hover:bg-[#e65b0c] transition-colors cursor-pointer whitespace-nowrap">
                                Join Discussion
                            </button>
                        </div>
                        <div className="bg-gradient-to-br from-[#2c3e50]/5 to-[#2c3e50]/10 rounded-2xl p-8">
                            <div className="w-16 h-16 bg-[#2c3e50]/10 rounded-full flex items-center justify-center mb-6">
                                <i className="fas fa-vote-yea text-[#f76b1c] text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Vote on Features</h3>
                            <p className="text-gray-600 mb-6">
                                Help prioritize development by voting on the features that matter most to you.
                            </p>
                            <button className="bg-[#f76b1c] text-white px-6 py-3 !rounded-button font-semibold hover:bg-[#e65b0c] transition-colors cursor-pointer whitespace-nowrap">
                                Vote Now
                            </button>
                        </div>
                    </div>
                    <div className="mt-16 bg-gray-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Recent Community Activity</h3>
                        <div className="space-y-4">
                            {[
                                { title: 'Enhanced Mobile App Features', votes: 47, comments: 12, status: 'Under Review' },
                                { title: 'Integration with Microsoft Teams', votes: 89, comments: 23, status: 'In Development' },
                                { title: 'Advanced Reporting Dashboard', votes: 34, comments: 8, status: 'Planned' }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-lg p-6 flex items-center justify-between">
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                                            <span><i className="fas fa-thumbs-up mr-1"></i>{item.votes} votes</span>
                                            <span><i className="fas fa-comment mr-1"></i>{item.comments} comments</span>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === 'In Development' ? 'bg-[#2c3e50]/10 text-[#2c3e50]' :
                                            item.status === 'Under Review' ? 'bg-[#f76b1c]/10 text-[#f76b1c]' :
                                                'bg-gray-100 text-gray-800'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
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
export default Company