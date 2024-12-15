from flask import Flask, request, jsonify
import pickle

# Load model
with open("match_model.pkl", "rb") as f:
    model = pickle.load(f)

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    skills_overlap = data["skillsOverlap"]
    title_match = data["titleMatch"]
    features = [[skills_overlap, title_match]]
    match_percentage = model.predict(features)[0]
    return jsonify({"matchPercentage": match_percentage})

if __name__ == "__main__":
    app.run(debug=True)
