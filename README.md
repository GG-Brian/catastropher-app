# Full-Stack-Practice (Currently in development)

* This project is created and developed for educational purposes towards a real interprise project.

* The development of this project, as seen upon its activation & deployment, would be part of ITC (in spanish, Canarian Tecnology Institute).

* The idea of this project is the development of an app to consult data about natural disasters around the world, and groups created by entities (such as the ITC enterprise itself or others companies) to help victims within said disasters.  

* This proyect is not meant for commercial use and used imagery does not belong to me because, as previously mentioned,  **This is a project made for educational purposes.**



## README's Content Table
1. [Usage requirements](#Usage-requirements)
2. [Diagrams of use cases & models](#Diagrams-of-use-cases-and-Models)
3. [Interfaces (project's visual design prototype)](#Prototype-for-intended-visual-interfaces)
4. [Usability aspects; Interfaces subject grades](#Usability-aspects-for-Interfaces-subject-grades)
5. [Brief project usage manual instructions (non-develpment users)](#Brief-project-usage-instructions---user-manual)
6. [Complete installation manual (development users)](#Complete-installation-of-IDEs-and-packages---development-user-manual)
7. [Other aspects; Planning, technologies, repositories, conclusion & opinion and references](#Planning---technologies---repositories---conclusions---opinion-and-references)




## Usage requirements

There is certain software to be used in order to use this project. The following software is required (used in a Windows 10 **N**ew **T**echnology operative system, I apologize in case there's something I've forgotten to add);

* Java JDK 11.0.6 (Programming languague package used, along with others as TypeScript (obtained from ionic packages)
* Node.js (for ionic package installation and use at Visual Studio Code for ionic, and activation for spring without Eclipse)
 
* Visual Studio Code - version 1.62.0 (user setup) (IDE used mostly on frontend development with ionic)
* eclipse IDE for Enterprise Java and Web Developers - 2021-09 (IDE used on backend development with Spring)
 
* ionic framework (frontend for hybrid apps and functionality in different devices)
 
* mysql-connector JDBC 8.0.26 (small Java library package for SQL database connection through java files at backend with spring)
* MySQL Workbench 8.0 CE (SQL database manager, used script is within the project's outer files)
* XAMPP Control Panel 7.4.12 (exclusively for mysql local port listening, needed for correct local database connection, though any other mysql localhost server connection service could be used)
 
* Postman version 9.1.3 (For individual testing of database functionality from either side (backend or frontend))





## Diagrams of use cases and Models

1. The database diagram this project uses is the relational database schema represented below (made using the free-of-use DIA software (http://dia-installer.de/index.html.es));

![database-diagram](/others_database-structure/catastropher-database-diagram.PNG)


2. The project app's use cases comprehends two different types of users; Regular (anonymous) users (only allowed to consult natural disasters and groups) and Administrator (allowed to Create, Consult, Update and Delete data from natural disaster, hgroup and group member (supporter) tables (this also implies they can create or delete data from the relational 'help' table, which merely exists for the many to many relationship between disaster and hgroup tables)). The following image was done using the "Visual Paradign" software (free, not commercial use (nor trial) version, https://www.visual-paradigm.com/download/)

![use-cases-diagram](/others_database-structure/app-use-cases.PNG)


3. Detailed explanation of the table schema;

We have the disaster table, which will specify information of the ocurred disaster, such as the origin, destruction volume, the timestamp indicating when it happened.. I decided a disaster could temporarily be associated to no group (null values are accepted on this relationship, something not recommended to do to persist the ease of database structure and maintenance)

Many helping groups from the hgroup table can help victims from different disasters according to their asigned task, place, etc.. I decided a group could temporarily be associated to no disaster (as I said on the previous text, this practice is not recommended at all, I just happened to forget it was a bad practice)

Analysing my app's future functionality and database schema, I realised the need of a new table to contain the many to many relationship between disasters and groups, so a group could be associated with multiple groups and viceversa without key duplication problems

A different relationship bonds the hgroup table with supporter table, one to many relationship where a group can contain many supporters- basically members of help groups-.. As well as at the other table's relationship fields, I decided to make each member have the possibility to be created having NO group associated with it (Bad practice! Do not repeat!)

And finally, the User table; **This last table has nothing to do with all the other tables**, its purpose is to help the project differ between regular users and administration users, by having the data of valid administration users inside. The user table is intended to work the following way; name fields must be unique and passwords are an exact 60-characters-long encripted string value with the use of Bcrypt (the writen password is intended to be encripted with Bcrypth and compared with the given password at its creation).





## Prototype for intended visual interfaces

Pretty much before I started this project, I designed its visual interfaces with the 'JustInMind' software (free version). The JustInMind file (ending with extension '.vp') can be found inside the project's 'others_propotype' folder along with the **7 interface images** made with it (There's a bug where the application only shows the one interface marked on green at certain devices).

1. Home (presentation) screen; Basically a brief explanation of the project's app 'Catastropher'. The page footer, along with the next interface images, will be copied from the real ITC webpage and pasted as redirectional links.

![home screen](/others_prototype/presentation.PNG)



2. Disaster management screen; Where anyone can consult all natural disasters around the world, and Administrators can manage disasters data. Filtering of data is considered.

![disaster table screen](/others_prototype/table-disaster.PNG)



3. Disaster-for-group screen; Where anyone can consult which groups helps/helped to which disasters, and Administrators can manage relation data by deleting or adding new data. Filtering of data is considered.

![disaster x group table relation screen](/others_prototype/table-disaster-group-relation.PNG)



4. Group management screen; Where anyone can consult all groups designed & willing to help victims from natural disasters, and administrators can manage groups data. Action of showing supporters inside groups through a link/button on each record to any user is considered.

![hgroup table screen](/others_prototype/table-group.PNG)



5. Supporter management screen; An exclusive screen only accesible for Administrator users, allowing them to manage members of each supportive group.

![supporter table screen](/others_prototype/table-supporter.PNG)



6. Login screen for Administration; An optional interface designed to allow access for administration users. The purpose of this screen is aslo explained in relatively clear texts.

![login screen](/others_prototype/Login.png)



7. About us screen; Many popular enterprises have a certain webpage section that acts as a friendly get-to-know interface, that helps upcoming users to trust the enterprise webpage they're visiting by giving them information about the enterprise itself. Since the ITC enterprise this educational project is made for has one and I needed to implement more than 6 interfaces for incremented grades, I decided to pretty much copy and pasted theirs and slightly modificate it.

![about-us screen](/others_prototype/meet-us.png)





## Usability aspects for Interfaces subject grades

I still don't know, just wait for when I end the frontend (maybe should've done both backend and frontend together instead of focusing only on backend to later go focusing only on frontend)





## Brief project usage instructions   user manual

0. If any errors are found through these next steps, the installation of NodeJs might be needed (might also be needed to install Ionic framework). Both packages are carefully detailed on the next section.

1. Prepare a special folder (if not using the git clone command) for the project (https://github.com/GG-Brian/catastropher-app).

2. Once the project's been cloned/extracted, open two command prompts and locate each one's route into the backend and frontend sides. Once done, execute the command line 'npm install' (this will install all node modules needed for the project to work, getting around 600 MB of space). This might take a while, use that time to activate the MySQL server we're about to make use of soon.

3. When both command prompts finish their respective installation tasks, activate the backend side with the command line 'ng serve -o' and activate the frontend side with the command line 'ionic serve'.

4. Open a new navigation tab on your web search engine and use the URL (http://localhost:8100/home) and enjoy!




## Complete installation of IDEs and packages   development user manual

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



## Planning   technologies   repositories   conclusions   opinion and references

### Full-Stack tecnologies used for this project;
 Backend: 'Spring Hibernate'
 Frontend: 'Ionic framework'
For this last one I feel the need to specify I used 'Angular framework' to work with the 'Ionic framework'.


### About comparing Stack technologies;
Even though I used Spring Hibernate and Ionic Framework because the enterprise I develop this project for uses both and I don't really know much about other technologies, I've got to say that the ones I use feels simple and completed, not only that but also intuitive.

I could still mention, at least for glancing over my classmate's shoulder, that Unity as backend feels slightly more complex but I think it's stronger in performancer.. But again, I have never really used any other Stack technology other than Spring Hibernate and Ionic Framework.. If it wasn't because it can give me grades I wouldn't be adding this by assuming the one reading this knows more than I do about Stack technologies (specially when there's probably heaps of webpages giving information and their opinion about them that you can yourself check out! Use the Internet for what it's been created, buddy!).


### About repositories;
I have given this information at the beginning of this README file but.. here's the repository so I can slightly increase my grade I guess? (https://github.com/GG-Brian/catastropher-app)


### About planification;
This project started one day without many of us students knowing it indeed did due to not clear information, as there was a strong confusion wether we needed to be told the project's purpose or make it up ourselves.. And after two weeks of work wasted doing nothing, we were told we should already be developing a made up project.. Then I started working on the different aspects of the project **simultaneously** (I don't recommend this at all, it is better to focus on one thing at a time rather than constantly changing what you're doing to resume another aspect (or else wave at your headache and stress! ^^)).

This proyect started on 11th of October 2021 and it's previewed to end on 12th of December 2021... Pretty much the entire first month and half the second, I'be been focusing mainly on the backend, on every table's CRUD (Create, Read, Update, Delete) management.. And everytime I'd be stuck too much and felt my brain numb, I'd switch to simple tasks, such as creating the project's visual prototype, creating the database and then its schema, creating the use cases, completing constant tasks from Enterprise Management subject course, creating this really large README file.. And every time my brain wasn't stressed, I'd come back to the backend development.

This focusing of the backend, along with the simple tasks, is currently ending as I'm writing this (18th of November 2021) with the user database configuration (I'd say I'll get it done in about a week if I finally find how to make it right?), then I'll continue with the frontend (modifying the backend if needed) along with the Enterprise Management subject's project task of entire crud with models and classes as an Odoo module.


### Conclusion, opinions and thoughts
My conclusion about this project is that I could have improved it with another idea, one that doesn't give me the problems this one gave me (such as the not-recommended null relations and particularities between backend models), but even so, this proyect helped me learn how to face same problems in future full-stack projects, so I'm happy with that.

My opinion about this app? I think it's rather useless because pretty much only worried or particularly interested people would like to check about disasters and groups that helped on these, and I'm not like one of those.. Though I must say it COULD be useful for giving information about certain disasters never shown on the public news.

So yeah, my thoughts about my project is that it is rather a practice proyect than one actually useful for nowadays.. But I still went forward with the project idea because I wasted two weeks without knowing I had to make it up myself, and I culdn't afford days to get it right (also because I overlooked ITC's proyects and they were generally about heart's wellbeing, such as one of their projects that tried to improve the heart's ecosystem in some way I cannot recall). The ITC enterprises webpage is the following (https://www.itccanarias.org/web/es/).


### Links and references
I gave them whenever needed, just scroll up and find where I mention each software (most of them are on the [Installation of IDEs and packages for development users](#Complete-installation-manual-of-IDEs-and-packages-(development-users)) section while a few others are on the [Diagrams, use cases and Models](#Diagrams-use-cases-and-Models) section).