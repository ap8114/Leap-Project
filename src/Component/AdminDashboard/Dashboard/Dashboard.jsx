import React, { useState } from 'react';
import * as echarts from 'echarts';

const Dashboard = () => {
  const [dateRange, setDateRange] = useState({
    start: '2025-06-01',
    end: '2025-07-07'
  });

  const [viewMode, setViewMode] = useState('grid');
  const [expandedCard, setExpandedCard] = useState(null);



  // Current date for display
  const currentDate = new Date('2025-07-07');
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Initialize charts after component mounts
  React.useEffect(() => {
    // Case Progress Chart
      const caseProgressChart = echarts.init(document.getElementById('case-progress-chart'));
      const caseProgressOption = {
        animation: false,
        series: [
          {
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            pointer: { show: false },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                color: '#4ade80'
              }
            },
            axisLine: {
              lineStyle: {
                width: 18,
                color: [[1, '#e5e7eb']]
              }
            },
            splitLine: { show: false },
            axisTick: { show: false },
            axisLabel: { show: false },
            detail: {
              valueAnimation: false,
              fontSize: 24,
              offsetCenter: [0, '0%'],
              formatter: '{value}%',
              color: 'inherit'
            },
            data: [{ value: 78, name: 'Completion' }]
          }
        ]
      };
      caseProgressChart.setOption(caseProgressOption);

    // Billing Chart
    const billingChart = echarts.init(document.getElementById('billing-chart'));
    const billingOption = {
      animation: false,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Billing',
          type: 'bar',
          barWidth: '60%',
          data: [
            { value: 32000, itemStyle: { color: '#60a5fa' } },
            { value: 45000, itemStyle: { color: '#60a5fa' } },
            { value: 38000, itemStyle: { color: '#60a5fa' } },
            { value: 52000, itemStyle: { color: '#60a5fa' } },
            { value: 48000, itemStyle: { color: '#60a5fa' } },
            { value: 68000, itemStyle: { color: '#3b82f6' } }
          ]
        }
      ]
    };
    billingChart.setOption(billingOption);

    // WIP Chart
    const wipChart = echarts.init(document.getElementById('wip-chart'));
    const wipOption = {
      animation: false,
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'WIP',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 3,
            color: '#8b5cf6'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(139, 92, 246, 0.5)'
              },
              {
                offset: 1,
                color: 'rgba(139, 92, 246, 0.1)'
              }
            ])
          },
          data: [125000, 140000, 165000, 178000, 195000, 210000]
        }
      ]
    };
    wipChart.setOption(wipOption);

    // Handle resize
    const handleResize = () => {
      caseProgressChart.resize();
      billingChart.resize();
      wipChart.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      caseProgressChart.dispose();
      billingChart.dispose();
      wipChart.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDateRangeChange = (e, type) => {
    setDateRange(prev => ({
      ...prev,
      [type]: e.target.value
    }));
  };


  const toggleView = () => {
    setViewMode(prev => (prev === 'grid' ? 'list' : 'grid'));
  };

  const toggleCardExpand = (cardId) => {
    setExpandedCard(prev => (prev === cardId ? null : cardId));
  };


  return (
   <div className="min-vh-100 bg-light p-4">
  <div className="container-fluid p-4">
    <div className="mb-4">
      <h1 className="display-6 fw-bold mb-2">Dashboard</h1>
      <p className="text-muted">Overview of cases, tasks, deadlines and performance metrics</p>
    </div>

    {/* Control Strip - unchanged */}
    <div className="card mb-4">
      <div className="card-body">
        <div className="row gy-3 gx-0 align-items-center">
          {/* Date Range: From & To */}
          <div className="col-12 col-md d-flex flex-wrap flex-md-nowrap gap-2">
            <div className="flex-grow-1 flex-md-grow-0 d-flex align-items-center">
              <label className="me-2 fw-semibold mb-0">From:</label>
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) => handleDateRangeChange(e, 'start')}
                className="form-control form-control-sm flex-grow- mt-3"
              />
            </div>
            <div className="flex-grow-1 flex-md-grow-0 d-flex align-items-center">
              <label className="me-2 fw-semibold mb-0">To:</label>
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) => handleDateRangeChange(e, 'end')}
                className="form-control form-control-sm flex-grow-1 mt-3"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="col-12 col-md-auto d-flex flex-wrap justify-content-start justify-content-md-end gap-2">
            <div className="dropdown">
              <button
                className="btn btn-sm btn-outline-secondary dropdown-toggle"
                type="button"
                id="exportDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-download me-2"></i>
                Export
              </button>
              <ul className="dropdown-menu" aria-labelledby="exportDropdown">
                <li><button className="dropdown-item"><i className="fas fa-file-pdf text-danger me-2"></i>Export as PDF</button></li>
                <li><button className="dropdown-item"><i className="fas fa-file-excel text-success me-2"></i>Export as Excel</button></li>
                <li><button className="dropdown-item"><i className="fas fa-file-csv text-custom me-2"></i>Export as CSV</button></li>
              </ul>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="fas fa-sync-alt"></i>
            </button>
            <button onClick={toggleView} className="btn btn-sm btn-outline-secondary">
              <i className={`fas ${viewMode === 'grid' ? 'fa-list' : 'fa-th-large'}`}></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Main Dashboard Content */}
    <div className={`row ${viewMode === 'grid' ? 'row-cols-1 row-cols-md-2' : 'row-cols-1'} g-4`}>
      {/* Case Progress Card - Fixed */}
      <div className={`col ${expandedCard === 'case-progress' ? 'col-12' : 'col-md-6'}`}>
        <div className="card h-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Case Progress</h5>
            <div>
              <button
                onClick={() => toggleCardExpand('case-progress')}
                className="btn btn-sm btn-link text-secondary"
              >
                <i className={`fas ${expandedCard === 'case-progress' ? 'fa-compress-alt' : 'fa-expand-alt'}`}></i>
              </button>
              <button className="btn btn-sm btn-link text-secondary">
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
          <div className="card-body d-flex flex-column">
            <div className="row g-3 flex-grow-1">
              {/* Chart - Fixed alignment */}
              <div className="col-12 col-md-6 d-flex flex-column">
                <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                  <div id="case-progress-chart" style={{ width: '100%', minHeight: '200px', height: '100%' }}></div>
                </div>
              </div>

              {/* Stats Cards - Improved responsive layout */}
              <div className="col-12 col-md-6">
                <div className="row g-3 h-100">
                  <div className="col-6 col-lg-4">
                    <div className="p-3 bg-primary bg-opacity-10 rounded h-100 d-flex flex-column">
                      <div className="text-custom small mb-1 fw-semibold">Active Cases</div>
                      <div className="h4 fw-bold mb-auto">248</div>
                      <div className="text-custom small mt-1 d-flex align-items-center">
                        <i className="fas fa-arrow-up me-1"></i> 12 new this month
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-lg-4">
                    <div className="p-3 bg-success bg-opacity-10 rounded h-100 d-flex flex-column">
                      <div className="text-success small mb-1 fw-semibold">Tasks Completed</div>
                      <div className="h4 fw-bold text-success mb-auto">193</div>
                      <div className="text-success small mt-1 d-flex align-items-center">
                        <i className="fas fa-check me-1"></i> 15 today
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-lg-4">
                    <div className="p-3 bg-warning bg-opacity-10 rounded h-100 d-flex flex-column">
                      <div className="text-warning small mb-1 fw-semibold">Upcoming Deadlines</div>
                      <div className="h4 fw-bold text-warning mb-auto">8</div>
                      <div className="text-warning small mt-1 d-flex align-items-center">
                        <i className="fas fa-clock me-1"></i> Next in 2 days
                      </div>
                    </div>
                  </div>

                  {/* Legend - now properly aligned */}
                  <div className="col-12 mt-auto">
                    <div className="row g-2 justify-content-center text-center">
                      <div className="col-4 d-flex justify-content-center align-items-center">
                        <span className="badge bg-success me-2" style={{ width: '12px', height: '12px' }}></span>
                        <span className="small text-muted">Complete (78%)</span>
                      </div>
                      <div className="col-4 d-flex justify-content-center align-items-center">
                        <span className="badge bg-warning me-2" style={{ width: '12px', height: '12px' }}></span>
                        <span className="small text-muted">In Progress (17%)</span>
                      </div>
                      <div className="col-4 d-flex justify-content-center align-items-center">
                        <span className="badge bg-danger me-2" style={{ width: '12px', height: '12px' }}></span>
                        <span className="small text-muted">Delayed (5%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Billing Overview Card - Fixed */}
      <div className={`col ${expandedCard === 'billing' ? 'col-12' : ''}`}>
        <div className="card h-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Billing Overview</h5>
            <div>
              <button onClick={() => toggleCardExpand('billing')} className="btn btn-sm btn-link text-secondary">
                <i className={`fas ${expandedCard === 'billing' ? 'fa-compress-alt' : 'fa-expand-alt'}`}></i>
              </button>
              <button className="btn btn-sm btn-link text-secondary">
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
          <div className="card-body d-flex flex-column">
            <div className="d-flex flex-wrap mb-3">
              <button className="btn btn-sm btn-custom me-2 mb-2">Last 6 Months</button>
              <button className="btn btn-sm btn-outline-secondary me-2 mb-2">Last Year</button>
              <button className="btn btn-sm btn-outline-secondary me-2 mb-2">All Time</button>
            </div>
            <div className="flex-grow-1" style={{ minHeight: '200px' }}>
              <div id="billing-chart" style={{ width: '100%', height: '100%' }}></div>
            </div>
            <div className="row mt-3 g-3">
              <div className="col-6 col-md-3">
                <div className="p-3 bg-purple bg-opacity-10 rounded h-100">
                  <div className="text-purple small mb-1">Trust Balance</div>
                  <div className="h4">$156,789</div>
                  <div className="text-purple small mt-1">
                    <i className="fas fa-wallet me-1"></i>Updated today
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-custom bg-opacity-10 rounded h-100">
                  <div className="text-custom small mb-1">Time Logged</div>
                  <div className="h4">182.5h</div>
                  <div className="text-custom small mt-1">
                    <i className="fas fa-clock me-1"></i>This month
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-success bg-opacity-10 rounded h-100">
                  <div className="text-success small mb-1">WIP Total</div>
                  <div className="h4">$210,000</div>
                  <div className="text-success small mt-1">
                    <i className="fas fa-chart-line me-1"></i>+7.7% MTD
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="p-3 bg-warning bg-opacity-10 rounded h-100">
                  <div className="text-warning small mb-1">Open Matters</div>
                  <div className="h4">42</div>
                  <div className="text-warning small mt-1">
                    <i className="fas fa-folder-open me-1"></i>Active cases
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WIP Card - Fixed */}
      <div className={`col ${expandedCard === 'wip' ? 'col-12' : ''}`}>
        <div className="card h-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Work in Progress (WIP)</h5>
            <div>
              <button onClick={() => toggleCardExpand('wip')} className="btn btn-sm btn-link text-secondary">
                <i className={`fas ${expandedCard === 'wip' ? 'fa-compress-alt' : 'fa-expand-alt'}`}></i>
              </button>
              <button className="btn btn-sm btn-link text-secondary">
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
          <div className="card-body d-flex flex-column">
            <div className="flex-grow-1" style={{ minHeight: '200px' }}>
              <div id="wip-chart" style={{ width: '100%', height: '100%' }}></div>
            </div>
            <div className="row mt-3 g-3">
              <div className="col-md-6">
                <div className="p-3 bg-purple bg-opacity-10 rounded h-100">
                  <div className="text-purple small mb-1">Current WIP</div>
                  <div className="h3">$210,000</div>
                  <div className="text-success small mt-1">
                    <i className="fas fa-arrow-up me-1"></i>
                    7.7% from last month
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 bg-light rounded h-100">
                  <div className="text-muted small mb-1">Resource Utilization</div>
                  <div className="mb-2">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="small text-muted">Attorneys</span>
                      <span className="small">92%</span>
                    </div>
                    <div className="progress" style={{ height: '8px' }}>
                      <div className="progress-bar bg-success" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between mb-1">
                      <span className="small text-muted">Paralegals</span>
                      <span className="small">78%</span>
                    </div>
                    <div className="progress" style={{ height: '8px' }}>
                      <div className="progress-bar bg-custom" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Account Card - Fixed */}
      <div className={`col ${expandedCard === 'trust' ? 'col-12' : ''}`}>
        <div className="card h-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Trust Account</h5>
            <div>
              <button onClick={() => toggleCardExpand('trust')} className="btn btn-sm btn-link text-secondary">
                <i className={`fas ${expandedCard === 'trust' ? 'fa-compress-alt' : 'fa-expand-alt'}`}></i>
              </button>
              <button className="btn btn-sm btn-link text-secondary">
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="row h-100">
              <div className="col-md-4 mb-3 mb-md-0 d-flex flex-column">
                <div className="p-3 bg-success bg-opacity-10 rounded mb-3 flex-grow-1">
                  <div className="text-success small mb-1">Current Balance</div>
                  <div className="h2">$156,789</div>
                </div>
                <div className="p-3 bg-warning bg-opacity-10 rounded mb-3 flex-grow-1">
                  <div className="text-warning small mb-1">Low Balance Alert</div>
                  <div className="small">
                    <i className="fas fa-exclamation-triangle text-warning me-1"></i>
                    3 accounts below minimum
                  </div>
                </div>
                <div className="p-3 bg-custom bg-opacity-10 rounded flex-grow-1">
                  <div className="text-custom small mb-1">Pending Transactions</div>
                  <div className="h3">$23,450</div>
                </div>
              </div>
              <div className="col-md-8 d-flex flex-column">
                <div className="small fw-bold text-muted mb-2">Recent Transactions</div>
                <div className="bg-light rounded overflow-hidden flex-grow-1">
                  <div className="table-responsive" style={{ height: '100%' }}>
                    <table className="table table-sm table-hover mb-0">
                      <thead className="bg-light">
                        <tr>
                          <th className="small text-muted text-uppercase">Date</th>
                          <th className="small text-muted text-uppercase">Description</th>
                          <th className="small text-muted text-uppercase text-end">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="small">Jul 05, 2025</td>
                          <td className="small">Client Deposit - Johnson Case</td>
                          <td className="small text-success text-end">+$12,500.00</td>
                        </tr>
                        <tr>
                          <td className="small">Jul 03, 2025</td>
                          <td className="small">Filing Fee - Smith v. ABC Corp</td>
                          <td className="small text-danger text-end">-$350.00</td>
                        </tr>
                        <tr>
                          <td className="small">Jun 28, 2025</td>
                          <td className="small">Client Deposit - Williams Trust</td>
                          <td className="small text-success text-end">+$25,000.00</td>
                        </tr>
                        <tr>
                          <td className="small">Jun 25, 2025</td>
                          <td className="small">Expert Witness Payment</td>
                          <td className="small text-danger text-end">-$4,750.00</td>
                        </tr>
                        <tr>
                          <td className="small">Jun 22, 2025</td>
                          <td className="small">Client Deposit - Martinez Case</td>
                          <td className="small text-success text-end">+$8,000.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Data Refresh Section - unchanged */}
    <div className="card mt-4">
      <div className="card-body py-2 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <i className="fas fa-clock me-2 text-muted"></i>
          <span className="small text-muted">Last updated: {formattedDate}, 09:45 AM</span>
        </div>
        <div className="d-flex align-items-center">
          <span className="me-3 small text-muted">
            <i className="fas fa-check-circle text-success me-1"></i>
            Power BI sync complete
          </span>
          <div className="d-flex align-items-center">
            <span className="me-2 small text-muted">Data refresh</span>
            <div className="progress" style={{ width: '96px', height: '8px' }}>
              <div className="progress-bar" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Dashboard;