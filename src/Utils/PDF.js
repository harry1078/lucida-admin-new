import React from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import OfferLetter from "../Templates/OfferLetter"
import "./pdf.css"
import Button from "../UI/Button"

const PDF = () => {
    const printDocument = () => {
        const input = document.getElementById("offer-letter-container");
        console.log(input);
        html2canvas(input, {
            onclone: (pdfument) => {
                pdfument.getElementById("divToDownload").style.visibility = "hidden";
            },

        }).then((canvas) => {
            var doc = new jsPDF('p', 'mm' );
            var imgData = canvas.toDataURL('image/png');
            var imgWidth = doc.internal.pageSize.width;
            var pageHeight = doc.internal.pageSize.height;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;

            
            var position = 0;

            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            doc.save("offer letter");
        })
    }


    return (
        // <div id="pdfclass" className="container offer-letter-container">
        //     <Button className="preview-button" id="divToPrint" onClick={printDocument}>
        //         Download
        //     </Button>
        //     <OfferLetter />
        // </div>
        <div className="preview-content">
          <div className="preview-outer-container">
            <div id="container-to-print" className="container-to-print">
              <Button
                id="divToDownload"
                className="preview-button"
                onClick={printDocument}
              >
                Download
              </Button>
              <OfferLetter />
            </div>
          </div>
        </div>
    )
}

export default PDF;