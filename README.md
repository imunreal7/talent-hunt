# Talent Hunt - Job Application Posting & AI Matching App 🚀

## 🌟 **Overview**

Talent Hunt is a Node.js + Flask-based job application posting app with AI-powered evaluations. It facilitates:

1. **User Management**: Create and manage user profiles.
2. **Opportunity Management**: Post job opportunities and evaluate user matching.
3. **AI-Powered Matching**: Using machine learning models to calculate a user-opportunity match percentage and generate insights.

---

## 💡 **Tech Stack**

- **Backend**:
    - Node.js (TypeScript + Express.js)
    - Flask (Python-based AI API)
    - MongoDB
- **Machine Learning**:
    - Pre-trained AI model (`match_model.pkl`) used for evaluation predictions
- **DevOps**:
    - Nodemon for development

---

## 🛠️ **Features**

- **User CRUD Operations**: Create, read, update, delete user profiles.
- **Opportunity CRUD Operations**: Manage opportunities such as jobs, projects, or stories.
- **User-Opportunity Matching**: Match users with opportunities using AI.
- **AI Model Integration**: AI-powered match percentage calculations using machine learning.

---

## 🚀 **Setup Guide**

### 1️⃣ **Prerequisites**

- **MongoDB**: Ensure MongoDB is running locally or through cloud services.
- **Python environment**: Required for `app.py` (Flask AI-based server).

---

### 🖥️ **Backend Setup**

#### Clone the Repository

```bash
git clone https://github.com/imunreal7/talent-hunt
cd talent-hunt
```

#### Install Node.js Dependencies

```bash
npm install
```

#### Install Python Dependencies

Navigate to the `services` directory and install dependencies:

```bash
cd services
pip install -r requirements.txt
```

#### 💻 Run Flask AI Service

Ensure the AI service runs before starting the Node server:

```bash
python app.py
```

#### 🔥 Start the Node.js Server

Use Nodemon for development:

```bash
npm run dev
```

---

## 🧠 **AI Model Integration**

The Flask server runs a machine learning model (`match_model.pkl`) that evaluates:

- Skills overlap
- Title matches

---

### 🔹 AI Evaluation

#### **POST /api/ai/evaluate**

**Request Body Example:**

```json
{
    "userData": {
        "skills": ["Python", "Node.js"],
        "professionalTitle": "Backend Developer"
    },
    "opportunityData": {
        "skills": ["Python"],
        "professionalTitle": "Backend Developer"
    }
}
```

**Response Example:**

```json
{
    "matchPercentage": 85.0,
    "evaluation": "Excellent fit for this opportunity.",
    "reason": "The user has matching skills and aligns with the opportunity title."
}
```

---

## 📄 **Tech Notes**

### 1. `services/app.py`

- Python Flask server that serves AI model predictions using a pre-trained model (`match_model.pkl`).
- Exposes endpoint `/predict` for AI evaluation.

### 2. `src/server.ts`

- Node.js server with TypeScript.
- Routes defined for CRUD operations and connecting with Flask's AI service for real-time evaluation.

---

## 💬 **Contributions**

Contributions are welcome! Fork the repository, create an issue first, and submit pull requests.

---

## 🛑 **License**

This project is licensed under the ISC License.

---

## 💻 **Stack/Technologies**

- Node.js + Express.js
- Flask
- MongoDB
- TypeScript
- Machine Learning (pickle, AI model)
- Axios for communication between Node.js & Flask

---

## 🔗 **Resources**

- [Flask Model Documentation](https://flask.palletsprojects.com/)
- [MongoDB Docs](https://www.mongodb.com/docs/manual/)

---

**Created by Aman Dubey**

