import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div>
        <h1>this is a dashboard</h1>
        <nav>
          <ul>
            <li>
              <a href="/dashboard/setting">Setting</a>
            </li>
            <li>
              <a href="/dashboard/profile">Profile</a>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
export default Dashboard;
