import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";

let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.SECRET,
  clientKey: process.env.NEXT_PUBLIC_CLIENT,
});

console.log(snap);

export async function POST(request) {
  const { id, name, price, quantity } = await request.json();
  let parameter = {
    item_details: {
      name: name,
      price: price,
      quantity: quantity,
    },
    transaction_details: {
      order_id: id,
      gross_amount: price * quantity,
    },
  };

  const token = await snap.createTransactionToken(parameter);
  console.log(token);
  return NextResponse.json({ token });
}
