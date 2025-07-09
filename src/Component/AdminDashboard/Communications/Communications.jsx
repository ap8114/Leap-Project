// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';

const Communications = () => {
  const [activeTab, setActiveTab] = useState('inbox');
  const [expandedMessage, setExpandedMessage] = useState(null);
  const [showNewMessage, setShowNewMessage] = useState(false);
  const [showLinkMatter, setShowLinkMatter] = useState(null);
  const [showAddNote, setShowAddNote] = useState(null);

  const messages = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      subject: 'Contract Review Required - Smith Property Deal',
      preview: 'Hi team, I need your review on the purchase agreement for the Smith property. The client has requested some modifications to the closing terms...',
      time: '2 hours ago',
      unread: true,
      linkedMatter: 'Smith Property Purchase',
      type: 'internal'
    },
    {
      id: 2,
      sender: 'client@example.com',
      subject: 'Question about Estate Planning Documents',
      preview: 'Dear Attorney, I have some questions regarding the estate planning documents we discussed last week. Specifically about the trust structure...',
      time: '4 hours ago',
      unread: true,
      linkedMatter: null,
      type: 'email'
    },
    {
      id: 3,
      sender: 'Michael Chen',
      subject: 'Court Date Confirmation - Johnson vs. Anderson',
      preview: 'The court has confirmed the hearing date for Johnson vs. Anderson case. Please review the attached documents and prepare accordingly...',
      time: '1 day ago',
      unread: false,
      linkedMatter: 'Johnson vs. Anderson',
      type: 'internal'
    },
    {
      id: 4,
      sender: 'legal.assistant@firm.com',
      subject: 'Document Filing Deadline Reminder',
      preview: 'This is a reminder that several document filings are due this week. Please review the attached list and ensure all deadlines are met...',
      time: '2 days ago',
      unread: false,
      linkedMatter: null,
      type: 'email'
    }
  ];

  const sentMessages = [
    {
      id: 5,
      recipient: 'client@business.com',
      subject: 'Contract Terms Update - Business Acquisition',
      preview: 'Dear Client, Following our discussion yesterday, I have updated the contract terms as requested. Please review the attached revised agreement...',
      time: '3 hours ago',
      linkedMatter: 'Business Acquisition Deal',
      type: 'email'
    },
    {
      id: 6,
      recipient: 'Jennifer Walsh',
      subject: 'Case Strategy Discussion',
      preview: 'Hi Jennifer, I wanted to discuss our strategy for the upcoming mediation session. Based on the latest developments...',
      time: '1 day ago',
      linkedMatter: 'Corporate Dispute Case',
      type: 'internal'
    }
  ];

  const linkedMessages = [
    {
      id: 7,
      sender: 'David Miller',
      subject: 'Discovery Documents Ready for Review',
      preview: 'The discovery documents for the Miller case are now ready for your review. I have organized them by category and priority...',
      time: '5 hours ago',
      linkedMatter: 'Miller Personal Injury',
      type: 'internal'
    },
    {
      id: 8,
      sender: 'opposing.counsel@law.com',
      subject: 'Settlement Proposal - Wilson Case',
      preview: 'Dear Counsel, We are writing to present a settlement proposal for the Wilson case. Our client is prepared to offer...',
      time: '1 day ago',
      linkedMatter: 'Wilson Employment Dispute',
      type: 'email'
    }
  ];

  const getCurrentMessages = () => {
    switch (activeTab) {
      case 'sent':
        return sentMessages;
      case 'linked':
        return linkedMessages;
      default:
        return messages;
    }
  };

  const toggleMessage = (id) => {
    setExpandedMessage(expandedMessage === id ? null : id);
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Communications</h1>
          
          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab('inbox')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap !rounded-button cursor-pointer ${
                activeTab === 'inbox'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Inbox
            </button>
            <button
              onClick={() => setActiveTab('sent')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap !rounded-button cursor-pointer ${
                activeTab === 'sent'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Sent
            </button>
            <button
              onClick={() => setActiveTab('linked')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap !rounded-button cursor-pointer ${
                activeTab === 'linked'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Linked to Matters
            </button>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-envelope text-blue-600"></i>
              <span className="text-sm text-gray-600">Email Integration Active</span>
            </div>
          </div>
          <button
            onClick={() => setShowNewMessage(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 whitespace-nowrap !rounded-button cursor-pointer"
          >
            <i className="fas fa-plus"></i>
            <span>New Message</span>
          </button>
        </div>

        {/* Messages List */}
        <div className="space-y-4">
          {getCurrentMessages().map((message) => (
            <div key={message.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleMessage(message.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex items-center space-x-2">
                        {message.type === 'email' ? (
                          <i className="fas fa-envelope text-blue-500"></i>
                        ) : (
                          <i className="fas fa-comment text-green-500"></i>
                        )}
                        <span className="font-medium text-gray-900">
                          {activeTab === 'sent' ? (message).recipient : (message).sender}
                        </span>
                      </div>
                      {(message).unread && activeTab !== 'sent' && (
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      )}
                      {(message).linkedMatter && (
                        <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                          {(message).linkedMatter}
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{message.subject}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{message.preview}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2 ml-4">
                    <span className="text-sm text-gray-500">{message.time}</span>
                    <i className={`fas fa-chevron-${expandedMessage === message.id ? 'up' : 'down'} text-gray-400`}></i>
                  </div>
                </div>
              </div>

              {/* Expanded Message Content */}
              {expandedMessage === message.id && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="mb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {message.preview} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {activeTab !== 'sent' && (
                      <>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 text-sm whitespace-nowrap !rounded-button cursor-pointer">
                          <i className="fas fa-reply"></i>
                          <span>Reply</span>
                        </button>
                        <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2 text-sm whitespace-nowrap !rounded-button cursor-pointer">
                          <i className="fas fa-share"></i>
                          <span>Forward</span>
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => setShowLinkMatter(message.id)}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2 text-sm whitespace-nowrap !rounded-button cursor-pointer"
                    >
                      <i className="fas fa-link"></i>
                      <span>Link to Matter</span>
                    </button>
                    <button
                      onClick={() => setShowAddNote(message.id)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 text-sm whitespace-nowrap !rounded-button cursor-pointer"
                    >
                      <i className="fas fa-sticky-note"></i>
                      <span>Add Note</span>
                    </button>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-2 text-sm whitespace-nowrap !rounded-button cursor-pointer">
                      <i className="fas fa-archive"></i>
                      <span>Archive</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* New Message Modal */}
        {showNewMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">New Message</h3>
                <button
                  onClick={() => setShowNewMessage(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Enter recipient email or select team member"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Enter subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="linkMatter" className="rounded" />
                  <label htmlFor="linkMatter" className="text-sm text-gray-700">Link to matter</label>
                </div>
              </div>
              <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
                <button
                  onClick={() => setShowNewMessage(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap !rounded-button cursor-pointer"
                >
                  Cancel
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap !rounded-button cursor-pointer">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Link to Matter Modal */}
        {showLinkMatter && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Link to Matter</h3>
                <button
                  onClick={() => setShowLinkMatter(null)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search Matters</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Type to search matters..."
                    />
                    <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                  </div>
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {['Smith Property Purchase', 'Johnson vs. Anderson', 'Corporate Merger Deal', 'Estate Planning - Wilson'].map((matter) => (
                    <div key={matter} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <span className="text-sm text-gray-900">{matter}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
                <button
                  onClick={() => setShowLinkMatter(null)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap !rounded-button cursor-pointer"
                >
                  Cancel
                </button>
                <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap !rounded-button cursor-pointer">
                  Link Matter
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Note Modal */}
        {showAddNote && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Add Note to Matter</h3>
                <button
                  onClick={() => setShowAddNote(null)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Matter</label>
                  <div className="relative">
                    <button className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-left flex items-center justify-between cursor-pointer">
                      <span>Choose matter...</span>
                      <i className="fas fa-chevron-down text-gray-400"></i>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Note</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Add your note about this message..."
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
                <button
                  onClick={() => setShowAddNote(null)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap !rounded-button cursor-pointer"
                >
                  Cancel
                </button>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap !rounded-button cursor-pointer">
                  Add Note
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .!rounded-button {
          border-radius: 0.5rem !important;
        }
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Communications;