$(document).ready(function() {
	var audio;
	var playlist;
	var tracks;
	var current;

	init();
	function init(){
		current = 0;
		audio = $('audio');
		playlist = $('#playlist');
		tracks = playlist.find('li a');
		len = tracks.length - 1;
		audio[0].volume = .50;

		playlist.find('a').click(function(event){
			event.preventDefault();
			link = $(this);
			current = link.parent().index();
			run(link, audio[0]);
		});

		audio[0].addEventListener('ended',function(event){
			current++;
			if(current == len){
				current = 0;
				link = playlist.find('a')[0];
			}else{
				link = playlist.find('a')[current];    
			}
			run($(link),audio[0]);
		});
	}

	function run(link, player){
		player.src = link.attr('href');
		parent = link.parent();
		parent.addClass('active').siblings().removeClass('active');
		audio[0].load();
		audio[0].play();
	}
});
