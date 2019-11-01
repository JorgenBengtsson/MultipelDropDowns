import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCarId: 0, // Id of selected car, from the first dropdown
      selectedEngineId: 0, // Id of the selected engine
      carList: [], // The items shown in the first dropdown, cars
      engineList: [] // and engines
    };
  }
  componentDidMount() {
    this.loadCarList(); // Get the list of cars
  }
  loadCarList = () => {
    // Adds three objects, id and car names, to be shown in the dropdown
    // This can be loaded with a fetch, this is just coded for the example
    this.setState({
      carList: [
        { id: 1, name: "Volvo" },
        { id: 2, name: "Tesla" },
        { id: 3, name: "Fiat" }
      ]
    });
  };
  loadEngineList = selectedCar => {
    // This switch "reacts" on the selected car, it's id, and the sets the list of engines for the second dropwdown
    // this can be a fetch instead that you send a id that you look up in the database
    switch (selectedCar) {
      case "1":
        this.setState({
          engineList: [
            { id: 1, name: "Bensinmotor" },
            { id: 2, name: "Dieselmotor" },
            { id: 3, name: "Raketmotor" }
          ]
        });
        break;
      case "2":
        this.setState({
          engineList: [
            { id: 1, name: "Liten elmotor" },
            { id: 2, name: "Mellan elmotor" },
            { id: 3, name: "Stor elmotor" },
            { id: 4, name: "Grymt stor elmotor" }
          ]
        });
        break;
      case "3":
        this.setState({
          engineList: [
            { id: 1, name: "En mycket liten motor" },
            { id: 2, name: "En ännu mindre motor" }
          ]
        });
        break;
    }
  };
  handleCarSelection = event => {
    // When a car is selected in the dropwdown, then set the selected id and reset the id for the engine dropdown
    // just so that no engine is selected when the content of the dropwdown is changed
    var selectedCar = event.target.value;
    this.setState({ selectedCarId: selectedCar, selectedEngineId: 0 });
    this.loadEngineList(selectedCar); // "Load" the engines into the second dropwdown
  };
  handleEngineSelection = event => {
    // Handle the selection of the engine
    this.setState({ selectedEngineId: event.target.value });
  };
  render() {
    return (
      <div className="App">
        {/** First dropwdown for the cars */}
        <select
          value={this.setState.selectedCarId}
          onChange={this.handleCarSelection}
        >
          <option value="0">Choose a car ...</option>
          {this.state.carList.map(item => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
        <br />
        {/** Second dropwdown for the engines */}
        <select
          value={this.setState.selectedEngineId}
          onChange={this.handleEngineSelection}
        >
          <option value="0">Choose a engine for your car ...</option>
          {this.state.engineList.map(item => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
    );
  }
}
