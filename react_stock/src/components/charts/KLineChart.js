// KLineChart.js
import React, { useState, useEffect } from 'react';
// import echarts from 'echarts';
import { init } from 'echarts';
import '../../styles/tailwind.css'

const KLineChart = () => {
  const [showMA, setShowMA] = useState(false);
  const [klineData, setKlineData] = useState([]);

  // klineData
  useEffect(() => {
    // 模拟K线数据生成
    // 格式: [开盘价, 收盘价, 最低价, 最高价,时间]
    const generateMockData = (count = 100) => {
      const data = [];

      for (let i = 0; i < count; i++) {
        const open = (Math.random() * 100 + 50).toFixed(2);
        const close = (Math.random() * 100 + 50).toFixed(2);
        const low = (Math.min(open, close, Math.random() * 50)).toFixed(2);
        const high = (Math.max(open, close, Math.random() * 50 + 50)).toFixed(2);
        
        // 生成逐序日期
        const date = new Date();
        date.setDate(date.getDate() + i);
        // date.getTime(), 
        data.push([ open, close, low, high, date]);
      }

      return data;
    };

    const mockKlineData = generateMockData();
    setKlineData(mockKlineData);
  }, []);

  // chart
  useEffect(() => {
    // 获取图表容器
    const chartContainer = document.getElementById('kline-chart');
    // 初始化图表
    const chart = init(chartContainer); 

    // 计算移动平均线数据（简单移动平均）
    const calculateMA = (dayCount, data) => {
      const result = [];
    
      for (let i = 0, len = data.length; i < len; i++) {    
        // 检查是否有足够的数据来计算MA
        if (i < dayCount - 1) {
          result.push('-'); // 不足够的数据用'-'表示
          continue;
        }
    
        let sum = 0;
        for (let j = 0; j < dayCount; j++) {
          const closeValue = data[i - j][1];
          sum += isNaN(closeValue) ? 0 : parseFloat(closeValue); // 处理NaN值
        }
    
        const maValue = sum / dayCount;
        result.push(maValue);
      }
    
      return result;
    };
    

    const ma5 = calculateMA(5, klineData);
    const ma10 = calculateMA(10, klineData);
    const ma20 = calculateMA(20, klineData);
    const ma60 = calculateMA(60, klineData);

    const getSeries = () => {
      const series = [
        {
          type: 'candlestick',
          data: klineData,
          itemStyle: {
            color: function (params) {
              return params[0] <= params[1] ? '#ef232a' : '#14b143'; // 涨为红色，跌为绿色
            },
            color0: function (params) {
              return params[0] <= params[1] ? '#ef232a' : '#14b143';
            },
            borderColor: '#ff6347', // 边框颜色
            borderColor0: '#00ff7f',
          },
        },
      ];

      if (showMA) {
        series.push(
          {
            name: 'MA5',
            type: 'line',
            data: ma5,
          },
          {
            name: 'MA10',
            type: 'line',
            data: ma10,
          },
          {
            name: 'MA20',
            type: 'line',
            data: ma20,
          },
          {
            name: 'MA60',
            type: 'line',
            data: ma60,
          }
        );
      }

      return series;
    };


    const option = {
      xAxis: {
        type: 'category',
        data: klineData.map(item => item[4]),
        axisLabel: {
          interval: 'auto', // 自动调整横轴刻度的间隔
        },
      },

      dataZoom: [
        {
          type: 'inside', // 内置的缩放区域
          start: Math.max(0, (klineData.length - 50) / klineData.length * 100), // 默认显示最新的50个数据
          end: 100,
        },
        {
          show: true,
          type: 'slider', // 滑动条
          y: '90%', // 放置在底部
          start: Math.max(0, (klineData.length - 50) / klineData.length * 100),
          end: 100,
        },
      ],
      yAxis: {
        type: 'value',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross', // cross表示十字准星指示器
          label: {
            backgroundColor: '#6a7985', // 设置 label 背景颜色
          },
        },
        formatter: function (params) {
          
          const item = params[0];
          const open = item.data[1];
          const close = item.data[2];
          const low = item.data[3];
          const high = item.data[4];
          const date = item.data[5];

          let tooltipContent = `
            日期: ${date} <br>
            開盤價: ${open} <br>
            收盤價: ${close} <br>
            最低價: ${low} <br>
            最高價: ${high}
          `;

          if (showMA) {
            tooltipContent += '<br>移動平均線:';
            for (let i = 1; i < params.length; i++) {
              const maItem = params[i];
              const maName = maItem.seriesName;
              const maValue = maItem.data.toFixed(2);

              tooltipContent += `<br>${maName}: ${maValue}`;
            }
          }

          return tooltipContent;

        },
      },
      legend: {
        data: ['MA5', 'MA10', 'MA20', 'MA60'],
        bottom: 0,
      },
      series: getSeries(),
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, [showMA, klineData]);

  const toggleMA = () => {
    setShowMA(prevState => !prevState);
  };

  return (
    <div>
      <div id="kline-chart" style={{ width: '100%', height: '400px' }}></div>
      <button className={`ma-toggle-btn ${showMA ? 'bg-red-500' : 'bg-green-500'}`} onClick={toggleMA}>
        {showMA ? 'Hide MA' : 'Show MA'}
      </button>
      
    </div>
  );
};

export default KLineChart;
    

