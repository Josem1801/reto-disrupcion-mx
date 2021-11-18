import axios from "axios";

async function postTransaction(data) {
  try {
    const { data: transactionAdded } = await axios.post(
      `https://candidatos.disrupcion.mx/expenses`,
      data
    );
    return transactionAdded;
  } catch (err) {
    console.log(err);
  }
}

export default postTransaction;
