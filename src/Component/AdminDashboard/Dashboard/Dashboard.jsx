import React, { useState } from 'react';
import * as echarts from 'echarts';
import NavigationTabs from './NavigationTabs';
import PersonalDashboard from './PersonalDashboard';
import FirmDashboard from './FirmDashboard';
import FirmFeed from './FirmFeed';
import TaskModal from './TaskModal';
import EventModal from './EventModal';

const App = () => {
  const [activeTab, setActiveTab] = useState('Personal Dashboard');
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [taskForm, setTaskForm] = useState({
    name: '',
    description: '',
    priority: 'Normal',
    assignTo: '',
    category: '',
    status: 'Pending',
    timeEstimate: '',
    matter: '',
    dueDate: '',
    privateTask: false
  });

  const handleTaskFormChange = (field, value) => {
    setTaskForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveTask = () => {
    console.log('Task saved:', taskForm);
    setShowTaskModal(false);
    setTaskForm({
      name: '',
      description: '',
      priority: 'Normal',
      assignTo: '',
      category: '',
      status: 'Pending',
      timeEstimate: '',
      matter: '',
      dueDate: '',
      privateTask: false
    });
  };

  return (
    <div className="p-4">
        <h1 className="fw-bold ms-3" style={{ fontSize: "2rem", fontWeight: "700" }}>Dashboard</h1>
      <div className="container-fluid py-4 px-4">
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {activeTab === 'Personal Dashboard' && (
          <PersonalDashboard 
            setShowTaskModal={setShowTaskModal}
            setShowEventModal={setShowEventModal}
          />
        )}
        {activeTab === 'Firm Dashboard' && <FirmDashboard />}
        {activeTab === 'Firm Feed' && <FirmFeed />}
      </div>

      <TaskModal 
        showTaskModal={showTaskModal}
        setShowTaskModal={setShowTaskModal}
        taskForm={taskForm}
        handleTaskFormChange={handleTaskFormChange}
        handleSaveTask={handleSaveTask}
      />
      
      <EventModal 
        show={showEventModal}
        handleClose={() => setShowEventModal(false)}
      />
    </div>
  );
};

export default App;