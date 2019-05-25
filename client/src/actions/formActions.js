import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {GET_ERRORS} from "./types";

const setUserData = (userData) => dispatch =>
{
    axios
        .post("/api/testForm", userData);
};

export default setUserData;