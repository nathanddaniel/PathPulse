PathPulse
PathPulse is a GPS-based wearable running tracker that captures route, pace, distance, and calories burned, then displays the data on an intuitive web dashboard. 
The project combines embedded systems (ESP32 + GPS module) with a full-stack web application built using React, Node.js, and MongoDB.

🚀 Features
* Real-time GPS tracking via ESP32 microcontroller
* Live dashboard with route map and run statistics
* Weekly distance and consistency goal progress bars
* Run history and goal-setting features
* Embedded firmware in C++ using PlatformIO
* Full-stack integration with React frontend and Node.js backend
* MongoDB database for persistent run data storage

🔌 Hardware Stack
* ESP32-WROOM-32 microcontroller
* NEO-6M GPS module
* Breadboard and jumper wires
* Battery + voltage regulator (optional for wearable deployment)

🛠️ Technologies Used
Frontend: React, Tailwind CSS, Lucide Icons
Backend: Node.js, Express.js, REST API
Database: MongoDB Atlas
Embedded: C++ with PlatformIO (ESP-IDF or Arduino framework)

📦 Setup Instructions
1. Clone the repo
git clone https://github.com/your-username/PathPulse.git
cd PathPulse

2. Frontend Setup (React)
cd frontend
npm install
npm run dev

3. Backend Setup (Node + Express)
cd ../backend
npm install
npm run dev

4. Embedded Firmware Setup (ESP32)
cd ../embedded
# Open in VSCode with PlatformIO extension
# Select the correct COM port and upload firmware

🧠 How It Works
The ESP32 receives real-time location data from the GPS module via UART. It sends this data to the backend via Wi-Fi using HTTP requests.
The backend stores location and run metrics in MongoDB. The frontend visualizes this data as route maps, distance charts, and goal progress indicators.

🤝 Contributions
Have ideas or improvements? Open an issue or submit a PR!
Feel free to fork and build your own wearable fitness project.

📜 License
MIT License. See LICENSE for more information.
