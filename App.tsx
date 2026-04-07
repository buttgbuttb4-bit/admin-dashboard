import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ManageTeachers from './pages/ManageTeachers';
import ManageStudents from './pages/ManageStudents';
import RolesPermissions from './pages/RolesPermissions';
import Reports from './pages/Reports';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Dashboard />
          </Layout>
        } />
        <Route path="/teachers" element={
          <Layout>
            <ManageTeachers />
          </Layout>
        } />
        <Route path="/students" element={
          <Layout>
            <ManageStudents />
          </Layout>
        } />
        <Route path="/roles" element={
          <Layout>
            <RolesPermissions />
          </Layout>
        } />
        <Route path="/reports" element={
          <Layout>
            <Reports />
          </Layout>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
