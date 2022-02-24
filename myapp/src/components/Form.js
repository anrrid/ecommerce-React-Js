import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useContexto } from "../context/CartContext"
import "./Form.css";
import Button from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card'


const Form = () => {
    const { cart, cleanCart, totalPrice } = useContexto();

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

    const send = (data, e) => {
        const salesCollection = collection(db, "sales");
        addDoc(salesCollection, {
            buyer: {
                name: data.name,
                email: data.email,
                telephone: data.telephone,
            },
            items: cart,
            date: serverTimestamp(),
            total: totalPrice,
        }).then((result) => {
            setIdSale(result.id);
            setName(data.name);
            setEmail(data.email);
            setPhone(data.telephone);

            setcompletepurchase(false);
            cleanCart();
        });

        console.log(idSale, name, email)
    };

    return (
        <Card style={{ margin: "1rem", width: "40%" }}>
            {completepurchase ? (
                <form onSubmit={handleSubmit(send)}>
                    <h4>Shipping options</h4>
                    <div className="form-group">
                        <label htmlFor="nombre">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            placeholder="Nombre"
                            {...register("nombre", {
                                required: { value: true, message: "Exclusive with name" },
                                minLength: {
                                    value: 3,
                                    message: "The name must have at least 3 characters",
                                },
                            })}
                        />

                        <span className="text-danger">
                            {errors?.nombre?.message}
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
                            {errors?.telefono?.message}
                        </span>
                    </div>
                    <Button style={{ margin: "1rem" }}>Checkout</Button>
                </form>
            ) : (
                <div>
                    <h4>Purchase information</h4>
                    <p>Sale ID: {idSale}</p>
                    <p>Name: {name}</p>

                    <p>Email: {email}</p>

                    <p>Telephone: {phone}</p>
                </div>
            )}
        </Card>
    );
};

export default Form;
