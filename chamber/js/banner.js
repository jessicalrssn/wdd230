//Use JavaScript to display a banner on Mondays or Tuesdays only at the very top of the page that says
 //"🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
 //Make sure your design matches your schema for the site.

 //input=computer will get date
 let now = new Date();
 let dayOfWeek= now.getDay();

 //processing:check if the day is 1 or 2?
 if (dayOfWeek ==1 || dayOfWeek == 2 ){
  let banner = document.getElementById('banner');
 }

 //output
