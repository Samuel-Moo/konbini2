# Konbini Anime 
### A web application made with React and Django Rest Framework
#### Licensed under the GNU General Public License v3.0
### Requirements
- Python 3.11.2
- Nodejs v18.7.0 
- We highly recommend setting up the terminal we use although it isn't absolutely neccessary 
#### Set up Terminal (Only for Windows) 
1. Open the Store on windows and download Windows Terminal, most windows computers already have it 
2. Download PowerShell from the store, the one with the black symbol
3. From windows terminal select the PowerShell with the black symbol
4. There it is that is the terminal 

## Disclaimer 
You will need the .env for the backend, either you set it on your own or we can send it to you, please write to the following email if you want it: 
- samuelmoo05@gmail.com

## Installation On Windows
- Clone the repository and navigate to it
```
git clone https://github.com/Samuel-Moo/konbini2.git
cd konbini2
```
- Set up the virtual environment
```
py -m pip install virtualenv
py -m virtualenv dar
```
- Activate env
```
.\dar\Scripts\activate
```
- Install requirements 
```
cd backend/
pip install -r requirements.txt
```
- Start Back-end Server
```
python manage.py runserver
```
- Please open another terminal and activate the environment dar again
```
cd konbini2/
.\dar\Scripts\activate
```
- After that go to frontend and install libraries
```
cd frontend/
npm install
```
- Start Front-end Server
```
npm start
```

## Installation On Linux
You are on linux, you know how to do this

# Made by Samuel Moo, Hugo Alvidrez and Derek Torres
