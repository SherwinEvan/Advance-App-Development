import React, { useState } from "react";
import { Button, Chip } from "@nextui-org/react";
import Footer from "../../assets/components/footer";
import AdminSidebar from "./sidebar";
import NavBar from "../../assets/components/navbar";

export default function LoanHistory() {
  // Dummy loan data for loans that were previously approved or rejected
  const [loans, setLoans] = useState([
    {
      id: 3,
      name: "Alice Johnson",
      phone: "+1122334455",
      PAN: "LMNOP6789G",
      address: "789 Elm Street, Village, Country",
      loanId: "L345678",
      salary: "70000",
      email: "alice.johnson@example.com",
      aadhar: "112233445566",
      status: "Approved",
    },
    {
      id: 4,
      name: "Bob Williams",
      phone: "+9988776655",
      PAN: "QRSTU9012H",
      address: "101 Pine Road, Suburb, Country",
      loanId: "L901234",
      salary: "55000",
      email: "bob.williams@example.com",
      aadhar: "998877665544",
      status: "Rejected",
    },
  ]);
  

  return (
    <>
      <NavBar />
      <div className="flex bg-white ">
      <AdminSidebar />
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8 text-black">
            Previously Approved/Rejected Loans
          </h1>
          <div className="grid grid-cols-2 gap-4">
            {loans.map((loan) => (
              <div
                key={loan.id}
                className="p-4 bg-white shadow-md rounded-lg"
              >
                <div className="text-lg font-semibold">Name: {loan.name}</div>
                <div>Phone: {loan.phone}</div>
                <div>PAN: {loan.PAN}</div>
                <div>Address: {loan.address}</div>
                <div>Loan ID: {loan.loanId}</div>
                <div>Salary: Rs. {loan.salary}</div>
                <div>Email: {loan.email}</div>
                <div>Aadhar: {loan.aadhar}</div>
                <div className="mt-2">
                  Status:{" "}
                  <Chip
                    color={
                      loan.status === "Approved"
                        ? "success"
                        : loan.status === "Rejected"
                        ? "danger"
                        : "default"
                    }
                  >
                    {loan.status}
                  </Chip>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
