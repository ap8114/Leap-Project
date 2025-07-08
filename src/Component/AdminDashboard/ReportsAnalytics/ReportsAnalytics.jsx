
import React, { useEffect, useState } from "react";
import * as echarts from 'echarts';

const ReportsAnalytics= () => {
 const [billingView, setBillingView] = useState("client");
  const [dateRange, setDateRange] = useState("month");
  const [taskTimeframe, setTaskTimeframe] = useState("weekly");

  useEffect(() => {
    const matterChart = echarts.init(document.getElementById("matter-summary-chart"));
    matterChart.setOption({
      animation: false,
      tooltip: { trigger: "axis" },
      xAxis: { type: "category", data: ["Corporate", "Litigation", "Real Estate", "IP", "Tax"] },
      yAxis: { type: "value" },
      series: [{ type: "bar", data: [28, 22, 15, 12, 8], barWidth: "40%", itemStyle: { color: "#4F46E5" } }]
    });

    const billingChart = echarts.init(document.getElementById("billing-summary-chart"));
    billingChart.setOption({
      animation: false,
      tooltip: { trigger: "axis" },
      xAxis: { type: "category", data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
      yAxis: { type: "value", axisLabel: { formatter: "${value}k" } },
      series: [{
        data: [48, 52, 45, 65, 53, 58],
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 8,
        lineStyle: { width: 3, color: "#10B981" },
        itemStyle: { color: "#10B981" },
        areaStyle: {
          color: {
            type: "linear",
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(16, 185, 129, 0.3)" },
              { offset: 1, color: "rgba(16, 185, 129, 0.05)" }
            ]
          }
        }
      }]
    });

    const taskChart = echarts.init(document.getElementById("task-completion-chart"));
    taskChart.setOption({
      animation: false,
      tooltip: { trigger: "axis" },
      xAxis: { type: "category", data: ["Week 1", "Week 2", "Week 3", "Week 4"] },
      yAxis: { type: "value", max: 100, axisLabel: { formatter: "{value}%" } },
      series: [{
        data: [78, 82, 85, 92],
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 8,
        lineStyle: { width: 3, color: "#F59E0B" },
        itemStyle: { color: "#F59E0B" }
      }]
    });

    const timeLoggedChart = echarts.init(document.getElementById("time-logged-chart"));
    timeLoggedChart.setOption({
      animation: false,
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      xAxis: { type: "value", axisLabel: { formatter: "{value}h" } },
      yAxis: {
        type: "category",
        data: ["John Smith", "Sarah Lee", "Michael Chen", "Emma Wilson", "Robert Taylor"]
      },
      series: [{
        type: "bar",
        data: [42, 38, 36, 32, 28],
        itemStyle: { color: "#8B5CF6" }
      }]
    });

    const handleResize = () => {
      [matterChart, billingChart, taskChart, timeLoggedChart].forEach(chart => chart?.resize());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      [matterChart, billingChart, taskChart, timeLoggedChart].forEach(chart => chart?.dispose());
    };
  }, [billingView, dateRange, taskTimeframe]);

  return (
    <div className="min-vh-100 bg-light py-4 px-3">
      <div className="container-fluid">
        <div className="mb-4">
          <h1 className="display-6 fw-bold mb-2 ">Reports & Analytics</h1>
         
          <p className="lead text-muted">
            Monitor your firm's performance with comprehensive analytics and reports
          </p>
        </div>

        <div className="row g-4">
          {/* Matter Summary Report */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h2 className="h4 fw-bold text-dark">Matter Summary Report</h2>
                    <p className="text-muted mb-0">Overview of all matters by practice area</p>
                  </div>
                  <span className="text-primary">
                    <i className="fas fa-briefcase fs-4"></i>
                  </span>
                </div>

                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="text-center px-3">
                    <div className="fs-3 fw-bold text-dark">85</div>
                    <div className="small text-muted">Total Matters</div>
                  </div>
                  <div className="text-center px-3">
                    <div className="fs-3 fw-bold text-success">62</div>
                    <div className="small text-muted">Active</div>
                  </div>
                  <div className="text-center px-3">
                    <div className="fs-3 fw-bold text-secondary">23</div>
                    <div className="small text-muted">Closed</div>
                  </div>
                </div>

                <div className="h-64" id="matter-summary-chart"></div>

                <div className="mt-3 d-flex justify-content-between align-items-center small">
                  <div className="text-muted">Last updated: July 8, 2025</div>
                  <button className="btn btn-link text-primary fw-medium p-0 border-0">
                    View Full Report <i className="fas fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Billing Summary */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h2 className="h4 fw-bold text-dark">Billing Summary</h2>
                    <p className="text-muted mb-0">Financial overview by client or period</p>
                  </div>
                  <span className="text-success">
                    <i className="fas fa-chart-line fs-4"></i>
                  </span>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="btn-group" role="group">
                    <button
                      type="button"
                      onClick={() => setBillingView('client')}
                      className={`btn btn-sm ${billingView === 'client' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    >
                      By Client
                    </button>
                    <button
                      type="button"
                      onClick={() => setBillingView('period')}
                      className={`btn btn-sm ${billingView === 'period' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    >
                      By Period
                    </button>
                  </div>
                  <div className="ms-auto">
                    <select
                      className="form-select form-select-sm"
                      onChange={(e) => setDateRange(e.target.value)}
                      value={dateRange}
                    >
                      <option value="week">Weekly</option>
                      <option value="month">Monthly</option>
                      <option value="quarter">Quarterly</option>
                      <option value="year">Yearly</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="fs-3 fw-bold text-dark">$321,450</div>
                  <div className="small text-muted">Total Billable Amount</div>
                </div>

                <div className="h-64" id="billing-summary-chart"></div>

                <div className="mt-3 d-flex justify-content-between align-items-center small">
                  <div className="text-muted">Last updated: July 8, 2025</div>
                  <button className="btn btn-link text-primary fw-medium p-0 border-0">
                    View Full Report <i className="fas fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Task Completion Rate */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h2 className="h4 fw-bold text-dark">Task Completion Rate</h2>
                    <p className="text-muted mb-0">Performance metrics for task completion</p>
                  </div>
                  <span className="text-warning">
                    <i className="fas fa-tasks fs-4"></i>
                  </span>
                </div>

                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center">
                    <div className="position-relative" style={{width: '130px', height: '130px'}}>
                      <svg className="w-100 h-100" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E5E7EB"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#F59E0B"
                          strokeWidth="3"
                          strokeDasharray="85, 100"
                        />
                        <text x="18" y="20.5" textAnchor="middle" fontSize="10" fill="#374151" fontWeight="bold">85%</text>
                      </svg>
                    </div>
                    <div className="ms-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="rounded-circle bg-success me-2" style={{width: '12px', height: '12px'}}></div>
                        <span className="small text-dark">Completed: 127</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <div className="rounded-circle bg-warning me-2" style={{width: '12px', height: '12px'}}></div>
                        <span className="small text-dark">In Progress: 18</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-danger me-2" style={{width: '12px', height: '12px'}}></div>
                        <span className="small text-dark">Overdue: 5</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        onClick={() => setTaskTimeframe('weekly')}
                        className={`btn btn-sm ${taskTimeframe === 'weekly' ? 'btn-warning' : 'btn-outline-secondary'}`}
                      >
                        Weekly
                      </button>
                      <button
                        type="button"
                        onClick={() => setTaskTimeframe('monthly')}
                        className={`btn btn-sm ${taskTimeframe === 'monthly' ? 'btn-warning' : 'btn-outline-secondary'}`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>
                </div>

                <div className="h-64" id="task-completion-chart"></div>

                <div className="mt-3 d-flex justify-content-between align-items-center small">
                  <div className="text-muted">Last updated: July 8, 2025</div>
                  <button className="btn btn-link text-primary fw-medium p-0 border-0">
                    View Full Report <i className="fas fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Time Logged by User */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h2 className="h4 fw-bold text-dark">Time Logged by User</h2>
                    <p className="text-muted mb-0">Hours logged per team member this month</p>
                  </div>
                  <span className="text-purple">
                    <i className="fas fa-clock fs-4"></i>
                  </span>
                </div>

                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <div className="fs-3 fw-bold text-dark">176</div>
                    <div className="small text-muted">Total Hours</div>
                  </div>
                  <div>
                    <select
                      className="form-select form-select-sm"
                      defaultValue="all"
                    >
                      <option value="all">All Departments</option>
                      <option value="litigation">Litigation</option>
                      <option value="corporate">Corporate</option>
                      <option value="realestate">Real Estate</option>
                    </select>
                  </div>
                </div>

                <div className="h-64" id="time-logged-chart"></div>

                <div className="mt-3 d-flex justify-content-between align-items-center small">
                  <div className="text-muted">Last updated: July 8, 2025</div>
                  <button className="btn btn-link text-primary fw-medium p-0 border-0">
                    View Full Report <i className="fas fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 d-flex justify-content-end">
          <div className="btn-group">
            <button className="btn btn-outline-secondary me-2">
              <i className="fas fa-file-export me-2"></i> Export All Reports
            </button>
            <button className="btn btn-primary">
              <i className="fas fa-print me-2"></i> Print Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;