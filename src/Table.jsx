import { useState } from "react"
// import "./Table.css"

export default function Table(props) {

    let row = <>
        <td><input type="text" className="form-control form-control-sm"></input></td>
        <td><input type="text" className="form-control form-control-sm"></input></td>
        <td><input type="text" className="form-control form-control-sm"></input></td>
        <td><input type="text" className="form-control form-control-sm"></input></td>
        <td><input type="text" className="form-control form-control-sm"></input></td>
    </>

    const [rows, setNewRow] = useState([row])

    const updateRows = () => {
        setNewRow([...rows, row])
        // setNewRow(rows.concat(row))
        // .push() doesn't work because it returns the pushed value, not the
        // resulting array.
        // .concat() returns void and changes the array in place, thus redefining
        // the value of "rows" to the incremented array
    }

    return (
        <div id="invoiceTable">
            <table id="table">
                <tbody>
                    <tr className="tableHeaders">
                        <th id="item">Item</th>
                        <th id="desc">Description</th>
                        <th id="qtty">Quantity</th>
                        <th id="unit">Unit Price</th>
                        <th id="amnt">Amount</th>
                    </tr>
                    {rows.map((row, i) =>
                        <tr key={i}>
                            {row}
                        </tr>)}
                </tbody>
            </table>
            <button id="tableButton" className="btn btn-primary btn-sm" onClick={updateRows}>+</button>
        </div>
    )
}