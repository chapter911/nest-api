Instalasi :
- npm i -g @nestjs/cli

buat project :
- nest new nest-api-rapp

menjalankan project :
- npm run start:dev (hot reload) -- gunakan ini
- npm run start (non hot reload)

menambahkan module
- nest g module users
- tambahkan di users.module.ts

menambahkan controller
- nest g controller users

menambahkan service
- nest g service users

ketik ini terlebih dahulu di users.controller.ts :
/*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
*/
kemudian jalankan perintah AI
make each function

update usersservice.ts
gunakan format yang sudah ada terlebih dahulu

kemudian perbaiki lagi users.controller.ts

tambahkan parseintpipe di users.controller.ts

buat folder dto di folder users
dto (data transfer object)
- buat create-user.dto.ts
- buat update-user.dto.ts

jalankan npm i @nest/mapped-types -D
(-D untuk development)