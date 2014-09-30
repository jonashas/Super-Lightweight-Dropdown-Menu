Super-Lightweight-Dropdown-Menu
===============================

A barebone dropdown menu with noJS fallback. 


### The HTML
The HTML added are for instructional purposes; you can have as many sub-menus and sub-links as you need. Here in another unordered list within the list.
```html
<nav>
	<ul>
		<li><a href="#">Link1</a></li>
		<li>
			<a href="#">Link2</a>
			<ul class="noJS">
				<li><a href="#">SubLink1</a></li>
				<li><a href="#">SubLink2</a></li>
				<li><a href="#">SubLink3</a></li>
			</ul>
		</li>
		<li>
			<a href="#">Link3</a>
			<ul class="noJS">
				<li><a href="#">SubLink1</a></li>
				<li><a href="#">SubLink2</a></li>
				<li><a href="#">SubLink3</a></li>
				<li><a href="#">SubLink4</a></li>
			</ul>
		</li>
		<li><a href="#">Link4</a></li>
		<li><a href="#">Link5s</a></li>
		<li>
			<a href="#">Link6</a>
			<ul class="noJS">
				<li><a href="#">SubLink1</a></li>
				<li><a href="#">SubLink2</a></li>
				<li><a href="#">SubLink3</a></li>
				<li><a href="#">SubLink4</a></li>
			</ul>		
		</li>
	</ul>
</nav>
```

### The CSS
A bare minimum of CSS. The styling itself can be altered in a huge degree. The _position:relative_ on _nav_ _ul_ _li_ are there to make the sub-menu drop down directly below the parent. It would do this by default, but added support for responsive design so the last child will drop down from the right of its parent instead of the left (to stop the last dropdown item from potentially going off-screen).
```css
nav {background:#eee;}
nav ul {text-align:center;}
nav ul li {display:inline-block;position:relative;}
nav ul li:hover {background:#e6e6e6;}
nav ul li:last-child ul{right:0;}
nav ul li a {display:block;padding:20px 30px;color:#222;}
nav ul li ul {position:absolute;min-width:100px;max-width:120px;;background:#e6e6e6;padding:0;}
nav ul li ul li {width:100%;}
nav ul li ul li a:hover {background:#eee;}
nav ul li ul.noJS {display:none;}
nav ul li:hover ul.noJS {display:block;}
```

### The JQuery
The beauty of this is the first line which removes the noJS class added for those without javascript, for anyone with javascript that class will be removed. Can change the 300 to any number, that's the speed (in ms) of which the sub-menu will show or collapse itself.
```javascript
	$('nav li ul').hide().removeClass('noJS');
	$('nav li').hover(
	  function () {
		  $('ul', this).stop().slideDown(300);
	  },
	  function () {
		  $('ul', this).stop().slideUp(300);
	  }
	);
```
