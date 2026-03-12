let $ = (selector) => {
	var self = {};
	self.selecto = selector;
	self.elemen = document.querySelector(self.selecto);
	
	self.hide = () => {
		self.elemen.style.display = "none";
		return self;
	}
	self.show = () => {
		self.elemen.style.display = "initial";
		return self;
	}
	self.html = (set) => {
		return self.elemen;
	}
	self.attr = (name,value) => {
		if(!value) return self.elemen.getAttribute(name);
		self.elemen.setAttribute(name,value);
		return self;
	}
	self.on = (type,callback) => {
		self.elemen["on" + type] = callback;
	}
	
	return self;
}
