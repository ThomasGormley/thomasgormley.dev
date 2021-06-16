import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string().email('Please enter a valid email').required('Please enter your email'),
    name: Yup.string().required('Please enter your name'),
    message: Yup.string().required('Please enter your message'),
});
const initialValues = {
    email: '',
    name: '',
    message: '',
};

const sendEmailToAPI = async ({ email, name, message }) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, message }),
    };

    const response = await fetch('/api/contact', requestOptions);

    if (!response.ok) throw new Error(response.statusText);

    return response.json();
};

const onSubmit = async ({ email, name, message }, { setSubmitting, setErrors, setStatus, resetForm }) => {
    try {
        await sendEmailToAPI({ email, name, message });
        resetForm({});
        setStatus({ success: true });
    } catch (error) {
        setStatus({ success: false });
        setSubmitting(false);
        setErrors({ submit: error.message });
    }
};

const TextField = ({ field, form, ...props }) => {
    const isError = form.errors[field.name] && form.touched[field.name] && form.submitCount;
    return (
        <>
            <input
                type="text"
                {...field}
                {...props}
                className={`${
                    isError ? 'border border-red-400 ring-2 ring-red-400 ring-opacity-10 ' : ''
                } inline-block w-full px-1 py-2 text-sm transition duration-200 bg-gray-900 border border-gray-800 rounded shadow-inner outline-none hover:border-gray-700 focus:border-primary-400 focus:drop-shadow-twitter focus:ring focus:ring-primary-400 focus:ring-opacity-10  `}
            />
            {!!form.submitCount && (
                <ErrorMessage name={field.name} component="span" className="py-2 text-sm text-red-400 " />
            )}
        </>
    );
};
const TextAreaField = ({ field, form, ...props }) => {
    const isError = form.errors[field.name] && form.touched[field.name];
    return (
        <>
            <textarea
                {...field}
                {...props}
                className={`${
                    isError ? 'border border-red-400 ring-2 ring-red-400 ring-opacity-10 ' : ''
                } inline-block w-full min-h-[4rem] px-1 py-2 text-sm transition duration-200 bg-gray-900 border border-gray-800 rounded shadow-inner outline-none hover:border-gray-700 focus:border-primary-400 focus:drop-shadow-twitter focus:ring focus:ring-primary-400 focus:ring-opacity-10 `}
            />
            {!!form.submitCount && (
                <ErrorMessage name={field.name} component="span" className="py-2 text-sm text-red-400 " />
            )}
        </>
    );
};

const Contact = () => (
    <section className="px-4 py-4 mx-auto mb-6 text-gray-50" id="contact">
        <div className="mx-auto">
            <h1 className="text-3xl font-semibold ">Contact</h1>
            {/* <p className="text-gray-400">Get in touch with the form below</p> */}
        </div>

        <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
            {({ isSubmitting, errors, status }) => (
                <Form className="my-6">
                    <div className="space-y-3">
                        <div className="flex space-x-4">
                            <div className="w-full">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-bold leading-tight text-gray-500 uppercase"
                                >
                                    Name
                                </label>
                                <Field type="text" name="name" component={TextField} />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-bold leading-tight text-gray-500 uppercase"
                                >
                                    Email Address
                                </label>
                                <Field type="email" name="email" component={TextField} />
                            </div>
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="message"
                                className="text-sm font-bold leading-tight text-gray-500 uppercase"
                            >
                                Message
                            </label>
                            <Field name="message" rows="5" component={TextAreaField} />
                        </div>
                    </div>

                    <div className="float-right">
                        {errors?.submit ? (
                            <>
                                <span className="block text-right">Something wen&apos;t wrong.</span>
                                <span>
                                    Please contact me directly via email:{' '}
                                    <a
                                        href="mailto:me@thomasgormley.dev"
                                        className="border-b text-primary-400 border-primary-400"
                                    >
                                        me@thomasgormley.dev
                                    </a>
                                </span>
                            </>
                        ) : status?.success ? (
                            <span className="text-sm text-gray-300">
                                {`Thanks for your message! I will reply via email as soon as possible.`}
                            </span>
                        ) : (
                            <button
                                type="submit"
                                className="inline-block w-full px-3 py-2 text-sm transition duration-200 bg-gray-900 border border-gray-800 rounded shadow-inner focus:outline-none hover:border-gray-700 focus:border-primary-400 focus:ring focus:ring-primary-400 focus:ring-opacity-10"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        )}
                    </div>
                </Form>
            )}
        </Formik>
    </section>
);

export default Contact;
