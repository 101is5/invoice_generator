import Head from "./Head"
import Details from "./Details"
import CompanyInfo from "./CompanyInfo"
import ClientInfo from "./ClientInfo"
import Table from "./Table"
import Footer from "./Footer"
import PDFButton from "./PDFButton"

import "./App.css"

// pending:
// - implement table calculations "total"
// - show selected logo picture for printing
// - hide file input for printing

export default function App(props) {
    return (
        <div id="invoice">
            <Head />
            <div id="fields">
                <Details />
                <div id="company_client">
                    <CompanyInfo />
                    <ClientInfo />
                </div>
                <Table />
                <Footer />
                <PDFButton />
            </div>
        </div>
    )
}