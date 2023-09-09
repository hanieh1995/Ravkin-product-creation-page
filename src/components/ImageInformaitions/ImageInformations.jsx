import "./ImageInformations.css";
import backicon from "../../assets/img/back_icon.png";
import ImagesList from "../ImagesList/ImagesList";

export default function ImageInformaitions() {
    return (
        <div className="info-newalbum-container">
            <div className="info-newalbum-header">
                <img src={backicon} alt="backicon" />
                <div className="title">ایجاد آلبوم جدید</div>
                <div className="send-info">ارسال</div>
            </div>
            <div className="info-newalbum-content">
                <div className="content">
                <div className="img-container">
                    <img src="" alt="" />
                </div>
                {/* <ImagesList /> */}
                </div>
                <div className="info-container">
                    <div className="sale-text">نحوه فروش :</div>
                    <div className="sale-options">
                        <input type="radio" name="sale-options" id="privaite" />
                        <label htmlFor="privaite">اختصاصی</label>
                        <input type="radio" name="sale-options" id="shared" />
                        <label htmlFor="shared">اشتراکی</label>
                    </div>
                    <div className="set-price">
                        <label htmlFor="price">قیمت :</label>
                        <input type="number" name="" id="price" />
                    </div>
                    <div className="btn-container">
                        <button type="button">افزودن مجری</button>
                    </div>
                </div>
            </div>
     
        </div>
    )
}