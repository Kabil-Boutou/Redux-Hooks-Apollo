export const actionGenerator = (action, type) => {
  switch (type) {
    case 'req':
      return `REQ_${action}`
    case 'res':
      return `RES_${action}`
    case 'fail':
      return `FAIL_${action}`
    default:
      return `ERROR_${action}`
  }
}
