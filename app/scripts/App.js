import React, {Component} from "react";
import Translate from "./Translate";

import Menu from "./ui/Menu";
import Header from "./ui/Header";
import About from "./ui/About";
import Studies from "./ui/Studies";
import ProfessionalExp from "./ui/ProfessionalExp";
import Projects from "./ui/Projects";
import Contact from "./ui/Contact";
import Footer from "./ui/Footer";

Translate.registerTranslations("en", require("../content/en/en.json"));
Translate.registerTranslations("fr", require("../content/fr/fr.json"));

var globalData = require("../content/global");

var merge = function(dest, source) {
  "use strict";
  for (var k in source) {
    if (!dest[k]) {
      dest[k] = source[k];
    } else {
      if (typeof source[k] === "object") {
        merge(dest[k], source[k])
      }
    }
  }
  return dest;
}
var data = {
  "en": merge(require("../content/en/data.json"), globalData),
  "fr": merge(require("../content/fr/data.json"), globalData)
};
console.log(data);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {content: data[Translate.selectedLanguage]};
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
        <ProfessionalExp experiences={content.professional_experiences} />
        <Studies studies={content.studies} />
        <Projects projects={content.projects}/>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;