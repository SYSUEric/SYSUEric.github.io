

var arr = [
	{
		year: 2017,
		title: "Ultrafast Delivery of AIE Nanoparticles and Pure Organic Phosphorescent Nanocrystals by Saponin Encapsulation",
		url: "https://www.baidu.com",
		journal: " J. Am. Chem. Soc.",
		journalyear: "2017",
		journalvolume: "139",
		status: "in press"
	},
	{
		year: 2015,
		title: "Ultrafast Delivery of AIE ",
		url: "https://www.baidu.com",
		journal: " J. Am. Chem. Soc.",
		journalyear: "2017",
		journalvolume: "139",
		status: "in press"
	},
	{
		year: 2013,
		title: "Nanoparticles and Pure Organic Phosphorescent Nanocrystals by Saponin Encapsulation",
		url: "https://www.baidu.com",
		journal: " J. Am. Chem. Soc.",
		journalyear: "2017",
		journalvolume: "139",
		status: "in press"
	}

	// {
		// 后面的格式也一样啦
	// },

	// {
		// 这里注意每一个用个大括号括起来
		// 大括号之间有逗号隔开
		// 最后一个不用大括号
		// 格式参照第一个就可以了
		// 
	// }

];


function generate(obj) {
	return '\n\
	        \<div class=\"span12 element ' + obj.year + '\" data-category=\"' + obj.year + '\"\>\n\
            \<div class=\"pad5\"\>\<\/div\>\n\
            \<p class=\"pubctnt\"\>\n\
                ' + obj.title + ' \n\
                \<br\/\>\n\
                \<a href=\"' + obj.url + '\"\>\n\
                  \<i\>' + obj.journal + '\<\/i\>\n\
                  '  +  (obj.journalyear ? '\<strong\>' + obj.journalyear + '\<\/strong\>,\n' : "") + '\
                  '  + (obj.journalvolume ? '\<i\>' + obj.journalvolume + '\<\/i\>,\n' : "") + '\
                \<\/a\>\n\
                ' + (obj.status ? '\<span\>' + obj.status + '\<\/span\>\n' : "") + '\
            \<\/p\>\n\
            \<div class=\"pad5\"\>\<\/div\>\n\
          \<\/div\>\n\
    ';
}

var res = [];
arr.forEach(x => res.push(generate(x)));
document.body.innerText = res.join('\n');

