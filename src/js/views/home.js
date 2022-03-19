import React,{useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const [color, setColor] = useState("grey");
	const [color1, setColor1] = useState("grey");
	const [color2, setColor2] = useState("grey");
	const [color3, setColor3] = useState("grey");
	var timer = null;
	function switchColor() {
		if (color == "grey") setColor("red");
	}
	function switchClockStatus() {
		if (timer == null) {
			timer = setInterval(switchColor, 3000);
			console.log(timer);
		} else {
			clearInterval(timer);
			timer = null;
			console.log(timer);
		}
	}

	switchClockStatus();

	return (
		<div className="text-center mt-5 position-relative">
			<div className=" position-absolute top-50 start-50">
				<div>
					<div className="semaforo m-2 mb-0">semaforo</div>


				<div className="d-flex mb-0">
					<div className="sema m-2 mt-0">
						<div className={color == "grey" ? "red" : "grey"}
					onClick={() => setColor("grey")}></div>
					</div>
					<div className="sema m-2 mt-0">
						<div className={color1 == "grey" ? "red" : "grey"}
					onClick={() => setColor("grey")}></div>
					</div>
					<div className="sema m-2 mt-0">
						<div className={color2 == "grey" ? "red" : "grey"}
					onClick={() => setColor("grey")}></div>
					</div>
					<div className="sema m-2 mt-0">
						<div className={color3 == "grey" ? "red" : "grey"}
					onClick={() => setColor("grey")}></div>
					</div>
					<div className="sema m-2 mt-0">
						<div className={color == "grey" ? "red" : "grey"}
					onClick={() => setColor("grey")}></div>
					</div>
					<div className="sema m-2 mt-0">
						<div className={color == "grey" ? "red" : "grey"}
					onClick={() => setColor("grey")}></div>
					</div>
				</div>

				<div className="d-flex mt-0">
					<div className="sema m-2 mt-0">
						<div className={color == "grey" ? "red" : "grey"}
					onClick={() => setColor("grey")}></div>
					</div>
					<div className="sema m-2 mt-0">
						<div className={color == "grey" ? "red" : "grey"}
					onClick={() => setColor("grey")}></div>
					</div>
					<div className="sema m-2 mt-0">
						<div className={color == "grey" ? "red" : "grey"}
					onClick={() => setColor("grey")}></div>
					</div>
					<div className="sema m-2 mt-0">
						<div className={color == "grey" ? "red" : "grey"}
					onClick={() => setColor("grey")}></div>
					</div>
					<div className="sema m-2 mt-0">
						<div className={color == "grey" ? "red" : "grey"}
					onClick={() => setColor("grey")}></div>
					</div>
					<div className="sema m-2 mt-0">
						<div className={color == "grey" ? "red" : "grey"}
					onClick={() => setColor("grey")}></div>
					</div>
				</div>
				</div>
				
			</div>


		</div>
	)
} 