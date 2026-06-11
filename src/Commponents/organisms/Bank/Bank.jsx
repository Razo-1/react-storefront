import { useContext, useState } from "react"
import { Context } from "../../../App/Context"
import './Bank.css'

function Bank({elem,isActiv,setIsActiv}){

    let {bank,month} =  useContext(Context)
    let [procent,setProcent] = useState(18.5)
    let [payment,setPayment] = useState({ period: 0, Adv: 0 })
    let [paymentList,setPaymentList] = useState(null)

    let item = elem[0] || {}

    let choose = (e) => {
        let proc = bank.find(el => el.bank === e.target.value).percent
        setProcent(proc)
        
    }
    let choosePeriod = (e) => {
        setPayment({...payment,  period : Number(e.target.value)})
    }

    let chooseAdvancePayment = (e) => {
        setPayment({...payment,Adv : Number(e.target.value)})
    }

    let calculate = () => {
        if(!payment.period) return

        let numPer = item.price + (item.price * procent / 100)
        let mon = Array.from( {length : payment.period}, (el,ind) => ind + 1)
        let onlyPercentage = (numPer - item.price) / payment.period
        let onlyOriginalNum = item.price / payment.period
        let all = onlyPercentage + onlyOriginalNum
        setPaymentList({numPer,mon,onlyPercentage,onlyOriginalNum,all})        
    }

    let closeBank = (e) => {
        e.target.className === 'on' ? setIsActiv(false) : ''
    }

   return (
    <div onClick={(e) => closeBank(e)} className={isActiv ? 'on' : ''}>
        <div className={`credit ${isActiv ? '' : 'off'}`}>

            <div className="credit-header">
                <h1>{item.title}</h1>
                <div className="price-tag">Credit price: {item.price} USD</div>
            </div>

            <div className="credit-body">
                <div className="fields-row">
                    <div className="field-group">
                        <h3>Annual interest rate</h3>
                        <select defaultValue="" onChange={choose}>
                            <option value="" disabled>Choose bank</option>
                            {bank.map((el, ind) => <option key={ind}>{el.bank}</option>)}
                        </select>
                    </div>
                    <div className="field-group">
                        <h3>Rate</h3>
                        <div className="rate-badge">{procent}%</div>
                    </div>
                </div>

                <div className="fields-row">
                    <div className="field-group">
                        <h3>Period (months)</h3>
                        <select defaultValue="" onChange={choosePeriod}>
                            <option value="" disabled>Choose period</option>
                            {month.map(mo => <option key={mo}>{mo}</option>)}
                        </select>
                    </div>
                    <div className="field-group">
                        <h3>Advance payment (USD)</h3>
                        <input type="number" value={payment.Adv} onChange={chooseAdvancePayment}/>
                    </div>
                </div>

                <button className="btn-calculate" onClick={calculate}>Calculate</button>

                <ul className="system">
                    <li className="header">
                        <p>#</p>
                        <p>Interest</p>
                        <p>Principal</p>
                        <p>Total</p>
                    </li>
                    {paymentList?.mon.map(el => (
                        <li key={el}>
                            <p>{el}</p>
                            <p>{paymentList.onlyPercentage.toFixed(2)}</p>
                            <p>{paymentList.onlyOriginalNum.toFixed(2)}</p>
                            <p>{paymentList.all.toFixed(2)}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </div>
)
}
export { Bank }