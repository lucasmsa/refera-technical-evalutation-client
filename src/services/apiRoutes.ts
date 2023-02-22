export const API_ROUTES = {
  auth: {
    register: '/user/create/',
    login: '/user/token/',
  },
  app: {
    categories: '/category/categories',
    orders: '/order/orders',
    order: (id: string) => `/order/order/${id}`,
    createOrder: '/order/orders/',
  },
};
