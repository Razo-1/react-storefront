import { Formik,Form } from 'formik'
import { Input } from '../../molecules'
import { useContext } from 'react';
import { Context } from '../../../App/Context';
import './Login.css'

function Login(){
    let { initalValue,schema } = useContext(Context)
    

    return(
        <div className='Login'>
            <Formik
                initialValues={initalValue}
                validationSchema={schema}
                onSubmit={() => console.log('Succest')}
                >
                <Form>
                    <Input
                    label='Name'
                    name='firstName'
                    placeHolder='Enter your name...'
                    />
                    <Input
                    label='Second Name'
                    name='lastName'
                    placeHolder='Enter your Second Name...'
                    />
                    <Input
                    label='Password'
                    name='password'
                    placeHolder='Enter your password...'
                    />
                    <Input
                    label='Confirm Password'
                    name='confirmpassword'
                    placeHolder='confirm password...'
                    />
                    <Input
                    label='email'
                    name='email'
                    placeHolder='Enter your email...'
                    />
                    <button className='submit' type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export { Login }