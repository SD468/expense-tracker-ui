import { NavLink } from "react-router-dom";

function SideBar() {
  const nav = [
    { to: "/", label: "Dashboard", icon: "📊" },
    { to: "/transactions", label: "Transactions", icon: "💳" },
    { to: "/accounts", label: "Bank Accounts", icon: "🏦" },
    { to: "/notifications", label: "Notifications", icon: "🔔" },
    { to: "/settings", label: "Settings", icon: "⚙️" },
  ];
  return (
    <div>
      <div>Lekhajokha</div>
      <nav>
        {nav.map((n) => (
          <NavLink key={n.to} to={n.to}>
            <span>{n.icon}</span>
            <span>{n.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default SideBar;
