# 📚 UQ

An EduTech AI app built in a team of 3 people that aids students’ learning by applying the VARK learning style and helps teachers to grow the students in the best way possible. An exciting aspect of the application is allowing teachers to create lessons through AI in 4 different styles and students to utilize real-time AI chat for aid.

### Interesting points on the project
- AI creates 4 lesson types (Visual, Auditory, Reading, Kinesthetic) based on your prompt
- Chat: The teacher can see all the student name's when messaging the general chat room but other student's are unable to see each other's names so that they are not shy in asking questions
- AI can further create supplementary lessons for the students who are scoring 50% or less, they can toggle the feature in the original lesson

### Login info
1. ### Teacher</br>
   email: abc@abc.com</br>
   password: password</br>
2. ### Student</br>
   email: student@abc.com</br>
   password: password1

## Screenshots
Homepage <br>
<img width="600" alt="HomePage" src="https://github.com/HappyDay101/UQ-C/assets/132921363/78758f90-bdfb-4eff-b36b-0a150506006a">
<br>
Classroom Index  <br>
<img width="600" alt="Classrooms Index" src="https://github.com/HappyDay101/UQ-C/assets/132921363/9e99349c-83ad-4676-a875-9a756ae7b88d">
<br>
Lessons Index <br>
<img width="600" alt="Lessons Index" src="https://github.com/HappyDay101/UQ-C/assets/132921363/9ec47252-f522-4ff5-b236-c89d31dcc6f2">
<br>
Student List<br>
<img width="600" alt="Student List" src="https://github.com/HappyDay101/UQ-C/assets/132921363/6bcbd171-e4b9-48e3-8b19-9efbd1280b94">
<br>
Student Info<br>
<img width="600" alt="Student Info" src="https://github.com/HappyDay101/UQ-C/assets/132921363/60804dcd-0b8c-4fd3-8c6f-669004fc1937">
<br>
Lesson Show<br>
<img width="600" alt="Lesson Show" src="https://github.com/HappyDay101/UQ-C/assets/132921363/563d1129-b20c-4987-b097-0bfb0fbd61b3">
<br>
Response Page<br>
<img width="600" alt="Response Page" src="https://github.com/HappyDay101/UQ-C/assets/132921363/cd24f523-8fbd-4180-9310-6a81a00154a8">
<br>
Response Page Students<br>
<img width="600" alt="Response Students" src="https://github.com/HappyDay101/UQ-C/assets/132921363/d5052862-afe4-43d6-8dc3-6d92d5fcfb14">
<br>

<br>
App home: https://www.uqedu.org/
   

## Getting Started
### Setup

Install gems
```
bundle install
```

### ENV Variables
Create `.env` file
```
touch .env
```
Inside `.env`, set these variables. For any APIs, see group Slack channel.
```
CLOUDINARY_URL=your_own_cloudinary_url_key
OPENAI_ACCESS_TOKEN=your_own_cloudinary_url_key
```

### DB Setup
```
rails db:create
rails db:migrate
rails db:seed
```

### Run a server
```
rails s
```

## Built With
- [Rails 7](https://guides.rubyonrails.org/) - Backend / Front-end
- [Stimulus JS](https://stimulus.hotwired.dev/) - Front-end JS
- [Heroku](https://heroku.com/) - Deployment
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Bootstrap](https://getbootstrap.com/) — Styling
- [Figma](https://www.figma.com) — Prototyping
- [Playwright](https://playwright.dev/) - Testing

## Team Members
- [Rashad Dupaty](https://www.linkedin.com/in/rashaddupaty/)
- [Eduard Gurchiani](https://www.linkedin.com/in/eduard-gurchiani/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License
