import React, { useState } from 'react';
import AppointmentHeader from './AppointmentHeader';
import Sidebar from './Sidebar';
import CalendarView from './CalendarView';
import NewAppointmentModal from './NewAppointmentModal';
import './Appointement.css';

const AppointmentScheduler = () => {
  const [currentView, setCurrentView] = useState('week');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showNewAppointment, setShowNewAppointment] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState('all');
  const [reminderSettings, setReminderSettings] = useState({
    email: true,
    sms: false
  });

  const staffMembers = [
    { id: 'all', name: 'All Staff', colour: 'bg-secondary' },
    { id: '1', name: 'Dr. Sarah Johnson', colour: 'bg-primary' },
    { id: '2', name: 'Dr. Michael Chen', colour: 'bg-success' },
    { id: '3', name: 'Dr. Emily Davis', colour: 'bg-purple' }
  ];

  const upcomingAppointments = [
    { client: 'John Smith', time: 'Today 9:00 AM', type: 'Consultation' },
    { client: 'Maria Garcia', time: 'Today 2:00 PM', type: 'Contract Review' },
    { client: 'David Brown', time: 'Tomorrow 11:00 AM', type: 'Initial Meeting' }
  ];

  function getDaysInMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    const days = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  }

  function formatDate(date) {
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function getWeekDays() {
    const days = [];
    const startOfWeek = new Date(selectedDate);
    startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay());

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      days.push(day);
    }

    return days;
  }

  function handleDateNavigation(direction) {
    const newDate = new Date(selectedDate);

    if (currentView === 'day') {
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1));
    } else if (currentView === 'week') {
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
    } else if (currentView === 'month') {
      newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
    }

    setSelectedDate(newDate);
  }

  return (
    <div className="container-fluid bg-light" style={{ minHeight: '100vh' }}>
      <AppointmentHeader 
        currentView={currentView}
        onViewChange={setCurrentView}
        onNewAppointment={() => setShowNewAppointment(true)}
      />
      
      <div className="row">
        <div className="col-md-3">
          <Sidebar
            selectedStaff={selectedStaff}
            onStaffChange={setSelectedStaff}
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
            reminderSettings={reminderSettings}
            onReminderSettingsChange={setReminderSettings}
            staffMembers={staffMembers}
            upcomingAppointments={upcomingAppointments}
            getDaysInMonth={getDaysInMonth}
          />
        </div>
        
        <div className="col-md-9">
          <CalendarView
            currentView={currentView}
            selectedDate={selectedDate}
            onDateNavigation={handleDateNavigation}
            formatDate={formatDate}
            getWeekDays={getWeekDays}
            getDaysInMonth={getDaysInMonth}
            staffMembers={staffMembers}
          />
        </div>
      </div>

      <NewAppointmentModal
        show={showNewAppointment}
        onHide={() => setShowNewAppointment(false)}
        staffMembers={staffMembers}
      />
    </div>
  );
};

export default AppointmentScheduler;
