import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import propTypes from "prop-types";
import reactDom from "react-dom";

export const Home = ({ counter }) => {
	const [color, setColor] = useState("grey");
	const [color1, setColor1] = useState("grey");
	const [color2, setColor2] = useState("grey");
	const [color3, setColor3] = useState("grey");
	const [color4, setColor4] = useState("grey");
	const [color5, setColor5] = useState("grey");

	var timer = null;
	var timer1 = null
	function switchColor() {
		if (color == "grey") setColor("red");
	}
	function switchColor1() {
		if (color1 == "grey") setColor1("red");
	}
	function switchColor2() {
		if (color2 == "grey") setColor2("red");
	}
	function switchColor3() {
		if (color3 == "grey") setColor3("red");
	}
	function switchColor4() {
		if (color4 == "grey") setColor4("red");
	}
	 function switchColor5() {
		if (color5 == color , color1 , color2 , color3 , color4 ) setColor5("green");
	 }

	function switchClockStatus() {
		if (timer == null) {
			timer = setInterval(switchColor, 1000);
			console.log(timer);
		} if (timer === timer) {
			timer = setInterval(switchColor1, 2000);
			console.log(timer);
		} if (timer === timer) {
			timer = setInterval(switchColor2, 3000);
			console.log(timer);
		} 
		if (timer === timer) {
			timer = setInterval(switchColor3, 4000);
			console.log(timer);
		}
		if (timer === timer) {
			timer = setInterval(switchColor4, 5000);
			console.log(timer);
		}
		if (timer === timer) {
			timer = setInterval(switchColor4, 5000);
			console.log(timer);
		}
		if (timer === timer) {
			timer = setInterval(switchColor4, 6000);
			console.log(timer);
		}
		if (timer === timer) {
			timer = setInterval(switchColor5, 7000);
			console.log(timer);
		}
		else {
			clearInterval(timer);
			timer = null;
			console.log(timer);
		}
	}

	switchClockStatus()


	return (
		<div className="text-center mt-5 position-relative">
			<div className=" position-absolute top-50 start-50">
				<div>
					<div className='semaforo m-2 mb-0'>

					<div className={color5 == "red" ? "green" : ""} onClick={() => setColor("green")}>semaforo</div>
					</div>


					<div className="d-flex mb-0">
						<div className="sema m-2 mt-0">
							<div className={color == "grey" ? "red" : "grey"} onClick={() => setColor("grey")}
							></div>
						</div>
						<div className="sema m-2 mt-0">
							<div className={color1 == "grey" ? "red" : "grey"} onClick={() => setColor1("grey")}
							></div>
						</div>
						<div className="sema m-2 mt-0">
							<div className={color2 == "grey" ? "red" : "grey"}
								onClick={() => setColor2("grey")}></div>
						</div>
						<div className="sema m-2 mt-0">
							<div className={color3 == "grey" ? "red" : "grey"}
								onClick={() => setColor3("grey")}></div>
						</div>
						<div className="sema m-2 mt-0">
							<div className={color4 == "grey" ? "red" : "grey"}
								onClick={() => setColor4("grey")}></div>
						</div>
					</div>

					<div className="d-flex mt-0">
						<div className="sema m-2 mt-0">
							<div className={color == "grey" ? "red" : "grey"}
								onClick={() => setColor("grey")}></div>
						</div>
						<div className="sema m-2 mt-0">
							<div className={color1 == "grey" ? "red" : "grey"}
								onClick={() => setColor1("grey")}></div>
						</div>
						<div className="sema m-2 mt-0">
							<div className={color2 == "grey" ? "red" : "grey"}
								onClick={() => setColor2("grey")}></div>
						</div>
						<div className="sema m-2 mt-0">
							<div className={color3 == "grey" ? "red" : "grey"}
								onClick={() => setColor3("grey")}></div>
						</div>
						<div className="sema m-2 mt-0">
							<div className={color4 == "grey" ? "red" : "grey"}
								onClick={() => setColor4("grey")}></div>
						</div>
					</div>
				</div>

			</div>


		</div>
	)
}

Home.propTypes = {
	num1: propTypes.string,
	num2: propTypes.string,
	num3: propTypes.string,
	num4: propTypes.string,
	num5: propTypes.string,
	num6: propTypes.string,
};