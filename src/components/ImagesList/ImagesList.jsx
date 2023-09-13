/* eslint-disable react/prop-types */
import "./ImagesList.css";
import close from "../../assets/img/close.png";
import IMAGESIZES from "../../assets/CONSTANTS";

export default function ImagesList({ imageListIndex, editImagePage, setImageListIndex, setSelectedAspect, setUploadedImage, allSizeImage, setAllSizeImage, setAllLogoPosInfo, allLogoPosInfo, allUploadedImages, setAllUploadedImages, isShowDeleteBtn, setSelectedImage }) {

    function deleteImage(i) {
        const newArray = [...allUploadedImages];
        newArray.splice(i, 1);
        setAllUploadedImages(newArray);
        if (imageListIndex > i) {
            let newImageListIndex = imageListIndex - 1;
            setImageListIndex(newImageListIndex);
        } else if (imageListIndex == i) {
            setUploadedImage(null)
            const allSizes = ["", "", "", ""];
            const allLogoPos = [...allLogoPosInfo];
            setAllSizeImage(allSizes);
            setAllLogoPosInfo(allLogoPos);
            setSelectedAspect("");
            setImageListIndex(null);
        }
    }

    function showSelectedImage(i, aspectI) {
        if (editImagePage) {
            const allSizes = ["", "", "", ""];
            const allLogoPos = [...allLogoPosInfo];
            allUploadedImages[i].allImages.map((image) => {
                allSizes[image.aspectIndex] = image.url;
                allLogoPos[image.aspectIndex] = image.logo;
            })
            setSelectedAspect(IMAGESIZES[aspectI]);
            setUploadedImage(allUploadedImages[i].allImages[0].url);
            setAllSizeImage(allSizes);
            setAllLogoPosInfo(allLogoPos);
            setImageListIndex(i);
        } else {
            setSelectedImage({ url: allUploadedImages[i].allImages[0].url, aspect: IMAGESIZES[aspectI], index: i });
        }




    }

    return (
        <>
            <div className="uploaded-images-container">
                {allUploadedImages.length != 0 &&

                    allUploadedImages.map((imageList, i) => {
                        return (
                            imageList.allImages.length != 0 && <div key={i} className={`image-container ${allUploadedImages[i].saleOption && allUploadedImages[i].price && "active"}`}>
                                {isShowDeleteBtn && <img src={close} alt="" className="close-btn" onClick={() => deleteImage(i)} />}
                                <img src={imageList.allImages[0].url} alt="" className="choosen-img" style={{ aspectRatio: IMAGESIZES[imageList.allImages[0].aspectIndex] }} onClick={() => showSelectedImage(i, imageList.allImages[0].aspectIndex)} />
                            </div>
                        )
                    })
                }
            </div>
        </>


    )
}