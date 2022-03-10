import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useContexto } from "../context/CartContext"
import "./Form.css";



const Form = () => {
    const { cleanCart } = useContexto();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [phone, setPhone] = useState("");

    const [idSale, setIdSale] = useState("");

    const [completepurchase, setcompletepurchase] = useState(true);

    const send = async (data) => {

        const salesCollection = await addDoc(collection(db, "sales"), {

            name: data.name,
            email: data.email,
            telephone: data.telephone,

            date: serverTimestamp(),

        }).then((result) => {
            setIdSale(result.id);
            setName(data.name);
            setEmail(data.email);
            setPhone(data.telephone);

            setcompletepurchase(false);
            cleanCart();
        });

        console.log("Document written with ID: ", salesCollection.id);
    };

    return (
        <div style={{ margin: "1rem", width: "40%" }}>
            {completepurchase ? (
                <form onSubmit={handleSubmit(send)}>
                    <h4>Shipping options</h4>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Name"
                            {...register("name", {
                                required: { value: true, message: "Exclusive with name" },
                                minLength: {
                                    value: 3,
                                    message: "The name must have at least 3 characters",
                                },
                            })}
                        />

                        <span className="text-danger">
                            {errors?.name?.message}
                        </span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            {...register("email", {
                                required: { value: true, message: "Exclusive with email" },
                                minLength: {
                                    value: 3,
                                    message: "The email is invalid",
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "The email is correct!",
                                },
                            })}
                        />

                        <span className="text-danger text-small d-block mb-2">
                            {errors?.email?.message}
                        </span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="telephone">Telephone</label>
                        <input
                            type="number"
                            className="form-control"
                            name="telephone"
                            placeholder="Telephone"
                            {...register("telephone", {
                                required: {
                                    value: true,
                                    message: "Exclusive with telephone",
                                },
                                minLength: {
                                    value: 3,
                                    message: "The Telephone is invalid",
                                },
                            })}
                        />

                        <span className="text-danger text-small d-block mb-2">
                            {errors?.telephone?.message}
                        </span>
                    </div>
                    <button className="btn-checkout">Checkout</button>
                </form>
            ) : (
                <div className="purchase-Info">
                    <h4>Purchase information</h4>
                    <p>Sale ID: {idSale}</p>
                    <p>Name: {name}</p>

                    <p>Email: {email}</p>

                    <p>Telephone: {phone}</p>
                </div>
            )}
        </div>
    );
};

export default Form;
