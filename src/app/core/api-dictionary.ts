import { properties } from "./config/properties";
import { EndpointCustom } from "./models/customTypes";

export const endpoints: Record<string, EndpointCustom> = {
    login: {
        url: () => {
            return `/auth/login`
        }
    },
    register: {
        url: () => {
            return `/auth/register`
        }
    }
};