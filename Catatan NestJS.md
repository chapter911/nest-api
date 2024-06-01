Instalasi :
- npm i -g @nestjs/cli

buat project :
- nest new nest-api-rapp

menjalankan project :
- npm run start:dev (hot reload) -- gunakan ini
- npm run start (non hot reload)

menambahkan module
- nest g module users

menambahkan controller
- nest g controller users

menambahkan service
- nest g service users

ketik ini terlebih dahulu di users.controller.ts :
/*
    GET /users
    GET /users/byQuery?name=John
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
*/
kemudian jalankan perintah AI
make each function

update users.service.ts
gunakan format yang sudah ada terlebih dahulu

tambahkan di users.controller.ts
constructor(private readonly usersService: UsersService) {}

tambahkan parseintpipe untuk setiap id di users.controller.ts

kemudian perbaiki seluruh return di users.controller.ts