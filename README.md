# Full-Stack-Practice (Currently in development)

* This project has been describe in the github project webpage 'https://github.com/GG-Brian/Full-Stack-Practice', at its project description.

* This proyect is not meant for commercial use, used imagery does not belong to me and this is a **practice** project, made for educational purposes.

* As a very brief explanation to use this project properly (detailed through all this document), 

## Requirements

There is certain software to be used in order to use this project. The following software is required (used in a Windows 10 **N**ew **T**echnology operative system, I apologize in case there's something I've forgotten to add);

* Java JDK 11.0.6 (Programming languague package used, along with others as TypeScript (obtained from ionic packages)
* Node.js (for ionic package installation and use at Visual Studio Code for ionic, and activation for spring without Eclipse)
 
* Visual Studio Code - version 1.62.0 (user setup) (IDE used mostly on frontend development with ionic)
* eclipse IDE for Enterprise Java and Web Developers - 2021-09 (IDE used on backend development with Spring)
 
* ionic framework (for hybrid apps and functionality in different devices)
 
* mysql-connector JDBC 8.0.26 (small Java library package for SQL database connection through java files at backend with spring)
* MySQL Workbench 8.0 CE (SQL database manager, used script is within the project's outer files)
* XAMPP Control Panel 7.4.12 (exclusively for mysql local port listening, needed for correct local database connection, though any other mysql localhost server connection service could be used)
 
* Postman version 9.1.3 (For individual testing of database functionality from either side (backend or frontend))


## Installation of IDEs and packages

### Java JDK 11.0.6's download link - https://www.oracle.com/es/java/technologies/javase/jdk11-archive-downloads.html
Please have in mind that, for ease of use, within the **environment variables** of the system there must be one variable called 'JAVA_HOME' and must point into the Java jdk (for organizing purposes, the variable should point to "C:\Program Files\Java\jdk-11.0.6", where it should be located). If it doesn't work, then **add** said route plus "\bin" into the 'Path' variable list and try again.



### Visual Studio Code's download link - https://code.visualstudio.com/
For organization purposes, it's recommended to have a root folder and open it with this IDE, having the two folders 'backend' and 'frontend' inside of it (creating a new ionic app creates this last folder, so you can skip its creation for now if you're going to create a new project yourself (more explained at Ionic framework's installation))



### Node.js's download link - https://nodejs.org/es/
Node.js's purpose here is to let us download and use the ionic framework, and to activate both ionic and spring's localhost servers for the proper use of the app proyect. **Don't worry if it feels like you downloaded nothing**, as its purpose is to be used as a command prompt package manager.



### Ionic framework's ***information*** link - https://dustinewers.com/how-to-ionic-in-visual-studio/#:~:text=Ionic%20is%20a%20hybrid%20application%20framework%20that%20uses,way%20of%20doing%20things%20that%20speed%20up%20development. **AND** https://twitter.com/ionicframework/status/1223268498362851330
Ionic framework can be installed from any pseudoterminal or terminal on the system (such as the integrated terminal in Visual Studio Code), using the command line 'npm install -g @ionic/cli'.

**Now, to properly get this project prepare, open a terminal and locate it at Visual Studio Code's 'frontend' folder and use the command line 'npm install'. This is required due to the existence of the files '.gitignore' (upon upload of project into github, tells the git tools to ignore the routes indicated inside this file (node_modules included) so the project can be uploaded with the size of about 300 KB instead of about 420 MB) and 'package.json' (Has every needed dependency for the project to work, and when using 'npm install', Spring reads its content and downloads everything indicated), this same issue happens with the backend side and can be resolved the same way (that is, with the 'backend' folder)**.

It also happens with the backend side of the project and explained below Eclipse's installing sectiom (next one))).

If you're trying to make a new project yourself using ionic, you will also need to use Visual Studio Code's integrated terminal (I'd recommend using the 'Command Prompt' or 'Bash' terminals) and write the Command line 'ionic start NAME TEMPLATE [options]' at the Visual Studio Code's project root folder, where NAME is the project's name, TEMPLATE can be any of a few (blank is the easiest one for new ionic develpers) and extra options to use into the new ionic project app. Executing this without options will start a little wizard setup to ask with which framework should ionic be used (Angular is the most popular option), type of project (blank should be fine for new ionic developers), or others which can be accepted by default (just by pressing Enter).

**To start running the server to visit it via web, use the command line 'ionic serve' in a terminal positioned at the project's 'frontend' folder (needs backend server to be running too in order to properly work**



### Eclipse IDE's download link - https://www.eclipse.org/ide/
Here, this is very important; Eclipse needs a few configurations to be made for a project (specially when creating a new project and being the first time of use), please follow the next instructions;
- 1. When launching Eclipse IDE, it will ask for location of the opening project. Use the route towards the 'backend' folder of the Visual Studio Code project (I'd say not to check the 'Use as default and do not ask again' option, as it is useful when you're changing projects).

- 2. When the project loads, go to "Help" > "Eclipse Marketplace..." and search & install "Spring Tools 4 (aka Spring Tool Suite 4)" to prepare our IDE to work with Spring Hibernate projects. **Skip to step 5 if you're not creating a new project**

- 3. Initialize the Spring Hibernate project by going to "File" > "New" > "Other" > "Spring Starter Project" > (insert your project information (I'd recommend the type of project as Maven and Java JDK 11 for new Spring developers)) > choose the Spring dependencies (developer Tool dependency "Spring Boot DevTools", Web dependency "Spring Web" and database connection dependencies (for my database connection I used SQL dependencies "Spring Data JPA" & "MySQL Drive")) > wait for the dependencies installation.

- 4. **Strongly recommended to prepare the project with the MVC order** (separation of Model, View and Controller files as diferent folders (in here these are called 'packages')) by constant right clicking of route project "src/main/java" and "new" > "package". (On my case, I created these by adding 'data', so I have the application file itself inside '...data', database file controllers (main database manipulator) at '...data.controllers', DAO interfaces (which will basically act as intermediary between the application and the database by manipulation of database records) inside '...data.dao, database table models as Java objects inside '...data.model', and both java implementation and interface services (endpoints with crossOrigin feature toward the frontend localhost server to form the full-stack) inside '...data.service'

- 5. To check if everything works great, a Maven test can be performed by right-clicking the project > "Run As" > "Maven test".

- 6. There's a file that must be considered to edit in order to make the database connections, it can be encountered at the project's separated route 'src/main/resources/application.properties', here is where the connectivity configuration must be to work.. The following is a simple example of what must go here;

***
spring.datasource.url=jdbc:mysql://localhost/catastropher?useSSL=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.database-platform=org.hibernate.dialect.MySQL5InnoDBDialect
spring.jpa.hibernate.ddl-auto=none
logging.level.org.hibernate.SQL=debug
***

You will also need to download and install the database manager, connector and localhost server, which I explain the next section


- 9.**Now, to properly get this project prepare (if you're using my project), open a terminal and locate it at Visual Studio Code's 'backend' folder and use the command line 'npm install'. This is required due to the existence of the files '.gitignore' (upon upload of project into github, tells the git tools to ignore the routes indicated inside this file (node_modules included) so the project can be uploaded with the size of about 300 KB instead of about 420 MB) and 'pom.xml' (Has every needed dependency for the project to work, and when using 'npm install', Spring reads its content and downloads everything indicated), this same issue happens with the frontend side and can be resolved the same way (that is, with the 'frontend' folder)**.

**To start running the server to visit it via web, you can also use the command line 'npm serve' in a terminal positioned at the project's 'backend' folder (needs frontend server to be running too in order to properly work**



### (MySQL) Database connector (jdbc), manager (MySQL Workbench) and localhost server (XAMPP Control Panel)
1. mysql-connector-jdbc - https://downloads.mysql.com/archives/c-j/ (I strongly recommend selecting Operating System as 'System Independent' so the file can work without considering the operating system its being used on)

- I believe a very similar thing happens with the connector as java jdk.. On my case, I have my connector located at C:\Users\brian\.m2\repository\mysql\mysql-connector-java\8.0.26


3. MySQL Workbench - https://www.mysql.com/products/workbench/ & https://dev.mysql.com/downloads/workbench/5.0.html

4. XAMPP Control Panel - https://www.apachefriends.org/es/index.html


### Extra; Postman software to test backend or frontend's functionality through the use of HTTP orders into a database (web endpoints) - https://www.postman.com/
- 1. Watch out for a bug with this software; When you install it, you might not be able to launch it, not matter what (though it can be uninstalled from programs and caracteristics of the system).. I apologize as I can't recall how I made it functional to me, but you might be forced to obtain this software from another place.

- 2. To use it, press the '+' symbol at the upper left of the window to create a new collection (name it a way to rapidly identify its content) and move the mouse pointer into the new collection to press the appearing three dots and select "new request".

- 3. **The URL request entered must match the one that the localhost URL server to test uses PLUS our developed endpoints at our implementation service file(s).** The usual place our URL appears at is on the console (on the backend console, the message with this URL appears just above the last message, and on the frontend it is shown by the end of the console's setup message). Once we specified that URL and the Endpoint, we indicate at the left the HTTP order to use (will only work if we indicated and coded it properly at the controller files, that is) and the result is shown below, formatted as JSON text. I recommend only using GET, POST, PUT and DELETE since these four form the complete CRUD operations of databases.

- 3.3. To perform a POST (add record) operation there are three ways (have in mind one can not work while other one does);
- **The first method** just needs to add each 'variable - value' pair at the opened section 'params'.
- **The second method** is to open the 'Body' section, select the 'raw' option with the JSON format and write the new data in JSON format.
- **The third and maybe most secure method** is the same as the previous one, but selecting the 'x-www-form-urlencoded" option instead, and add each variable - value pair like on the first method.

- Once you're done press on the 'Send' button (if the tested side is correctly coded and the database connection works, it should show the number '1' (also, for id, auto-increasing fields, the id can be totally skipped on the addition (the database will assign it its next number).


- 3.6. The PUT (update record) operation works the very same way than the POST operation, but since it always implies specification of the identity of the affected record, the endpoint must end with the identity of the old record (this requirement should also be specified on the endpoint's code to work). The DELETE operation only needs this specification though, no other data specification should be needed!
+