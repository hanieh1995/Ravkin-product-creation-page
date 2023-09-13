/* eslint-disable react/prop-types */
import "./ImageInformations.css";
import backicon from "../../assets/img/back_icon.png";
import ImagesList from "../ImagesList/ImagesList";
import { useRef, useState } from "react";
import IMAGESIZES from "../../assets/CONSTANTS";
import Logo from "../LogoContainer/Logo";

export default function ImageInformaitions({ setIsEditImagePage, setOpenImageInfoPage, allUploadedImages }) {
    const [selectedImage, setSelectedImage] = useState({ url: allUploadedImages[0].allImages[0].url, index: 0, aspect: IMAGESIZES[allUploadedImages[0].allImages[0].aspectIndex] });
    const [finalData, setFinalData] = useState([...allUploadedImages]);
    const [uploadedImageVirual, setUploadedImageVirual] = useState(true);
    const imageRef = useRef(null);
    function setInfoOption(event) {
        const newArray = [...finalData];
        newArray[selectedImage.index].saleOption = event.target.value;
        setFinalData(newArray);
    }

    function setInfoPrice(event) {
        const newArray = [...finalData];
        newArray[selectedImage.index].price = event.target.value;
        setFinalData(newArray);
    }

    function computeImageAspect() {
        let aspect = imageRef.current.naturalWidth / imageRef.current.naturalHeight;
        aspect < selectedImage.aspect ? setUploadedImageVirual(true) : setUploadedImageVirual(false);

    }
    return (
        <div className="info-newalbum-container">
            <div className="info-newalbum-header">
                <img src={backicon} alt="backicon" onClick={() => {
                    setIsEditImagePage(true);
                    setOpenImageInfoPage(false)
                }} />
                <div className="title">ایجاد آلبوم جدید</div>
                <div className={`send-info ${finalData.findIndex(image =>
                    !image.saleOption || !image.price
                ) == -1 && "active"}`}>ارسال</div>
            </div>
            <div className="info-newalbum-content">
                <div className="content">
                    <div className="img-container">
                        <div className={`image-logo-container  ${selectedImage.aspect == IMAGESIZES[2] && "virtualView"}`} style={{ aspectRatio: selectedImage.aspect }}><img onLoad={computeImageAspect} ref={imageRef} className={`${uploadedImageVirual ? "uploaded-virtual-img" : "uploaded-horizenal-img"}`} src={selectedImage.url} alt="image" />
                            <Logo isDrag={false} allLogoPosInfo={allUploadedImages[selectedImage.index].allImages[0].logo} acceptedImageIndex={selectedImage.index} />
                        </div>
                    </div>
                    <ImagesList editImagePage={false} allUploadedImages={finalData} setSelectedImage={setSelectedImage} />
                </div>
                <div className="info-container">
                    <div className="sale-text">نحوه فروش :</div>
                    <div className="sale-options">
                        <input type="radio" name="sale-options" id="private" value="private" checked={finalData[selectedImage.index].saleOption == "private"} onChange={setInfoOption} />
                        <label htmlFor="private">اختصاصی</label>
                        <input type="radio" name="sale-options" id="shared" value="shared" checked={finalData[selectedImage.index].saleOption == "shared"} onChange={setInfoOption} />
                        <label htmlFor="shared">اشتراکی</label>
                    </div>
                    <div className="set-price">
                        <label htmlFor="price">قیمت :</label>
                        <input type="number" name="" id="price" value={finalData[selectedImage.index].price} onChange={setInfoPrice} />
                    </div>
                    <div className="btn-container">
                        <button type="button">افزودن مجری</button>
                    </div>
                </div>
            </div>

        </div>
    )
}