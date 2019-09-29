
## Project installation CRM-ADMIN_REACT
Para inicializar el proyecto primero debe tener instalado docker, y crear la imagen con 
###make image
Luego instalar las dependiencias con 
###make install
LUego levantar el servidor con 
###make start

The project is dockerizado and was configure in Makefile
### `make image`
The node image is built

### `make install`
install the node modules  

### `make start`
Run Server in background http://0.0.0.0:3000/

### `make buildProduction`
Compile for the production

### `make test`
Run to the test

Steps for the install

1. make image (it only installs once)
2. make install
3. make start
