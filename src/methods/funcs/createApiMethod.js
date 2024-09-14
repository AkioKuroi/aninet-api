import { ANINET_API_URL } from "../../global";
const createApiMethod = (methodName) => {
  return `${ANINET_API_URL}/${methodName}`;
};
export default createApiMethod;
