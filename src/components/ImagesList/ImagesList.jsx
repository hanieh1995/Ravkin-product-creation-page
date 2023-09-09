/* eslint-disable react/prop-types */
import "./ImagesList.css";
import close from "../../assets/img/close.png";

export default function ImagesList({ allUploadedImages, setAllUploadedImages }) {

    function deleteImage(i) {
        const newArray = [...allUploadedImages];
        newArray.splice(i, 1);
        setAllUploadedImages(newArray);
    }

    return (
        <>
            <div className="uploaded-images-container">
                {allUploadedImages.length != 0 &&

                    allUploadedImages.map((image, i) => {
                        return (
                            <div key={i} className="image-container">
                                <img src={close} alt="" className="close-btn" onClick={() => deleteImage(i)} />
                                <img src={image.url} alt="" className="choosen-img" style={{ aspectRatio: image.aspect }} />
                            </div>
                        )
                    })
                }
            </div>
        </>


    )
}