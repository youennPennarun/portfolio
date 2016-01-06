import {Component} from "react";
import Translate from "../Translate";

const languages = [
	{
		name: "Français",
		key: "fr",
		ico: "/images/fr-ico.png"
	},
	{
		name: "English",
		key: "en",
		ico: "/images/en-ico.png"
	}
];

class LanguageSelection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showLanguageList: false,
			selectedLanguage: languages[0]
		};

		this.getSelectedLanguage = () => {
			var selected = {};
			languages.forEach((l) => {
				if (l.key === Translate.selectedLanguage) {
					selected = l;
					return false;
				}
			});
			return selected;
		};
		if (Translate.selectedLanguage) {
			this.state.selectedLanguage = this.getSelectedLanguage(true);
		}

		this.onClick = (event) => {
			if(this.state.showLanguageList) {
				if (!this.inside)
					this.inside = document.querySelector(".language-selection");
				if (this.inside && !this.inside.contains(event.target))
					this.setState({showLanguageList: false})
			}
		}
	}

	componentDidMount() {
		document.addEventListener("click", this.onClick)
		this.inside = document.querySelector(".language-selection");
	}
	componentWillUnount() {
		document.removeEventListener("click", this.onClick)
	}

	setLanguage(language) {
		Translate.switchLanguage(language.key);
		this.setState({
			showLanguageList: false,
			selectedLanguage: language
		});
	}
	render() {
		let { showLanguageList, selectedLanguage} = this.state;
		return (
			<div className={(showLanguageList)? "language-selection active": "language-selection"}>
				<div className="selected" onClick={()=>this.setState({showLanguageList: !showLanguageList})}>
				<img src={selectedLanguage.ico} />
				</div>
				<div className="languages-list">
					{languages.map(l => {
						return (
							<div key={l.key} className="language"
							 onClick={(event) => this.setLanguage(l)}>
								<img src={l.ico} /> {l.name}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
export default LanguageSelection;
