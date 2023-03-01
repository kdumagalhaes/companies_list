export const formatPtPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.slice(0, 3) + ' ' + phoneNumber.slice(3)
}
