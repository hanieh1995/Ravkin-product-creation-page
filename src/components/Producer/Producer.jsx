import "./Producer.css";
import user from "../../assets/img/user-img.png";

 
export default function Producer({setOpenNewAlbumPopup}) {
    return (
        <div className="producer-container">
            <div className="btns-container">
                <i className="fa fa-close"></i>
                <button type="button" onClick={() => setOpenNewAlbumPopup(true)}>ایجاد آلبوم</button>
            </div>
            <div className="info-container">
                <div className="details">
                    <div>نام تولید کننده</div>
                    <div>نام کاربری</div>
                </div>
                <img src={user} alt="user" />
            </div>
        </div>
    )
}