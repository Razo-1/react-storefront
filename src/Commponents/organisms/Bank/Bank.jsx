import { useContext, useState } from "react"
import { Context } from "../../../App/Context"
import './Bank.css'

function Bank({elem,isActiv}){

    let {bank,month} =  useContext(Context)
    let [procent,setProcent] = useState(18.5)
    let [payment,setPayment] = useState({})
    let [paymentList,setPaymentList] = useState([])

    let item = elem[0] || []

    let choose = (e) => {
        let proc = bank.find(el => el.bank === e.target.value).percent
        setProcent(proc)
        
    }
    let choosePeriod = (e) => {
        let pay = {period : Number(e.target.value),Adv : 0}
        setPayment(pay)
        
    }

    let chooseAdvancePayment = (e) => {
        setPayment({...payment,Adv : Number(e.target.value)})
    }
    let Calculate = () => {
        let numPer = item.price + (item.price * procent / 100)
        let mon = Array.from( {length : payment.period}, (el,ind) => ind + 1)
        let onlyPercentage = (numPer - item.price) / payment.period
        let onlyOriginalNum = item.price / payment.period
        let all = onlyPercentage + onlyOriginalNum
        setPaymentList([{numPer,mon,onlyPercentage,onlyOriginalNum,all}])        
    }

    return(
            <div className={isActiv ? 'on' : ''}>
                <div className="credit">
                    <h1>{item.title}</h1> 
                    <p>Credit price: {item.price} USD</p>
                    <hr />
                    <div>
                        <h3>Annual interest rate</h3>
                        <p>{procent}</p>
                        <select  onChange={(e) => choose(e)}>
                            {bank.map((el,ind) => <option key={ind}>{el.bank}</option>)}
                        </select>
                    </div>
                    <div>
                        <h3>Period (months)</h3>
                            <select onChange={(e) => choosePeriod(e)}> 
                                {month.map(mo => <option key={mo}>{mo}</option>)}
                            </select>  
                            <h3>Advance payment (USD)</h3>  
                            <input type="number" value={payment.Adv || 0}  onChange={(e) => chooseAdvancePayment(e)}/>                 
                    </div>
                    <button onClick={Calculate}>Calculate</button>


                    <div>
                        <ul className="system"> 
                            <li>
                                <p>Months</p>
                                <p>Interest</p>
                                <p>Principle amount</p>
                                <p>Total Fee Payable</p>
                            </li>
                            {paymentList[0]?.mon.map(el => (
                                <li key={el}>
                                    <p>{el}</p>
                                    <p>{paymentList[0].onlyPercentage}</p>
                                    <p>{paymentList[0].onlyOriginalNum}</p>
                                    <p>{paymentList[0].all}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
            </div>
    )
    
}

export { Bank }