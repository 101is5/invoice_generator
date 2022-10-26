export default function PrintPDF(props) {

    return (
        <div>
            <button id="pdfButton" className="btn btn-primary btn-lg" onClick={() => window.print()}>
                Download PDF
            </button>
        </div>
    )
}