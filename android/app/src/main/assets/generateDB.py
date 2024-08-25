##
# Execute this script once to create the database & table
# as well as populating it with initial data
#

import sqlite3
db = sqlite3.connect('membership.sqlite')

db.execute('DROP TABLE IF EXISTS members')

db.execute('''CREATE TABLE members(
    id integer PRIMARY KEY,
    name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    address text NOT NULL,
    postcode text NOT NULL,
    city text NOT NULL,
    state text NOT NULL
)''')

cursor = db.cursor()

cursor.execute('''
    INSERT INTO members(name,email,phone,address,postcode,city,state)
    VALUES('Foo Yoke Wai','fooyw@ayam.com','012-5576262','58 Jalan Changkat Jong','36000','Teluk Intan','08')
''')

cursor.execute('''
    INSERT INTO members(name,email,phone,address,postcode,city,state)
    VALUES('Lim Li Li','lili@koalamail.com','012-7534988','84 Jalan Hang Jebat','75300','Melaka','04')
''')

cursor.execute('''
    INSERT INTO members(name,email,phone,address,postcode,city,state)
    VALUES('Ng Pei Li','ngpeili@kucing.com','016-7552525','8 Jalan Zabedah','83000','Batu Pahat','01')
''')

cursor.execute('''
    INSERT INTO members(name,email,phone,address,postcode,city,state)
    VALUES('Chia Kim Hooi','chiakh@duck.com','012-4049797','32 Lebuh Pantai','10300','George Town','07')
''')

cursor.execute('''
    INSERT INTO members(name,email,phone,address,postcode,city,state)
    VALUES('Chan Xiao Hui','applechan@chihuahua.com','016-4569820','10 Jalan Penjara','01000','Kangar','07')
''')

db.commit()
db.close()
