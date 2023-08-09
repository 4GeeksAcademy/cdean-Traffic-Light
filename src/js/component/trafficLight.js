import React, {useState} from "react";//1. importar el hook useState

const TrafficLight = () => {
    const[red, setRed] = useState("secondary");
    const[yellow, setYellow] = useState("secondary");
    const[green, setGreen] = useState("secondary");

    function handleColorRed () {
        setRed("danger");
        setYellow("secondary")
        setGreen("secondary")
    }

    function handleColorYellow () {
        setYellow("warning")
        setRed("secondary");
        setGreen("secondary")
    }

    function handleColorGreen () {
        setGreen("success")
        setYellow("secondary")
        setRed("secondary");
        
    }

    return (
        <div className="text-center container">
			<h1 className="text-center mt-5">Traffic Light</h1>
            <div className="container text-center bg-dark my-5" style={{ height: '290px', width: '150px' }}>
                <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <div className={"bg-"+red+" my-2 w25 rounded-circle"} style={{ width: '80px', height: '80px' }} onClick={handleColorRed}>&nbsp;</div>
                </div>
                </div>
                <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <div className={"bg-"+yellow+" rounded-circle my-2"} style={{ width: '80px', height: '80px' }} onClick={handleColorYellow}>&nbsp;</div>
                </div>
                </div>
                <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <div className={"bg-"+green+" rounded-circle my-2"} style={{ width: '80px', height: '80px' }} onClick={handleColorGreen}>&nbsp;</div>
                </div>
                </div>
            </div>
		</div>
	);

};

export default TrafficLight;