/* eslint-disable react/prop-types */
import "./ImagesList.css";
import close from "../../assets/img/close.png";

export default function ImagesList({ allUploadedImages, setAllUploadedImages, isShowDeleteBtn, setSelectedImage }) {

    function deleteImage(i) {
        const newArray = [...allUploadedImages];
        newArray.splice(i, 1);
        setAllUploadedImages(newArray);
    }

    function showSelectedImage(i){
        if(!isShowDeleteBtn) setSelectedImage({url:allUploadedImages[i].url, index:i});
    }

    return (
        <>
            <div className="uploaded-images-container">
                {allUploadedImages.length != 0 &&

                    allUploadedImages.map((image, i) => {
                        return (
                            <div key={i} className={`image-container ${ allUploadedImages[i].saleOption && allUploadedImages[i].price && "active"}`}>
                                {isShowDeleteBtn && <img src={close} alt="" className="close-btn" onClick={() => deleteImage(i)} />}
                                <img src={image.url} alt="" className="choosen-img" style={{ aspectRatio: image.aspect }} onClick={() => showSelectedImage(i)}/>
                            </div>
                        )
                    })
                }
            </div>
        </>


    )
}