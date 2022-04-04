import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip, LineChart, Line, CartesianGrid, PieChart, Pie, RadarChart, ResponsiveContainer, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import './Dashboard.css';


const Dashboard = () => {
    const [charts, setCharts] = useState([]);
    useEffect(() => {
        axios.get('rechart-data.json')
            .then(data => setCharts(data.data))
    }, [])
    return (
        <div className='container mt-5 mb-5 d-flex flex-wrap justify-content-between'>
            <div>
                <BarChart width={400} height={250} data={charts} stroke="#0275d8">
                    <Bar dataKey="sell" fill="#0275d8" />
                    <Tooltip />
                    <XAxis dataKey="month"></XAxis>
                    <YAxis dataKey="sell"></YAxis>
                </BarChart>
                <span className='text-decoration-underline fw-bold'>Sell Bar Chart</span>
            </div>
            <div>
                <LineChart width={400} height={250} data={charts} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="revenue" stroke="#5cb85c" fill="#0275d8" />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="revenue" />
                </LineChart>
                <span className='text-decoration-underline fw-bold'>Revenue Line Chart</span>
            </div>
            <div>
                <PieChart width={400} height={300}>
                    <Pie data={charts} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={70} fill="#0275d8" />
                    <Tooltip />
                    <Pie data={charts} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={80} outerRadius={100} fill="#5cb85c" label />
                </PieChart>
                <span className='text-decoration-underline fw-bold'>Investment Revenue Pie Chart</span>
            </div>
            <div>
                <ResponsiveContainer width={400} height={300}>
                    <RadarChart cx="50%" cy="50%" outerRadius="90%" data={charts}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <Tooltip />
                        <PolarRadiusAxis />
                        <Radar name="Revenue" dataKey="revenue" stroke="#0275d8" fill="#5cb85c" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
                <span className='text-decoration-underline fw-bold'>Sell Revenue Radar Chart</span>
            </div>

        </div>
    );
};


export default Dashboard;