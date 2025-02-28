import React, { useState } from "react";
import { getEvn } from '@/helpers/getEnv'
import { showToast } from '@/helpers/showToast'
import { useFetch } from "@/hooks/useFetch";
import Loading from '@/components/Loading'
import { useParams } from 'react-router-dom';

const currency_sign = "$";
const default_amount = 5;
const min_amount = 1; // minimo valor a donar
const max_amount = 999999;
const payment_types = [
  { name: "one-time", mode: "payment", interval: "", },
  {  name: "monthly", mode: "subscription", interval: "month",},
  {  name: "yearly",mode: "subscription", interval: "year", },
];

function PaymentForm() {

  const [amount, setAmount] = useState(default_amount.toFixed(2)); //monto de pago seleccionado
  const [isOther, setOther] = useState(false); //monto personalizado
  const [paymentType, setPaymentType] = useState(payment_types[0]); //Almacena el tipo de pago (único, mensual o anual)
  const [isSubmit, setSubmit] = useState(false);

  const { id } = useParams(); // Obtén el id desde la URL
  const [refreshData, setRefreshData] = useState(false)
      const { user } = useFetch(`${getEvn('VITE_API_BASE_URL')}/user/get-user/${id}`, { // /get-user/:userid
          method: 'get',
          credentials: 'include'
      }, [refreshData])
      if (!user) {
        return <Loading />; 
    }
    console.log("Usuario obtenido:", user);

  const setPaymentAmount = (am) => { //monto esté dentro del rango permitido.
    if (am < min_amount) {
      am = min_amount;
    } else if (am > max_amount) {
      am = max_amount;
    }
    setAmount(parseFloat(am).toFixed(2));
  };

  const { data, loading, error } = useFetch(`${getEvn('VITE_API_BASE_URL')}/create-checkout-session/payment/${id}`, { ///create-checkout-session/payment
    method: "POST",
    credentials: "include", // las cookies se envíen
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      amount, mode: 
      paymentType.mode, 
      interval: paymentType.interval ,userId:  user.userid  
    }),
  }, [amount, paymentType]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmit(true);
    if (data) {
      window.location.replace(data);
    }
  };

  function AmountButton({ value }) {
    return (
      <button
        type="button"
        onClick={() => {
          setPaymentAmount(value);
          setOther(false);
        }}
        className={
          amount === value.toFixed(2)
            ? "bg-background_fondo_claro text-black p-4 rounded"
            : "bg-background_fondo_oscuro text-white p-4 rounded"
        } 
      >
        {currency_sign}
        {value.toFixed(2)}
      </button>
    );
  }

  function PaymentTypeButton({ type }) {
    return (
      <button
        type="button"
        onClick={() => setPaymentType(type)}
        className={
          paymentType.name === type.name
            ? "bg-background_fondo_claro text-black p-4 rounded"
            : "bg-background_fondo_oscuro text-white p-4 rounded"
        }
      >
        {type.name}
      </button>
    );
  }

  return (
    <section className="payment-form p-40">
      <h2 className="text-center">Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          {[5, 10, 25].map((val) => (
            <AmountButton key={val} value={val} />
          ))}
          <button type="button" onClick={() => setOther(true)} className="bg-background_fondo_oscuro text-white p-4 rounded">
            Other
          </button>
          {isOther && (
            <input
              type="number"
              value={amount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              className="border rounded p-2"
            />
          )}
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {payment_types.map((type) => (
            <PaymentTypeButton key={type.name} type={type} />
          ))}
        </div>
        <div className="mt-4">
          <button type="submit" className="bg-background_fondo_claro text-black p-4 rounded w-full" disabled={isSubmit}>
            {isSubmit ? "Processing..." : `Pay ${currency_sign}${amount}/${paymentType.name}`}
          </button>
        </div>
      </form>
    </section>
  );
}

export default PaymentForm;
