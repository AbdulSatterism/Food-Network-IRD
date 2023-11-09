import React from 'react';
import Header from '../Header/Header';
import MiniSidebar from '../MiniSidebar/MiniSidebar';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <MiniSidebar></MiniSidebar>
            <div>
                <h1>dashboard is running......</h1>
            </div>
        </div>
    );
};

export default Dashboard;