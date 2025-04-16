import sqlite3

# Izgūst visus rezultātus no datu bāzes
def get_top_results():
    conn = sqlite3.connect('results.db')
    c = conn.cursor()
    c.execute("SELECT * FROM results ORDER BY score DESC LIMIT 10")
    rezultati = c.fetchall()
    conn.close()
    #Pārvērš katru rezultātu par vardnīcu
        
    dati = [
        {"id": r[0], "vards": r[1], "score": r[2], "datums": r[3]}
        for r in rezultati
    ]
    return dati

# Pievieno jaunu spēlētāja rezultātu datu bāzei
def pievienot_rezultatu(dati):
    conn = sqlite3.connect('results.db')
    c = conn.cursor()
    c.execute("""
        INSERT INTO results (name, score, date)
        VALUES (?, ?, ?)
    """, (dati['vards'], dati['score'], dati['datums']))
    conn.commit()
    conn.close()