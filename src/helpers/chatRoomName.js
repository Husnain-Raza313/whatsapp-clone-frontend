const chatName = (phone_number) => {
  let userPhoneNumber = sessionStorage.getItem("user-phone-number");
  let phone = [userPhoneNumber.slice(-3), phone_number.slice(-3)];
  return phone.sort().join("-");
}
export { chatName };
