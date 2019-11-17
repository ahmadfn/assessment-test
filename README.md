# Assessment Test Binar

## Info Project
Project ini merupakan bagian dari assessment test binar.
  
## Tools
Tools yang digunakan adalah sebagai berikut:
* Node.js versi: 12.3.0
* MongoDB Community Edition versi: 4.2.1 
  
## Setup
Pastikan Node.js dan MongodDB telah terinstall.

### Panduan instalasi Node.js:
```
https://nodejs.org/en/download/package-manager/
```

### Panduan instalasi MongoDB:
```
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
```

### Panduan pengaturan database MongoDB:

Masukkan command berikut di terminal untuk mengaktifkan mongodb dan masuk ke dalam mongo shell
```
$ sudo service mongod start
```

### Panduan untuk menjalankan project ini secara lokal:

```
$ git clone https://github.com/ahmadfn/assessment-test.git
$ cd assessment-test
$ npm install
$ touch .env
$ echo "SECRET_KEY=this_is_secret_key" >> .env
$ npm start
```

## Uji coba kode dengan menggunakan postman:

Pastikan postman telah terinstall, apabila belum, dapat dilihat di: 
https://learning.getpostman.com/docs/postman/launching-postman/installation-and-updates/

### Create user:
```
POST http://localhost:8000/auth/signup
```
Request body:
{
  "name": "bob",
  "email": "bob@email.com",
  "password": "bob"
}

### Login
```
POST http://localhost:8000/auth/login
```
Request body:
```
{
  "email": "bob@email.com",
  "password": "bob"
}
```

### Create data v1
```
POST http://localhost:8000/v1/products
```
Request header: 
```
{
  Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDBjZjE2MjEwY2VjNjA5ZjhiYmE3OSIsImlhdCI6MTU3Mzk2NTc0N30.0MPlDXJ_lwd6fpW6zuTsjbODLAlMfqZx1M826dBjqUw
}
```
Request body:
```
{
  "name": "polygon xtrada x4",
  "price": "2180",
  "imageurl": "https://polygoneeimages.s3.amazonaws.com/images/19342/xtrada_5_p.jpg"
}
```

### Show data v1
```
GET http://localhost:8000/v1/products
```
Request header: 
```
{
  Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDBjZjE2MjEwY2VjNjA5ZjhiYmE3OSIsImlhdCI6MTU3Mzk2NTc0N30.0MPlDXJ_lwd6fpW6zuTsjbODLAlMfqZx1M826dBjqUw
}
```

### Show data by ID v1
```
GET http://localhost:8000/v1/products/5dd0e5feb90f1901c7a54a6b
```
Request header: 
```
{
  Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDBjZjE2MjEwY2VjNjA5ZjhiYmE3OSIsImlhdCI6MTU3Mzk2NTc0N30.0MPlDXJ_lwd6fpW6zuTsjbODLAlMfqZx1M826dBjqUw
}
```

### Update data v1
```
PUT http://localhost:8000/v1/products/5dd0e5feb90f1901c7a54a6b
```
Request header: 
```
{
  Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDBjZjE2MjEwY2VjNjA5ZjhiYmE3OSIsImlhdCI6MTU3Mzk2NTc0N30.0MPlDXJ_lwd6fpW6zuTsjbODLAlMfqZx1M826dBjqUw
}
```
Request body:
```
{
  "name": "polygon xtrada Z6"
}
```

### Delete data by ID v1
```
DELETE http://localhost:8000/v1/products/5dd0e5feb90f1901c7a54a6b
```
Request header: 
```
{
  Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDBjZjE2MjEwY2VjNjA5ZjhiYmE3OSIsImlhdCI6MTU3Mzk2NTc0N30.0MPlDXJ_lwd6fpW6zuTsjbODLAlMfqZx1M826dBjqUw
}
```

### Show data v2
```
GET http://localhost:8000/v2/products
```
Request header: 
```
{
  Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDBjZjE2MjEwY2VjNjA5ZjhiYmE3OSIsImlhdCI6MTU3Mzk2NTc0N30.0MPlDXJ_lwd6fpW6zuTsjbODLAlMfqZx1M826dBjqUw
}
```