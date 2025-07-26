import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import GPInfo from './GPInfo';
import Documents from './Documents';
import PasswordChange from './PasswordChange';

const MyProfile = () => {
  const [editingSection, setEditingSection] = useState(null);
  const [personalInfo, setPersonalInfo] = useState({
    name: 'John Smith',
    dateOfBirth: '1985-03-15',
    gender: 'Male'
  });
  
  const [contactInfo, setContactInfo] = useState({
    address: '123 Main Street, London, UK SW1A 1AA',
    phone: '+44 20 7946 0958',
    email: 'john.smith@email.com'
  });
  
  const [gpInfo, setGpInfo] = useState({
    doctorName: 'Dr. Sarah Johnson',
    practice: 'Central Medical Practice',
    phone: '+44 20 7946 0123',
    emergencyContact: 'Jane Smith',
    emergencyPhone: '+44 20 7946 0456',
    relationship: 'Spouse'
  });
  
  const [documents] = useState([
    { id: 1, name: 'Medical History.pdf', date: '2024-01-15', type: 'pdf' },
    { id: 2, name: 'Insurance Card.jpg', date: '2024-01-10', type: 'image' },
    { id: 3, name: 'Prescription.pdf', date: '2024-01-05', type: 'pdf' }
  ]);
  
  const [passwordForm, setPasswordForm] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleEdit = (section) => {
    setEditingSection(section);
  };

  const handleSave = (section) => {
    setEditingSection(null);
    // Save logic would go here
  };

  const handleCancel = () => {
    setEditingSection(null);
  };

  return (
    <div className="container-fluid min-vh-100 bg-light">
      <div className="container py-4">
        <div className="mb-4">
          <h1 className="display-4">My Profile</h1>
          <p className="lead text-muted">Manage your personal information and documents</p>
        </div>
        
        <div className="row">
          <div className="col-md-6 mb-4">
            <PersonalInfo 
              data={personalInfo} 
              setData={setPersonalInfo}
              editing={editingSection === 'personal'}
              onEdit={() => handleEdit('personal')}
              onSave={() => handleSave('personal')}
              onCancel={handleCancel}
            />
          </div>
          
          <div className="col-md-6 mb-4">
            <ContactInfo 
              data={contactInfo} 
              setData={setContactInfo}
              editing={editingSection === 'contact'}
              onEdit={() => handleEdit('contact')}
              onSave={() => handleSave('contact')}
              onCancel={handleCancel}
            />
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 mb-4">
            <GPInfo 
              data={gpInfo} 
              setData={setGpInfo}
              editing={editingSection === 'medical'}
              onEdit={() => handleEdit('medical')}
              onSave={() => handleSave('medical')}
              onCancel={handleCancel}
            />
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 mb-4">
            <Documents documents={documents} />
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 mb-4">
            <PasswordChange 
              formData={passwordForm}
              setFormData={setPasswordForm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;