export default function Footer(props){
    return(
        <div id="footer">
            <label id="dueLabel" htmlFor="due">Due date: </label>
            <input className="form-control form-control-sm" id="due" type="date"></input>
            <label id="payLabel" htmlFor="paymethod">Payment Method: </label>
            <select className="form-control form-control-sm" id="pay">
                <option value="credit_card">Credit Card</option>
                <option value="wire_transfer">Wire Transfer</option>
                <option value="crypto">Crypto</option>
                <option value="cash">Cash</option>
            </select>
        </div>
    )
}