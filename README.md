# Learn-Full-Stack

## Host Environment
- Project built on Kali Linux VM

## Tools required
- **Visual Studio**: [[Installation Guide](https://code.visualstudio.com/docs/setup/linux)]: Linux, `.deb` version.
- **Docker**: [[Installation Guide](https://docs.docker.com/engine/install/)]

## Usage
1.  Clone this repository and navigate to project folder
```
git clone https://github.com/NotYuSheng/Learn-Full-Stack.git
cd Learn-Full-Stack
```

2.  Build the Docker images:
```
docker-compose build
```

3.  Run images
```
docker-compose up -d
```

4.  Access webpage from host
```
<host-ip>:5000
```

Access Kibana dashboard from host
```
<host-ip>:5601
```
