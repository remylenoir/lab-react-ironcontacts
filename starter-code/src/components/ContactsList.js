import React, { Component } from "react";

class ContactsList extends Component {
  render() {
    return (
      <table
        style={{
          width: "50%",
          margin: "auto"
        }}
      >
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Delete</th>
          </tr>
          {this.props.contacts.map((el, i) => {
            return (
              <tr key={i}>
                <td>
                  <img width="50" src={el.pictureUrl} alt={el.name} />
                </td>
                <td>{el.name}</td>
                <td>{el.popularity.toFixed(2)}</td>
                <td>
                  <button onClick={() => this.props.handleDelete(i)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ContactsList;
