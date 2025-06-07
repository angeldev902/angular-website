import { EndpointCustom } from "../../models/customTypes";

export const dictionaryDjango: Record<string, EndpointCustom> = {
    login: {
        url: () => {
            return `/api/users/auth/login/`
        }
    },
    register: {
        url: () => {
            return `/auth/register`
        }
    },
    brandsList: {
        url: (params:any) => {
            return `/brands`
        }
    },
    productPage: {
        url: (params:any) => {
            const endpoint = params.search ? `/products/page?offset=${params.offset}&limit=${params.limit}&search=${params.search}` : `/products/page?offset=${params.offset}&limit=${params.limit}`;
            return endpoint;
        }
    }
};