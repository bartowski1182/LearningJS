function Phone(phoneImg, phoneLink){
	this.phoneImg = <img src=phoneImg/>;
	this.phoneLink = <href = phoneLink/>;

	this.getLink = getLink;
	function getLink(){
		return this.phoneLink;
	};

	this.getImg = getImg;
	function getImg(){
		return this.phoneImg;
	};

}



