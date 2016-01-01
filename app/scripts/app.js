
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    mountNode = document.getElementById("app");

import Header from "./ui/Header";
import About from "./ui/About";
import Studies from "./ui/Studies";
import ProfessionalExp from "./ui/ProfessionalExp";
import Projects from "./ui/Projects";

var data = require("../data.json");

class App extends React.Component {
  render() {
    return (
      <div>
        <Header {...data.header} />
        <About about={data.about}/>
        <Studies studies={data.studies} />
        <ProfessionalExp experiences={data.professional_experiences} />
        <Projects projects={data.projects}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);

