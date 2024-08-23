import { ANINET_API_URL } from "../../global";
const createApiMethod = (methodName: string): string => {
  return `${ANINET_API_URL}/${methodName}`;
};
export default createApiMethod;
