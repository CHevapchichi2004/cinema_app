import './Form.css'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import useHttp from '../../httpHook/httpHook'
import { useDispatch, useSelector } from 'react-redux'
import {v4 as idgen} from 'uuid'
import { formCongrats, formError, formShow } from '../../actions/actions'
const OrderForm = () => {
    const [, , , , postOrder, err, loading] = useHttp()
    const order = useSelector((state) => state.order)
    const form = useSelector((state) => state.form)
    const dispatch = useDispatch()
    return (
    <><div className="form_lay">
        </div>
        <div className="form_body">
            <div className="form_closeBtn" onClick={() => {
                dispatch(formShow())
                console.log(form.show)
            }}></div>
            <h1>Order</h1>
        <Formik 
        initialValues = {{
            name: '',
            email: '',
            phone: '',
            payment: 'Visa bank card',
            cardNO: '',
        }} 
        validationSchema={Yup.object().shape({
            name: Yup.string().required('Name field is required').max(20, '20 is max').min(2, '2 is minimal'),
            email:  Yup.string().email('Please, write a correct Email adress'),
            phone: Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'its valid?'),
            cardNO: Yup.string().length(16, '16 is right')
        })}
        onSubmit={(values) => {
            const data = {
                id: idgen(),
                ...values,
                time: order.curTime,
                date: order.curDate,
                seats: order.choosedSeats,
            }
            postOrder(JSON.stringify(data)).then(() => dispatch(formCongrats()))
            
        }}>

            {({values, errors, touched}) => (<Form className='form'>

                <div className="form_fieldWrap">
                    <h2>Name and Surname</h2>
                    <Field className='form_field' name='name' type='text' value={values.name}/>
                    <div className='form_error'>{errors.name && touched.name ? errors.name : null}</div>
                </div>

                <div className="form_fieldWrap">
                    <h2>Email</h2>
                    <Field className='form_field' name='email' type='email'/>
                    <div className='form_error'>{errors.email && touched.email ? errors.email: null}</div>
                </div>

                <div className="form_fieldWrap">
                    <h2>Phone</h2>
                    <Field className='form_field' name='phone' type='tel' />
                    <div className='form_error'>{errors.phone && touched.phone ? errors.phone : null}</div>
                </div>
                <div className="form_fieldWrap">
                    <h2>Payment</h2>
                    <Field className='form_field' name='cardNO'/>
                    <div className='form_error'>{errors.cardNO && touched.cardNO ? errors.cardNO : null}</div>
                    <Field className='form_field' name='payment' as='select'>
                        <option value='Visa bank card'>Visa bank card</option>
                        <option value='MasterCard'>Mastercard</option> 
                    </Field>
                </div>

                <button className='form_btn' type='submit'>purchase</button>

            </Form>)}

        </Formik>
                
        </div>
    </>
    )
}

export default OrderForm