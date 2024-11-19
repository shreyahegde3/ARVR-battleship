# Battleship 3D Simulation  

## Overview  
This project is a 3D simulation of the classic Battleship game, built using **Three.js** and **Vite**.

---

## Setup Instructions  

### Prerequisites  
- Ensure **Node.js** is installed on your system.  

### Installation Steps  

1. **Install dependencies:**  
   Open a terminal in your project folder and run the following commands:  
   - Install **Three.js:**  
     ```bash
     npm install --save three
     ```  
   - Install **Vite:**  
     ```bash
     npm install --save-dev vite
     ```  

2. **Fork the repository** on GitHub.

3. **Clone the forked repository** to your local machine:  
   ```bash
   git clone https://github.com/pranavacchu/ARVR-project-battleship.git



*Usage Guide*
Ship Selection: Right-click on a ship to select it. The selected ship will be highlighted. 
Ship Movement: While holding the right mouse button, move the mouse to drag the selected ship across the grid.
Ship Rotation: Right-click and press the Spacebar simultaneously to rotate the selected ship by 90 degrees clockwise.
Deselection: Left-click anywhere outside a ship to deselect the currently selected ship.

Placement Rules:
Ships cannot overlap with each other.
Ships must be placed entirely within the grid.
An alert will appear if you attempt an invalid placement.

Camera Controls:
Left-click and drag to rotate the camera view.
Use the mouse wheel to zoom in and out.
Middle-click and drag to pan the camera.
