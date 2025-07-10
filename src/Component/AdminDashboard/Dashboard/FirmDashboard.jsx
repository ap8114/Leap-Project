import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';

const FirmDashboard = () => {
  const [activeUtilizationView, setActiveUtilizationView] = useState('Hr.');
  const [activeRealizationView, setActiveRealizationView] = useState('Hr.');
  const [activeCollectionView, setActiveCollectionView] = useState('Hr.');

  useEffect(() => {
    // Utilization Chart
    const utilizationChartElement = document.getElementById('utilization-chart');
    if (utilizationChartElement) {
      const utilizationChart = echarts.init(utilizationChartElement);
      
      const getUtilizationData = (view) => {
        if (view === 'Hr.') {
          return {
            yAxisFormatter: '{value}h',
            data: [120, 180, 150, 200, 175, 220, 190, 240, 210, 180, 160, 200]
          };
        } else if (view === '$') {
          return {
            yAxisFormatter: '${value}',
            data: [12000, 18000, 15000, 20000, 17500, 22000, 19000, 24000, 21000, 18000, 16000, 20000]
          };
        } else {
          return {
            yAxisFormatter: '{value}%',
            data: [75, 85, 80, 90, 82, 95, 88, 92, 87, 83, 78, 85]
          };
        }
      };

      const utilizationData = getUtilizationData(activeUtilizationView);
      
      const utilizationOption = {
        animation: false,
        grid: {
          left: '8%',
          right: '5%',
          bottom: '15%',
          top: '10%'
        },
        xAxis: {
          type: 'category',
          data: ['Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025', 'Nov 2025', 'Dec 2025'],
          axisLabel: {
            fontSize: 10,
            rotate: 45
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: utilizationData.yAxisFormatter,
            fontSize: 10
          }
        },
        series: [{
          type: 'line',
          data: utilizationData.data,
          lineStyle: { color: '#1e40af' },
          itemStyle: { color: '#1e40af' },
          symbol: 'circle',
          symbolSize: 4
        }]
      };
      utilizationChart.setOption(utilizationOption);
    }

    // Realization Chart
    const realizationChartElement = document.getElementById('realization-chart');
    if (realizationChartElement) {
      const realizationChart = echarts.init(realizationChartElement);
      
      const getRealizationData = (view) => {
        if (view === 'Hr.') {
          return {
            yAxisFormatter: '{value}h',
            billedNonDiscounted: [100, 140, 120, 160, 145, 180, 155, 200, 175, 150, 135, 165],
            billedDiscounted: [80, 110, 95, 130, 115, 145, 125, 160, 140, 120, 105, 135],
            unbilledDraft: [40, 60, 50, 70, 65, 80, 70, 90, 80, 65, 55, 75]
          };
        } else if (view === '$') {
          return {
            yAxisFormatter: '${value}',
            billedNonDiscounted: [15000, 21000, 18000, 24000, 21750, 27000, 23250, 30000, 26250, 22500, 20250, 24750],
            billedDiscounted: [12000, 16500, 14250, 19500, 17250, 21750, 18750, 24000, 21000, 18000, 15750, 20250],
            unbilledDraft: [6000, 9000, 7500, 10500, 9750, 12000, 10500, 13500, 12000, 9750, 8250, 11250]
          };
        } else {
          return {
            yAxisFormatter: '{value}%',
            billedNonDiscounted: [85, 88, 82, 92, 87, 95, 90, 93, 88, 85, 80, 87],
            billedDiscounted: [70, 75, 68, 78, 73, 82, 76, 80, 75, 72, 65, 73],
            unbilledDraft: [45, 55, 48, 62, 58, 68, 60, 72, 65, 58, 50, 62]
          };
        }
      };

      const realizationData = getRealizationData(activeRealizationView);
      
      const realizationOption = {
        animation: false,
        grid: {
          left: '8%',
          right: '5%',
          bottom: '15%',
          top: '10%'
        },
        xAxis: {
          type: 'category',
          data: ['Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025', 'Nov 2025', 'Dec 2025'],
          axisLabel: {
            fontSize: 10,
            rotate: 45
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: realizationData.yAxisFormatter,
            fontSize: 10
          }
        },
        series: [
          {
            name: 'BILLED: NONDISCOUNTED',
            type: 'line',
            data: realizationData.billedNonDiscounted,
            lineStyle: { color: '#1e40af' },
            itemStyle: { color: '#1e40af' },
            symbol: 'circle',
            symbolSize: 4
          },
          {
            name: 'BILLED: DISCOUNTED',
            type: 'line',
            data: realizationData.billedDiscounted,
            lineStyle: { color: '#60a5fa' },
            itemStyle: { color: '#60a5fa' },
            symbol: 'circle',
            symbolSize: 4
          },
          {
            name: 'UNBILLED & DRAFT',
            type: 'line',
            data: realizationData.unbilledDraft,
            lineStyle: { color: '#9ca3af' },
            itemStyle: { color: '#9ca3af' },
            symbol: 'circle',
            symbolSize: 4
          }
        ]
      };
      realizationChart.setOption(realizationOption);
    }

    // Collection Chart
    const collectionChartElement = document.getElementById('collection-chart');
    if (collectionChartElement) {
      const collectionChart = echarts.init(collectionChartElement);
      
      const getCollectionData = (view) => {
        if (view === 'Hr.') {
          return {
            yAxisFormatter: '{value}h',
            data: [140, 165, 155, 185, 170, 195, 180, 210, 190, 175, 160, 185]
          };
        } else if (view === '$') {
          return {
            yAxisFormatter: '${value}',
            data: [21000, 24750, 23250, 27750, 25500, 29250, 27000, 31500, 28500, 26250, 24000, 27750]
          };
        } else {
          return {
            yAxisFormatter: '{value}%',
            data: [88, 92, 87, 95, 90, 97, 93, 96, 91, 89, 85, 90]
          };
        }
      };

      const collectionData = getCollectionData(activeCollectionView);
      
      const collectionOption = {
        animation: false,
        grid: {
          left: '8%',
          right: '5%',
          bottom: '15%',
          top: '10%'
        },
        xAxis: {
          type: 'category',
          data: ['Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025', 'Aug 2025', 'Sep 2025', 'Oct 2025', 'Nov 2025', 'Dec 2025'],
          axisLabel: {
            fontSize: 10,
            rotate: 45
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: collectionData.yAxisFormatter,
            fontSize: 10
          }
        },
        series: [{
          type: 'line',
          data: collectionData.data,
          lineStyle: { color: '#60a5fa' },
          itemStyle: { color: '#60a5fa' },
          symbol: 'circle',
          symbolSize: 4
        }]
      };
      collectionChart.setOption(collectionOption);
    }
  }, [activeUtilizationView, activeRealizationView, activeCollectionView]);

  return (
    <>
      {/* Header */}
    <div class="container-fluid mb-4">
  <div class="row align-items-center gy-3">
    
    {/* Left Side: Title + Refresh */}
    <div class="col-12 col-md-6 d-flex flex-wrap align-items-center gap-3">
      <h2 class="h4 mb-0">Firm overview</h2>
      <button class="btn btn-link text-primary p-0 d-flex align-items-center gap-1">
        <i class="fas fa-sync-alt"></i>
        <span>Refresh</span>
      </button>
    </div>


    <div class="col-12 col-md-6 d-flex flex-wrap justify-content-md-end align-items-center gap-3">
      
      {/* Dropdown */}
      <div class="dropdown">
        <button class="btn btn-light dropdown-toggle" type="button" id="usersDropdown" data-bs-toggle="dropdown">
          All users
        </button>
      </div>

      {/*  Year Navigation */}
      <div class="btn-group">
        <button class="btn btn-outline-secondary">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="btn btn-outline-secondary disabled">2025</button>
        <button class="btn btn-outline-secondary">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      
    </div>
  </div>
</div>


      {/* Utilization Section */}
     <div className="card mb-4">
  <div className="card-body">
    {/* Header */}
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 gap-2">
      <div className="d-flex align-items-center gap-2">
        <h3 className="h5 mb-0">Utilization</h3>
        <i className="fas fa-info-circle text-muted"></i>
      </div>
      <span className="small text-muted text-md-end">
        Activities dated Jan 1 - Jul 10, 2025
      </span>
    </div>

    {/* Main Content Row */}
    <div className="row gy-4">
      {/* Left Column */}
      <div className="col-12 col-md-3">
        <div className="mb-3">
          <span className="small text-muted">Rate average</span>
          <i className="fas fa-info-circle text-muted ms-1"></i>
        </div>

        <div className="text-center text-muted small py-4">
          {activeUtilizationView === 'Hr.' && (
            <div>
              <div className="h3 text-primary mb-2">165h</div>
              <div className="small">Average Monthly Hours</div>
            </div>
          )}
          {activeUtilizationView === '$' && (
            <div>
              <div className="h3 text-primary mb-2">$18,750</div>
              <div className="small">Average Monthly Revenue</div>
            </div>
          )}
          {activeUtilizationView === '%' && (
            <div>
              <div className="h3 text-primary mb-2">85%</div>
              <div className="small">Average Utilization Rate</div>
            </div>
          )}
        </div>

        {/* Totals */}
        <div className="mt-4">
          <span className="small text-muted">Totals</span>
          <i className="fas fa-info-circle text-muted ms-1"></i>
          <div className="row mt-2 small text-center">
            <div className="col-4">
              <div className="fw-bold text-primary">BILLABLE</div>
              <div>
                {activeUtilizationView === 'Hr.' && '1,980h'}
                {activeUtilizationView === '$' && '$225K'}
                {activeUtilizationView === '%' && '85%'}
              </div>
            </div>
            <div className="col-4">
              <div className="fw-bold text-muted">NON-BILLABLE</div>
              <div>
                {activeUtilizationView === 'Hr.' && '350h'}
                {activeUtilizationView === '$' && '$0'}
                {activeUtilizationView === '%' && '15%'}
              </div>
            </div>
            <div className="col-4">
              <div className="fw-bold text-muted">UNTRACKED</div>
              <div>-</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-12 col-md-9">
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 gap-2">
          <span className="small text-muted">Monthly</span>
          <div className="btn-group btn-group-sm">
            <button
              onClick={() => setActiveUtilizationView('Hr.')}
              className={`btn ${activeUtilizationView === 'Hr.' ? 'btn-primary' : 'btn-outline-secondary'}`}
            >
              Hr.
            </button>
            <button
              onClick={() => setActiveUtilizationView('$')}
              className={`btn ${activeUtilizationView === '$' ? 'btn-primary' : 'btn-outline-secondary'}`}
            >
              $
            </button>
            <button
              onClick={() => setActiveUtilizationView('%')}
              className={`btn ${activeUtilizationView === '%' ? 'btn-primary' : 'btn-outline-secondary'}`}
            >
              %
            </button>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div id="utilization-chart" style={{ height: '256px', width: '100%' }}></div>
      </div>
    </div>
  </div>
</div>


      {/* Realization Section */}
     <div className="card mb-4">
  <div className="card-body">
    {/* Header */}
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 gap-2">
      <div className="d-flex align-items-center gap-2">
        <h3 className="h5 mb-0">Realization</h3>
        <i className="fas fa-info-circle text-muted"></i>
      </div>
      <span className="small text-muted">Activities dated Jan 1 - Jul 10, 2025</span>
    </div>

    <div className="row gy-4">
      {/* Left Column */}
      <div className="col-12 col-md-3">
        <div className="mb-3">
          <span className="small text-muted">Rate average</span>
          <i className="fas fa-info-circle text-muted ms-1"></i>
        </div>

        <div className="text-center text-muted small py-4">
          {activeRealizationView === 'Hr.' && (
            <div>
              <div className="h3 text-primary mb-2">142h</div>
              <div>Average Monthly Realized Hours</div>
            </div>
          )}
          {activeRealizationView === '$' && (
            <div>
              <div className="h3 text-primary mb-2">$19,250</div>
              <div>Average Monthly Realized Revenue</div>
            </div>
          )}
          {activeRealizationView === '%' && (
            <div>
              <div className="h3 text-primary mb-2">82%</div>
              <div>Average Realization Rate</div>
            </div>
          )}
        </div>

        {/* Totals */}
        <div className="mt-4">
          <span className="small text-muted">Totals</span>
          <i className="fas fa-info-circle text-muted ms-1"></i>
          <div className="row mt-2 small text-center">
            <div className="col-4">
              <div className="fw-bold text-primary">BILLED: NONDISCOUNTED</div>
              <div>
                {activeRealizationView === 'Hr.' && '1,704h'}
                {activeRealizationView === '$' && '$255,600'}
                {activeRealizationView === '%' && '86%'}
              </div>
            </div>
            <div className="col-4">
              <div className="fw-bold text-primary">BILLED: DISCOUNTED</div>
              <div>
                {activeRealizationView === 'Hr.' && '1,356h'}
                {activeRealizationView === '$' && '$203,400'}
                {activeRealizationView === '%' && '68%'}
              </div>
            </div>
            <div className="col-4">
              <div className="fw-bold text-muted">UNBILLED & DRAFT</div>
              <div>
                {activeRealizationView === 'Hr.' && '732h'}
                {activeRealizationView === '$' && '$109,800'}
                {activeRealizationView === '%' && '37%'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-12 col-md-9">
        {/* View Switcher */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 gap-2">
          <span className="small text-muted">Monthly</span>
          <div className="btn-group btn-group-sm">
            <button
              onClick={() => setActiveRealizationView('Hr.')}
              className={`btn ${activeRealizationView === 'Hr.' ? 'btn-primary' : 'btn-outline-secondary'}`}
            >
              Hr.
            </button>
            <button
              onClick={() => setActiveRealizationView('$')}
              className={`btn ${activeRealizationView === '$' ? 'btn-primary' : 'btn-outline-secondary'}`}
            >
              $
            </button>
            <button
              onClick={() => setActiveRealizationView('%')}
              className={`btn ${activeRealizationView === '%' ? 'btn-primary' : 'btn-outline-secondary'}`}
            >
              %
            </button>
          </div>
        </div>

        {/* Chart Area */}
        <div id="realization-chart" style={{ height: '256px', width: '100%' }}></div>

        {/* Legends */}
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-3 small text-center">
          <div className="d-flex align-items-center gap-2">
            <div className="rounded-circle" style={{ width: '12px', height: '12px', backgroundColor: '#1e40af' }}></div>
            <span>BILLED: NONDISCOUNTED</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="rounded-circle" style={{ width: '12px', height: '12px', backgroundColor: '#60a5fa' }}></div>
            <span>BILLED: DISCOUNTED</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="rounded-circle" style={{ width: '12px', height: '12px', backgroundColor: '#9ca3af' }}></div>
            <span>UNBILLED & DRAFT</span>
          </div>
        </div>

        {/* Year Labels */}
        <div className="small text-muted mt-2 text-center">
          <span className="me-3">2024 BILLED: NONDISCOUNTED</span>
          <span className="me-3">2024 BILLED: DISCOUNTED</span>
          <span>2024 UNBILLED & DRAFT</span>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Collection Section */}
   <div className="card mb-4">
  <div className="card-body">
    {/* Section Header */}
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 gap-2">
      <div className="d-flex align-items-center gap-2">
        <h3 className="h5 mb-0">Collection</h3>
        <i className="fas fa-info-circle text-muted"></i>
      </div>
      <span className="small text-muted">Activities dated Jan 1 - Jul 10, 2025</span>
    </div>

    <div className="row gy-4">
      {/* Left Column */}
      <div className="col-12 col-md-3">
        {/* Rate Average */}
        <div className="mb-3">
          <span className="small text-muted">Rate average</span>
          <i className="fas fa-info-circle text-muted ms-1"></i>
        </div>

        {/* Rate Summary */}
        <div className="text-center text-muted small py-4">
          {activeCollectionView === 'Hr.' && (
            <div>
              <div className="h3 text-primary mb-2">175h</div>
              <div>Average Monthly Collected Hours</div>
            </div>
          )}
          {activeCollectionView === '$' && (
            <div>
              <div className="h3 text-primary mb-2">$26,250</div>
              <div>Average Monthly Collection</div>
            </div>
          )}
          {activeCollectionView === '%' && (
            <div>
              <div className="h3 text-primary mb-2">91%</div>
              <div>Average Collection Rate</div>
            </div>
          )}
        </div>

        {/* Totals */}
        <div className="mt-4">
          <span className="small text-muted">Totals</span>
          <i className="fas fa-info-circle text-muted ms-1"></i>
          <div className="row mt-2 small text-center">
            <div className="col-6">
              <div className="fw-bold text-primary">COLLECTED</div>
              <div>
                {activeCollectionView === 'Hr.' && '2,100h'}
                {activeCollectionView === '$' && '$315,000'}
                {activeCollectionView === '%' && '91%'}
              </div>
            </div>
            <div className="col-6">
              <div className="fw-bold text-muted">UNCOLLECTED</div>
              <div>
                {activeCollectionView === 'Hr.' && '195h'}
                {activeCollectionView === '$' && '$29,250'}
                {activeCollectionView === '%' && '9%'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-12 col-md-9">
        {/* Toggle Buttons */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-3 gap-2">
          <span className="small text-muted">Monthly</span>
          <div className="btn-group btn-group-sm">
            <button
              onClick={() => setActiveCollectionView('Hr.')}
              className={`btn ${activeCollectionView === 'Hr.' ? 'btn-primary' : 'btn-outline-secondary'}`}
            >
              Hr.
            </button>
            <button
              onClick={() => setActiveCollectionView('$')}
              className={`btn ${activeCollectionView === '$' ? 'btn-primary' : 'btn-outline-secondary'}`}
            >
              $
            </button>
            <button
              onClick={() => setActiveCollectionView('%')}
              className={`btn ${activeCollectionView === '%' ? 'btn-primary' : 'btn-outline-secondary'}`}
            >
              %
            </button>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div id="collection-chart" style={{ height: '256px', width: '100%' }}></div>

        {/* Legend */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-3 small text-center">
          <div className="d-flex align-items-center gap-2">
            <div className="rounded-circle" style={{ width: '12px', height: '12px', backgroundColor: '#60a5fa' }}></div>
            <span>COLLECTION RATE</span>
          </div>
        </div>

        {/* Footer Info */}
        <div className="small text-muted mt-2 text-center">
          2024 COLLECTION RATE
        </div>

        {/* Link */}
        <div className="text-end mt-3">
          <button className="btn btn-link text-primary p-0 small">
            See all current outstanding balances
            <i className="fas fa-external-link-alt ms-1"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default FirmDashboard;