 # Forks
 Examples enabling a IPC communication between a master and parent process.

#### server child / process - easy:

```sh
node server_parent.js
```
#### SIGUSR1 / SIGUSR2
Se escribe escribiendo KILL -s SIGUSR1 <pid>
```sh
node server_child.js
```
