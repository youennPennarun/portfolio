
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    mountNode = document.getElementById("app");
var Translate = require('./Translate');

import Menu from "./ui/Menu";
import Header from "./ui/Header";
import About from "./ui/About";
import Studies from "./ui/Studies";
import ProfessionalExp from "./ui/ProfessionalExp";
import Projects from "./ui/Projects";
import Contact from "./ui/Contact";


Translate.registerTranslations('en', require('../content/en/en.json'));
Translate.registerTranslations('fr', require('../content/fr/fr.json'));

var data = {
  "en": require("../content/en/data.json"),
  "fr": require("../content/fr/data.json")
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: data[Translate.selectedLanguage]}
  }
  componentDidMount() {
    Translate.addListener(()=> {
      this.setState({
        content: data[Translate.selectedLanguage]
      });
    });
  }

  render() {
    let {content} = this.state;
    return (
      <div>
        <Menu />
        <Header {...content.header} />
        <About about={content.about}/>
        <Studies studies={content.studies} />
        <ProfessionalExp experiences={content.professional_experiences} />
        <Projects projects={content.projects}/>
        <Contact />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);

