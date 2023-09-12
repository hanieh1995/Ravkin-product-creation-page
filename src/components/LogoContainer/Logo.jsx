/* eslint-disable react/prop-types */
import Draggable from "react-draggable"
import "./Logo.css"
import logo from "../../assets/logo/myLogo.jpg"
import { useRef, useState } from "react";
import setPosition from "../../utilz/setLogoPosition";
export default function Logo({ DragHandler, sizeIndex, allLogoPosInfo, setAllLogoPosInfo }) {

    const logoRef = useRef(null);
    const [logoStyle, setLogoStyle] = useState({
        left: allLogoPosInfo[sizeIndex].left,
        top: allLogoPosInfo[sizeIndex].top,
        width: allLogoPosInfo[sizeIndex].width,
    });

    function handleDrag(e) {
        // if(imageRef) console.log(imageRef);
    }




    function setLogoPosition(e) {

        let final = setPosition(e.target, e.target.parentElement.parentElement.parentElement);
        const newArray = [...allLogoPosInfo];
        newArray[sizeIndex].left = final.x + "%";
        newArray[sizeIndex].top = final.y + "%";
        // newArray[sizeIndex].width = final.width * 1.33;
        setAllLogoPosInfo(newArray);
    }

    return (
        <>
            <Draggable bounds="parent" handle=".handle" onDrag={handleDrag}>


                <div draggable={false} className="logo-container" style={logoStyle}>


                    <div draggable={true} className="size-btn top-left" onDrag={handleDrag}>
                        <i className="fa fa-angle-left" style={{ rotate: "45deg" }} ></i>
                    </div>
                    <div draggable={true} className="size-btn top-right" onDrag={handleDrag}>
                        <i className="fa fa-angle-left" style={{ rotate: "135deg" }}></i>
                    </div>
                    <div draggable={true} className="size-btn bottom-left" onDrag={handleDrag}>
                        <i className="fa fa-angle-left" style={{ rotate: "-45deg" }}></i>
                    </div>
                    <div draggable={true} className="size-btn bottom-right" onDrag={handleDrag}>
                        <i className="fa fa-angle-left" style={{ rotate: "-135deg" }}></i>
                    </div>

                    <div draggable={false} className="logo-image-row-container handle">
                        <img draggable={false} ref={logoRef} className="logo-image handle" onTouchEnd={setLogoPosition} src={logo} alt="logo" />
                    </div>



                </div>

            </Draggable>
        </>
    )
}