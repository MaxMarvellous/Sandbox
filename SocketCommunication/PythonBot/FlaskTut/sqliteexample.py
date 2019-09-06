import sqlite3

conn = sqlite3.connect('database.db')
# conn.execute('CREATE TABLE users (name TEXT, addr TEXT)')
name = "Some"
addr = "Dude"
cursor = conn.cursor()
# cursor.execute("INSERT INTO users (name, addr) VALUES (?,?)", (name, addr))
# conn.commit()
cursor.execute("SELECT * FROM users")
rows = cursor.fetchall()
print()
conn.close()
