# Learn-Full-Stack

## Host Environment
- Project built on Kali Linux VM

## Tools required
- **Visual Studio**: [[Installation Guide]([https://code.visualstudio.com/download](https://code.visualstudio.com/docs/setup/linux))]: Linux, `.deb` version.
- **Docker**: [[Installation Guide](https://docs.docker.com/engine/install/)]

## Setup
1. Create a Project Directory:
```
mkdir my-react-app
cd my-react-app
```

2. Initialize a React Application:
```
docker run -v ${PWD}:/app -w /app node:20-alpine npx create-react-app .
```

3. Start the Development Server:
```
docker run -it -v ${PWD}:/app -w /app -p 3000:3000 node:20-alpine npm start
```

4. Access page from
```
http://localhost:3000/
```
