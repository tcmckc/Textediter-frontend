import jsPDF from 'jspdf';
import docsModel from '../models/docs';
//import pdfExporter from 'quill-to-pdf';
//import saveAs from 'file-saver';
import 'canvas';


export const PdfBtn = (props) => {
    const handlePdf = () => {
        const htmlText = props.props.value;
        const name = props.props.name;
        const pdfDoc = new jsPDF();

        pdfDoc.html(htmlText, {
            x: 10,
            y: 10,
            useCss: true,
            callback: () => {
                pdfDoc.save(name);
            }
        });

        docsModel.pdfDoc();
    };

    return (
        <div>
            <button className="exportButton" onClick={handlePdf}>EXPORT PDF</button>
		</div>

    );
};

export default PdfBtn;
