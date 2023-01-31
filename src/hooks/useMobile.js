import { useMediaQuery } from "react-responsive";

const useMobile = () =>
  useMediaQuery({
    query: '(max-width: 768px)',
  });
export default useMobile;
