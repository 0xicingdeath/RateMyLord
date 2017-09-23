#!/usr/bin/python
import requests
import cgitb
import cgi
import urllib2
import urllib
import MySQLdb
import hashlib
import login
from login import login
cgitb.enable()
db = MySQLdb.connect(host='127.0.0.1', 
					 user='root', 
					 passwd='root', 
					 db='movie')
form = cgi.FieldStorage() 
cur = db.cursor()
login()
print "Content-Type: text/html\n"
print "<html>"
print "<head>"
print "<link href='css/bootstrap.min.css' rel='stylesheet'>"
print "<link href='css/movie.css' rel='stylesheet'>"
print "<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>"
print "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'></script>"
print """

    <div class="site-wrapper">
      <div class="site-wrapper-inner">
        <div class="cover-container">
          <div class="masthead clearfix">
            <div class="inner">
              <h3 class="masthead-brand">MyMovies</h3>
              <nav>
                      <ul class="nav masthead-nav">
                          <li class="active"><a href="/localhost">Home</a></li>
                          <li><button type="button" class="btn btn-primary btn-lg"  data-toggle="modal" data-target="#myModal">Login</button></li>
                          <li></li>
                      </ul>
                    </nav>
                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">

                            <button type="button" class="close" 
                            data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                              <span class="sr-only">Close</span>
                            </button>
                            <h4 style="font-size: 30px">Welcome</h4>
                          </div>
                          <div class="modal-body">
                            <form action="" method="POST">
                              <div class="form-group">
                                <input type="text" class="form-control" id="" name="username" placeholder="username">
                              </div>
                              <div lass="form-group">
                                <input type="password" class="form-control" id="" name="password" placeholder="password">
                              </div>
                              <div class="form-group login-popup"> 
                                <button type="submit" class="btn btn-primary" value="Submit1" name="Submit">Submit</button>
                              </div>  
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
              <div class="container">
              	<div class="row">
"""
  # HTML For Filters               		
print """
              		<div class="col-md-2">
      					<form action="mymovies.py" method="POST">
      						<div class="genre">
      							<div class="heading">Genre</div>
      							<div>
      								<input type="checkbox" name="genre" value="action"/><b>Action</b><br>
		      						<input type="checkbox" name="genre" value="adventure"/><b>Adventure</b><br>
		      						<input type="checkbox" name="genre" value="animation"/><b>Animation</b><br>
		      						<input type="checkbox" name="genre" value="children"/><b>Children</b><br>
		      						<input type="checkbox" name="genre" value="comedy"/><b>Comedy</b><br>
		      						<input type="checkbox" name="genre" value="crime"/><b>Crime</b><br>
		      						<input type="checkbox" name="genre" value="documentary"/><b>Documentary</b><br>
		      						<input type="checkbox" name="genre" value="drama"/><b>Drama</b><br>
		      						<input type="checkbox" name="genre" value="fantasy"/><b>Fantasy</b><br>
		      						<input type="checkbox" name="genre" value="film_noir"/><b>Film Noir</b><br>
		      						<input type="checkbox" name="genre" value="horror"/><b>Horror</b><br>
		      						<input type="checkbox" name="genre" value="musical"/><b>Musical</b><br>
		      						<input type="checkbox" name="genre" value="mystery"/><b>Mystery</b><br>
		      						<input type="checkbox" name="genre" value="romance"/><b>Romance</b><br>
		      						<input type="checkbox" name="genre" value="Sci_fi"/><b>Science Fiction</b><br>
		      						<input type="checkbox" name="genre" value="thriller"/><b>Thriller</b><br>
		      						<input type="checkbox" name="genre" value="war"/><b>War</b><br>
		      						<input type="checkbox" name="genre" value="western"/><b>Western</b><br>
		      					</div>
      						</div>
      						<div class="director">
      							<div class="heading">Director</div>
      							<div>
      								<input type="checkbox" name="director" value="James Cameron"/><b>James Cameron</b><br>
		      						<input type="checkbox" name="director" value="Gore Verbinski"/><b>Gore Verbinski</b><br>
		      						<input type="checkbox" name="director" value="Sam Mendes"/><b>Sam Mendes</b><br>
		      						<input type="checkbox" name="director" value="Christopher Nolan"/><b>Christopher Nolan</b><br>
		      						<input type="checkbox" name="director" value="Doug Walker"/><b>Doug Walker</b><br>
		      						<input type="checkbox" name="director" value="Andrew Stanton"/><b>Andrew Stanton</b><br>
		      						<input type="checkbox" name="director" value="Sam Raimi"/><b>Sam Raimi</b><br>
		      						<input type="checkbox" name="director" value="Nathan Greno"/><b>Nathan Greno</b><br>
		      						<input type="checkbox" name="director" value="Joss Whedon"/><b>Joss Whedon</b><br>
		      						<input type="checkbox" name="director" value="David Yates"/><b>David Yates</b><br>
		      						<input type="checkbox" name="director" value="Zack Snyder"/><b>Zack Snyder</b><br>
		      						<input type="checkbox" name="director" value="Bryan Singer"/><b>Bryan Singer</b><br>
		      						<input type="checkbox" name="director" value="Marc Forster"/><b>Marc Forster</b><br>
		      						<input type="checkbox" name="director" value="Rob Marshall"/><b>Rob Marshall</b><br>
		      						<input type="checkbox" name="director" value="Barry Sonnenfeld"/><b>Barry Sonnenfeld</b><br>
		      						<input type="checkbox" name="director" value="Peter Jackson"/><b>Peter Jackson</b><br>
		      						<input type="checkbox" name="director" value="Chris Weitz"/><b>Chris Weitz</b><br>
		      						<input type="checkbox" name="director" value="Anthony Russo"/><b>Anthony Russo</b><br>
		      						<input type="checkbox" name="director" value="Peter Berg"/><b>Peter Berg</b><br>
		      						<input type="checkbox" name="director" value="Colin Trevorrow"/><b>Colin Trevorrow</b><br>
		      						<input type="checkbox" name="director" value="Shane Black"/><b>Shane Black</b><br>
		      						<input type="checkbox" name="director" value="Michael Bay"/><b>Michael Bay</b><br>
		      					</div>
      						</div>
      						<div class="form-group"> 
                                <button type="submit" class="btn btn-primary filter-submit">Submit</button>
                            </div>

						</form>
    				</div>
   """
#Logic to handle filters
movie_genre = form.getvalue('genre')
movie_director = form.getvalue('director')
print "<div class='col-md-10'>"
cur.execute("SELECT movie_title, imdb_url, id from movies LIMIT 8")
rows = cur.fetchall()
for row in rows:
  data_uri = open(row[1], 'rb').read().encode('base64').replace('\n', '')
  img_tag = '<img src="data:image/jpg;base64,{0}" width="400" height="275">'.format(data_uri)
  param = {
    'movie_id': row[2]
  }
  url = 'recommendation.py'
  url_values = urllib.urlencode(param)
  url = url + "?" + url_values
  print "<div class='col-md-3'><a href='%s'><p>% s</p></a><p>%s</p></div>" % (url, img_tag, row[0])
print "</div></div>"
print "</div></div></div></div></div></div>"  
print "</body>"
print "</head>"
print "</html>"


