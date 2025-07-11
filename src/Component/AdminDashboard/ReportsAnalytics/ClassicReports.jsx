import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  Button,
  Form,
  Table,
  InputGroup,
  Dropdown,
} from 'react-bootstrap';
import { BsFunnel, BsColumns } from 'react-icons/bs';

const ClassicReport = () => {
  const [key, setKey] = useState('all');

  return (
    <div className="container-fluid p-4">
      {/* Top Tabs + Controls */}
     <div className="border p-3 mb-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 flex-wrap">
  {/* Tabs */}
  <Tabs
    id="report-tabs"
    activeKey={key}
    onSelect={(k) => setKey(k)}
    className="mb-0"
  >
    <Tab eventKey="all" title="All" />
    <Tab eventKey="presets" title="Presets only" />
    <Tab eventKey="scheduled" title="Scheduled presets" />
  </Tabs>

  {/* Controls: Search + Dropdowns */}
  <div className="d-flex flex-column flex-sm-row align-items-stretch gap-2 w-100 w-md-auto">
    <InputGroup className="w-100" style={{ maxWidth: '300px' }}>
      <Form.Control
        placeholder="Search by Preset name"
        style={{ height: '42px', fontSize: '0.875rem' }}
      />
    </InputGroup>

    <Dropdown className="w-100 w-sm-auto">
      <Dropdown.Toggle
        variant="light"
        size="sm"
        className="d-flex align-items-center gap-2 w-100"
      >
        <BsColumns className="me-1" />
        Columns
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Toggle Columns (Demo)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown className="w-100 w-sm-auto">
      <Dropdown.Toggle
        variant="light"
        size="sm"
        className="d-flex align-items-center gap-2 w-100"
      >
        <BsFunnel className="me-1" />
        Filters
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Filter Option (Demo)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
</div>


      {/* Table below based on selected tab */}
      <ReportTable tabKey={key} />
    </div>
  );
};

const ReportTable = ({ tabKey }) => {
  // Full data list
  const allReports = [
    {
      type: 'preset',
      name: 'Sales Summary',
      category: 'Sales',
      lastGenerated: '10 July 2025',
      nextDate: '—',
      schedule: 'Not Scheduled',
    },
    {
      type: 'scheduled',
      name: 'Monthly Finance Report',
      category: 'Finance',
      lastGenerated: '01 July 2025',
      nextDate: '01 Aug 2025',
      schedule: 'Monthly',
    },
    {
      type: 'preset',
      name: 'Inventory Check',
      category: 'Stock',
      lastGenerated: '05 July 2025',
      nextDate: '—',
      schedule: 'Not Scheduled',
    },
  ];

  // Filter data based on tab
  const filteredData =
    tabKey === 'all'
      ? allReports
      : allReports.filter((item) => item.type === tabKey);

  return (
    <>
      <Table responsive hover className="text-center border">
        <thead>
          <tr>
            <th>Actions</th>
            <th>Preset name</th>
            <th>Category</th>
            <th>Last generated</th>
            <th>Next scheduled date</th>
            <th>Schedule details</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                <div className="d-flex flex-column align-items-center py-5">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                    alt="No data"
                    style={{ width: '120px', opacity: 0.7 }}
                  />
                  <h5 className="mt-3">No presets or scheduled presets found</h5>
                  <p className="text-muted text-center" style={{ maxWidth: '400px' }}>
                    Say goodbye to generating reports manually. Open the desired report, select filters and schedule it for when you need them.
                  </p>
                  <Button variant="custom">Select a report</Button>
                </div>
              </td>
            </tr>
          ) : (
            filteredData.map((item, idx) => (
              <tr key={idx}>
            
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between mt-3">
        <Button variant="light">&lt;</Button>
        <span>
          Showing {filteredData.length} {filteredData.length === 1 ? 'entry' : 'entries'}
        </span>
        <Button variant="light">&gt;</Button>
      </div>
    </>
  );
};

export default ClassicReport;
