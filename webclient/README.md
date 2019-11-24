# trinkwasser @ spring

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
cd trinkwasser-spring
```

Build dev application with H2 DB.
```
mvn clean package -Pdev
```

Build prod application with MySQL DB (localhost).
```
mvn clean package -Pprod
```

Build spring backend + React frontend
```
cd trinkwasser-spring
mvn clean package -Pdev,frontend
```

Run example application.
```
cd application
java -jar target/application-<version>-SNAPSHOT.jar 
```

Run nodeJS development server and backend in parallel
```
1. Follow the instructions under "Build spring backend + React frontend"
2. In one console:
    2.1 Follow the instructions under "Run example application."
3. In second console:
    3.1 cd webclient/app
    3.2 npm start

Make sure that the port in package.json proxy is the same as the backend!
```
