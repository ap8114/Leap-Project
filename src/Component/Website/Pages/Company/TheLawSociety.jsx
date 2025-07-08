// import React from 'react';
// import { Container, Row, Col, Card, ProgressBar, ListGroup, Badge, Button } from 'react-bootstrap';

// const TheLawSociety = () => {
//   const transactionSteps = [
//     { id: 1, name: 'Instruction Received', completed: true },
//     { id: 2, name: 'Draft Contract', completed: true },
//     { id: 3, name: 'Searches & Enquiries', completed: false, active: true },
//     { id: 4, name: 'Exchange', completed: false },
//     { id: 5, name: 'Completion', completed: false }
//   ];

//   const requiredDocuments = [
//     { name: 'Local Authority Search', status: 'pending', uploaded: false },
//     { name: 'Drainage Search', status: 'pending', uploaded: false },
//     { name: 'Environmental Search', status: 'pending', uploaded: false },
//     { name: 'Title Deeds', status: 'uploaded', date: '12/10/23', uploaded: true }
//   ];

//   const recentActivities = [
//     { date: '14/10/23', action: 'Draft contract sent to client for review' },
//     { date: '12/10/23', action: 'Title deeds uploaded' },
//     { date: '10/10/23', action: 'New instruction received' }
//   ];

//   return (
//     <div className="dashboard-container" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
//       {/* Header */}
//       <header className="py-3" style={{ backgroundColor: '#2c3e50' }}>
//         <Container>
//           <Row className="align-items-center">
//             <Col md={6} className="d-flex align-items-center">
//               <img 
//                 src="https://via.placeholder.com/40" 
//                 alt="Logo" 
//                 className="me-3" 
//                 style={{ height: '40px' }}
//               />
//               <h1 className="mb-0 text-white">Property Transaction Hub</h1>
//             </Col>
//             <Col md={6} className="text-md-end mt-3 mt-md-0">
//               <Badge pill bg="warning" text="dark">
//                 Official Partner of The Law Society
//               </Badge>
//             </Col>
//           </Row>
//         </Container>
//       </header>

//       {/* Main Content */}
//       <Container className="py-4">
//         <Row>
//           {/* Sidebar - md and up */}
//           <Col md={3} className="d-none d-md-block pe-md-4">
//             <Card className="mb-4">
//               <ListGroup variant="flush">
//                 <ListGroup.Item action active className="border-0" style={{ backgroundColor: '#2c3e50', color: 'white' }}>
//                   Dashboard
//                 </ListGroup.Item>
//                 <ListGroup.Item action className="border-0">My Transactions</ListGroup.Item>
//                 <ListGroup.Item action className="border-0">Document Vault</ListGroup.Item>
//                 <ListGroup.Item action className="border-0">Client Portal</ListGroup.Item>
//                 <ListGroup.Item action className="border-0">Reports</ListGroup.Item>
//                 <ListGroup.Item action className="border-0">Account Settings</ListGroup.Item>
//               </ListGroup>
//             </Card>
//           </Col>

//           {/* Main Content Area */}
//           <Col md={9}>
//             {/* Welcome Banner */}
//             <Card className="mb-4 border-0 text-white" style={{ background: 'linear-gradient(135deg, #2c3e50, #34495e)' }}>
//               <Card.Body>
//                 <h2>Welcome back, Lars Moore</h2>
//                 <p className="mb-0">Track and manage your property transactions in one secure platform</p>
//               </Card.Body>
//             </Card>

//             {/* Current Transaction */}
//             <Card className="mb-4 shadow-sm">
//               <Card.Body>
//                 <h3>Current Transaction: 28 High Street, London</h3>
//                 <p className="text-muted">Client: Sarah Johnson | Target Completion: 15 Nov 2023</p>
                
//                 {/* Progress Steps */}
//                 <div className="position-relative mb-4">
//                   <ProgressBar now={50} style={{ height: '3px', backgroundColor: '#e0e0e0' }} />
//                   <div className="d-flex justify-content-between position-relative" style={{ top: '-15px' }}>
//                     {transactionSteps.map((step) => (
//                       <div key={step.id} className="text-center" style={{ width: '20%' }}>
//                         <div 
//                           className={`mx-auto rounded-circle d-flex align-items-center justify-content-center ${step.active ? 'bg-warning' : step.completed ? 'bg-primary' : 'bg-secondary'}`}
//                           style={{ 
//                             width: '30px', 
//                             height: '30px', 
//                             color: 'white',
//                             marginBottom: '0.5rem'
//                           }}
//                         >
//                           {step.completed ? '✓' : step.id}
//                         </div>
//                         <small className="d-block">{step.name}</small>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div className="d-flex gap-2">
//                   <Button variant="warning">Mark Current Step Complete</Button>
//                   <Button variant="outline-primary">View Full Details</Button>
//                 </div>
//               </Card.Body>
//             </Card>

//             {/* Required Documents */}
//             <Card className="mb-4 shadow-sm">
//               <Card.Body>
//                 <h3>Required Documents</h3>
//                 <p className="text-muted">Upload the following documents to proceed to the next stage</p>
                
//                 <Row className="g-3 mb-4">
//                   {requiredDocuments.map((doc, index) => (
//                     <Col key={index} xs={6} md={3}>
//                       <Card className="h-100 text-center">
//                         <Card.Body>
//                           <div className="mb-2" style={{ fontSize: '2rem' }}>
//                             {doc.uploaded ? '✅' : '📄'}
//                           </div>
//                           <h6 className="mb-1">{doc.name}</h6>
//                           <small className={`text-${doc.uploaded ? 'success' : 'muted'}`}>
//                             {doc.uploaded ? `Uploaded ${doc.date}` : 'Pending'}
//                           </small>
//                         </Card.Body>
//                       </Card>
//                     </Col>
//                   ))}
//                 </Row>
                
//                 {/* Upload Area */}
//                 <Card className="border-2 border-dashed text-center py-5 bg-light">
//                   <Card.Body>
//                     <p>Drag & drop files here or</p>
//                     <Button variant="warning" className="mb-2">Browse Files</Button>
//                     <p className="small text-muted mb-0">Maximum file size: 25MB</p>
//                   </Card.Body>
//                 </Card>
                
//                 {/* Recent Activity */}
//                 <div className="mt-4">
//                   <h4>Recent Activity</h4>
//                   <ListGroup variant="flush">
//                     {recentActivities.map((activity, index) => (
//                       <ListGroup.Item key={index} className="d-flex">
//                         <span className="text-muted me-2">{activity.date}</span>
//                         <span>{activity.action}</span>
//                       </ListGroup.Item>
//                     ))}
//                   </ListGroup>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       {/* Mobile Bottom Navigation - xs to md */}
//       <div className="d-md-none fixed-bottom bg-white shadow-lg">
//         <div className="d-flex justify-content-around py-2">
//           <Button variant="link" className="text-dark">
//             <i className="bi bi-house-door"></i>
//           </Button>
//           <Button variant="link" className="text-dark">
//             <i className="bi bi-folder"></i>
//           </Button>
//           <Button variant="link" className="text-dark">
//             <i className="bi bi-people"></i>
//           </Button>
//           <Button variant="link" className="text-dark">
//             <i className="bi bi-file-earmark-text"></i>
//           </Button>
//           <Button variant="link" className="text-dark">
//             <i className="bi bi-gear"></i>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TheLawSociety;

import React from 'react'

const TheLawSociety = () => {
  return (
    <div>
      <h3>thelawsociety</h3>
    </div>
  )
}

export default TheLawSociety