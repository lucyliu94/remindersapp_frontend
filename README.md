# Project 4 (Front-end)
## by Lucy Liu

## Explanation of App
Are you tired of forgetting small everyday tasks such as paying your rent, finishing your homework or even taking your supplements on time? This reminders app is here to help you keep track of your everyday reminders. Users will be able to create and view a list of all their reminders. The app will tell you when your reminder is due or if it is overdue. You will also be able to view past completed reminders for reference. 


[Backend repo](to be added)\
[Deployed frontend](TO BE ADDED)\
[Deployed backend](TO BE ADDED)\

## Technologies Used
- React
- Express
- Node
- React-Bootstrap
- HTML

## Libraries/Techniques
- React Router
- Front-end CRUD functionality
- Backend API Deployment with Heroku
- Frontend React Deployment with Netlify


## React Routing Table 

#### Main
| Action         | Path                        | Request   | Purpose                                                                        |
|:--------------:|:---------------------------:|:---------:|:------------------------------------------------------------------------------:|
| Index          | /reminders                     | GET       | List all reminders/tasks                                                    |
| Show           | /reminders                     | GET       | Show details about a specific reminder                                      |
| Edit           | /editReminder/:id              | PUT       | Edit the reminder's details                                                 |
| Delete         | /reminders                     | DELETE    | Delete the reminder                                                         |
| Create         | /newReminder                   | POST      | Create a new reminder                                                       |
| Index          | /completedReminder             | GET       | Display past completed reminders                                            |
| Show           | /completedReminder             | GET       | Display past completed reminder details (cannot edit)                       |



## User Stories

- Users will be able to view a list of all their reminders on the index page
- Users will be able to create, read, update, or delete their reminders
- Within each reminder, users will be able make edits and update the reminders
- Users can mark reminders as completed, and that will move the reminder to the completedReminder page

## Challenges
TBA

