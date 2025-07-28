// MessageCentre.jsx
import React, { useState } from 'react';
import MessageHeader from './MessageHeader';
import MessageTabs from './MessageTabs';
import MessageList from './MessageList';
import NewMessageModal from './NewMessageModal';

const MessageCentre = () => {
  const [activeTab, setActiveTab] = useState('inbox');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMessage, setNewMessage] = useState({
    to: '',
    subject: '',
    message: ''
  });

  const messageData = {
    inbox: [
      {
        id: 1,
        sender: 'John Smith',
        subject: 'Project Update',
        preview: 'Latest project status and next steps...',
        timestamp: '2 hours ago',
        isRead: false
      },
      {
        id: 2,
        sender: 'Sarah Johnson',
        subject: 'Client Meeting Notes',
        preview: 'Summary from today\'s client meeting...',
        timestamp: '4 hours ago',
        isRead: true
      },
      {
        id: 3,
        sender: 'Mike Chen',
        subject: 'Team Sync-up',
        preview: 'Quick update on team progress...',
        timestamp: '1 day ago',
        isRead: false
      }
    ],
    sent: [
      {
        id: 4,
        sender: 'You',
        recipient: 'Product Team',
        subject: 'Weekly Progress Report',
        preview: 'Here is the summary of our progress this week...',
        timestamp: '1 hour ago',
        isRead: true
      },
      {
        id: 5,
        sender: 'You',
        recipient: 'David Wilson',
        subject: 'Design Review',
        preview: 'Please review the latest design updates...',
        timestamp: '3 hours ago',
        isRead: true
      }
    ],
    'client-messages': [
      {
        id: 6,
        sender: 'Emma Davis',
        subject: 'Project Requirements',
        preview: 'Here are the updated project requirements...',
        timestamp: '30 minutes ago',
        isRead: false,
        isClient: true
      },
      {
        id: 7,
        sender: 'Alex Thompson',
        subject: 'Feedback on Prototype',
        preview: 'The latest prototype looks great! Just a few suggestions...',
        timestamp: '5 hours ago',
        isRead: true,
        isClient: true
      }
    ]
  };

  const messages = messageData[activeTab] || [];

  function getTabCount(tab) {
    switch (tab) {
      case 'inbox': return 2;
      case 'client-messages': return 1;
      default: return 0;
    }
  }

  function handleNewMessageChange(e) {
    const { name, value } = e.target;
    setNewMessage(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSendMessage() {
    // Handle send message logic here
    setIsModalOpen(false);
    setNewMessage({
      to: '',
      subject: '',
      message: ''
    });
  }

  return (
    <div className="container-fluid bg-light" style={{ minHeight: '100vh' }}>
      <MessageHeader 
        onNewMessage={() => setIsModalOpen(true)}
      />
      
      <MessageTabs 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        getTabCount={getTabCount}
      />
      
      <div className="row" style={{ height: 'calc(100vh - 120px)' }}>
        <div className="col-12">
          <MessageList 
            messages={messages}
            searchQuery={searchQuery}
            onSearchChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <NewMessageModal 
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
        newMessage={newMessage}
        onChange={handleNewMessageChange}
        onSend={handleSendMessage}
      />
    </div>
  );
};

export default MessageCentre;
