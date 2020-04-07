# hostelWiz
Hostel Wiz project

Groups=(admin,hostelManager,Customer) NB:when creating user admin=1,hostelmanager=2 and customer=3

To create user:
 POST the following fields with their values => username,password,email,first_name,last_name,contacts and groups(1 or 2 or 3) 
 
 to http://127.0.0.1:8000/hostelwiz/users/

 After creating user, you add the user to table Admin,hosteManager or Customer depending on the group number assigned.

 (ie. group 1 will be allowed to be added the admin table,2 to hostelmanager table and 3 to customer.)You do this by using the following urls

 with the user token in header by first loggin the user in.

 POST  these fields ('subscriptionType', 'status', 'startDate') with token in header To http://127.0.0.1:8000/hostelwiz/hostel_managers/0/create_hostelManager/

 POST just token in header To http://127.0.0.1:8000/hostelwiz/customers/0/create_customer/

 For Admin ,User is created through django CLI before it is uploaded to the server or just POST request with token in header to 

 http://127.0.0.1:8000/hostelwiz/admins_customs/

NB: All these are done during user registration.
 
 

 To Login:
  POST username and password to http://127.0.0.1:8000/hostelwiz/login/ to get token



HostelManager posting property:
 
 POST  'description', 'location', 'numberOfRooms', 'status', 'type', 'pictureLocation', 'name'
 
 to http://127.0.0.1:8000/hostelwiz/properties/0/create_property/



Hostel create room:
 
POST  'property', 'roomNo', 'roomType', 'roomAvailable' to http://127.0.0.1:8000/hostelwiz/properties/0/create_room/

NB:Room must have property,Admin can update detail of manager.ie.change status.


Rate Room:

POST 'stars' To http://127.0.0.1:8000/hostelwiz/properties/1/rate_property/ where 1 is property id
 
 NB:If user posts rating while user had already rated ,it will update that particular rating



Search Property:
POST name or location To http://127.0.0.1:8000/hostelwiz/properties/0/search_property/

