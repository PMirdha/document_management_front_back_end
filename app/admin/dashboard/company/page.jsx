import React from "react";
import BreadCrumb from "../../../components/breadCrumb";
import TableComponent from "../../../components/tableComponent";

const Companies = () => {
  const sampleData = [
    { id: 1, name: "Product 1", category: "Category1", price: 100 },
    { id: 2, name: "Product 2", category: "Category2", price: 150 },
    { id: 3, name: "Product 1", category: "Category1", price: 100 },
    { id: 4, name: "Product 2", category: "Category2", price: 150 },
    { id: 5, name: "Product 1", category: "Category1", price: 100 },
    { id: 6, name: "Product 2", category: "Category2", price: 150 },
    { id: 7, name: "Product 1", category: "Category1", price: 100 },
    { id: 8, name: "Product 2", category: "Category2", price: 150 },
    { id: 9, name: "Product 1", category: "Category1", price: 100 },
    { id: 10, name: "Product 2", category: "Category2", price: 150 },
    { id: 11, name: "Product 1", category: "Category1", price: 100 },
    { id: 12, name: "Product 2", category: "Category2", price: 150 },
    { id: 13, name: "Product 1", category: "Category1", price: 100 },
    { id: 14, name: "Product 2", category: "Category2", price: 150 },
    { id: 15, name: "Product 1", category: "Category1", price: 100 },
    { id: 16, name: "Product 2", category: "Category2", price: 150 },
    { id: 17, name: "Product 1", category: "Category1", price: 100 },
    { id: 18, name: "Product 2", category: "Category2", price: 150 },
    { id: 19, name: "Product 1", category: "Category1", price: 100 },
    { id: 20, name: "Product 2", category: "Category2", price: 150 },
    // Add more data as needed
  ];

  const breadCrumbLinkDetails = [
    { link: "/", title: "Home" },
    { link: "/admin/dasboard", title: "Dashboard" },
    { link: "/admin/dasboard/company", title: "Companies", isActive: true },
  ];
  return (
    <>
      <BreadCrumb title={"Companies"} linkesDetails={breadCrumbLinkDetails} />
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Datatables</h5>
                <p>
                  Add lightweight datatables to your project with using the{" "}
                  <a
                    href="https://github.com/fiduswriter/Simple-DataTables"
                    target="_blank"
                  >
                    Simple DataTables
                  </a>{" "}
                  library. Just add <code>.datatable</code> className name to
                  any table you wish to conver to a datatable. Check for{" "}
                  <a
                    href="https://fiduswriter.github.io/simple-datatables/demos/"
                    target="_blank"
                  >
                    more examples
                  </a>
                  .
                </p>

                <TableComponent data={sampleData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
