Lab - 01 Assignment : A Poll Simulator

According to the problem statement, the source is divided into three sections i.e., Presentation_Layer, Business_Logic and Data_Layer which are the three different sub-directories in this directory.

1. Presentation_Layer - It houses all the front end code refactored in the MVC(Model View Controller) format. There is a public folder which is used to serve all static javascript files and optional css files if any. The controllers have functions that serve as API endpoints of various routes which in turn communicate with the Business_Logic functions so as to render updated and relevant data in the User Interface. The model directory has the blueprint for the type of objects used to store the information of a candidate and a voter. There are five views  - four for the functionalities implemented and the remaining one for the start or landing page of the app. 

2. Data_Layer - There is no database used as such in this application but in-memory objects are used and all the functions required to access and manipulate  these in-memory objects are defined here.

3. Business_Logic - It contains the main driving logic for the entire poll simulation process. This section implements all the functionalities in two files namely "bl_Candidates.js" and ""bl_Voters.js. The first one implements the use cases of adding a candidate, retrieving all the candidates to display voting summary, deciding winner for result page. The latter implements the functionalities of casting a vote by a student and retrieving all voters for any internal use case that may be required.  The functions in this layer communicate with the Data_Layer via functions to retrieve and manipulate the in-memory objects.
