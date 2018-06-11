# Señales

Ejemplo de uso de señales por parte del SO a procesos creados con NODE.JS

#### SIGINT
Se envia escribiendo CTL+C
```sh
node signal_sigint.js  
```
#### SIGUSR1 / SIGUSR2
Se escribe escribiendo KILL -s SIGUSR1 <pid>
```sh
node signal_siguser.js  
```
