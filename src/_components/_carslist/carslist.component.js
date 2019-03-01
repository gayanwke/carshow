import React, { Component } from "react";
import { connect } from "react-redux";
import { getCarsList } from "../../_actions/carslistAction";

class CarsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      cars: {}
    };
  }

  componentDidMount() {
    //dispatch the action
    //console.log("Did Mount!");
    this.props.loadCarsList();
  }

  render() {
    const { carslist } = this.props.carslist;
    const num = [
      {
        name: "Melbourne Motor Show",
        cars: [
          { make: "Julio Mechannica", model: "Mark 4S" },
          { make: "Hondaka", model: "Elisa" },
          { make: "Moto Tourismo", model: "Cyclissimo" },
          { make: "George Motors", model: "George 15" },
          { make: "Moto Tourismo", model: "Delta 4" }
        ]
      },
      {
        name: "Cartopia",
        cars: [
          { make: "Moto Tourismo", model: "Cyclissimo" },
          { make: "George Motors", model: "George 15" },
          { make: "Hondaka", model: "Ellen" },
          { make: "Moto Tourismo", model: "Delta 16" },
          { make: "Moto Tourismo", model: "Delta 4" },
          { make: "Julio Mechannica", model: "Mark 2" }
        ]
      }
    ];

    return (
      <ul>
        {num.map((item, index) => (
          <ul key={index}>
            {item.cars.map((car, index) => (
              <li key={index}>
                {car.make}
                <ul>
                  <li>{car.model}</li>
                </ul>
                <ul>
                  <ul>{item.name}</ul>
                </ul>
              </li>
            ))}
          </ul>
        ))}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    carslist: state.carslist
  };
}
const mapDispatchToProps = dispatch => {
  return {
    loadCarsList: () => {
      dispatch(getCarsList());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsList);
