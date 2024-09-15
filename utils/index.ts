import phone from "phone";

export function transformTelephoneNumber(telephoneInput: string) {
  if (!telephoneInput) return telephoneInput;
  const telephone = telephoneInput.startsWith("+")
    ? telephoneInput
    : `+${telephoneInput}`;

  const number = phone(telephone);
  const e_164Format = number.phoneNumber;
  return e_164Format;
}
