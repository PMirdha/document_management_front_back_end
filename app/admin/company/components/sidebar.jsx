import Link from "next/link";

const DashboardSideBar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link " href="/admin/dashboard">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            href="/admin/dashboard/companies"
          >
            <i className="bi bi-layout-text-window-reverse"></i>
            <span>Companies</span>
          </Link>
        </li>

        {/* <li className="nav-item">
          <Link className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <Link href="components-alerts.html">
                <i className="bi bi-circle"></i><span>Alerts</span>
              </Link>
            </li>
            <li>
              <Link href="components-accordion.html">
                <i className="bi bi-circle"></i><span>Accordion</span>
              </Link>
            </li>
            <li>
              <Link href="components-badges.html">
                <i className="bi bi-circle"></i><span>Badges</span>
              </Link>
            </li>
            <li>
              <Link href="components-breadcrumbs.html">
                <i className="bi bi-circle"></i><span>Breadcrumbs</span>
              </Link>
            </li>
            <li>
              <Link href="components-buttons.html">
                <i className="bi bi-circle"></i><span>Buttons</span>
              </Link>
            </li>
            <li>
              <Link href="components-cards.html">
                <i className="bi bi-circle"></i><span>Cards</span>
              </Link>
            </li>
            <li>
              <Link href="components-carousel.html">
                <i className="bi bi-circle"></i><span>Carousel</span>
              </Link>
            </li>
            <li>
              <Link href="components-list-group.html">
                <i className="bi bi-circle"></i><span>List group</span>
              </Link>
            </li>
            <li>
              <Link href="components-modal.html">
                <i className="bi bi-circle"></i><span>Modal</span>
              </Link>
            </li>
            <li>
              <Link href="components-tabs.html">
                <i className="bi bi-circle"></i><span>Tabs</span>
              </Link>
            </li>
            <li>
              <Link href="components-pagination.html">
                <i className="bi bi-circle"></i><span>Pagination</span>
              </Link>
            </li>
            <li>
              <Link href="components-progress.html">
                <i className="bi bi-circle"></i><span>Progress</span>
              </Link>
            </li>
            <li>
              <Link href="components-spinners.html">
                <i className="bi bi-circle"></i><span>Spinners</span>
              </Link>
            </li>
            <li>
              <Link href="components-tooltips.html">
                <i className="bi bi-circle"></i><span>Tooltips</span>
              </Link>
            </li>
          </ul>
        </li> */}

        <li className="nav-item">
          <Link className="nav-link collapsed" href="users-profile.html">
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default DashboardSideBar;
