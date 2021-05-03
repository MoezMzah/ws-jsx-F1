import React from "react";
import {Table} from 'react-bootstrap'
const MySecondComponent = () => {
  const person = [
    {id:1, name: "ilyes", email: "ilyes@gmail.com", age: 25 },
    {id:2,
      name: "omar",
      email: "omar@gmail.com",
      age: 24,
    },
    { id:3,name: "oumaima", email: "oumaima@gmail.com", age: 24 },
  ];
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
           
          {person.map((p) => (
            <tr>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>{p.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MySecondComponent;
