import React, { useState } from 'react';
import { Tab, Tabs, Card, ListGroup, Button, Table, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ClassicReports from './ClassicReports'
const Reports = () => {
  const [key, setKey] = useState('reports');
  const [subKey, setSubKey] = useState('custom');
  const [viewTab, setViewTab] = useState('card');

  const clioReports = [
    {
      title: 'Client productivity report',
      category: 'Productivity',
      type: 'Clio report',
      description: 'Breakdown of time spent for clients to understand billable vs lost time.',
    },
    {
      title: 'Payment report',
      category: 'Revenue',
      type: 'Clio report',
      description: 'Detailed view of payments to understand revenue and recover expenses.',
    },
    {
      title: 'Client transaction report',
      category: 'Compliance',
      type: 'Clio report',
      description: 'Detailed view of trust/operating transactions including payments and balances.',
    },
    {
      title: 'Transaction report',
      category: 'Compliance',
      type: 'Clio report',
      description: 'History of trust/operating transactions and related actions.',
    },
    {
      title: 'Payment allocation report',
      category: 'Revenue',
      type: 'Clio report',
      description: 'Time and expenses collected per user for each market.',
    },
    {
      title: 'Trust transaction report',
      category: 'Compliance',
      type: 'Clio report',
      description: 'Shows client/matter trust transactions, balances, and audit details.',
    },
  ];

  const classicReports = [
    {
      title: 'Time Entries Report',
      category: 'Time Tracking',
      type: 'Classic report',
      description: 'Detailed report of all time entries with filtering options.',
    },
    {
      title: 'Expenses Report',
      category: 'Financial',
      type: 'Classic report',
      description: 'Comprehensive view of all expenses with categorization.',
    },
    {
      title: 'Accounts Receivable',
      category: 'Financial',
      type: 'Classic report',
      description: 'Shows outstanding invoices and payment status.',
    },
  ];

  return (
    <div className="container-fluid p-4">
      <h4 className="mb-4 font-semibold">Reports</h4>

      <Tabs id="main-tabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-4">
        <Tab eventKey="reports" title="Reports">
          {/* Sub Tabs + View Tabs Row */}
          <Row className="align-items-center justify-content-between mb-3">
            <Col>
              <Tabs
                id="sub-tabs"
                activeKey={subKey}
                onSelect={(k) => {
                  setSubKey(k);
                  setViewTab('card');
                }}
              >
                <Tab eventKey="custom" title="Custom" />
                <Tab eventKey="clio" title="Clio" />
              </Tabs>
            </Col>

            <Col md="auto">
              <Tabs
                id="view-tabs"
                activeKey={viewTab}
                onSelect={(k) => setViewTab(k)}
              >
                <Tab eventKey="card" title="Card View" />
                <Tab eventKey="table" title="Table View" />
              </Tabs>
            </Col>
          </Row>

          {/* SubTab Content Start */}
          {subKey === 'custom' && (
            <>
              {viewTab === 'card' ? (
                <Card className="h-100">
                  <Card.Body>
                    <ListGroup variant="flush text-center">
                      <ListGroup.Item>
                        <strong className="text-primary">No reports found</strong>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <p className="mb-0">
                          Create custom reports to configure your own data in your preferred format.
                        </p>
                        <div className="text-center mt-2">
                          <Button variant="btn-primary bg-primary text-white">
                            New custom report
                          </Button>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              ) : (
                <Card>
                  <Card.Body>
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Category</th>
                          <th>Type</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan="4" className="text-center text-danger">
                            No reports found
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              )}
            </>
          )}

          {subKey === 'clio' && (
            <>
              {viewTab === 'card' ? (
                <div className="row">
                  {clioReports.map((report, idx) => (
                    <div className="col-md-4 mb-4" key={idx}>
                      <Card className="h-100">
                        <Card.Body>
                          <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                              <div className="w-100">
                                <div className="d-flex justify-content-between align-items-center">
                                  <strong className="text-primary">{report.title}</strong>
                                  <div>
                                    <Button variant="outline-secondary" size="sm" className="me-2">
                                      Preview
                                    </Button>
                                    <Button variant="link" size="sm" className="text-dark p-0">
                                      <i className="bi bi-three-dots-vertical"></i>
                                    </Button>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center mt-2">
                                  <span className="badge bg-light border p-1 text-dark me-2">
                                    {report.category}
                                  </span>
                                  <span className="badge bg-light border p-1 text-dark">
                                    <i className="bi bi-file-earmark-text me-1"></i> {report.type}
                                  </span>
                                </div>
                              </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <p className="mb-0">{report.description}</p>
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              ) : (
                <Card>
                  <Card.Body>
                    <Table hover responsive>
                      <thead className='table-light border'>
                        <tr>
                          <th className='py-3 px-3 border'>Title</th>
                          <th className='py-3 px-3 border'>Category</th>
                          <th className='py-3 px-3 border'>Type</th>
                          <th className='py-3 px-3 border'>Description</th>
                        </tr>
                      </thead>
                      <tbody className='table-white'> 
                        {clioReports.map((report, idx) => (
                          <tr key={idx}>
                            <td className='text-primary underline py-3 px-3'>{report.title}</td>
                            <td>{report.category}</td>
                            <td>{report.type}</td>
                            <td>{report.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              )}
            </>
          )}

          {/* Report Views Section */}
          <h4 className="mb-3 mt-5">Report views</h4>
          <Card className="mt-3">
            <Card.Body>
              <div className="mx-auto text-center" style={{ maxWidth: '600px' }}>
                <h4 className="mb-2">Start creating your report views!</h4>
                <p className="mb-3">
                  Report views allow you to return to your desired selection state of a report in just a single click.
                </p>
                <div className="text-muted mb-3">
                  <p>
                    Simply open your desired report, refine your columns, filters, and groups, then save your report view.
                  </p>
                </div>
                <Button variant="primary">Create report view</Button>
              </div>
            </Card.Body>
          </Card>
        </Tab>
        <Tab eventKey="classic" title="Classic Reports">

           <ClassicReports viewTab={viewTab} setViewTab={setViewTab}/>

        </Tab>
      </Tabs>
    </div>
  );
};

export default Reports;