/* eslint-disable react/prop-types */
import "./NewAlbumPopup.css";
import backicon from "../../assets/img/back_icon.png";
import IMAGESIZES from "../../assets/CONSTANTS";
import ImagesList from "../ImagesList/ImagesList";
import close from "../../assets/img/close.png";
import { useRef, useState } from "react";
import ImageInformations from "../ImageInformaitions/ImageInformations";
import Logo from "../LogoContainer/Logo";

export default function NewAlbumPopup({ setOpenNewAlbumPopup }) {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [selectedAspect, setSelectedAspect] = useState("");
    const [allSizeImage, setAllSizeImage] = useState(["", "", "", ""]);
    const [allLogoPosInfo, setAllLogoPosInfo] = useState([{ top: "75%", left: "75%", width: "12%" }, { top: "75%", left: "75%", width: "12%" }, { top: "75%", left: "75%", width: "12%" }, { top: "75%", left: "75%", width: "12%" }])
    const [allUploadedImages, setAllUploadedImages] = useState([]);
    const [openImageInfoPage, setOpenImageInfoPage] = useState(false);
    const [uploadedImageVirual, setUploadedImageVirual] = useState(true);
    const imageRef = useRef(null);

    function computeImageAspect() {
        let aspect = imageRef.current.naturalWidth / imageRef.current.naturalHeight;
        aspect < selectedAspect ? setUploadedImageVirual(true) : setUploadedImageVirual(false)
    }


    function onImageUpload(event) {
        if (event.target.files && event.target.files[0]) {
            setUploadedImage(URL.createObjectURL(event.target.files[0]));
            const newArray = [...allSizeImage];
            switch (selectedAspect) {
                case IMAGESIZES[0]:
                    newArray[0] = URL.createObjectURL(event.target.files[0]);
                    setAllSizeImage(newArray);
                    break;
                case IMAGESIZES[1]:
                    newArray[1] = URL.createObjectURL(event.target.files[0]);
                    setAllSizeImage(newArray);
                    break;
                case IMAGESIZES[2]:
                    newArray[2] = URL.createObjectURL(event.target.files[0]);
                    setAllSizeImage(newArray);
                    break;
                case IMAGESIZES[3]:
                    newArray[3] = URL.createObjectURL(event.target.files[0]);
                    setAllSizeImage(newArray);
                    break;
            }

        }
    }

    function handleImageSize(size) {
        switch (size) {
            case IMAGESIZES[0]:
                setSelectedAspect(() => IMAGESIZES[0]);
                allSizeImage[0] ? setUploadedImage(allSizeImage[0]) : setUploadedImage(null);
                break;
            case IMAGESIZES[1]:
                setSelectedAspect(() => IMAGESIZES[1]);
                allSizeImage[1] ? setUploadedImage(allSizeImage[1]) : setUploadedImage(null);
                break;
            case IMAGESIZES[2]:
                setSelectedAspect(() => IMAGESIZES[2]);
                allSizeImage[2] ? setUploadedImage(allSizeImage[2]) : setUploadedImage(null);
                break;
            case IMAGESIZES[3]:
                setSelectedAspect(() => IMAGESIZES[3]);
                allSizeImage[3] ? setUploadedImage(allSizeImage[3]) : setUploadedImage(null);
                break;
        }
    }

    function addImage() {
        let index = allSizeImage.findIndex(img => img != "")
        if (index != -1) {
            const newArray = [...allUploadedImages];
            newArray.push({ url: allSizeImage[index], aspect: IMAGESIZES[index], saleOption: "", price: "", performer: "", logo: allLogoPosInfo[index] });
            setAllUploadedImages(newArray);
            setAllSizeImage(["", "", "", ""]);
            setAllLogoPosInfo([{ top: "75%", left: "75%", width: "12%" }, { top: "75%", left: "75%", width: "12%" }, { top: "75%", left: "75%", width: "12%" }, { top: "75%", left: "75%", width: "12%" }]);
            setUploadedImage(null);
            setSelectedAspect("");
        }
    }

    function handleDelete() {
        let index = IMAGESIZES.findIndex(size => size == selectedAspect);
        const newArray = [...allSizeImage];
        newArray[index] = "";
        const newPosArray = [...allLogoPosInfo];
        newPosArray[index] = { top: "75%", left: "75%", width: "12%" };
        setAllLogoPosInfo(newPosArray);
        setAllSizeImage(newArray);
        setUploadedImage(null);
    }

    return (

        <>
            {openImageInfoPage && <ImageInformations setAllLogoPosInfo={setAllLogoPosInfo} allLogoPosInfo={allLogoPosInfo} allUploadedImages={allUploadedImages} setOpenImageInfoPage={setOpenImageInfoPage} />}
            <div className="popup-main">
                <div className="newalbum-header">
                    <img src={backicon} alt="backicon" onClick={() => setOpenNewAlbumPopup(false)} />
                    <div className="title">ایجاد آلبوم جدید</div>
                    <div className={`next-btn ${allUploadedImages.length && "active"}`} onClick={() => { if (allUploadedImages.length) setOpenImageInfoPage(true) }}>Next</div>
                </div>
                <div className="newalbum-content">
                    <div className="img-container">

                        {uploadedImage && <img src={close} alt="close" className="close-btn" onClick={handleDelete} />}
                        {selectedAspect ? (uploadedImage ? <div className={`image-logo-container  ${selectedAspect == IMAGESIZES[2] && "virtualView"}`} style={{ aspectRatio: selectedAspect }}><img onLoad={computeImageAspect} ref={imageRef} draggable={false} src={uploadedImage} alt=""
                            className={`${uploadedImageVirual ? "uploaded-virtual-img" : "uploaded-horizenal-img"}`}
                        />
                            {IMAGESIZES.findIndex(size => size == selectedAspect) == 0 && <Logo isDrag={true} setAllLogoPosInfo={setAllLogoPosInfo} allLogoPosInfo={allLogoPosInfo} sizeIndex={0} />
                            }
                            {IMAGESIZES.findIndex(size => size == selectedAspect) == 1 && <Logo isDrag={true} setAllLogoPosInfo={setAllLogoPosInfo} allLogoPosInfo={allLogoPosInfo} sizeIndex={1} />
                            }
                            {IMAGESIZES.findIndex(size => size == selectedAspect) == 2 && <Logo isDrag={true} setAllLogoPosInfo={setAllLogoPosInfo} allLogoPosInfo={allLogoPosInfo} sizeIndex={2} />
                            }
                            {IMAGESIZES.findIndex(size => size == selectedAspect) == 3 && <Logo isDrag={true} setAllLogoPosInfo={setAllLogoPosInfo} allLogoPosInfo={allLogoPosInfo} sizeIndex={3} />
                            }
                        </div>
                            :
                            <div className="add-img-container">
                                <i className="fa fa-image" style={{ color: "rgb(76, 150, 235)", fontSize: "30px" }}></i>
                                <p>عکس یا ویدیو خود را بکشید اینجا</p>
                                <label htmlFor="img-upload">از کامپیوتر خود انتخاب کنید</label>
                                <input type="file" name="" id="img-upload" accept="image/*" style={{ display: "none" }} onChange={onImageUpload} />
                            </div>)
                            :
                            <p className="choose-size-text">سایز عکس خود را انتخاب کنید</p>
                        }
                    </div>
                    <div className="img-size-container">
                        <div className={`add-img ${allSizeImage.findIndex(img => img != "") != -1 && "active"}`} onClick={addImage}>
                            <i className="fa fa-image"></i>
                            <i className="fa fa-plus" style={{ fontSize: "12px" }}></i>
                        </div>
                        <div className={`img-sizes ${selectedAspect == IMAGESIZES[0] && "selected"} ${allSizeImage[0] && "green-border"}`} onClick={() => handleImageSize(IMAGESIZES[0])}>1:1</div>
                        <div className={`img-sizes ${selectedAspect == IMAGESIZES[1] && "selected"}  ${allSizeImage[1] && "green-border"}`} onClick={() => handleImageSize(IMAGESIZES[1])}>9:16</div>
                        <div className={`img-sizes ${selectedAspect == IMAGESIZES[2] && "selected"}  ${allSizeImage[2] && "green-border"}`} onClick={() => handleImageSize(IMAGESIZES[2])}>16:9</div>
                        <div className={`img-sizes ${selectedAspect == IMAGESIZES[3] && "selected"}  ${allSizeImage[3] && "green-border"}`} onClick={() => handleImageSize(IMAGESIZES[3])}>4:5</div>
                    </div>
                </div>
                <ImagesList allUploadedImages={allUploadedImages} setAllUploadedImages={setAllUploadedImages} isShowDeleteBtn={true} />
            </div>

        </>
    )
}