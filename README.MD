# lirejarp @ spring

## Structure
The project is structured into five submodules:
* **application**
* **rest**
* **service**
* **persistence**
* **webclient**

Preface
```
1. Install NodeJS (if not already done)

2. Run npm install in webclient/app
This will download the dependencies listed in package.json
```

Build spring backend
```
cd trinkwasser
mvn clean package
```

Build spring backend + React frontend
```
cd ltrinkwasser
mvn clean package -Pfrontend
```

Run example application.
```
cd application
java -jar target/application-<version>-SNAPSHOT.jar 
```

Test simple rest call.
```
http://localhost:8080/trinkwasser/api/health
http://localhost:8080/trinkwasser/api/health/log
http://localhost:8080/trinkwasser/api/devices
```
```
curl -X GET -H 'Content-Type: application/json' -i http://localhost:8080/trinkwasser/api/health
curl -X GET -H 'Content-Type: application/json' -i http://localhost:8080/trinkwasser/api/health/log
curl -X GET -H 'Content-Type: application/json' -i http://localhost:8080/trinkwasser/api/city
```

Test embedded H2 DB.
```
http://localhost:8080/lirejarp/h2
```
