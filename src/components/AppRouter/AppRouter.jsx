import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
// import { DashboardPage, TransactionsPage, AccountsPage, NotificationsPage, SettingsPage } from './lazy.js';
// import Loader from '@/shared/ui/Loader.jsx';
import Sidebar from '../SideBar/Sidebar.jsx';

export default function AppRouter() {
  return (
    // <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        {/* <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    // </Suspense>
  );
}
