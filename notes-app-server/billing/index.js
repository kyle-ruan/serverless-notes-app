import stripePackage from 'stripe';
import { calculateCost } from '../libs/billing-lib';
import { success, failure } from '../libs/response-lib';

export const main = async (event, context, callback) => {
  const { storage, source } = JSON.parse(event.body);
  const amount = calculateCost(storage);
  const description = 'Scratch charge';

  const stripe = stripePackage(process.env.stripeSecretKey);

  try {
    await stripe.charges.create({
      source,
      amount,
      description,
      currency: 'usd'
    });
    callback(null, success({ status: true }));
  } catch (e) {
    callback(null, failure({ message: e.message }));
  }
};
