import { Field} from 'formik'
import './Input.css'

function Input({label,name,placeHolder}){

    return(
        <div className='field-wrapper'>
            <label>{label}</label>
            <Field name={name} placeHolder={placeHolder}>
                {({field,meta}) => (
                    <>
                        <input {...field} placeHolder={placeHolder} className={meta.touched && meta.error ? 'input-error' : ''}/>
                        {meta.touched && meta.error && <span>{meta.error}</span>}
                    </>
                    
                )}
            </Field>
        </div>
    )
}

export { Input }