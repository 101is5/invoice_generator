import { useState } from "react"

export default function CompanyInfo(props) {


    const [logo, setLogo] = useState("")

    return (
        <div id="companyInfo">
            <span id="companyLogo">
                <h3>Company: </h3>
                {logo ? 
                <img id="logoImg" alt="" width="10%" height="10%" src={logo}></img>:
                null
                }
            </span>
            <div id="companyFormDiv">
                <form action="">
                    <label id="logoId" className="form-label" htmlFor="logo">Logo: </label>
                    <input id="logo" className="form-control form-control-sm" type="file"
                        onInput={
                            e => e.target.files.length? 
                            setLogo(URL.createObjectURL(e.target.files[0])):
                            null
                        }
                    />
                    <label className="form-label" htmlFor="companyname">Name: </label>
                    <input id="companyname" className="form-control form-control-sm"></input>
                    <label className="form-label" htmlFor="address">Address </label>
                    <input id="address" className="form-control form-control-sm"></input>
                    <label className="form-label" htmlFor="state">State</label>
                    <input id="state" className="form-control form-control-sm"></input>
                    <label className="form-label" htmlFor="country">Country</label>
                    <input id="country" className="form-control form-control-sm"></input>
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input id="phone" className="form-control form-control-sm"></input>
                    <label className="form-label" htmlFor="email">E-mail</label>
                    <input id="email" className="form-control form-control-sm"></input>
                </form>
            </div>
        </div>
    )
}