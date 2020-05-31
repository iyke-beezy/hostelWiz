# hostelWiz
Hostel Wiz project

Groups=(admin,hostelManager,Customer) NB:when creating user admin=1,hostelmanager=2 and customer=3

To create user:
 POST the following fields with their values => username,password,email,first_name,last_name,contacts and groups(1 or 2 or 3) 
 
 to http://127.0.0.1:8000/hostelwiz/users/

 After creating user, you add the user to table Admin,hosteManager or Customer depending on the group number assigned.

 (ie. group 1 will be allowed to be added the admin table,2 to hostelmanager table and 3 to customer.)You do this by using the following urls

 with the user token in header by first loggin the user in.


To complete user registration for HostelManager

 POST  these fields ('subscriptionType', 'status', 'startDate') with token in header To .../hostelwiz/hostel_managers/create_hostel_manager/



To compplete for customer 

POST just token in header To http://127.0.0.1:8000/hostelwiz/customers/create_customer/

 


For Admin ,User is created through django CLI before it is uploaded to the server or just POST request with token in header to 

 http://127.0.0.1:8000/hostelwiz/admins_customs/

NB: All these are done during user registration.
 
 

 To Login:
  POST username and password to .../hostelwiz/login/ to get token



HostelManager posting property:
 
 POST  'description', 'location', 'numberOfRooms', 'type','name','price','headline','rateType', ['pictureLocation1' to 'pictureLocation20'], 
 
 to http://127.0.0.1:8000/hostelwiz/properties/



Hostel create room:
 
POST  'property', 'roomNo', 'roomType', 'roomAvailable' to http://127.0.0.1:8000/hostelwiz/properties/id/create_room/




Rate Room:

POST 'stars' To .../properties/1/rate_property/ where 1 is property id
 
 
Save Room:

POST request To .../properties/1/save_property/


Search Property:
POST name or location .../hostelwiz/properties/search_property/

