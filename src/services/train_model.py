import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
import pickle

# Load data
data = pd.read_json("data.json")

# Feature Engineering
vectorizer = CountVectorizer()
user_skills = vectorizer.fit_transform(data["userSkills"].apply(lambda x: " ".join(x)))
opportunity_skills = vectorizer.transform(data["opportunitySkills"].apply(lambda x: " ".join(x)))

data["skillsOverlap"] = (user_skills.multiply(opportunity_skills)).sum(axis=1).A1

# Combine features
X = data[["skillsOverlap", "titleMatch"]]
y = data["matchPercentage"]

# Train model
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = RandomForestRegressor()
model.fit(X_train, y_train)

# Save model
with open("match_model.pkl", "wb") as f:
    pickle.dump(model, f)
