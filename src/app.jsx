import React from "react";
import p5 from "p5";
import Arc from "classes/arc";
import { randint } from "func";

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.canvasRef = React.createRef();
		this.width = randint(window.innerWidth);
		this.height = randint(window.innerHeight);
		this.background = p5.Color(randint(255), randint(255), randint(255));
	}

	sketch(p) {
		p.setup = () => {
			p.createCanvas(this.width, this.height);
		};

		p.draw = () => {};
	}

	compnentDidMount() {
		this.p5 = new p5(this.sketch, this.canvasRef.current);
	}

	render() {
		return <div ref={this.canvasRef}></div>;
	}
}
