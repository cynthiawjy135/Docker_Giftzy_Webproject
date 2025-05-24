# 🎁 Giftzy - SIT725 Group Project Dockerization by Cynthia Wijaya (225138694)

## API
/api/student
- `GET` : to get student name and student ID
Output:
{"name":"Cynthia Wijaya","studentId":"225138694"}

## 🚀 Getting Started

### Prerequisites

- Docker

### How to build the image

1. Clone the repository:

   ```bash
   git clone https://github.com/cynthiawjy135/Docker_Giftzy_Webproject.git
   cd to project folder
   ```
   
2. Please create .env file with with the necessary environment variables: Please refer to the .env.example:
   ```
   MONGO_URI=
   JWT_SECRET=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   ```

3. Run this command in Terminal, this command will automatically run the container after completed build the container
   or open Docker Desktop and run the container with play button:

```
docker-compose up --build
```

4. Below is the command for ###rerunning the container after has stopped it.

```
docker-compose up
```

5. Open your web broswer at port 3000

```
http://localhost:3000
```
6. Go to ``` http://localhost:3000/api/student ``` to get json result of student name and ID like this:
   {"name":"Cynthia Wijaya","studentId":"225138694"}
