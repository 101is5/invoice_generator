// import "./ClientInfo.css"

export default function ClientInfo(props) {
    return (
        <div id="clientInfo">
            <h3>Client: </h3>
            <div id="clientFormDiv">
                <form action="">
                    <label className="form-label" htmlFor="clientname">Name: </label>
                    <input className="form-control form-control-sm" id="clientname"></input>
                    <label className="form-label" htmlFor="address">Address </label>
                    <input className="form-control form-control-sm" id="address"></input>
                    <label className="form-label" htmlFor="state">State</label>
                    <input className="form-control form-control-sm" id="state"></input>
                    <label className="form-label" htmlFor="country">Country</label>
                    <input className="form-control form-control-sm" id="country"></input>
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input className="form-control form-control-sm" id="phone"></input>
                    <label className="form-label" htmlFor="email">E-mail</label>
                    <input className="form-control form-control-sm" id="email"></input>
                </form>

            </div>
        </div>
    )
}