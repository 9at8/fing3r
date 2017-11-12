#!/usr/bin/python3

import json
from os.path import expanduser

fingered_by = []
unnotified = 0
orgasms = 0

data = json.loads(open(expanduser('~') + '/.fing3r3d.json').read())
print(data)
length = len(data.get('users'))
for i in range(length):
    print('f')
    if not data['users'][i]['notified']:
        data['users'][i]['notified'] = true
        unnotified += 1
        fingered_by.append((data['users'][i]['username']))
orgasms = int(unnotified / data['orgasmLimit'])

if fingered_by:
    print("You have been fingered by:")
for user in fingered_by:
    print(user)
if fingered_by:
    print("since you last logged in.")
if orgasms:
    print("You have also had " + str(orgasms) + " orgasms!")
