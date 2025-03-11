# SSH-Hadoop-Spark-client
This repository contains the definition of a docker image to build a client for a bigdata cluster.
The idea is to have a container running on cluster as a fat client that can perform operations exploiting the services and resources available on cluster.
The image contains the dependencies necessary to use **NVIDIA GPUs** that can be use adding the device on the container.

In the container are available the executable and dependency to use that tools
- **Apache Hadoop (HDFS)**
- **Apache Spark**
- **Python** with **Conda** support ([helpful in manage dependency on **PySpark**](https://spark.apache.org/docs/latest/api/python/user_guide/python_packaging.html))
- **Java**

This container is configured as **SSH** server that accept connection from remote host and the possibility of use it for remote development with IDE such as for example: **IntelliJ** and **VSCode**. 

In order to exploit the cluster services the container that use this image requires to mount the configuration for Hadoop and Spark. Specifically it search for:
- Hadoop Config directory on path: `/opt/hadoop/etc/hadoop`
- Spark config: `/opt/spark/conf`

## SSH access
The image is designed to allow multi user access in order to ensure accountability in the operation, for example in data written on HDFS.
To do this the access on the container is available through public/private key autenthication. When starts the container exec a script that creates the users and associate for each a public key for SSH access.
The configuration of this is inferred from a configuration file that must be located on the file `/etc/user-config/ssh-keys/users_keys.yml`
An example of this file showing the structure is available [here](image/users_keys.yml.example)
The idea is that for each user specified by its name can be specified a list of public key that enables access throug ssh.
The configuration script parse this YAML file and adds the user in the container copying the keys in the `authorized_keys` for ssh access.

However is created a default user dev that can access through SSH with password.
