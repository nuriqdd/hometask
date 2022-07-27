import React from "react";
import Table from "react-bootstrap/Table";

const Section = ({ users }) => {
  console.log(users);
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr>
              <td>{item.id} </td>
              <td>{item.name}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Section;
