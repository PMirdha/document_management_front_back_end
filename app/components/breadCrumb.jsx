import Link from "next/link";

const BreadCrumb = ({ linkesDetails, title }) => {
  const breadCrumbLinks = linkesDetails?.map((linkDetails) => {
    return (
      <li
        className={`breadcrumb-item ${linkDetails.isActive ? "active" : ""}`}
        key={linkDetails.link}
      >
        {linkDetails.isActive ? (
          linkDetails.title
        ) : (
          <Link href={linkDetails.link}>{linkDetails.title}</Link>
        )}
      </li>
    );
  });
  return (
    <div className="pagetitle">
      <h1>{title}</h1>
      <nav>
        <ol className="breadcrumb">{breadCrumbLinks}</ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
