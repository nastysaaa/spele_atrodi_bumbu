import sqlite3

def create_db():
    conn = sqlite3.connect('results.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            vards TEXT NOT NULL,
            punkti INTEGER NOT NULL,
            klikski INTEGER NOT NULL,
            laiks INTEGER NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

def pievienot_rezultatu(data):
    conn = sqlite3.connect('results.db')
    c = conn.cursor()
    c.execute('''
        INSERT INTO results (vards, punkti, klikski, laiks)
        VALUES (?, ?, ?, ?)
    ''', (data['vards'], data['punkti'], data['klikski'], data['laiks']))
    conn.commit()
    conn.close()

def get_top_results():
    conn = sqlite3.connect('results.db')
    c = conn.cursor()
    c.execute('''
        SELECT vards, punkti, klikski, laiks FROM results
        ORDER BY punkti DESC, klikski ASC, laiks ASC
        LIMIT 5
    ''')
    results = c.fetchall()
    conn.close()
    return [{'vards': r[0], 'score': r[1], 'klikski': r[2], 'laiks': r[3]} for r in results]
