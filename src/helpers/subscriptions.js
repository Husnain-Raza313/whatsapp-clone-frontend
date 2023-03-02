const addSubscription = (sub) => {
  let subs_array = JSON.parse(sessionStorage.getItem("subscriptions"));
  subs_array.push(sub);
  sessionStorage.setItem("subscriptions", JSON.stringify(subs_array));
  return subs_array;
};

const checkSubscription = (sub) => {
  let subs_array = JSON.parse(sessionStorage.getItem("subscriptions"));
  return subs_array.includes(sub);
}

export { addSubscription, checkSubscription };
