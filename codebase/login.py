#!/usr/bin/python
import cgitb
import cgi
import urllib2
import urllib
from urllib import urlencode
from urlparse import urlparse
import MySQLdb
import hashlib
import base64
cgitb.enable()
db = MySQLdb.connect(host='127.0.0.1', 
					 user='root', 
					 passwd='root', 
					 db='movie')
form = cgi.FieldStorage()
cur = db.cursor() 
def login():
	if(form.getvalue('Submit')):
		username = form.getvalue('username')
		password = form.getvalue('password')
		hash_object = hashlib.md5(password.encode())
		cur.execute("SELECT username, password FROM users WHERE username LIKE '%s' AND password LIKE '%s'" % (username, hash_object.hexdigest()))
		if(cur.rowcount == 1):
			url = 'http://localhost/user.py'
			params = {
				'username': username,
				'password': hash_object.hexdigest()
			}
			url_values = urllib.urlencode(params)
			url = url + "?" + url_values
			print "Location: %s\r\n\r" % url


