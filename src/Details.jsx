export default function Details(props) {
    return (
        <div>
            <form id="details" action="">
                <label className="form-label" htmlFor="number">Invoice Nº: </label>
                    <input className="form-control form-control-sm" id="number" type="text"></input>
                <label className="form-label" style={{ marginLeft: '10px' }} htmlFor="date">Date: </label>
                    <input className="form-control form-control-sm" id="date" type="date"></input>
            </form>
        </div>
    )
}
