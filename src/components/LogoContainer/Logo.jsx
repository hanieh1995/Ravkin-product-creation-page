/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Draggable from "react-draggable"
import "./Logo.css"
import logo from "../../assets/logo/myLogo.jpg"
import { useEffect, useRef, useState } from "react";
import setPosition from "../../utilz/setLogoPosition";
import { magnifier, shrinker } from "../../utilz/resizeLogo";
export default function Logo({ sizeIndex, allLogoPosInfo, setAllLogoPosInfo, acceptedImageIndex, isDrag }) {

    const [oldPos, setOldPos] = useState({ x: 0, y: 0 })
    const [direction, setDirection] = useState(null);
    const logoRef = useRef(null);
    const [logoStyle, setLogoStyle] = useState(null);

    useEffect(() => {
        if (isDrag) {
            setLogoStyle({
                left: allLogoPosInfo[sizeIndex].left,
                top: allLogoPosInfo[sizeIndex].top,
                width: allLogoPosInfo[sizeIndex].width,
            })
        } else {
            setLogoStyle({
                left: allLogoPosInfo.left,
                top: allLogoPosInfo.top,
                width: allLogoPosInfo.width,
            })
        }

    }, [acceptedImageIndex])

    function handleDrag(e) {
        const newDirection = {};
        let width = logoRef.current.parentElement.parentElement.style.width;
        if (oldPos.x < e.pageX) {
            newDirection.x = "right";
        } else {
            newDirection.x = "left";
        }

        if (oldPos.y < e.pageY) {
            newDirection.y = "down";
        } else {
            newDirection.y = "up";
        }
        setOldPos({ x: e.pageX, y: e.pageY });
        setDirection(newDirection);

        switch (e.target.classList[1]) {
            case "bottom-left":
                if (newDirection.x == "left" && newDirection.y == "down") {
                    logoRef.current.parentElement.parentElement.style.width = magnifier(width)
                } else if (newDirection.x == "right" && newDirection.y == "up") {
                    logoRef.current.parentElement.parentElement.style.width = shrinker(width);
                }
                break;
            case "bottom-right":
                if (newDirection.x == "right" && newDirection.y == "down") {
                    logoRef.current.parentElement.parentElement.style.width = magnifier(width)
                } else if (newDirection.x == "left" && newDirection.y == "up") {
                    logoRef.current.parentElement.parentElement.style.width = shrinker(width);
                }
                break;
            case "top-right":
                if (newDirection.x == "right" && newDirection.y == "up") {
                    logoRef.current.parentElement.parentElement.style.width = magnifier(width)
                } else if (newDirection.x == "left" && newDirection.y == "down") {
                    logoRef.current.parentElement.parentElement.style.width = shrinker(width);
                }
                break;
            case "top-left":
                if (newDirection.x == "left" && newDirection.y == "up") {
                    logoRef.current.parentElement.parentElement.style.width = magnifier(width)
                } else if (newDirection.x == "right" && newDirection.y == "down") {
                    logoRef.current.parentElement.parentElement.style.width = shrinker(width);
                }
                break;
            default:
                break;
        }
        const newArray = [...allLogoPosInfo];

        newArray[sizeIndex].width = logoRef.current.parentElement.parentElement.style.width;
        setAllLogoPosInfo(newArray);
    }


    function setLogoPosition(e) {
        let final = setPosition(e.target, e.target.parentElement.parentElement.parentElement);
        const newArray = [...allLogoPosInfo];
        newArray[sizeIndex].left = final.x + "%";
        newArray[sizeIndex].top = final.y + "%";
        setAllLogoPosInfo(newArray);
    }


    return (
        <>
            {isDrag ? <Draggable bounds="parent" handle=".handle">
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
                        <img draggable={false} ref={logoRef} className="logo-image handle" onTouchEnd={setLogoPosition} onMouseUp={setLogoPosition} src={logo} alt="logo" />
                    </div>
                </div>

            </Draggable > :
                <div draggable={false} className="logo-container" style={logoStyle}>
                    <div draggable={false} className="logo-image-row-container handle">
                        <img draggable={false} ref={logoRef} className="logo-image" src={logo} alt="logo" />
                    </div>
                </div>
            }

        </>
    )
}