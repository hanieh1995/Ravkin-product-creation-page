/* eslint-disable react/prop-types */
import "./ImageInformations.css";
import backicon from "../../assets/img/back_icon.png";
import ImagesList from "../ImagesList/ImagesList";
import { useState } from "react";
import IMAGESIZES from "../../assets/CONSTANTS";

export default function ImageInformaitions({ setopenImageInfoPage, allUploadedImages }) {
    const [selectedImage, setSelectedImage] = useState({ url: allUploadedImages[0].url, index: 0, aspect: allUploadedImages[0].aspect });
    const [finalData, setFinalData] = useState([...allUploadedImages]);

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

    return (
        <div className="info-newalbum-container">
            <div className="info-newalbum-header">
                <img src={backicon} alt="backicon" onClick={() => setopenImageInfoPage(false)} />
                <div className="title">ایجاد آلبوم جدید</div>
                <div className={`send-info ${finalData.findIndex(image =>
                    !image.saleOption || !image.price
                ) == -1 && "active"}`}>ارسال</div>
            </div>
            <div className="info-newalbum-content">
                <div className="content">
                    <div className="img-container">
                        <div className={`image-logo-container  ${selectedImage.aspect == IMAGESIZES[2] && "virtualView"}`} style={{ aspectRatio: selectedImage.aspect }}><img src={selectedImage.url} alt="image" />
                        </div>
                       
                    </div>
                    <ImagesList allUploadedImages={finalData} setSelectedImage={setSelectedImage} />
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