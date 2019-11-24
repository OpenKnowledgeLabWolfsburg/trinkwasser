# lirejarp @ spring

## Contact
* Dennis Hooth (Backend)
* Rolf Simon (Frontend)
* Nadja Bogdanova (Design)

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
see [HERE](https://group-wiki.wob.vw.vwg/wikis/display/101010WHDA/Npm+-+Installation)

2. Run npm install in webclient/app
This will download the dependencies listed in package.json
```

Build spring backend
```
cd lirejarp-spring
mvn clean package
```

Build spring backend + React frontend
```
cd lirejarp-spring
mvn clean package -Pfrontend
```

Run example application.
```
cd application
java -jar target/application-<version>-SNAPSHOT.jar 
```

Test simple rest call.
```
http://localhost:8080/lirejarp/api/health
http://localhost:8080/lirejarp/api/health/log
http://localhost:8080/lirejarp/api/devices
```
```
curl -X GET -H 'Content-Type: application/json' -i http://localhost:8080/lirejarp/api/health
curl -X GET -H 'Content-Type: application/json' -i http://localhost:8080/lirejarp/api/health/log
curl -X GET -H 'Content-Type: application/json' -i http://localhost:8080/lirejarp/api/devices
```

Test embedded H2 DB.
```
http://localhost:8080/lirejarp/h2
```
