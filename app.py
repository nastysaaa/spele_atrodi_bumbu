from flask import Flask, render_template, jsonify, request
import json

app = Flask(__name__)

# Funkcija, lai iegūtu top 5 rezultātus
def get_top_results():
    try:
        with open('data/results.json', 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return []

# Mājas lapa
@app.route('/')
def home():
    return render_template('index.html')

# Par spēli
@app.route('/about')
def about():
    return render_template('about.html')

# Spēles lapa
@app.route('/game')
def game():
    return render_template('game.html')

# Top rezultāti
@app.route('/top')
def top():
    top_results = get_top_results()
    return render_template('top.html', results=top_results)

# Saglabā rezultātus
@app.route('/submit_result', methods=['POST'])
def submit_result():
    new_result = request.json
    try:
        results = get_top_results()
        results.append(new_result)
        # Saglabāt rezultātus
        with open('data/results.json', 'w', encoding='utf-8') as f:
            json.dump(results, f, ensure_ascii=False, indent=4)
        return jsonify({'status': 'success'}), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'status': 'error'}), 500

if __name__ == '__main__':
    app.run(debug=True)

    from datubaze import create_db, pievienot_rezultatu, get_top_results

# Automātiski izveido DB, ja tā vēl nav
create_db()
