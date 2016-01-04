import {Component} from "react";
import Translate from "../Translate";

const languages = [
	{
		name: "Français",
		key: "fr"
	},
	{
		name: "English",
		key: "en"
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
					{selectedLanguage.name}
				</div>
				<div className="languages-list">
					{languages.map(l => {
						return (
							<div key={l.key} className="language"
							 onClick={() => this.setLanguage(l)}>
								{l.name}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
export default LanguageSelection;
