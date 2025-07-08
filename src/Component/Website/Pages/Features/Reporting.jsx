import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import Header from '../../HomePages/Header';
import FooterSection from '../../HomePages/FooterSection';

const Reporting = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    // Initialize charts when component mounts or activeTab changes
    const initCharts = () => {
      // Revenue Chart
      const revenueChart = document.getElementById('revenueChart');
      if (revenueChart) {
        const chart = echarts.init(revenueChart);
        const option = {
          animation: false,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['2024', '2025']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['Corporate', 'Litigation', 'Real Estate', 'Family', 'IP']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '2024',
              type: 'bar',
              data: [32000, 45000, 28000, 22000, 18000],
              color: '#2c3e50'
            },
            {
              name: '2025',
              type: 'bar',
              data: [38000, 52000, 31000, 25000, 22000],
              color: '#3b82f6'
            }
          ]
        };
        chart.setOption(option);
      }

      // Client Chart
      const clientChart = document.getElementById('clientChart');
      if (clientChart) {
        const chart = echarts.init(clientChart);
        const option = {
          animation: false,
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
            {
              name: 'Client Distribution',
              type: 'pie',
              radius: '70%',
              data: [
                { value: 35, name: 'Corporate' },
                { value: 25, name: 'Individual' },
                { value: 20, name: 'Government' },
                { value: 15, name: 'Non-profit' },
                { value: 5, name: 'Other' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              color: ['#2c3e50', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe']
            }
          ]
        };
        chart.setOption(option);
      }

      // Performance Chart
      const performanceChart = document.getElementById('performanceChart');
      if (performanceChart) {
        const chart = echarts.init(performanceChart);
        const option = {
          animation: false,
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Billable Hours', 'Revenue']
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
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          yAxis: [
            {
              type: 'value',
              name: 'Hours',
              position: 'left'
            },
            {
              type: 'value',
              name: 'Revenue',
              position: 'right',
              axisLabel: {
                formatter: '${value}k'
              }
            }
          ],
          series: [
            {
              name: 'Billable Hours',
              type: 'line',
              data: [820, 932, 901, 934, 1290, 1330, 1320, 1250, 1100, 980, 840, 750],
              color: '#2c3e50'
            },
            {
              name: 'Revenue',
              type: 'line',
              yAxisIndex: 1,
              data: [82, 93, 90, 93, 129, 133, 132, 125, 110, 98, 84, 75],
              color: '#f76b1c'
            }
          ]
        };
        chart.setOption(option);
      }

      // Growth Chart
      const growthChart = document.getElementById('growthChart');
      if (growthChart) {
        const chart = echarts.init(growthChart);
        const option = {
          animation: false,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {},
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['Corporate', 'Litigation', 'Real Estate', 'Family', 'IP']
          },
          series: [
            {
              name: 'Growth Rate',
              type: 'bar',
              data: [18, 23, 15, 12, 25],
              color: '#2c3e50'
            }
          ]
        };
        chart.setOption(option);
      }
    };

    initCharts();

    // Handle window resize
    const handleResize = () => {
      const charts = ['revenueChart', 'clientChart', 'performanceChart', 'growthChart'];
      charts.forEach(id => {
        const chart = echarts.getInstanceByDom(document.getElementById(id));
        if (chart) {
          chart.resize();
        }
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab]);

  return (
    <div className="w-100">
      {/* Header */}
      <Header />

      <div className='w-100 mt-3'>

        {/* Hero Section */}
        <section className="bg-gradient bg-dark text-white py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 pe-4">
                <h1 className="display-4 fw-bold mb-4">Accurate data for instant decision-making</h1>
                <p className="lead mb-4">
                  Gain instant insights into your data to make well-informed decisions across your practice with powerful reporting tools to provide you with everything you need to know about clients, matters, billing, financial compliance, and performance.
                </p>
                <button className="btn btn-warning btn-lg">
                  BOOK DEMONSTRATION
                </button>
              </div>
              <div className="col-md-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20modern%20business%20analytics%20dashboard%20with%20charts%2C%20graphs%20and%20data%20visualization%20on%20a%20clean%20white%20interface%20with%20dark%20blue%20and%20orange%20accents%2C%20showing%20financial%20metrics%20and%20performance%20indicators%2C%20high%20quality%20professional%20UI%20design&width=600&height=400&seq=1&orientation=landscape"
                  alt="Data Analytics Dashboard"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Tab Section */}
        <section className="py-5">
          <div className="container">
            <div className="card shadow">
              <div className="card-header bg-light">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
                      onClick={() => setActiveTab('dashboard')}
                    >
                      Dashboard
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === 'reports' ? 'active' : ''}`}
                      onClick={() => setActiveTab('reports')}
                    >
                      Reports
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === 'analytics' ? 'active' : ''}`}
                      onClick={() => setActiveTab('analytics')}
                    >
                      Analytics
                    </button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                {activeTab === 'dashboard' && (
                  <div>
                    <div className="mb-4">
                      <h2 className="h3 fw-bold text-primary mb-2">Performance Overview</h2>
                      <p className="text-muted">View your key performance metrics at a glance.</p>
                    </div>
                    <div className="row mb-4 g-4">
                      <div className="col-md-4">
                        <div className="card border-primary">
                          <div className="card-body">
                            <div className="text-primary fw-semibold mb-2">Revenue</div>
                            <div className="h2 fw-bold">$124,568</div>
                            <div className="text-success small mt-2">
                              <i className="fas fa-arrow-up me-1"></i> 12.5% from last month
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card border-primary">
                          <div className="card-body">
                            <div className="text-primary fw-semibold mb-2">Clients</div>
                            <div className="h2 fw-bold">87</div>
                            <div className="text-success small mt-2">
                              <i className="fas fa-arrow-up me-1"></i> 4.2% from last month
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card border-primary">
                          <div className="card-body">
                            <div className="text-primary fw-semibold mb-2">Matters</div>
                            <div className="h2 fw-bold">243</div>
                            <div className="text-success small mt-2">
                              <i className="fas fa-arrow-up me-1"></i> 8.7% from last month
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-body">
                            <h3 className="h5 fw-semibold text-primary mb-4">Revenue by Practice Area</h3>
                            <div id="revenueChart" style={{ height: '400px' }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-body">
                            <h3 className="h5 fw-semibold text-primary mb-4">Client Distribution</h3>
                            <div id="clientChart" style={{ height: '400px' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'reports' && (
                  <div>
                    <div className="mb-4">
                      <h2 className="h3 fw-bold text-primary mb-2">Financial Reports</h2>
                      <p className="text-muted">Access and generate detailed financial reports.</p>
                    </div>
                    <div className="card mb-4">
                      <div className="card-header">
                        <h3 className="h5 fw-medium text-primary">Available Reports</h3>
                      </div>
                      <div className="card-body">
                        <div className="list-group">
                          <div className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                              <h4 className="fw-medium text-primary">Revenue Summary</h4>
                              <p className="small text-muted mb-0">Overview of revenue by practice area and time period</p>
                            </div>
                            <button className="btn btn-primary btn-sm">Generate</button>
                          </div>
                          <div className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                              <h4 className="fw-medium text-primary">Client Billing</h4>
                              <p className="small text-muted mb-0">Detailed billing information by client</p>
                            </div>
                            <button className="btn btn-primary btn-sm">Generate</button>
                          </div>
                          <div className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                              <h4 className="fw-medium text-primary">Matter Profitability</h4>
                              <p className="small text-muted mb-0">Analyze profitability across different matters</p>
                            </div>
                            <button className="btn btn-primary btn-sm">Generate</button>
                          </div>
                          <div className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                              <h4 className="fw-medium text-primary">Compliance Report</h4>
                              <p className="small text-muted mb-0">Regulatory compliance status and issues</p>
                            </div>
                            <button className="btn btn-primary btn-sm">Generate</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h3 className="h5 fw-medium text-primary">Schedule Reports</h3>
                      </div>
                      <div className="card-body">
                        <div className="row g-4">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Report Type</label>
                              <select className="form-select">
                                <option>Select a report</option>
                                <option>Revenue Summary</option>
                                <option>Client Billing</option>
                                <option>Matter Profitability</option>
                                <option>Compliance Report</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Frequency</label>
                              <select className="form-select">
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Quarterly</option>
                                <option>Yearly</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Delivery Method</label>
                              <div className="d-flex gap-4">
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="delivery" id="email" defaultChecked />
                                  <label className="form-check-label" htmlFor="email">Email</label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="delivery" id="dashboard" />
                                  <label className="form-check-label" htmlFor="dashboard">Dashboard</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Recipients</label>
                              <input type="text" className="form-control" placeholder="Enter email addresses" />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Start Date</label>
                              <input type="date" className="form-control" />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Additional Notes</label>
                              <textarea className="form-control" rows={3}></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 d-flex justify-content-end">
                          <button className="btn btn-warning">Schedule Report</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'analytics' && (
                  <div>
                    <div className="mb-4">
                      <h2 className="h3 fw-bold text-primary mb-2">Advanced Analytics</h2>
                      <p className="text-muted">Gain deeper insights with interactive data visualization.</p>
                    </div>
                    <div className="row mb-4 g-4">
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-body">
                            <h3 className="h5 fw-semibold text-primary mb-4">Performance Metrics</h3>
                            <div id="performanceChart" style={{ height: '400px' }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card">
                          <div className="card-body">
                            <h3 className="h5 fw-semibold text-primary mb-4">Growth Trends</h3>
                            <div id="growthChart" style={{ height: '400px' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h3 className="h5 fw-semibold text-primary mb-4">Custom Analysis</h3>
                        <div className="row g-4 mb-4">
                          <div className="col-md-4">
                            <label className="form-label">Metric</label>
                            <select className="form-select">
                              <option>Revenue</option>
                              <option>Clients</option>
                              <option>Matters</option>
                              <option>Billable Hours</option>
                            </select>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Time Period</label>
                            <select className="form-select">
                              <option>Last 12 Months</option>
                              <option>Last 6 Months</option>
                              <option>Last Quarter</option>
                              <option>Last Month</option>
                            </select>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">Grouping</label>
                            <select className="form-select">
                              <option>Practice Area</option>
                              <option>Attorney</option>
                              <option>Client Type</option>
                              <option>Location</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button className="btn btn-primary">Generate Analysis</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="bg-light py-5">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-md-6 pe-4 mb-4 mb-md-0">
                <div className="text-warning text-uppercase small fw-semibold mb-2">FINANCIAL REPORTS</div>
                <h2 className="h1 fw-bold text-primary mb-4">Maintain regulatory compliance</h2>
                <p className="lead text-muted mb-4">
                  With a full suite of financial reports, your accounts will always be up-to-date and compliant with the regulator.
                </p>
                <p className="lead text-muted">
                  Track where you are holding client funds, quickly identify overdrawn and inactive matters and manage lock-up in real-time.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20financial%20compliance%20dashboard%20with%20regulatory%20reports%2C%20client%20fund%20tracking%2C%20and%20matter%20management%20interface%20with%20clean%20modern%20design%2C%20showing%20charts%20and%20status%20indicators%20with%20dark%20blue%20and%20orange%20color%20scheme&width=600&height=400&seq=2&orientation=landscape"
                  alt="Financial Compliance Dashboard"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>

            <div className="row align-items-center mb-5">
              <div className="col-md-6 order-md-2 ps-4 mb-4 mb-md-0">
                <div className="text-warning text-uppercase small fw-semibold mb-2">PRACTICE MANAGEMENT REPORTS</div>
                <h2 className="h1 fw-bold text-primary mb-4">Monitor performance and gain insights</h2>
                <p className="lead text-muted mb-4">
                  LEAP's integrated firm and staff reports provide valuable data to monitor individual performance and manage the firm.
                </p>
                <p className="lead text-muted">
                  Through the LEAP Connector for Power BI, gain a deeper understanding of trends, performance, and profitability out of the box.
                </p>
              </div>
              <div className="col-md-6 order-md-1">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20performance%20monitoring%20dashboard%20with%20staff%20metrics%2C%20trend%20analysis%2C%20and%20profitability%20charts%20in%20a%20clean%20modern%20interface%20with%20dark%20blue%20and%20orange%20color%20scheme%2C%20showing%20business%20analytics%20and%20KPIs%20for%20law%20firm%20management&width=600&height=400&seq=3&orientation=landscape"
                  alt="Performance Monitoring Dashboard"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-6 pe-4 mb-4 mb-md-0">
                <div className="text-warning text-uppercase small fw-semibold mb-2">REPORT AUTOMATION</div>
                <h2 className="h1 fw-bold text-primary mb-4">Schedule your insights</h2>
                <p className="lead text-muted mb-4">
                  LEAP enables automatic delivery of essential information at set intervals. You can easily schedule recurring reports to be generated and distributed at specified times, saving time and enhancing efficiency by eliminating manual reporting tasks.
                </p>
                <p className="lead text-muted">
                  The scheduled report feature provides a reliable way to keep everyone informed and aligned with organisational objectives at the time they need to.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20report%20scheduling%20interface%20with%20calendar%20view%2C%20automated%20delivery%20options%2C%20and%20report%20configuration%20settings%20in%20a%20clean%20modern%20design%20with%20dark%20blue%20and%20orange%20color%20scheme%2C%20showing%20business%20reporting%20automation%20tools&width=600&height=400&seq=4&orientation=landscape"
                  alt="Report Scheduling Interface"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-dark text-white py-5 text-center mb-2">
          <div className="container">
            <h2 className="h1 fw-bold mb-4">Ready to transform your decision-making with accurate data?</h2>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: '800px' }}>
              Book a demonstration today and discover how our powerful reporting tools can provide you with the insights you need to drive your practice forward.
            </p>
            <button className="btn btn-warning btn-lg">
              BOOK DEMONSTRATION
            </button>
          </div>
        </section>
      </div>
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Reporting;