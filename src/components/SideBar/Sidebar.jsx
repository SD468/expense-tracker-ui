import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const nav = [
  { to: '/', label: 'Dashboard', icon: '📊' },
  { to: '/transactions', label: 'Transactions', icon: '💳' },
  { to: '/accounts', label: 'Bank Accounts', icon: '🏦' },
  { to: '/notifications', label: 'Notifications', icon: '🔔' },
  { to: '/settings', label: 'Settings', icon: '⚙️' }
];

export default function Sidebar() {
  return (
    <div className={styles.wrap}>
      <div className={styles.brand}>Lekhajokha</div>
      <nav className={styles.nav}>
        {nav.map(n => (
          <NavLink key={n.to} to={n.to} className={({ isActive }) => isActive ? styles.active : styles.link}>
            <span className={styles.icon}>{n.icon}</span>
            <span className={styles.text}>{n.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
