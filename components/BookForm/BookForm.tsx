import { createBookCar } from "@/services/carService";
import { Field, Form, Formik, FormikHelpers } from "formik";

interface BookFormValues {
  name: string;
  email: string;
  comment:string,
}

const initialValues: BookFormValues = {
  name: "Name*",
  email: "Email*",
  comment: "Comment"
};

type IdProps = {
  carId: string;
};

export default function BookForm({carId}:IdProps) {
    const handleSubmit = async (values: BookFormValues, actions: FormikHelpers<BookFormValues>) => {
        try {
            const data = await createBookCar(carId, values);
            actions.resetForm();
        } catch (error) {
            console.log(error);
        }
        
    };
    return (
        <Formik
            initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <Field type="text" name="name" />
                <Field type="email" name="email" />
                <Field type="textarea" name="comment" />
                <button type="submit">Send</button>
            </Form>
        </Formik>
    )
}