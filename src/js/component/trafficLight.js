import React, {useState} from "react";//1. importar el hook useState

const TrafficLight = () => {
    const[red, setRed] = useState("bg-danger");
    const[yellow, setYellow] = useState("bg-warning");
    const[green, setGreen] = useState("bg-success");

    function handleColorRed () {
        setRed("bg-danger glow");
        setYellow("bg-warning");
        setGreen("bg-success");
    }

    function handleColorYellow () {
        setYellow("bg-warning glow");
        setRed("bg-danger");
        setGreen("bg-success");
    }

    function handleColorGreen () {
        setGreen("bg-success glow");
        setRed("bg-danger");
        setYellow("bg-warning");
    }

    return (
        <div className="text-center container">
			<h1 className="text-center mt-5">Traffic Light</h1>
            <div className="container text-center bg-dark mt-5" style={{ height: '290px', width: '150px' }}>
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <div className={red + " my-2 w25 rounded-circle"} style={{ width: '80px', height: '80px' }} onClick={handleColorRed}>&nbsp;</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <div className={yellow +" rounded-circle my-2"} style={{ width: '80px', height: '80px' }} onClick={handleColorYellow}>&nbsp;</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <div className={green + " rounded-circle my-2"} style={{ width: '80px', height: '80px' }} onClick={handleColorGreen}>&nbsp;</div>
                    </div>
                </div>
            </div>
            <div className="container text-center bg-dark" style={{ height: '290px', width: '15px' }}></div>
		</div>
	);

};

export default TrafficLight;