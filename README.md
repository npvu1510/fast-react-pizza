# Fast React Pizza

A simple ReactJS application for ordering pizzas. This project demonstrates the use of modern React features, routing, state management, and CSS frameworks.

## Features

- Using pizza data from [react-fast-pizza-api](https://react-fast-pizza-api.onrender.com/api)
- Redux Toolkit for state management
- Modern React Router setup with `createBrowserRouter`
- Tailwind CSS for styling

## Project Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/username/fast-react-pizza.git

2. Install dependencies:
   ```sh
   npm install

3. Start development server:
   ```sh
   npm run dev

## Project Setup
fast-react-pizza/
├── src/
│   ├── components/      # Các thành phần React
│   ├── pages/           # Các trang của ứng dụng
│   ├── redux/           # Redux slices và store
│   ├── App.js           # Tệp chính của ứng dụng
│   └── index.js         # Điểm vào của ứng dụng
├── public/              # Tệp tĩnh
├── README.md            # Tệp README của dự án
├── package.json         # Thông tin về các package của dự án
└── tailwind.config.js   # Cấu hình Tailwind CSS

## Routing Setup
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        action: updateOrderAction,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

## Contribution
Feel free to fork this project and submit pull requests. Any contributions are greatly appreciated.
