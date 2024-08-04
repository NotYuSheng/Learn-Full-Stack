# Learn-Full-Stack

![GitHub last commit](https://img.shields.io/github/last-commit/NotYuSheng/Learn-Full-Stack?color=red)

**IMPORTANT** - This project is currently under development.

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
<host-ip>:3000
```

Access Kibana dashboard from host
```
<host-ip>:5601
```

## Run as developer
### Frontend
```
cd frontend
docker build -f Dockerfile.dev -t frontend-dev .
docker run -d -p 3000:3000 -v $(pwd):/app frontend-dev
```
