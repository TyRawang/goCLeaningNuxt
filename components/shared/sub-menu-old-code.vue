.nav__links li .dropdown {
  background:rgba(255,255,255, 0.9);
	visibility: hidden;
  opacity: 1;
  min-width: 5rem;
	position: absolute;
  transition: all 0.5s ease;
  /* margin-top: 1rem; */
	left: 0;
  display: none;
  padding: 1rem;
}

a {
  /* text-decoration: none; */
}

nav {
	/* font-family: monospace; */
}

/* ul {
  background: darkorange;
	list-style: none;
	margin: 0;
	padding-left: 0;
} */

.nav__links li ul  {
	color: #fff;
	display: block;
	/* float: left; */
	padding: 1rem;
	position: relative;
  /* position: inherit; */
	text-decoration: none;
  transition-duration: 0.5s;
  left: 0;
}
  
 li a {
  color: #fff;
}

.nav__links li:hover {
	cursor: pointer;
}

.nav__links li:hover > ul,
.nav__links li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

.nav__links li .dropdown li {
	clear: both;
  width: 100%;
  padding: 0 0.6rem 0.6rem 0.6rem; 
}