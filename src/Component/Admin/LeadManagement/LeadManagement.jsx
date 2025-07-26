// LeadManagement.jsx
import React, { useState } from 'react';
import LeadFormModal from './LeadFormModal';
import LeadStats from './LeadStats';
import LeadFunnel from './LeadFunnel';
import LeadsTable from './LeadsTable';
import TasksReminder from './TasksReminder';
import IntakeFormGenerator from './IntakeFormGenerator';

const LeadManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: 'John Smith',
      contactMethod: 'Phone',
      source: 'Referral',
      enquiryType: 'Injury',
      status: 'New',
      date: '2025-01-20',
      notes: 'Car accident case, needs immediate consultation'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      contactMethod: 'Email',
      source: 'Website',
      enquiryType: 'Claim',
      status: 'Contacted',
      date: '2025-01-19',
      notes: 'Insurance claim dispute, scheduled for consultation'
    },
    {
      id: 3,
      name: 'Michael Brown',
      contactMethod: 'Phone',
      source: 'Walk-in',
      enquiryType: 'Advice',
      status: 'In Progress',
      date: '2025-01-18',
      notes: 'Legal advice on contract dispute'
    }
  ]);

  const [formData, setFormData] = useState({
    leadName: '',
    contactMethod: 'Phone',
    source: 'Website',
    enquiryType: 'Injury',
    initialNotes: '',
    leadStatus: 'New'
  });

  const tasks = [
    { id: 1, title: 'Follow up with John Smith', priority: 'High', dueDate: '2025-01-21' },
    { id: 2, title: 'Send consultation form to Sarah Johnson', priority: 'Medium', dueDate: '2025-01-22' },
    { id: 3, title: 'Review Michael Brown case documents', priority: 'Low', dueDate: '2025-01-23' }
  ];

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isEditing && selectedLead) {
      // Update existing lead
      const updatedLeads = leads.map(lead =>
        lead.id === selectedLead.id ? {
          ...lead,
          name: formData.leadName,
          contactMethod: formData.contactMethod,
          source: formData.source,
          enquiryType: formData.enquiryType,
          notes: formData.initialNotes,
          status: formData.leadStatus
        } : lead
      );
      setLeads(updatedLeads);
    } else {
      // Add new lead
      const newLead = {
        id: leads.length + 1,
        name: formData.leadName,
        contactMethod: formData.contactMethod,
        source: formData.source,
        enquiryType: formData.enquiryType,
        status: formData.leadStatus,
        date: new Date().toISOString().split('T')[0],
        notes: formData.initialNotes
      };
      setLeads([...leads, newLead]);
    }
    setShowAddForm(false);
    setIsEditing(false);
    setSelectedLead(null);
    setFormData({
      leadName: '',
      contactMethod: 'Phone',
      source: 'Website',
      enquiryType: 'Injury',
      initialNotes: '',
      leadStatus: 'New'
    });
  }

  function handleEdit(lead) {
    setSelectedLead(lead);
    setIsEditing(true);
    setFormData({
      leadName: lead.name,
      contactMethod: lead.contactMethod,
      source: lead.source,
      enquiryType: lead.enquiryType,
      initialNotes: lead.notes,
      leadStatus: lead.status
    });
    setShowAddForm(true);
  }

  function getStatusColor(status) {
    switch (status) {
      case 'New': return 'bg-primary';
      case 'Contacted': return 'bg-warning';
      case 'In Progress': return 'bg-info';
      case 'Converted': return 'bg-success';
      case 'Dropped': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }

  function getPriorityColor(priority) {
    switch (priority) {
      case 'High': return 'bg-danger';
      case 'Medium': return 'bg-warning';
      case 'Low': return 'bg-success';
      default: return 'bg-secondary';
    }
  }

  return (
    <div className="p-4 py-2 bg-light" style={{ minHeight: '100vh' }}>
      {/* Header */}
     <div className="bg-light ">
  <div className="container py-4">
    <div className="row align-items-center">
      {/* Left Side: Breadcrumb + Heading */}
      <div className="col-12 col-md-8 mb-3 mb-md-0">
        <nav className="mb-2">
          <span className="text-muted">Dashboard</span>
          <i className="fas fa-chevron-right mx-2 text-muted"></i>
          <span className="text-dark">Lead Management</span>
        </nav>
        <h1 className="h4 text-dark mb-0">Lead Management</h1>
      </div>

      {/* Right Side: Button */}
      <div className="col-12 col-md-4 text-md-end">
        <button
          onClick={() => setShowAddForm(true)}
          className="btn btn-primary w-auto"
        >
          <i className="fas fa-plus me-2"></i>Add New Lead
        </button>
      </div>
    </div>
  </div>
</div>


      <LeadStats />

      <div className=" py-4">
        <div className="row">
          {/* Main Content */}
          <div className="col-md-8">
            <LeadFunnel />
            <LeadsTable 
              leads={leads} 
              onEdit={handleEdit} 
              getStatusColor={getStatusColor} 
            />
          </div>
          
          {/* Sidebar */}
          <div className="col-md-4">
            <TasksReminder 
              tasks={tasks} 
              getPriorityColor={getPriorityColor} 
            />
            <IntakeFormGenerator />
          </div>
        </div>
      </div>

      {/* Add New Lead Modal */}
      <LeadFormModal 
        show={showAddForm} 
        onHide={() => setShowAddForm(false)}
        isEditing={isEditing}
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default LeadManagement;