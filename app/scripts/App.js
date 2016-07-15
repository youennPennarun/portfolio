import React, {Component} from "react";
import Translate from "./Translate";

import Menu from "./ui/Menu";
import Header from "./ui/Header";
import About from "./ui/About";
import Studies from "./ui/Studies";
import ProfessionalExp from "./ui/ProfessionalExp";
import Knowledge from "./ui/Knowledge";
import Projects from "./ui/Projects";
import Contact from "./ui/Contact";
import Footer from "./ui/Footer";

Translate.registerTranslations("en", require("../content/en/en.json"));
Translate.registerTranslations("fr", require("../content/fr/fr.json"));

var globalData = require("../content/global");

var merge = function(dest, source) {
  "use strict";
  for (var k in source) {
    if (dest["$$" + k]) {
      dest[k] = dest["$$" + k];
      delete dest["$$" + k];
      continue;
    }
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
var dataPrint = {
  "en": merge(require("../content/en/data.print.json"), data.en),
  "fr": merge(require("../content/fr/data.print.json"), data.fr)
};

class App extends Component {
  constructor(props) {
    super(props);
    let dataSource;
    if ((window.matchMedia && window.matchMedia('print').matches)) {
      dataSource = dataPrint
    } else {
      dataSource = data;
    }
    this.state = {
      content: dataSource[Translate.selectedLanguage],
      isMediaPrint: window.matchMedia && window.matchMedia('print').matches,
    };
  }
  componentDidMount() {
    Translate.addListener(()=> {
      this.setState({
        content: data[Translate.selectedLanguage]
      });
    });
    if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(mql => {
          let nextState = {isMediaPrint: mql.matches};
          if (mql.matches) {
            nextState.content = dataPrint[Translate.selectedLanguage]
          } else {
            nextState.content = data[Translate.selectedLanguage]
          }
          console.log(nextState);
            this.setState(nextState)
        });
    }
  }

  render() {
    let {content, isMediaPrint} = this.state;
    return (
      <div>
        <Menu />
        <Header {...content.header} isMediaPrint={isMediaPrint} />
        <About about={content.about}/>
        <div id="resume">
          <div id="resume-left">
            <ProfessionalExp experiences={content.professional_experiences} />
            <Studies studies={content.studies} />
          </div>
          {isMediaPrint && (
            <div id="resume-right">
              <Knowledge knowledge={content.knowledge} />
            </div>
          )}
        </div>
        {!isMediaPrint && (
          <div>
            <Projects projects={content.projects}/>
            <Contact />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default App;