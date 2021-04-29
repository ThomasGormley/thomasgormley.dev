import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object({
    email: Yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    name: Yup.string('Enter your name').required('name is required'),
    message: Yup.string('Enter your message')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});
const initialValues = {
    email: '',
    name: '',
    message: '',
};

const TextField = ({ field, form, ...props }) => (
    <input
        type="text"
        {...field}
        {...props}
        className="inline-block w-full px-1 py-2 text-sm transition duration-200 bg-gray-900 border border-gray-800 rounded shadow-inner outline-none hover:border-gray-700 focus:border-primary-400 focus:drop-shadow-twitter focus:ring focus:ring-primary-400 focus:ring-opacity-10 "
    />
);
const Contact = () => (
    <section className="px-4 py-4 mx-auto text-gray-50">
        <div className="mx-auto">
            <h1 className="text-3xl font-semibold ">Contact</h1>
            {/* <p className="text-gray-400">Get in touch with the form below</p> */}
        </div>

        <Formik validationSchema={validationSchema} initialValues={initialValues}>
            {({ isSubmitting }) => (
                <Form className="my-6">
                    <div className="flex space-x-4">
                        <div className="w-full">
                            <label htmlFor="name" className="text-sm font-bold leading-tight text-gray-500 uppercase">
                                Name
                            </label>
                            <Field type="text" name="name" component={TextField} />
                            <ErrorMessage name="name" component="div" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email">Email Address</label>

                            <Field type="email" name="email" component={TextField} />
                            <ErrorMessage name="email" component="div" />
                        </div>
                    </div>

                    {/* <Field type="email" name="email" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" /> */}
                    {/* <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button> */}
                </Form>
            )}
        </Formik>
    </section>
);

export default Contact;
