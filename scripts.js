document.addEventListener('DOMContentLoaded', function() {
  // Tab Navigation
  const navLinks = document.querySelectorAll('.main-nav a');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      
      // Update active nav link
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      link.classList.add('active');
      
      // Show target section, hide others
      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === targetId) {
          section.classList.add('active');
        }
      });
    });
  });

  // Radar Chart for Dimension Breakdown
  const radarChart = new Chart(
    document.getElementById('radar-chart'),
    {
      type: 'radar',
      data: {
        labels: [
          'Technology Architecture',
          'Business Model',
          'Ecosystem Development',
          'Data Strategy',
          'Innovation Process'
        ],
        datasets: [{
          label: 'Your Score',
          data: [65, 72, 48, 59, 77],
          fill: true,
          backgroundColor: 'rgba(37, 99, 235, 0.2)',
          borderColor: 'rgb(37, 99, 235)',
          pointBackgroundColor: 'rgb(37, 99, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(37, 99, 235)'
        }, {
          label: 'Industry Average',
          data: [58, 63, 42, 51, 60],
          fill: true,
          backgroundColor: 'rgba(100, 116, 139, 0.2)',
          borderColor: 'rgb(100, 116, 139)',
          pointBackgroundColor: 'rgb(100, 116, 139)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(100, 116, 139)'
        }, {
          label: 'Industry Leaders',
          data: [94, 91, 89, 95, 88],
          fill: true,
          backgroundColor: 'rgba(5, 150, 105, 0.2)',
          borderColor: 'rgb(5, 150, 105)',
          pointBackgroundColor: 'rgb(5, 150, 105)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(5, 150, 105)'
        }]
      },
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        },
        scales: {
          r: {
            angleLines: {
              display: true
            },
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
    }
  );

  // Maturity Progress Chart
  const maturityChartEl = document.getElementById('maturity-chart');
  const maturityChart = new ApexCharts(maturityChartEl, {
    series: [68],
    chart: {
      height: 100,
      type: 'radialBar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 0,
          size: '70%',
        },
        dataLabels: {
          show: false
        },
        track: {
          background: '#f1f5f9',
          strokeWidth: '97%',
        }
      }
    },
    colors: ['#2563eb'],
    stroke: {
      lineCap: 'round'
    },
    labels: ['Progress']
  });
  maturityChart.render();

  // Timeline Chart
  const timelineChartEl = document.getElementById('timeline-chart');
  const timelineChart = new ApexCharts(timelineChartEl, {
    series: [{
      name: 'Maturity Score',
      data: [22, 28, 35, 49, 68, 82]
    }],
    chart: {
      height: 300,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 3
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024', '2025 (proj)'],
    },
    yaxis: {
      min: 0,
      max: 100,
      title: {
        text: 'Platform Maturity Score'
      }
    },
    colors: ['#2563eb'],
    markers: {
      size: 5
    },
    annotations: {
      points: [{
        x: '2024',
        y: 68,
        marker: {
          size: 6,
          fillColor: '#ffffff',
          strokeColor: '#2563eb',
          strokeWidth: 3,
          radius: 5
        },
        label: {
          text: 'Current',
          borderColor: '#2563eb',
          offsetY: 0,
          style: {
            color: '#fff',
            background: '#2563eb',
            padding: {
              left: 8,
              right: 8,
              top: 2,
              bottom: 2
            }
          }
        }
      }]
    }
  });
  timelineChart.render();

  // Industry Comparison Chart
  const industryChartEl = document.getElementById('industry-comparison-chart');
  const industryChart = new ApexCharts(industryChartEl, {
    series: [{
      name: 'Industry Average',
      data: [52, 63, 58, 47, 71]
    }, {
      name: 'Your Score',
      data: [68, 72, 65, 59, 77]
    }, {
      name: 'Industry Leaders',
      data: [92, 88, 94, 87, 90]
    }],
    chart: {
      type: 'bar',
      height: 300,
      stacked: false,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        borderRadius: 6
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Technology', 'Retail', 'Financial Services', 'Healthcare', 'Manufacturing'],
    },
    yaxis: {
      title: {
        text: 'Maturity Score'
      },
      min: 0,
      max: 100
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " / 100"
        }
      }
    },
    colors: ['#64748b', '#2563eb', '#059669']
  });
  industryChart.render();

  // ROI Chart
  const roiChartEl = document.getElementById('roi-chart');
  const roiChart = new ApexCharts(roiChartEl, {
    series: [{
      name: 'Investment',
      data: [2000000, 500000, 400000, 300000, 200000]
    }, {
      name: 'Revenue',
      data: [0, 1500000, 4500000, 7800000, 11500000]
    }, {
      name: 'Profit',
      data: [-2000000, -1000000, 1200000, 3100000, 5700000]
    }],
    chart: {
      type: 'area',
      height: 200,
      stacked: false,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: [0, 2, 2]
    },
    fill: {
      type: ['solid', 'gradient', 'gradient'],
      opacity: [0.85, 0.25, 0.25],
      gradient: {
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100]
      }
    },
    xaxis: {
      categories: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val.toLocaleString()
        }
      }
    },
    colors: ['#64748b', '#2563eb', '#059669']
  });
  roiChart.render();

  // ROI Calculator Logic
  const calculateROIBtn = document.getElementById('calculate-roi');
  calculateROIBtn.addEventListener('click', calculateROI);

  function calculateROI() {
    // Get input values
    const currentRevenue = parseFloat(document.getElementById('current-revenue').value);
    const investmentAmount = parseFloat(document.getElementById('investment-amount').value);
    const timeframe = parseInt(document.getElementById('timeframe').value);
    const ecosystemPartners = parseInt(document.getElementById('ecosystem-partners').value);
    const industryType = document.getElementById('industry-type').value;
    
    // Industry multipliers (would be more sophisticated in a real application)
    const industryMultipliers = {
      'tech': 1.2,
      'retail': 1.0,
      'finance': 1.1,
      'healthcare': 0.9,
      'manufacturing': 0.8
    };
    
    // Calculate ROI (simplified model)
    const multiplier = industryMultipliers[industryType];
    const partnerImpact = ecosystemPartners * 0.5; // Each partner adds 0.5% to growth
    
    // Basic ROI calculation
    let totalReturn = 0;
    const yearlyReturns = [];
    const yearlyInvestments = [];
    const yearlyProfits = [];
    
    // Initial investment
    yearlyInvestments.push(investmentAmount);
    yearlyReturns.push(0);
    yearlyProfits.push(-investmentAmount);
    
    // Calculate returns for subsequent years
    for (let year = 1; year < timeframe; year++) {
      const maintenanceInvestment = investmentAmount * 0.15; // 15% of initial investment
      const yearRevenue = currentRevenue * (1 + ((0.15 * year * multiplier) + (partnerImpact / 100)));
      const yearReturn = yearRevenue * 0.3; // 30% of revenue is attributed to platform
      const yearProfit = yearReturn - maintenanceInvestment;
      
      totalReturn += yearReturn;
      yearlyInvestments.push(maintenanceInvestment);
      yearlyReturns.push(yearReturn);
      yearlyProfits.push(yearProfit);
    }
    
    // Calculate ROI percentage and payback period
    const totalInvestment = investmentAmount + (investmentAmount * 0.15 * (timeframe - 1));
    const roiPercentage = ((totalReturn - totalInvestment) / totalInvestment) * 100;
    
    // Calculate payback period (simplified)
    let cumulativeReturn = 0;
    let paybackPeriod = timeframe;
    
    for (let i = 0; i < yearlyProfits.length; i++) {
      cumulativeReturn += yearlyProfits[i];
      if (cumulativeReturn >= 0 && paybackPeriod === timeframe) {
        // Linear interpolation for more accurate payback period
        const previousCumulative = cumulativeReturn - yearlyProfits[i];
        const fraction = (0 - previousCumulative) / (yearlyProfits[i] - previousCumulative);
        paybackPeriod = i - 1 + fraction;
        break;
      }
    }
    
    // Update UI
    document.getElementById('roi-percentage').textContent = Math.round(roiPercentage) + '%';
    document.getElementById('payback-period').textContent = paybackPeriod.toFixed(1);
    
    // Update chart
    roiChart.updateSeries([
      {
        name: 'Investment',
        data: yearlyInvestments
      },
      {
        name: 'Revenue',
        data: yearlyReturns
      },
      {
        name: 'Profit',
        data: yearlyProfits
      }
    ]);
  }

  // Case Study Filtering
  const caseStudyFilter = document.getElementById('case-study-filter');
  const caseStudies = document.querySelectorAll('.case-study');
  
  caseStudyFilter.addEventListener('change', function() {
    const selectedIndustry = this.value;
    
    caseStudies.forEach(study => {
      if (selectedIndustry === 'all' || study.classList.contains(selectedIndustry)) {
        study.style.display = 'flex';
      } else {
        study.style.display = 'none';
      }
    });
  });
  
  // Strategy selector for AI prompt
  const strategySelect = document.getElementById('strategy-select');
  const aiPrompt = document.getElementById('ai-prompt');
  
  strategySelect.addEventListener('change', function() {
    if (this.value !== 'custom') {
      aiPrompt.value = this.value;
    } else {
      aiPrompt.value = '';
      aiPrompt.focus();
    }
  });

  // Initialize industry selector
  const industrySelector = document.getElementById('industry-selector');
  industrySelector.addEventListener('change', function() {
    // This would typically fetch new data and update charts
    // For demo purposes, we'll just show a notification
    alert('Industry filter changed to: ' + this.value + '\nThis would refresh the benchmark data in a real application.');
  });
  
  // Initialize company selector
  const companySelector = document.getElementById('company-selector');
  companySelector.addEventListener('change', function() {
    // This would typically toggle comparison view
    // For demo purposes, we'll just show a notification
    alert('Company view changed to: ' + this.value + '\nThis would toggle comparison view in a real application.');
  });
});