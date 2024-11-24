import axios from "axios";
export function errorMessage(e: unknown) {
  let errorMsg = "Unknown error";
  if (axios.isAxiosError(e) && e.response) {
    errorMsg = e.response.data.message;
    return errorMsg;
  }
  errorMsg = (e as Error).message;
  return errorMsg;
}
