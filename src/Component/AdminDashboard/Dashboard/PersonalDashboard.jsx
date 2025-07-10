import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';

const PersonalDashboard = ({ setShowTaskModal, setShowEventModal }) => {
  const [activeMetricTab, setActiveMetricTab] = useState('Today');

  useEffect(() => {
    // Financial Metrics Charts
    const periods = ['Today', 'This Week', 'This Month', 'This Year'];
    periods.forEach((period, index) => {
      const chartElement = document.getElementById(`financial-chart-${index}`);
      if (chartElement) {
        const chart = echarts.init(chartElement);
        const option = {
          animation: false,
          grid: {
            left: '10%',
            right: '10%',
            bottom: '20%',
            top: '10%'
          },
          xAxis: {
            type: 'category',
            data: ['Actual', 'Expected', 'Target'],
            axisLabel: {
              fontSize: 10
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '${value}',
              fontSize: 10
            }
          },
          series: [{
            data: [
              { value: period === 'Today' ? 300 : period === 'This Week' ? 1200 : period === 'This Month' ? 8000 : 50000, itemStyle: { color: '#1e40af' } },
              { value: period === 'Today' ? 200 : period === 'This Week' ? 1000 : period === 'This Month' ? 3000 : 30000, itemStyle: { color: '#1e40af' } },
              { value: period === 'Today' ? 400 : period === 'This Week' ? 1800 : period === 'This Month' ? 10000 : 80000, itemStyle: { color: '#1e40af' } }
            ],
            type: 'bar',
            barWidth: '60%'
          }]
        };
        chart.setOption(option);
      }
    });

    // Annual Report Chart
    const annualChartElement = document.getElementById('annual-chart');
    if (annualChartElement) {
      const annualChart = echarts.init(annualChartElement);
      const annualOption = {
        animation: false,
        grid: {
          left: '8%',
          right: '5%',
          bottom: '15%',
          top: '10%'
        },
        legend: {
          data: ['Target', 'Actual'],
          bottom: 0
        },
        xAxis: {
          type: 'category',
          data: ['01/2025', '02/2025', '03/2025', '04/2025', '05/2025', '06/2025', '07/2025', '08/2025', '09/2025', '10/2025', '11/2025', '12/2025'],
          axisLabel: {
            fontSize: 11
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '${value}',
            fontSize: 11
          }
        },
        series: [
          {
            name: 'Target',
            type: 'line',
            data: [10000, 15000, 25000, 32000, 42000, 50000, 58000, 65000, 72000, 82000, 90000, 95000],
            lineStyle: { color: '#6b7280' },
            itemStyle: { color: '#6b7280' }
          },
          {
            name: 'Actual',
            type: 'line',
            data: [8000, 12000, 20000, 28000, 38000, 45000, 52000, 60000, 68000, 78000, 85000, 92000],
            lineStyle: { color: '#1e40af' },
            itemStyle: { color: '#1e40af' }
          }
        ]
      };
      annualChart.setOption(annualOption);
    }
  }, []);

  const metricTabs = ['Today', 'This Week', 'This Month', 'This Year'];

  return (
    <>
      {/* Today's Agenda */}
      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5 mb-0">Today's Agenda</h2>
          <button className="btn btn-link text-primary p-0">Hide</button>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="h3 mb-0">0</span>
                      <span className="small">Tasks Due Today</span>
                      <i className="fas fa-info-circle text-muted"></i>
                    </div>
                    <p className="small text-muted mt-2 mb-0">You have no tasks due today</p>
                  </div>
                  <button 
                    onClick={() => setShowTaskModal(true)}
                    className="btn btn-primary rounded-circle p-0 d-flex align-items-center justify-content-center"
                    style={{ width: '32px', height: '32px' }}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="h3 mb-0">0</span>
                      <span className="small">Calendar Events</span>
                      <i className="fas fa-info-circle text-muted"></i>
                    </div>
                    <p className="small text-muted mt-2 mb-0">You have no events scheduled for today</p>
                  </div>
                  <button 
                    onClick={() => setShowEventModal(true)}
                    className="btn btn-primary rounded-circle p-0 d-flex align-items-center justify-content-center"
                    style={{ width: '32px', height: '32px' }}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hourly Metrics */}
      <div className="mb-5">
        <div className="d-flex align-items-center gap-2 mb-3">
          <h2 className="h5 mb-0">Hourly Metrics for john smith</h2>
          <i className="fas fa-info-circle text-primary"></i>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="mb-4">
              <h3 className="h6 mb-3">Billable Hours Target</h3>
              <ul className="nav nav-tabs mb-4">
                {metricTabs.map((tab) => (
                  <li className="nav-item" key={tab}>
                    <button
                      className={`nav-link ${activeMetricTab === tab ? 'active' : ''}`}
                      onClick={() => setActiveMetricTab(tab)}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-center">
                <div className="position-relative" style={{ width: '192px', height: '192px' }}>
                  <div className="position-absolute top-0 start-0 rounded-circle border border-8 border-light" style={{ width: '192px', height: '192px' }}></div>
                  <div className="position-absolute top-0 start-0 rounded-circle border border-8 border-primary border-top-0" style={{ width: '192px', height: '192px', transform: 'rotate(45deg)' }}></div>
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                    <span className="h3 text-primary mb-1">0 Hours</span>
                    <span className="small text-muted">1.9 Hours</span>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <button className="btn btn-link text-primary p-0 small">
                  <i className="fas fa-cog me-1"></i>
                  Personal performance settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Billing Metrics */}
      <div className="mb-5">
        <div className="d-flex align-items-center gap-2 mb-3">
          <h2 className="h5 mb-0">Billing Metrics for Firm</h2>
          <i className="fas fa-info-circle text-primary"></i>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 className="h6 mb-2">Draft Bills</h3>
                      <div className="d-flex align-items-center gap-2">
                        <span className="h3 text-primary">0</span>
                        <button className="btn btn-link text-primary p-0 small">(Create new bills)</button>
                      </div>
                    </div>
                    <button className="btn btn-link text-primary p-0 small">
                      <i className="fas fa-eye me-1"></i>
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 className="h6 mb-2">Unpaid Bills</h3>
                      <div className="d-flex align-items-center gap-2">
                        <span className="h3 text-primary">0</span>
                        <span className="small text-muted">(Approve from Draft or Pending Approval)</span>
                      </div>
                    </div>
                    <button className="btn btn-link text-primary p-0 small">
                      <i className="fas fa-eye me-1"></i>
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 className="h6 mb-2">Overdue Bills</h3>
                      <span className="h3 text-danger">0</span>
                    </div>
                    <button className="btn btn-link text-primary p-0 small">
                      <i className="fas fa-eye me-1"></i>
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 className="h6 mb-2">Total in Draft</h3>
                      <span className="h3">-</span>
                    </div>
                    <button className="btn btn-link text-primary p-0 small">
                      <i className="fas fa-eye me-1"></i>
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 className="h6 mb-2">Total in Unpaid</h3>
                      <span className="h3">-</span>
                    </div>
                    <button className="btn btn-link text-primary p-0 small">
                      <i className="fas fa-eye me-1"></i>
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h3 className="h6 mb-2">Total in Overdue</h3>
                      <span className="h3">-</span>
                    </div>
                    <button className="btn btn-link text-primary p-0 small">
                      <i className="fas fa-eye me-1"></i>
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Metrics */}
      <div className="mb-5">
        <div className="d-flex align-items-center gap-2 mb-3">
          <h2 className="h5 mb-0">Financial Metrics for john smith</h2>
          <i className="fas fa-info-circle text-primary"></i>
        </div>
        <div className="row">
          {['Today', 'This Week', 'This Month', 'This Year'].map((period, index) => (
            <div key={period} className="col-md-3 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="h6 text-center mb-3">{period}</h3>
                  <div id={`financial-chart-${index}`} style={{ height: '192px' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Annual Report */}
      <div className="mb-5">
        <div className="card">
          <div className="card-body">
            <h3 className="h5 text-center mb-4">Detailed Annual Report</h3>
            <div id="annual-chart" style={{ height: '384px' }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDashboard;