import { EndpointCustom } from "../../models/customTypes";

export const dictionaryDjango: Record<string, EndpointCustom> = {
    login: {
        url: () => {
            return `/api/users/auth/login/`
        }
    },
    brandsList: {
        url: (params:any) => {
            return `/api/brands/`
        }
    },
    brandDelete: {
        url: (params:any) => {
            return `/api/brands/${params.brandId}/`
        }
    },
    categoriesList: {
        url: (params:any) => {
            return `/api/categories/`
        }
    },
    categoryDelete: {
        url: (params:any) => {
            return `/api/categories/${params.categoryId}/`
        }
    },
    productList: {
        url: (params:any) => {
            const endpoint = `/api/products/?pafe=${params.offset}&limit=${params.limit}`;
            return endpoint;
        }
    },
    productDelete: {
        url: (params:any) => {
            return `/api/products/${params.productId}/`
        }
    },
};