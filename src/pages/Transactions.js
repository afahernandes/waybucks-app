
import React from "react";
import { Button } from "react-bootstrap";
import btnapprove from "../assets/aprove.svg";
import btncancel from "../assets/cancel.svg";
function Transactions() {
  const transactions = JSON.parse(localStorage.getItem('datatransaction'))
 console.log(transactions);

  function handleClick(){

  }

  return (
    <div className="container">
      <h3 className="header3">Income Transaction</h3>
      <table className="table table-bordered my-4">
        <thead className="bg-danger text-light">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Post Code</th>
            <th scope="col">Income</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, i) => (
            <tr key={transaction.id}>
              <td>{i + 1}</td>
              <td>{transaction.name}</td>
              <td>{transaction.address}</td>
              <td>{transaction.postCode}</td>
              <td>Rp. {transaction.income}</td>
              <td className="text-center">
                <label>{transaction.status}</label>
              </td>
              <td className="text-center">
                {transaction.status === "Waiting Approve" ? (
                  <>
                    <Button variant="danger" size="sm" style={{margin :"2px"}} onClick={handleClick}>
                      Cancel
                    </Button> 
                    <Button variant="success" size="sm" style={{margin :"2px"}} onClick={handleClick}>
                      Approve
                    </Button>
                  </>
                ) : transaction.status === "Completed" ? (
                  <img src={btnapprove} alt="success" />
                ) : transaction.status === "Canceled" ? (
                  <img src={btncancel} alt="cancel" />
                ) : (
                  <img src={btnapprove} alt="cancel" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
