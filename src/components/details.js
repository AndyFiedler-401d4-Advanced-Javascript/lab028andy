import React from 'react';

class Details extends React.Component {
  render() {
    if (!this.props.item) {
      return null;
    }
    return (
      <section id="details">
        <div>
          <header>
            <button onClick={this.props.closeDetails}>x</button>
          </header>
          <p className="text">{this.props.item.text}</p>
          <p className={`difficulty d${this.props.item.difficulty}`}>Difficulty: <span>{this.props.item.difficulty}</span></p>
          <p className="assigned-to">Assigned To: <span>{this.props.item.assignedTo}</span></p>
          <p className="date">Date: <span>{this.props.item.date}</span></p>
        </div>
      </section>
    );
  }
}

export default Details;
