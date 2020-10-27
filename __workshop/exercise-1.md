# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| endpoint                | method   | Description                                                       |
| ----------------------- | -------- | ----------------------------------------------------------------- |
| `/test`                 | `GET`    | It is a test endpoint.                                            |
| `/clients`              | `GET`    | It displays a list of all the clients.                            |
| `/clients`              | `POST`   | It allows you to add a cutomer.                                   |
| `/clients`              | `PATCH`  | It allows you to modify customer information.                     |
| `/clients`              | `DELETE` | It allows you to delete a cutomer.                                |
| `/clients/:id`          | `GET`    | It displays information about a client with a given ID.           |
| `/clients/orders`       | `GET`    | It displays a list of all the clients' orders                     |
| `/clients/orders`       | `POST`   | It allows you to add a client order to all of the orders.         |
| `/clients/orders`       | `PATCH`  | It allows you to modify a client order from all of the orders.    |
| `/clients/orders`       | `DELETE` | It allows you to delete a client order from all of the orders.    |
| `/employees`            | `GET`    | It displays a list of all the employees.                          |
| `/employees`            | `POST`   | It allows you to add an employee.                                 |
| `/employees`            | `PATCH`  | It allows you to modify an employee's information.                |
| `/employees`            | `DELETE` | It allows you to delete an employee.                              |
| `/employees/:id`        | `GET`    | It displays information about an employee with a given ID.        |
| `/machinery`            | `GET`    | It displays a list of all the machinery.                          |
| `/machinery`            | `POST`   | It allows you to add an machinery.                                |
| `/machinery`            | `PATCH`  | It allows you to modify an machinery's information.               |
| `/machinery`            | `DELETE` | It allows you to delete an machinery.                             |
| `/machinery/:id`        | `GET`    | It displays information about machinery with a given ID.          |
| `/furniture`            | `GET`    | It displays a list of all the furniture.                          |
| `/furniture`            | `POST`   | It allows you to add furniture.                                   |
| `/furniture`            | `PATCH`  | It allows you to modify furniture.                                |
| `/furniture`            | `DELETE` | It allows you to delete furniture.                                |
| `/furniture/:id`        | `GET`    | It displays information about an furniture with a given ID.       |
| `/seating`              | `GET`    | It displays a list of all the seats.                              |
| `/seating`              | `POST`   | It allows you to add seats.                                       |
| `/seating`              | `PATCH`  | It allows you to modify seats.                                    |
| `/seating`              | `DELETE` | It allows you to delete seats.                                    |
| `/seating/:id`          | `GET`    | It displays information about an seat with a given ID.            |
| `/products`             | `GET`    | It displays a list of all the products.                           |
| `/products`             | `POST`   | It allows you to add products.                                    |
| `/products`             | `PATCH`  | It allows you to modify products.                                 |
| `/products`             | `DELETE` | It allows you to delete products.                                 |
| `/products/:id`         | `GET`    | It displays information about an product with a given ID.         |
| `/inventory-orders/`    | `GET`    | It displays a list of all the inventory orders.                   |
| `/inventory-orders/`    | `POST`   | It allows you to add inventory orders.                            |
| `/inventory-orders/`    | `PATCH`  | It allows you to modify inventory orders.                         |
| `/inventory-orders/`    | `DELETE` | It allows you to delete inventory orders.                         |
| `/inventory-orders/:id` | `GET`    | It displays information about an inventory order with a given ID. |
