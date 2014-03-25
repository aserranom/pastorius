$(document).ready(function() {
	$(data.today_list).each(function(i) {
		console.log(this.pet_name)
		console.log(this.location)
		console.log(this.medium_file_url)

		name = '<p class="pet-name">' + this.pet_name + '</p>'
		locale = '<p class="pet-location">' + this.location + '</p>'
		img = '<div class="pic"><img src="' + this.medium_file_url + '"><div class="rank">' + (i+1) + '</div></div>'
		nominate = '<a class="nominate" href="http://www.klooff.com/" target="_blank"><div><span class="plus">+&ensp;</span>Nominate my pet</div></a>'

		data_name = 'data-name="' + this.pet_name + '" '
		data_caption = 'data-caption="' + this.location + '" '
		data_pic = 'data-pic="' + this.medium_file_url + '" '
		data_url = 'data-url="http://klooff.com/posts/' + this.id + '" '
		data = data_name + data_caption + data_pic + data_url

		share = '<div class="share" ' + data + '><div>Share on Facebook</div></div>'

		box = '<li>' + img + name + locale + nominate + share + '</li>'

		$('#pastorius-container').append(box)
	});
});