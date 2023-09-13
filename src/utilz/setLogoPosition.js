/* eslint-disable no-unused-vars */
export default function setPosition(logo, image) {
    let logoXposition = Math.floor(logo.getClientRects()[0].x);
    let logoYposition = Math.floor(logo.getClientRects()[0].y);
    let logoWidth = Math.floor(logo.getClientRects()[0].width);
    let logoHeight = Math.floor(logo.getClientRects()[0].height);

    let imageWidth = image.getClientRects()[0].width;
    let imageHeight = Math.floor(image.getClientRects()[0].height);
    let imageXposition = Math.floor(image.getClientRects()[0].x);
    let imageYposition = Math.floor(image.getClientRects()[0].y);

    let finalX = ((logoXposition - imageXposition) / imageWidth) * 100;
    let finalY = (((logoYposition - imageYposition) / imageHeight)) * 100;
    let finalWidth = (logoWidth / imageWidth) * 100;
    let finalHeight = ((logoHeight / imageHeight)) * 100;


    const finalLocationInfo = { x: finalX, y: finalY, width: finalWidth, height: finalHeight };

    return finalLocationInfo;

}