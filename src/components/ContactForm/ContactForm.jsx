import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useId } from "react";
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
    const initValues = {
        name:'',
        number:'',
    };

    const validationSchema = Yup.object({
        name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
        number: Yup.string()
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number must be less than 50 characters')
    .required('Number is required'),
    });

    const handleSubmit = (values, { resetForm }) => {
    const newContact = {
        id: nanoid(),
            name: values.name,
        number: values.number,
    };
    onSubmit(newContact);
    resetForm();
};

    return (
        <Formik
            initValues={initValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={css.form}>
<label htmlFor="name">Name:</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage name="name" component="div" className={css.error} />

        <label htmlFor="number">Number:</label>
        <Field id="number" name="number" type="text" />
        <ErrorMessage name="number" component="div" className={css.error} />

        <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm