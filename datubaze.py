import sqlite3

def create_db():
    conn = sqlite3.connect('results.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            score INTEGER NOT NULL,
            date TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

def pievienot_rezultatu(dati):
    conn = sqlite3.connect('results.db')
    c = conn.cursor()
    c.execute('''
        INSERT INTO results (name, score, date)
        VALUES (?, ?, ?)
    ''', (dati['vards'], dati['score'], dati['datums']))
    conn.commit()
    conn.close()

def get_top_results():
    conn = sqlite3.connect('results.db')
    c = conn.cursor()
    c.execute('SELECT * FROM results ORDER BY score DESC LIMIT 10')
    rezultati = c.fetchall()
    conn.close()
    return [
        {"id": r[0], "vards": r[1], "score": r[2], "datums": r[3]}
        for r in rezultati
    ]
