import React from 'react'
import {
  Container,
  Table
} from 'reactstrap';

export default function Main() {
  return (
    <Container>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Vessel</th>
            <th>Built</th>
            <th>GT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Prelude</td>
            <td>2017</td>
            <td>499167</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Pioneering Spirit</td>
            <td>2014</td>
            <td>403342</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Coral-Sul Flng</td>
            <td>2021</td>
            <td>346165</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}
